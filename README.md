# 2026 九州秋之旅｜單頁行程網站

以 [Next.js](https://nextjs.org/) 建立的靜態單頁，可直接部署至 [Vercel](https://vercel.com)。內容為「2026 九州秋之旅」六日行程（福岡・熊本・阿蘇・高千穗），搭配日本風景圖片（[Unsplash](https://unsplash.com)）。

## 專案結構

- `src/app/` - 頁面與全域樣式（單頁首頁）
- `src/components/` - Header、Hero、TourCard、ItinerarySection、Footer
- `src/data/tours.ts` - **行程與網站文案、圖片路徑**（站名、Hero、主行程卡、每日行程、Unsplash 圖片網址）
- `public/images/` - 可放置本機圖片（若改為本機圖片，請在 `tours.ts` 改為 `/images/xxx.jpg`）

## 如何替換資料與照片

1. **網站名稱、導覽、Hero、Footer**  
   編輯 `src/data/tours.ts` 裡的 `siteConfig`（`siteName`、`navItems`、`heroTitle`、`heroTitleZh`、`heroDescription`、`footer`）。

2. **行程列表**  
   編輯 `src/data/tours.ts` 裡的 `tours` 陣列：標題、副標、價格、出團月份/日期、行程特色連結。每個行程的 `image` 請填寫對應的圖片路徑（例如 `/images/tour-1.jpg`）。

3. **圖片**  
   將圖片放到 `public/images/`，檔名與 `tours.ts` 中的 `image` 一致（例如 `tour-1.jpg`、`tour-2.jpg`）。目前未提供圖片時會使用 `public/images/placeholder.svg`。

## 本地開發

```bash
npm install
npm run dev
```

瀏覽 [http://localhost:3000](http://localhost:3000)。

## 建置靜態輸出

```bash
npm run build
```

會產生 `out/` 目錄，為純靜態檔案，可部署至任何靜態主機。

## 部署到 Vercel

1. 將此專案推送到 GitHub（或 GitLab、Bitbucket）。
2. 登入 [Vercel](https://vercel.com)，選擇 **Import Project**，選取此 repo。
3. 建置設定維持預設即可（Framework: Next.js），按 **Deploy**。
4. 之後每次 push 到主分支會自動重新部署。

若使用 Vercel CLI：

```bash
npm i -g vercel
vercel
```

依提示登入並選擇專案即可完成部署。
# -Fukuoka
