# 台灣大學讀書會簽到系統 (Taiwan University Study Group Check-in System)

## 專案目標
建立一個簡單易用的網頁版讀書會簽到系統，可以讓使用者選擇台灣的大學並進行簽到，同時提供大學相關資訊和位置查看。該系統設計為純前端應用，可直接部署到 GitHub Pages。

## 技術規格

### 使用技術
- HTML5
- CSS3
- JavaScript (原生)
- Bootstrap 5 (CDN)
- Moment.js (CDN) - 用於日期時間處理
- Google Maps API - 用於顯示學校位置

### 資料儲存
- 使用 localStorage 儲存簽到記錄
- 所有大學資訊儲存在前端代碼中

## 功能清單

### 已完成功能
1. 基本簽到功能
   - [x] 姓名輸入
   - [x] 大學選擇（包含台灣所有大學）
   - [x] 時間戳記錄

2. 大學資訊顯示
   - [x] 大學基本資訊顯示
   - [x] 學校位置地圖顯示
   - [x] 完整的台灣大學清單

3. 簽到記錄
   - [x] 表格式顯示所有簽到記錄
   - [x] 依時間排序
   - [x] 本地儲存功能

### 待開發功能
1. 使用者體驗優化
   - [ ] 大學搜尋/過濾功能
   - [ ] 簽到記錄匯出功能
   - [ ] 簽到統計分析

2. 資料管理
   - [ ] 清除歷史記錄功能
   - [ ] 資料備份/還原功能

3. 介面優化
   - [ ] 深色模式
   - [ ] 響應式設計優化
   - [ ] 多國語言支援

## 專案結構
```
/
├── index.html      # 主要 HTML 文件
├── styles.css      # 樣式表
├── script.js       # JavaScript 代碼
└── SPEC.md        # 專案規格說明
```

## 檔案說明

### index.html
- 包含基本的 HTML 結構
- 引入所有需要的 CDN 資源
- 定義主要的使用者介面元素

### styles.css
- 定義自訂樣式
- 優化 Bootstrap 預設樣式
- 處理響應式設計

### script.js
- 包含所有大學資訊的資料結構
- 處理表單提交和資料儲存
- 管理地圖顯示和更新
- 處理簽到記錄的顯示和排序

## 部署說明
1. 需要有效的 Google Maps API Key
2. 將 YOUR_API_KEY 替換為實際的 API Key
3. 可直接部署到 GitHub Pages

## 注意事項
1. Google Maps API Key 需要設定適當的域名限制
2. localStorage 有容量限制，需要考慮清理機制
3. 為保護隱私，不建議收集過多個人資訊

## 開發歷程
- 2025/06/05: 專案初始化，完成基本功能
- 2025/06/05: 擴充大學清單，新增所有台灣大學
- 2025/06/05: 建立專案文件

## 待解決問題
1. Google Maps API 的備用方案
2. 大量資料時的效能優化
3. 離線操作支援

## 未來展望
1. 新增讀書會主題分類
2. 整合線上會議功能
3. 新增學習進度追蹤
4. 新增群組討論功能
