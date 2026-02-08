說明：靜態範本檔案與要填入的位置

主要檔案：
- index.html — 網頁主檔案（HTML）
- styles.css — 主樣式表
- assets/images/ — 圖片放置資料夾

替換內容位置：
- 英文/中文標題：在 `index.html` 中，編輯 `HERO_TITLE` (id) 與 `HERO_SUBTITLE`。
- Hero 圖片：放置真正圖片到 `assets/images/hero.jpg` 或替換 `assets/images/hero.svg`，檔名保持 `HERO_IMAGE` 標籤的 `src`。
- 行程卡：每個行程卡使用 `assets/images/tour1.svg`、`tour2.svg` 等圖片，並在 `index.html` 中複製 `.tour-card` 區塊以加入更多卡片，更新標題與說明。
- 每日行程：在 `#itinerary` 區塊內新增或修改 `.it-day` 區塊。若需要圖片，請在 `assets/images/` 放置 `day1.svg` 等並在 HTML 中引用。
- 聯絡資訊：在 `index.html` 中直接修改 `FOOTER_TEL`、`FOOTER_EMAIL`、`FOOTER_ADDRESS` 的內容。

如何替換圖片：
1. 將圖片檔上傳到 `assets/images/`。
2. 在 `index.html` 中找到欲替換的 `<img src="...">`，修改為新檔名。

部署：
- 此為純靜態網站，可直接部署到 GitHub Pages、Netlify、Vercel 靜態站點，或放到任何靜態主機。

如果你要我把真實內容（文字、圖片）填入，我可以接收一份包含標題、每頁段落與圖片檔案的清單，我會替你批次替換。