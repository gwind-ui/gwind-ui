# Gwind UI

Modern Vue 3 UI Component Library with Tailwind CSS

## 🚀 Deployment Instructions

Untuk mengatasi masalah deployment di GitHub Pages:

### 1. Setup Repository di GitHub

1. Pastikan repository nama nya adalah `gwind-ui`
2. Aktifkan GitHub Pages di Settings > Pages
3. Pilih source: "GitHub Actions"

### 2. Konfigurasi yang telah diterapkan

- ✅ **Base path**: Dikonfigurasi untuk `/gwind-ui/` di production
- ✅ **GitHub Actions**: Workflow otomatis untuk build dan deploy
- ✅ **Vite optimization**: Chunk naming yang aman untuk GitHub Pages
- ✅ **Jekyll bypass**: File `.nojekyll` untuk mencegah Jekyll processing
- ✅ **Fallback support**: npm sebagai fallback jika pnpm gagal

### 3. Langkah Deployment

```bash
# 1. Commit dan push semua perubahan
git add .
git commit -m "fix: configure storybook for github pages deployment"
git push origin main

# 2. GitHub Actions akan otomatis:
#    - Build storybook dengan pnpm atau npm (fallback)
#    - Deploy ke GitHub Pages
#    - URL akan tersedia di: https://[username].github.io/gwind-ui/
```

### 4. Troubleshooting

Jika masih ada masalah:

1. **Check GitHub Actions**: Lihat log di tab "Actions" di repository GitHub
2. **Repository settings**: Pastikan GitHub Pages source adalah "GitHub Actions"
3. **Branch protection**: Pastikan branch main/master bisa di-push
4. **Repository name**: Harus sesuai dengan base path di konfigurasi (`gwind-ui`)
5. **Dependencies**: Workflow akan otomatis fallback ke npm jika pnpm gagal

### 5. Local Development

```bash
# Install dependencies (gunakan salah satu)
pnpm install
# atau jika pnpm bermasalah:
npm install

# Run storybook locally
pnpm storybook
# atau:
npm run storybook

# Build storybook locally
pnpm build-storybook
# atau:
npm run build-storybook

# Serve built storybook
pnpm serve-storybook
# atau:
npm run serve-storybook
```

## 📋 Perubahan yang Dilakukan

1. **`.storybook/main.ts`**:
    - ✅ Ditambahkan `viteFinal` untuk konfigurasi base path
    - ✅ Optimized chunk naming untuk GitHub Pages

2. **`.github/workflows/deploy-storybook.yml`**:
    - ✅ GitHub Actions workflow untuk deployment otomatis
    - ✅ Menggunakan pnpm dengan fallback ke npm
    - ✅ Deploy ke GitHub Pages
    - ✅ Error handling yang lebih baik

3. **`package.json`**:
    - ✅ Script untuk build dan deployment
    - ✅ Dependencies yang kompatibel (Storybook 8.x)
    - ✅ Type module support

4. **`.nojekyll`**:
    - ✅ Mencegah Jekyll processing yang dapat merusak asset loading

5. **`pnpm-lock.yaml`**:
    - ✅ Lockfile untuk konsistensi dependencies

## 🎯 Hasil

Setelah perubahan ini, Storybook akan:

- ✅ Load dengan benar di GitHub Pages
- ✅ Asset dan module imports akan berfungsi
- ✅ Deployment otomatis ketika push ke main branch
- ✅ URL stabil di `https://gwind-ui.github.io/gwind-ui/`
- ✅ Fallback support jika ada masalah dengan package manager

## 🔧 Error yang Diperbaiki

- ❌ **Error sebelumnya**: `Failed to fetch dynamically imported module`
- ❌ **Error sebelumnya**: `ERR_PNPM_NO_LOCKFILE Cannot install with "frozen-lockfile"`
- ✅ **Setelah perbaikan**: Workflow robust dengan fallback support
- ✅ **Setelah perbaikan**: Asset loading dengan path yang benar
