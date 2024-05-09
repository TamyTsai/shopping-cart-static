## 簡介
- 本專案為一個購物車頁面
- 以HTML、CSS及JavaScript撰寫，為一頁式靜態網頁
- 其中應用Normalize解決不同瀏覽器預設CSS樣式不同的問題

## 功能
- 點擊數量欄位「+」、「-」按鈕可增減數量
- 數量最小為0，不會變成負數
- 根據數量，小計欄位會顯示單價*數量的運算結果
- 下方欄位可勾選，也可透過點擊全選按鈕（「我全都要」）以全選
- 點擊全選按鈕後，再點擊一次全選按鈕，即全部取消勾選

## 畫面
### 初始畫面
![截圖 2024-05-09 專案畫面](https://github.com/TamyTsai/shopping-cart-static/assets/97825677/2547087d-2597-492b-86e8-aeabc1c15ba6)

### 點擊數量「+」按鈕3次
![截圖 2024-05-09 增加數量](https://github.com/TamyTsai/shopping-cart-static/assets/97825677/27da3a10-420b-4cd9-9cfa-98cd760cee76)

### 點擊「我全都要」按鈕
![截圖 2024-05-09 我全都要](https://github.com/TamyTsai/shopping-cart-static/assets/97825677/c686c412-6e11-4de2-9fc3-e8a43e064319)


## 安裝
### 取得專案
```bash
git clone https://github.com/TamyTsai/shopping-cart-static.git
```
### 移動到專案內
```bash
cd shopping-cart-static
```

## 資料夾及檔案說明
- scripts - JS檔案放置處
  - script.js - 頁面JS檔案，負責網頁功能
- styles - 樣式放置處
  -   normalize.css - normalize檔案
  -   style.css - 頁面樣式檔案
- index.html - 頁面HTML檔

## 專案技術
- HTML
- CSS
  - Normalize v8.0.1
- JavaScript
