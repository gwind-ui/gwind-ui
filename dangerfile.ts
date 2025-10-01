import { danger, fail, message, schedule } from "danger"
import { scan } from "danger-plugin-lint-report"
import * as pullRequest from "danger-plugin-pull-request"

const branch = danger.gitlab.mr.source_branch

schedule(
    scan({
        fileMask: "**/reports/lint-results.xml",
        reportSeverity: true,
        requireLineModification: true,
    })
)

async function checkLargeFiles() {
    const MAX_FILE_SIZE_2048_KB = 2048
    const changedFiles = [...danger.git.modified_files, ...danger.git.created_files]
    const largeFiles = await Promise.all(
        changedFiles.map(async path => {
            const file = await danger.git.diffForFile(path)
            const size = Buffer.byteLength(file?.after || "", "utf8")
            return size > MAX_FILE_SIZE_2048_KB * 1024 ? { path, size } : null
        })
    ).then(results => results.filter(Boolean)) // Filter out null values

    if (largeFiles.length > 0) {
        const tableHeader = "| File | Size (KB) |\n|------|-----------|"
        const tableBody = largeFiles.map(({ path, size }) => `| ${path} | ${(size / 1024).toFixed(2)} |`).join("\n")
        fail(`🚩 Some files are too large! The following files exceed **2048KB** (2MB):\n\n${tableHeader}\n${tableBody}`)
    } else {
        message("🎉 Great job! No large files detected. Everything looks clean.")
    }
}

if (!/^(feature\/.*\/v[\d.]+|rc\/v[\d.]+|hotfix\/v[\d.]+)$/.test(branch)) {
    checkLargeFiles().then()

    pullRequest.checkAssignees(() => `👥 Please ensure this PR has at least one assignee to keep things organized and accountable.`)
    pullRequest.checkDescription(100, () => `✍️ PR Description is too short! Please provide at least 100 characters describing the context and purpose of this PR.`)
    pullRequest.checkTitle(/^\[[A-Za-z]+-\d+]/, `[TICKET-ID] <description>`, () => `📝 PR Title Check: Your title should follow the format [TICKET-ID] <description>. This ensures consistency and easy tracking!`)
    pullRequest.checkPRSize(50, () => `⚠️ This PR has too many changes! Try to keep it under 50 files for easier reviews and better collaboration.`)
    pullRequest.checkMergeSquashChecked(() => `⚡ Merge Strategy Alert: Please ensure *Squash and Merge* is selected for a cleaner commit history.`)
    pullRequest.checkDeleteSourceBranchChecked(() => `🗑️ Source Branch Cleanup: Please ensure *Delete source branch* is checked after merging to avoid unused branches cluttering the repository.`)
}
