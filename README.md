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

### 3. Langkah Deployment

```bash
# 1. Commit dan push semua perubahan
git add .
git commit -m "fix: configure storybook for github pages deployment"
git push origin main

# 2. GitHub Actions akan otomatis:
#    - Build storybook
#    - Deploy ke GitHub Pages
#    - URL akan tersedia di: https://[username].github.io/gwind-ui/
```

### 4. Troubleshooting

Jika masih ada masalah:

1. **Check GitHub Actions**: Lihat log di tab "Actions" di repository GitHub
2. **Repository settings**: Pastikan GitHub Pages source adalah "GitHub Actions"
3. **Branch protection**: Pastikan branch main/master bisa di-push
4. **Repository name**: Harus sesuai dengan base path di konfigurasi (`gwind-ui`)

### 5. Local Development

```bash
# Install dependencies
pnpm install

# Run storybook locally
pnpm storybook

# Build storybook locally
pnpm build-storybook

# Serve built storybook
pnpm serve-storybook
```

## 📋 Perubahan yang Dilakukan

1. **`.storybook/main.ts`**: 
   - Ditambahkan `viteFinal` untuk konfigurasi base path
   - Optimized chunk naming untuk GitHub Pages

2. **`.github/workflows/deploy-storybook.yml`**: 
   - GitHub Actions workflow untuk deployment otomatis
   - Menggunakan pnpm
   - Deploy ke GitHub Pages

3. **`package.json`**: 
   - Script untuk build dan deployment
   - Dependencies yang diperlukan

4. **`.nojekyll`**: 
   - Mencegah Jekyll processing yang dapat merusak asset loading

## 🎯 Hasil

Setelah perubahan ini, Storybook akan:
- ✅ Load dengan benar di GitHub Pages
- ✅ Asset dan module imports akan berfungsi
- ✅ Deployment otomatis ketika push ke main branch
- ✅ URL stabil di `https://[username].github.io/gwind-ui/`
