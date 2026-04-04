#!/usr/bin/env python3
"""
三份版型提案：同一套文案，完全不同的資訊架構與視覺節奏（非僅換色）。
輸出：pencil-layout-a-editorial.pen / b-bento / c-swiss；
      並將 Swiss 完稿同步寫入專案根目錄 pencil-portfolio.pen。
"""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = Path(__file__).resolve().parent

COPY = {
    "kicker": "前端工程 · 遊戲產業 · 交付與整合",
    "name": "Dean Huang（欣迪）",
    "headline": "讓大規模遊戲前端的交付可預期、可驗證、可複用——從共用架構、上線流程到資料與自動化工具。",
    "lead": "產品設計背景轉工程；現職遊戲公司前端 Leader，主力 Cocos，並負責跨專案整合、多環境上線與團隊側的 AI／資料工作流程。",
    "pills": [
        "CI/CD 與多環境交付",
        "跨產品共用架構",
        "Webview 與公平性體驗",
        "資料分析與 AI 工具鏈",
    ],
    "stats": [
        ("納管規模", "50+ 款遊戲", "持續整合與多環境上線流程"),
        ("並行產品", "40+ 前端專案", "獨立與多人遊戲並行維運"),
        ("主力技術", "TS · Node.js · AI flow", "型別安全、後端腳本與可重複的 AI 工作流程"),
        ("資料分析", "腳本與追蹤", "遊戲狀態排查、玩家行為與策略分析腳本，以及市場追蹤器"),
    ],
    "about_h": "設計思維與工程實作並重",
    "about_p": [
        "我從產品設計轉職軟體工程，習慣同時看使用者體驗、互動品質與可維護的實作。熟悉 HTML、CSS、JavaScript、PHP 與 Node.js、Laravel、Vue、React 等主流技術；曾以 Freelancer、大學講師與企業顧問身分累積跨領域溝通與專案推進經驗。",
        "目前擔任遊戲公司前端 Leader，主責 Cocos Creator 與技術規劃、專案節奏與人力調度。工作涵蓋遊戲前端、共用模組、設定與版本控管、部署與 Release Note——目標是把需求推到「可穩定上線、可追溯、可交接」的狀態，而不止於功能合併。",
        "我貢獻在三塊：跨產品整合（同一需求或修正快速同步到多款遊戲與共用程式）、交付與上線治理（多環境狀態、部署結果、備份與文件對齊），以及將 AI、資料查詢與例行報表工具化，減少重工並讓團隊專注在判斷與例外處理。",
    ],
    "skills_title": "核心職能",
    "skills_body": """前端工程實作（結構、互動、型別與可維護性）
Vue / React 生態與大型專案演進
遊戲前端與 Cocos Creator（流程、通訊、效能）
共用設定與跨專案整合（多產品同步、降低重工）
版本交付與部署（多環境、報告、備份與追溯）
AI 流程與自動化（將重複工作變成可重用流程）
技術規劃與跨職能協作（產品、後端、維運、文件）""",
    "ach_intro": "以下以「做了什麼 → 對組織的價值」陳述，方便與職缺需求對照；面談時可再補案例與數據。",
    "ach": [
        (
            "交付與上線治理",
            "負責超過 50 款遊戲前端的持續整合與多環境上線；將部署、備份驗證、版本對齊與上線報告收斂成儀表與腳本，降低人為漏步與環境落差，讓「是否已上線、上到哪一版」可被團隊一致確認。",
        ),
        (
            "多產品並行與共用架構",
            "同時維護四十餘款獨立遊戲與多款多人遊戲；統一遊戲設定、通訊協議、Webview 遊戲紀錄與公平性驗證體驗，並讓多語資源與共用資源在多款產品間同步節奏，減少重工與不一致。",
        ),
        (
            "大範圍遷移與規格化",
            "推動非 Bingo 類遊戲往 Webview 體驗遷移：產出可對齊的規格與遊戲紀錄模板，並將公平性驗證拆解為可複用元件，利於跨團隊實作一致與後續擴充。",
        ),
        (
            "自動化與「給 Agent 的能力」",
            "將部署、雲端資源、i18n 同步、新專案開倉檢核與議題／文件系統整合，封裝成可重複呼叫的技能與腳本，讓例行交付可由工具鏈執行，人員聚焦在例外與決策。",
        ),
        (
            "資料分析",
            "建立遊戲狀態排查、玩家行為與玩家策略排查的分析腳本，以及市場追蹤器；讓營運與技術能以同一套可查詢、可重跑的流程對齊問題，減少口頭來回與一次性查表。",
        ),
        (
            "研發提效與工具鏈",
            "針對換皮與企畫案，導入 AI 輔助產圖與資產相依管理，並探索 UI 編輯器與 MCP 等整合，目標是縮短從需求到可驗收畫面的前置時間。",
        ),
    ],
    "exp": """2023/02 – 至今 · ELS Tech · 前端 Leader（Gemini 線）
Cocos 遊戲前端、共用模組與協議、Webview／遊戲紀錄、多環境發版與 Release Note、後台與品牌站、Jenkins 與技術規劃。

2014 – 2023/02 · Freelancer（2017 登記公司）· 奧樂科技 UI/UX 與前端顧問 · meet.jobs 前端工程師

2013 · 龍華科技大學 · 互動介面設計講師

2012/10 – 2014/02 · AppWorks 育成團隊 · UI／前端

2011/01 – 2012/09 · SHEICO Group · 設計組組長

2009/05 – 2010/12 · 尚芳國際興業 · 工業設計工程師

2008 – 2009 · 海軍義務役

學歷 · 長庚大學工設學士（2001–2005）· 成大工設碩士（2005–2008）""",
    "footer": "LinkedIn、GitHub、Blog 與語系切換已置於頁首；正式網站請將「中文／EN」綁定路由或 i18n。",
    "footer_final": "此檔為完稿版型；網站實作時將頂欄「中文／EN」綁定 i18n 或路由即可。",
    "footer_urls": "linkedin.com/in/Dean-6979939a · github.com/hcd1983 · it-monk.com",
}

