# Portfolio 專案指引

## 專案概述

VuePress 驅動的個人 Portfolio 網站，展示 Dean Huang（欣迪）的前端工程 / 遊戲產業經歷。
中英雙語，採用 Swiss 版型設計。

## 架構

```
docs/                     # VuePress 內容頁（Markdown）
docs/.vuepress/config/    # 核心配置與文案資料
  ├── index.js            # 主設定（skills、socialLink、OG）
  ├── swiss-content.js    # Swiss 版型中英文案（Hero、About、Skills、Outcomes、Timeline）
  └── en-config.js        # 英文站 meta
themes/portfolio/         # 自訂 VuePress 主題
  ├── layouts/Index.vue   # 首頁版型
  └── i18n.js             # vue-i18n 設定
```

## 文案檔案位置

| 區塊 | 檔案 | 說明 |
|------|------|------|
| Hero / About / Outcomes / Timeline | `docs/.vuepress/config/swiss-content.js` | 中英版主要文案 |
| Skills 詳細描述 | `docs/.vuepress/config/index.js` → `globalData.skills` | 七項技能的 HTML 描述 |
| OG / SEO | `docs/.vuepress/config/index.js` → `description` | 搜尋引擎摘要 |
| OG / SEO (en) | `docs/.vuepress/config/en-config.js` → `description` | 英文搜尋引擎摘要 |

## Team 模式（Agent Teams）

本專案已啟用 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS`。
進行文案審閱時，請用自然語言要求組建 team，建議的團隊組成：

### 文案審閱團隊

請求範例：
> 組建文案審閱團隊。三個 teammate：
> 1. 策略師 — 從定位、受眾、差異化角度分析文案，關注價值主張是否清晰、數字是否被埋、目標讀者是否對
> 2. 編輯 — 從可讀性、句子長度、抽象 vs 具體、重複冗餘、動詞力度角度分析，Hero/About/Outcomes 三層要有「定位→人→證據」的遞進
> 3. 英文審閱 — 檢查語法自然度、專業術語、中英對齊、語氣一致性，特別注意 noun stacking 和翻譯腔

### 審閱原則

- 文案修改需經使用者明確同意（回覆「OK」）後才執行
- 每次修改以單一區塊為單位（Hero / About / Skills / Outcomes / Timeline）
- 修改後需同步更新中英雙語版本
- 量化數字與事實需由使用者確認正確性

## 開發指令

```bash
# 本地開發
yarn dev

# 建置
yarn build
```
