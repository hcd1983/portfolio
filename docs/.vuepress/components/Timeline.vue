<template>
  <div
    id="experience"
    class="relative scroll-mt-[52px] border-t-2 border-black bg-white pb-20 pt-10"
  >
    <div class="mx-auto max-w-[880px] px-6 md:px-10">
      <h2 class="mb-4 text-sm font-black uppercase tracking-[0.15em] text-black md:text-base">
        {{ copy.timelineTitle }}
      </h2>
      <pre
        class="mb-10 max-w-[760px] whitespace-pre-wrap font-swiss text-sm font-normal leading-relaxed text-neutral-600 md:text-base"
      >{{ copy.expBlock }}</pre>
      <h3 class="mb-6 text-sm font-black uppercase tracking-[0.2em] text-black md:text-base">
        {{ copy.timelineDetail }}
      </h3>
      <div
        class="relative overflow-y-hidden transition-all duration-700 ease-in-out"
        :class="{
          'max-h-[75vh]': !expend,
          'max-h-[9999px]': expend,
        }"
      >
        <ol class="relative mx-auto max-w-[640px] border-l-2 border-black pb-6 pl-8">
          <template v-if="page.lang === 'en-US'">
            <TimelineBlock
              title="2023/2 - Present"
              class="border-2 border-black bg-neutral-50 py-5 px-3"
            >
              <h3 class="text-xl font-medium text-gray-900">ELS Tech</h3>
              <h4 class="mt-1 text-base font-medium">- Frontend Team Leader · Gemini line</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                Cocos Creator game development; batching features and fixes across many game
                codebases and shared libraries.
              </p>
              <p class="mt-2 text-base font-normal text-gray-700">
                Shared FE stack: protocols (e.g. protobuf), WebSocket / game services, runtime
                settings, webview, i18n, bundles, and loading rules.
              </p>
              <p class="mt-2 text-base font-normal text-gray-700">
                Release ownership: STG / REL / PROD progression, release notes (incl. hotfix),
                deployment reports, S3 backup checks, version alignment.
              </p>
              <p class="mt-2 text-base font-normal text-gray-700">
                Docs and plans in repos (guides, checklists, implementation notes) for traceability
                and handoff.
              </p>
              <p class="mt-2 text-base font-normal text-gray-700">
                Game management backend, brand sites, Jenkins pipelines; technical planning,
                delivery, and team scheduling.
              </p>
            </TimelineBlock>
            <TimelineBlock title="2014 - 2023/2">
              <h3 class="text-xl font-medium text-gray-900">Freelancer</h3>
              <h4 class="mt-1 text-base font-medium">- Registered company in 2017</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                Cooperate with many companies. Has extensive experience of website development.
              </p>
              <h3 class="mt-6 text-xl font-medium text-gray-900">Othe Technology</h3>
              <h4 class="mt-1 text-base font-medium">- UI / Frontend</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                Plan the demo version interface and use web view for UI layout.
              </p>
              <h3 class="mt-6 text-xl font-medium text-gray-900">meet.jobs</h3>
              <h4 class="mt-1 text-base font-medium">- Software Engineer</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                website maintenance, optimization and functional development.
              </p>
            </TimelineBlock>
            <TimelineBlock title="2012/10 - 2014/02">
              <h3 class="text-xl font-medium text-gray-900">Startup Team@ AppWorks</h3>
              <h4 class="mt-1 text-base font-medium">- UI / Frontend</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                Initally work as a UI designer, become frontend engineer about 2013/6.
              </p>
            </TimelineBlock>
            <TimelineBlock title="2011/01 - 2012/09">
              <h3 class="text-xl font-medium text-gray-900">SHEICO Group</h3>
              <h4 class="mt-1 text-base font-medium">- Design Team Leader</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                Design profassional water sportswear (suit for surfing or diving). Plan the
                exhibition projects and the layout.
              </p>
            </TimelineBlock>
            <TimelineBlock title="2009/05 - 2010/12">
              <h3 class="text-xl font-medium text-gray-900">SAINT-FUN INTERNATIONAL CO.</h3>
              <h4 class="mt-1 text-base font-medium">- ID Engineer</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                Design the appearance and mechanism of arcade game machines. The work content is
                mainly 3D modeling
              </p>
            </TimelineBlock>
            <TimelineBlock title="2008 - 2009">
              <h3 class="text-xl font-medium text-gray-900">R.O.C. NANY</h3>
            </TimelineBlock>
            <TimelineBlock title="Education">
              <h3 class="text-xl font-medium text-gray-900">
                Chang Gung University<br /><small class="text-base font-normal text-gray-700">Bachelor of Industrial Design (2001 - 2005)</small>
              </h3>
              <h3 class="mt-2 text-xl font-medium text-gray-900">
                National Cheng Kung University -
                <br />
                <small class="text-base font-normal text-gray-700">Master of Industrial Design (2005 - 2008)</small>
              </h3>
            </TimelineBlock>
          </template>
          <template v-else>
            <TimelineBlock
              title="2023/2 - Present"
              class="border-2 border-black bg-neutral-50 py-5 px-3"
            >
              <h3 class="text-xl font-medium text-gray-900">ELS Tech</h3>
              <h4 class="mt-1 text-base font-medium">- 前端 Leader（Gemini 前端線）</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                Cocos Creator 遊戲開發；跨多款遊戲產品與共用程式庫的功能與修正批次同步。
              </p>
              <p class="mt-2 text-base font-normal text-gray-700">
                共用前端與配置：proto／WebSocket、執行期遊戲設定、webview、共用資源包、i18n、遠端資源路徑與載入／商戶
                logo 規則。
              </p>
              <p class="mt-2 text-base font-normal text-gray-700">
                發版與交付：STG／REL／PROD 推進、Release Note（含 hotfix）、部署報告、S3 備份與版本對齊檢查。
              </p>
              <p class="mt-2 text-base font-normal text-gray-700">
                文件與流程：repo 內實作計畫、checklist、guide 等，保留可追溯與交接脈絡。
              </p>
              <p class="mt-2 text-base font-normal text-gray-700">
                遊戲管理後台與品牌官網維運、Jenkins 管線；專案技術規劃、進度與人員調度。
              </p>
            </TimelineBlock>
            <TimelineBlock title="2014 - 2023/2">
              <h3 class="text-xl font-medium text-gray-900">Freelancer</h3>
              <h4 class="mt-1 text-base font-medium">- 公司負責人</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                以接外包為主，曾與多家企業合作，從活動網站到金流串接，都具備相當的經驗。
              </p>
              <h3 class="mt-6 text-xl font-medium text-gray-900">奧樂科技</h3>
              <h4 class="mt-1 text-base font-medium">- UI/UX 與前端顧問</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                長期合作客戶。此公司為醫療用品結合行動裝置的 App
                開發。主要為協助公司規劃 Demo 版介面，並使用 web view 做 UI 的 layout。
              </p>
              <h3 class="mt-6 text-xl font-medium text-gray-900">meet.jobs</h3>
              <h4 class="mt-1 text-base font-medium">- 前端工程師</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                國際求職網站。負責網站前端維護、優化與功能開發。
              </p>
            </TimelineBlock>
            <TimelineBlock title="2013">
              <h3 class="text-xl font-medium text-gray-900">龍華科技大學</h3>
              <h4 class="mt-1 text-base font-medium">- 互動介面設計講師</h4>
            </TimelineBlock>
            <TimelineBlock title="2012/10 - 2014/02">
              <h3 class="text-xl font-medium text-gray-900">育成團隊@ AppWorks</h3>
              <h4 class="mt-1 text-base font-medium">- UI 設計師 / 前端工程師</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                加入新創團隊，並在 AppWorks 新創加速器接受為期一年的培訓。此處也是開始寫程式轉捩點。
              </p>
            </TimelineBlock>
            <TimelineBlock title="2011/01 - 2012/09">
              <h3 class="text-xl font-medium text-gray-900">SHEICO Group</h3>
              <h4 class="mt-1 text-base font-medium">- 設計組組長</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                公司為世界最大潛水衣製造商，市占 70%。 工作內容為設計潛水衣外觀與新機能提案。展會期間須規劃參展項目與展場布置。
              </p>
            </TimelineBlock>
            <TimelineBlock title="2009/05 - 2010/12">
              <h3 class="text-xl font-medium text-gray-900">尚芳國際興業股份有限公司</h3>
              <h4 class="mt-1 text-base font-medium">- 工業設計工程師</h4>
              <p class="mt-2 text-base font-normal text-gray-700">
                設計大型電玩機台外觀與機構。工作內容以 3D建 模為主。偶爾需支援活動網頁的設計與更新。
              </p>
            </TimelineBlock>
            <TimelineBlock title="2008 - 2009">
              <h3 class="text-xl font-medium text-gray-900">中華民國海軍義務役</h3>
            </TimelineBlock>
            <TimelineBlock title="Education">
              <h3 class="text-xl font-medium text-gray-900">
                長庚大學 - 工業設計學士 <small class="text-base font-normal text-gray-700">(2001 - 2005)</small>
              </h3>
              <h3 class="mt-2 text-xl font-medium text-gray-900">
                國立成功大學 - 工業設計碩士 <small class="text-base font-normal text-gray-700">(2005 - 2008)</small>
              </h3>
            </TimelineBlock>
          </template>
        </ol>
      </div>
    </div>
    <div
      v-if="!expend"
      class="pointer-events-none absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-white to-transparent"
    />
    <div
      v-if="!expend"
      class="absolute bottom-0 left-0 flex w-full items-end justify-center pb-8"
    >
      <button
        type="button"
        class="pointer-events-auto flex items-center gap-2 border-2 border-black bg-white px-4 py-2.5 text-sm font-extrabold uppercase tracking-wide text-black hover:bg-neutral-100"
        @click.prevent="expend = true"
      >
        <span class="inline-block h-2 w-2 bg-orange-500" aria-hidden="true" />
        {{ copy.timelineExpand }}
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { usePageData, useSiteData } from '@vuepress/client'
import { ref } from 'vue'

export default {
  name: 'Timeline',
  setup() {
    const page = usePageData()
    const site = useSiteData()
    const expend = ref(false)

    const copy = computed(() => {
      const lang = page.value.lang === 'en-US' ? 'en' : 'zh'
      return site.value.globalData.swiss[lang]
    })

    return {
      expend,
      page,
      copy,
    }
  },
}
</script>

<style scoped></style>