LINKS = [
    ("LinkedIn", "https://www.linkedin.com/in/Dean-6979939a/"),
    ("GitHub", "https://github.com/hcd1983"),
    ("Blog", "https://it-monk.com/"),
]


def pen_doc(root_frame: dict) -> dict:
    return {"version": "2.10", "children": [root_frame]}


def txt(
    eid: str,
    content: str,
    fill: str,
    size: int,
    *,
    w: int | None = None,
    weight="400",
    lh=None,
    ls=None,
    href=None,
    align=None,
):
    o = {
        "type": "text",
        "id": eid,
        "content": content,
        "fill": fill,
        "fontSize": size,
        "fontWeight": weight,
        "textGrowth": "fixed-width" if w else "auto",
    }
    if w:
        o["width"] = w
    if lh is not None:
        o["lineHeight"] = lh
    if ls is not None:
        o["letterSpacing"] = ls
    if href:
        o["href"] = href
    if align:
        o["textAlign"] = align
    return o


def ph_circle(eid: str, w: int, label: str, bg: str, border: str, fg: str):
    return {
        "type": "frame",
        "id": eid,
        "name": "IMG · " + label,
        "width": w,
        "height": w,
        "cornerRadius": w // 2,
        "clip": True,
        "layout": "vertical",
        "justifyContent": "center",
        "alignItems": "center",
        "fill": bg,
        "stroke": {"align": "center", "thickness": 1, "fill": border, "dashPattern": [5, 4]},
        "children": [
            txt(eid + "Tx", label.replace(" · ", "\n"), fg, 11, weight="600", align="center", lh=1.35)
        ],
    }


def ph_rect(eid: str, width, height: int, label: str, bg: str, border: str, fg: str, radius=8):
    return {
        "type": "frame",
        "id": eid,
        "name": "IMG · " + label,
        "width": width,
        "height": height,
        "cornerRadius": radius,
        "layout": "vertical",
        "justifyContent": "center",
        "alignItems": "center",
        "fill": bg,
        "stroke": {"align": "inside", "thickness": 1, "fill": border, "dashPattern": [6, 4]},
        "children": [txt(eid + "Tx", label, fg, 12, weight="600")],
    }


def top_nav(prefix: str, ink: str, mut: str, zh_fill: str, zh_txt: str, en_bg: str, en_br: str, en_tx: str):
    social = []
    for i, (label, href) in enumerate(LINKS):
        if i:
            social.append(
                {
                    "type": "rectangle",
                    "id": f"{prefix}sep{i}",
                    "width": 1,
                    "height": 14,
                    "fill": mut,
                }
            )
        social.append(
            txt(f"{prefix}lk{i}", label, ink, 13, weight="600", href=href),
        )
    return {
        "type": "frame",
        "id": prefix + "top",
        "width": "fill_container",
        "layout": "horizontal",
        "justifyContent": "space_between",
        "alignItems": "center",
        "padding": [0, 0, 20, 0],
        "children": [
            {
                "type": "frame",
                "id": prefix + "soc",
                "layout": "horizontal",
                "gap": 16,
                "alignItems": "center",
                "children": social,
            },
            {
                "type": "frame",
                "id": prefix + "lang",
                "layout": "horizontal",
                "gap": 8,
                "children": [
                    {
                        "type": "frame",
                        "id": prefix + "zh",
                        "layout": "horizontal",
                        "padding": [8, 18, 8, 18],
                        "cornerRadius": 100,
                        "fill": zh_fill,
                        "children": [txt(prefix + "zhT", "中文", zh_txt, 12, weight="600")],
                    },
                    {
                        "type": "frame",
                        "id": prefix + "en",
                        "layout": "horizontal",
                        "padding": [8, 18, 8, 18],
                        "cornerRadius": 100,
                        "fill": en_bg,
                        "stroke": {"align": "inside", "thickness": 1, "fill": en_br},
                        "children": [txt(prefix + "enT", "EN", en_tx, 12, weight="600")],
                    },
                ],
            },
        ],
    }


def build_editorial() -> dict:
    """A：雙欄敘事 + 窄欄正文 + 左側重點欄成果（像長文專題）。"""
    ink, mut, acc, paper, side = "#1e1e1e", "#6b6560", "#9b2335", "#f4f1eb", "#e8e4dc"
    root = {
        "type": "frame",
        "id": "edRoot",
        "name": "提案 A · 編輯長文 / 雙欄",
        "x": 0,
        "y": 0,
        "width": 1020,
        "height": "fit_content",
        "fill": paper,
        "layout": "vertical",
        "gap": 0,
        "padding": [56, 72, 80, 72],
        "children": [
            txt("edLogo", "PORTFOLIO — DEAN HUANG", mut, 10, weight="700", ls=2.5),
            top_nav("ed", ink, mut, ink, "#f4f1eb", paper, mut, ink),
            {"type": "rectangle", "id": "edRule1", "width": "fill_container", "height": 2, "fill": ink},
            {
                "type": "frame",
                "id": "edHero2",
                "width": "fill_container",
                "layout": "horizontal",
                "gap": 36,
                "alignItems": "start",
                "padding": [32, 0, 28, 0],
                "children": [
                    {
                        "type": "frame",
                        "id": "edSide",
                        "width": 240,
                        "layout": "vertical",
                        "gap": 20,
                        "children": [
                            ph_circle("edPh", 200, "頭像 · 預留", side, acc, mut),
                            txt(
                                "edToc",
                                "本頁\n01 導言\n02 關於\n03 能力\n04 成果\n05 經歷",
                                mut,
                                11,
                                w=200,
                                weight="600",
                                lh=1.8,
                            ),
                        ],
                    },
                    {
                        "type": "frame",
                        "id": "edMain",
                        "width": "fill_container",
                        "layout": "vertical",
                        "gap": 14,
                        "children": [
                            txt("edK", COPY["kicker"], mut, 12, weight="500", ls=1),
                            txt("edN", COPY["name"], ink, 38, weight="700", ls=-1),
                            txt("edH", COPY["headline"], ink, 19, w=620, weight="500", lh=1.5),
                            txt("edL", COPY["lead"], mut, 15, w=620, lh=1.65),
                            {
                                "type": "frame",
                                "id": "edPills",
                                "layout": "horizontal",
                                "gap": 8,
                                "children": [
                                    {
                                        "type": "frame",
                                        "id": f"edP{i}",
                                        "layout": "horizontal",
                                        "padding": [8, 14, 8, 14],
                                        "fill": side,
                                        "children": [txt(f"edPt{i}", p, ink, 11, weight="600")],
                                    }
                                    for i, p in enumerate(COPY["pills"])
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                "type": "frame",
                "id": "edStatStrip",
                "width": "fill_container",
                "layout": "horizontal",
                "justifyContent": "space_between",
                "padding": [20, 0, 20, 0],
                "children": [
                    {
                        "type": "frame",
                        "id": f"edS{i}",
                        "width": 200,
                        "layout": "vertical",
                        "gap": 4,
                        "padding": [0, 0, 0, 16 if i else 0],
                        "children": [
                            txt(f"edSl{i}", lab.upper(), acc, 9, weight="700", ls=1.5),
                            txt(f"edSv{i}", val, ink, 24, weight="700", ls=-0.5),
                            txt(f"edSd{i}", sub, mut, 12, w=190, lh=1.4),
                        ],
                    }
                    for i, (lab, val, sub) in enumerate(COPY["stats"])
                ],
            },
            ph_rect("edWide", "fill_container", 120, "橫幅／專案配圖 · 預留", "#ebe6df", mut, mut, 0),
            {
                "type": "frame",
                "id": "edAbout",
                "width": "fill_container",
                "layout": "vertical",
                "gap": 14,
                "padding": [36, 0, 36, 0],
                "children": [
                    txt("edAbE", "關於", acc, 10, weight="700", ls=2),
                    txt("edAbH", COPY["about_h"], ink, 26, weight="700", ls=-0.5),
                    *[txt(f"edAb{i}", p, mut, 15, w=520, lh=1.75) for i, p in enumerate(COPY["about_p"])],
                ],
            },
            {"type": "rectangle", "id": "edR2", "width": "fill_container", "height": 1, "fill": mut},
            {
                "type": "frame",
                "id": "edSplit",
                "width": "fill_container",
                "layout": "horizontal",
                "gap": 40,
                "padding": [36, 0, 36, 0],
                "children": [
                    {
                        "type": "frame",
                        "id": "edSk",
                        "width": 300,
                        "layout": "vertical",
                        "gap": 12,
                        "children": [
                            txt("edSkE", "能力", acc, 10, weight="700", ls=2),
                            txt("edSkH", COPY["skills_title"], ink, 20, weight="700"),
                            txt("edSkB", COPY["skills_body"], mut, 13, w=280, lh=1.7),
                        ],
                    },
                    {
                        "type": "frame",
                        "id": "edAch",
                        "width": "fill_container",
                        "layout": "vertical",
                        "gap": 18,
                        "children": [
                            txt("edAcE", "代表成果", acc, 10, weight="700", ls=2),
                            txt("edAcH", "影響力陳述", ink, 20, weight="700"),
                            txt("edAcI", COPY["ach_intro"], mut, 13, w=580, lh=1.6),
                            *[
                                {
                                    "type": "frame",
                                    "id": f"edA{i}",
                                    "width": "fill_container",
                                    "layout": "horizontal",
                                    "gap": 14,
                                    "alignItems": "start",
                                    "children": [
                                        {
                                            "type": "rectangle",
                                            "id": f"edAb{i}",
                                            "width": 4,
                                            "height": 72,
                                            "fill": acc,
                                        },
                                        {
                                            "type": "frame",
                                            "id": f"edAc{i}",
                                            "width": "fill_container",
                                            "layout": "vertical",
                                            "gap": 6,
                                            "children": [
                                                txt(f"edAt{i}", t, acc, 13, weight="700"),
                                                txt(f"edAbd{i}", b, mut, 14, w=540, lh=1.6),
                                            ],
                                        },
                                    ],
                                }
                                for i, (t, b) in enumerate(COPY["ach"])
                            ],
                        ],
                    },
                ],
            },
            {"type": "rectangle", "id": "edR3", "width": "fill_container", "height": 1, "fill": mut},
            {
                "type": "frame",
                "id": "edExp",
                "width": "fill_container",
                "layout": "vertical",
                "gap": 12,
                "padding": [36, 0, 24, 0],
                "children": [
                    txt("edExE", "經歷", acc, 10, weight="700", ls=2),
                    txt("edExH", "時間軸", ink, 22, weight="700"),
                    txt("edExB", COPY["exp"], mut, 14, w=620, lh=1.75),
                ],
            },
            txt("edFt", COPY["footer"], mut, 12, w=720, lh=1.6),
        ],
    }
    return pen_doc(root)


def build_bento() -> dict:
    """B：儀表板式 Bento：大圖塊 + 四格指標 + 成果兩欄 masonry 感。"""
    ink, mut, g1, g2, g3, g4, bg = "#0f172a", "#64748b", "#dbeafe", "#d1fae5", "#e9d5ff", "#ffedd5", "#dce3ec"
    root = {
        "type": "frame",
        "id": "btRoot",
        "name": "提案 B · Bento 儀表板",
        "x": 0,
        "y": 0,
        "width": 1100,
        "height": "fit_content",
        "fill": bg,
        "layout": "vertical",
        "gap": 20,
        "padding": [48, 56, 72, 56],
        "children": [
            top_nav("bt", ink, mut, "#2563eb", "#ffffff", "#ffffff", "#cbd5e1", "#475569"),
            {
                "type": "frame",
                "id": "btBento",
                "width": "fill_container",
                "layout": "vertical",
                "gap": 16,
                "children": [
                    {
                        "type": "frame",
                        "id": "btR1",
                        "layout": "horizontal",
                        "gap": 20,
                        "alignItems": "stretch",
                        "children": [
                            ph_rect("btHeroPh", 340, 220, "主視覺 · 預留", "#f8fafc", mut, mut, 20),
                            {
                                "type": "frame",
                                "id": "btHeroTx",
                                "width": "fill_container",
                                "layout": "vertical",
                                "gap": 12,
                                "padding": [8, 0, 0, 0],
                                "children": [
                                    txt("btK", COPY["kicker"], mut, 12, weight="600"),
                                    txt("btN", COPY["name"], ink, 34, weight="800", ls=-1),
                                    txt("btH", COPY["headline"], ink, 17, w=640, weight="500", lh=1.45),
                                    txt("btL", COPY["lead"], mut, 14, w=640, lh=1.6),
                                ],
                            },
                        ],
                    },
                    {
                        "type": "frame",
                        "id": "btR2",
                        "layout": "horizontal",
                        "gap": 12,
                        "children": [
                            {
                                "type": "frame",
                                "id": f"btCell{i}",
                                "width": 248,
                                "layout": "vertical",
                                "gap": 6,
                                "padding": [18, 18, 18, 18],
                                "cornerRadius": 16,
                                "fill": [g1, g2, g3, g4][i],
                                "children": [
                                    txt(f"btCl{i}", lab, mut, 10, weight="700", ls=1.2),
                                    txt(f"btCv{i}", val, ink, 20, weight="800", ls=-0.3),
                                    txt(f"btCd{i}", sub, mut, 11, w=220, lh=1.4),
                                ],
                            }
                            for i, (lab, val, sub) in enumerate(COPY["stats"])
                        ],
                    },
                    {
                        "type": "frame",
                        "id": "btPills",
                        "layout": "horizontal",
                        "gap": 8,
                        "children": [
                            {
                                "type": "frame",
                                "id": f"btP{i}",
                                "layout": "horizontal",
                                "padding": [10, 16, 10, 16],
                                "cornerRadius": 100,
                                "fill": "#ffffff",
                                "stroke": {"align": "inside", "thickness": 1, "fill": "#cbd5e1"},
                                "children": [txt(f"btPt{i}", p, ink, 11, weight="600")],
                            }
                            for i, p in enumerate(COPY["pills"])
                        ],
                    },
                    ph_rect("btDia", "fill_container", 96, "架構圖／流程圖 · 預留", "#f1f5f9", mut, mut, 12),
                ],
            },
            {
                "type": "frame",
                "id": "btAbout",
                "width": "fill_container",
                "layout": "vertical",
                "gap": 14,
                "padding": [32, 36, 32, 36],
                "cornerRadius": 24,
                "fill": "#ffffff",
                "effect": {
                    "type": "shadow",
                    "shadowType": "outer",
                    "offset": {"x": 0, "y": 8},
                    "blur": 32,
                    "spread": -8,
                    "color": "#0f172a14",
                },
                "children": [
                    txt("btAbH", COPY["about_h"], ink, 24, weight="800"),
                    *[txt(f"btAb{i}", p, mut, 15, w=960, lh=1.7) for i, p in enumerate(COPY["about_p"])],
                ],
            },
            txt("btSkH", COPY["skills_title"], ink, 18, weight="800"),
            txt("btSkB", COPY["skills_body"], mut, 14, w=980, lh=1.75),
            txt("btAcT", "代表成果 · 雙欄摘要", ink, 18, weight="800"),
            txt("btAcI", COPY["ach_intro"], mut, 13, w=980, lh=1.55),
            {
                "type": "frame",
                "id": "btAc2",
                "layout": "horizontal",
                "gap": 16,
                "children": [
                    {
                        "type": "frame",
                        "id": f"btCol{c}",
                        "width": 520,
                        "layout": "vertical",
                        "gap": 12,
                        "children": [
                            {
                                "type": "frame",
                                "id": f"btCard{c}{r}",
                                "layout": "vertical",
                                "gap": 8,
                                "padding": [16, 18, 16, 18],
                                "cornerRadius": 14,
                                "fill": "#ffffff",
                                "stroke": {"align": "inside", "thickness": 1, "fill": "#e2e8f0"},
                                "children": [
                                    txt(f"btCt{c}{r}", COPY["ach"][r * 2 + c][0], "#4f46e5", 13, weight="700"),
                                    txt(
                                        f"btCb{c}{r}",
                                        COPY["ach"][r * 2 + c][1],
                                        mut,
                                        13,
                                        w=480,
                                        lh=1.55,
                                    ),
                                ],
                            }
                            for r in range(3)
                        ],
                    }
                    for c in range(2)
                ],
            },
            {
                "type": "frame",
                "id": "btExp",
                "width": "fill_container",
                "layout": "vertical",
                "gap": 10,
                "padding": [24, 28, 24, 28],
                "cornerRadius": 16,
                "fill": "#f8fafc",
                "children": [
                    txt("btExH", "職涯時間軸", ink, 18, weight="800"),
                    txt("btExB", COPY["exp"], mut, 13, w=980, lh=1.75),
                ],
            },
            txt("btFt", COPY["footer"], mut, 12, w=900, lh=1.55),
        ],
    }
    return pen_doc(root)


def sw_portrait_frame(asset_base: str, blk: str) -> dict:
    """完稿：真實頭像，黑框，無圓角。"""
    url = f"{asset_base.rstrip('/')}/portrait.png"
    return {
        "type": "frame",
        "id": "swPh",
        "name": "Portrait",
        "width": 120,
        "height": 120,
        "clip": True,
        "layout": "none",
        "stroke": {"align": "inside", "thickness": 2, "fill": blk},
        "children": [
            {
                "type": "rectangle",
                "id": "swPhImg",
                "x": 0,
                "y": 0,
                "width": 120,
                "height": 120,
                "fill": {"type": "image", "url": url, "mode": "fill"},
            }
        ],
    }


def sw_hero_cover_frame(asset_base: str, blk: str) -> dict:
    """完稿：主視覺橫幅（OG 圖）。"""
    url = f"{asset_base.rstrip('/')}/og-cover.png"
    return {
        "type": "frame",
        "id": "swWide",
        "name": "Hero cover",
        "width": "fill_container",
        "height": 140,
        "clip": True,
        "fill": {"type": "image", "url": url, "mode": "fill"},
        "stroke": {"align": "inside", "thickness": 2, "fill": blk},
    }


def build_swiss(asset_base: str = "./pencil-assets") -> dict:
    """C：瑞士／粗野 — 完稿版（真實配圖路徑、品牌標、頁尾封條）。"""
    blk, wht, org, gray = "#000000", "#ffffff", "#f97316", "#525252"
    tw = 760
    root = {
        "type": "frame",
        "id": "swRoot",
        "name": "Portfolio — Dean Huang · Swiss 完稿",
        "x": 0,
        "y": 0,
        "width": 880,
        "height": "fit_content",
        "fill": wht,
        "layout": "vertical",
        "gap": 0,
        "padding": [0, 0, 0, 0],
        "children": [
            {
                "type": "frame",
                "id": "swBar",
                "width": "fill_container",
                "height": 52,
                "fill": blk,
                "layout": "horizontal",
                "justifyContent": "space_between",
                "alignItems": "center",
                "padding": [0, 40, 0, 40],
                "children": [
                    {
                        "type": "frame",
                        "id": "swBarL",
                        "layout": "horizontal",
                        "gap": 24,
                        "alignItems": "center",
                        "children": [
                            txt("swMark", "HCD", wht, 13, weight="900", ls=1.5),
                            {
                                "type": "rectangle",
                                "id": "swBarDiv",
                                "width": 1,
                                "height": 18,
                                "fill": "#404040",
                            },
                            txt("swLk1", "LinkedIn", wht, 12, weight="700", href=LINKS[0][1]),
                            txt("swLk2", "GitHub", wht, 12, weight="700", href=LINKS[1][1]),
                            txt("swLk3", "Blog", wht, 12, weight="700", href=LINKS[2][1]),
                        ],
                    },
                    {
                        "type": "frame",
                        "id": "swBarR",
                        "layout": "horizontal",
                        "gap": 6,
                        "alignItems": "center",
                        "children": [
                            {
                                "type": "frame",
                                "id": "swBZ",
                                "layout": "horizontal",
                                "padding": [6, 14, 6, 14],
                                "fill": wht,
                                "children": [txt("swBZT", "中文", blk, 11, weight="800")],
                            },
                            {
                                "type": "frame",
                                "id": "swBE",
                                "layout": "horizontal",
                                "padding": [6, 14, 6, 14],
                                "stroke": {"align": "inside", "thickness": 2, "fill": wht},
                                "children": [txt("swBET", "EN", wht, 11, weight="800")],
                            },
                        ],
                    },
                ],
            },
            {
                "type": "frame",
                "id": "swHero",
                "width": "fill_container",
                "layout": "horizontal",
                "justifyContent": "space_between",
                "alignItems": "start",
                "padding": [36, 40, 20, 40],
                "children": [
                    {
                        "type": "frame",
                        "id": "swHT",
                        "width": "fill_container",
                        "layout": "vertical",
                        "gap": 10,
                        "children": [
                            txt("swK", COPY["kicker"].upper(), gray, 10, weight="700", ls=2),
                            txt("swN", "DEAN HUANG", blk, 46, weight="900", ls=-1.8),
                            txt("swSub", "（欣迪）", gray, 14, weight="600"),
                            txt("swH", COPY["headline"], blk, 16, w=tw - 140, weight="600", lh=1.45),
                            txt("swL", COPY["lead"], gray, 14, w=tw - 140, lh=1.62),
                        ],
                    },
                    sw_portrait_frame(asset_base, blk),
                ],
            },
            {"type": "rectangle", "id": "swOr", "width": "fill_container", "height": 6, "fill": org},
            {
                "type": "frame",
                "id": "swStatWrap",
                "width": "fill_container",
                "layout": "vertical",
                "padding": [14, 40, 10, 40],
                "children": [
                    txt(
                        "swStat",
                        "50+ 遊戲管線  │  40+ 並行專案  │  TS · NODE · AI  │  資料腳本 · 市場追蹤",
                        blk,
                        11,
                        w=tw,
                        weight="800",
                        ls=0.4,
                    ),
                ],
            },
            {
                "type": "frame",
                "id": "swP",
                "layout": "horizontal",
                "gap": 6,
                "padding": [6, 40, 12, 40],
                "children": [
                    {
                        "type": "frame",
                        "id": f"swPx{i}",
                        "layout": "horizontal",
                        "padding": [6, 10, 6, 10],
                        "stroke": {"align": "inside", "thickness": 2, "fill": blk},
                        "children": [txt(f"swPxt{i}", x, blk, 10, weight="800")],
                    }
                    for i, x in enumerate(COPY["pills"])
                ],
            },
            {
                "type": "frame",
                "id": "swWideWrap",
                "width": "fill_container",
                "layout": "vertical",
                "padding": [0, 40, 0, 40],
                "gap": 6,
                "children": [
                    sw_hero_cover_frame(asset_base, blk),
                    txt("swWideCap", "主視覺／社群預覽圖（可替換）", gray, 10, weight="600", ls=0.5),
                ],
            },
            {
                "type": "frame",
                "id": "swAb",
                "layout": "vertical",
                "gap": 12,
                "padding": [28, 40, 28, 40],
                "children": [
                    txt("swAbH", "ABOUT — " + COPY["about_h"].upper(), blk, 12, weight="900", ls=1.2),
                    *[txt(f"swAb{i}", p, gray, 14, w=tw, lh=1.65) for i, p in enumerate(COPY["about_p"])],
                ],
            },
            {"type": "rectangle", "id": "swR1", "width": "fill_container", "height": 2, "fill": blk},
            {
                "type": "frame",
                "id": "swSk",
                "layout": "vertical",
                "gap": 8,
                "padding": [24, 40, 24, 40],
                "children": [
                    txt("swSkH", "SKILLS — " + COPY["skills_title"].upper(), blk, 12, weight="900", ls=1),
                    *[
                        txt(f"swSk{i}", f"{i+1:02d}  {line}", gray, 13, w=tw, lh=1.5)
                        for i, line in enumerate(COPY["skills_body"].split("\n"))
                    ],
                ],
            },
            {"type": "rectangle", "id": "swR2", "width": "fill_container", "height": 2, "fill": blk},
            {
                "type": "frame",
                "id": "swAc",
                "layout": "vertical",
                "gap": 16,
                "padding": [24, 40, 32, 40],
                "children": [
                    txt("swAcH", "OUTCOMES", blk, 12, weight="900", ls=1.5),
                    txt("swAcI", COPY["ach_intro"], gray, 13, w=tw, lh=1.55),
                    *[
                        {
                            "type": "frame",
                            "id": f"swA{i}",
                            "width": "fill_container",
                            "layout": "vertical",
                            "gap": 6,
                            "padding": [0, 0, 14, 0],
                            "children": [
                                {
                                    "type": "rectangle",
                                    "id": f"swAbm{i}",
                                    "width": "fill_container",
                                    "height": 2,
                                    "fill": blk,
                                },
                                txt(f"swAt{i}", f"{i+1:02d}  {t}", blk, 12, weight="900"),
                                txt(f"swAbd{i}", b, gray, 13, w=tw, lh=1.55),
                            ],
                        }
                        for i, (t, b) in enumerate(COPY["ach"])
                    ],
                ],
            },
            {"type": "rectangle", "id": "swR3", "width": "fill_container", "height": 2, "fill": blk},
            {
                "type": "frame",
                "id": "swEx",
                "layout": "vertical",
                "gap": 8,
                "padding": [24, 40, 20, 40],
                "children": [
                    txt("swExH", "TIMELINE", blk, 12, weight="900", ls=1.5),
                    txt("swExB", COPY["exp"], gray, 12, w=tw, lh=1.7),
                ],
            },
            {
                "type": "frame",
                "id": "swFootNote",
                "layout": "vertical",
                "gap": 8,
                "padding": [16, 40, 20, 40],
                "children": [
                    txt("swFtU", COPY["footer_urls"], gray, 11, w=tw, weight="600", lh=1.5),
                    txt("swFtN", COPY["footer_final"], gray, 11, w=tw, lh=1.55),
                ],
            },
            {
                "type": "frame",
                "id": "swFootBar",
                "width": "fill_container",
                "height": 48,
                "fill": blk,
                "layout": "horizontal",
                "justifyContent": "center",
                "alignItems": "center",
                "children": [
                    txt(
                        "swCop",
                        "HCD PORTFOLIO · DEAN HUANG · SWISS LAYOUT",
                        wht,
                        9,
                        weight="700",
                        ls=2.2,
                    ),
                ],
            },
        ],
    }
    return pen_doc(root)


def main():
    outs = [
        ("pencil-layout-a-editorial.pen", build_editorial),
        ("pencil-layout-b-bento.pen", build_bento),
        ("pencil-layout-c-swiss.pen", lambda: build_swiss("../pencil-assets")),
    ]
    for name, fn in outs:
        p = OUT / name
        p.write_text(json.dumps(fn(), ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print("Wrote", p)

    root_pen = ROOT / "pencil-portfolio.pen"
    root_pen.write_text(
        json.dumps(build_swiss("./pencil-assets"), ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print("Wrote", root_pen)

    # Remove old color-swap proposals if present
    for old in [
        "pencil-portfolio-theme-aurora.pen",
        "pencil-portfolio-theme-glacier.pen",
        "pencil-portfolio-theme-signal.pen",
        "generate-pencil-theme-variants.py",
    ]:
        op = OUT / old
        if op.exists():
            op.unlink()
            print("Removed", op)


if __name__ == "__main__":
    main()
