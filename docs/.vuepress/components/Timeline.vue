<template>
  <div id="experience" class="relative pt-10 pb-16">
    <overlay class="opacity-70 bg-gray-200 " />
    <div class="container max-w-[900px]">
      <div
          class="px-3 relative transition-all duration-700 ease-in-out overflow-y-hidden "
          :class="{
            'max-h-[80vh]': !expend,
            'max-h-[9999px]': expend
          }"
      >
        <h3 class="text-6xl font-cursive pt-3 mb-3 text-center">Experience</h3>
        <h4 class="font-cursive text-3xl mb-10 text-center">(Present - Past)</h4>
        <ol class="relative border-l border-gray-700 mx-auto max-w-[600px] pb-5">
          <template v-if="page.lang === 'en-US'">
            <TimelineBlock title="2023/2 - Present" class="py-5 px-3 border-2 border-blue-400 rounded-lg bg-white">
              <h3 class="text-lg font-medium text-gray-900">ELS Tech</h3>
              <h4 class="font-medium mt-1">- Frontend Team Leader</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">Using Cocos Creator game engine for game development</p>
<p class="text-sm font-normal text-gray-700 mt-2">Building and maintaining game management backend.</p>
<p class="text-sm font-normal text-gray-700 mt-2">Building and maintaining game brand official website.</p>
<p class="text-sm font-normal text-gray-700 mt-2">Writing and planning Jenkins automated deployment pipeline.</p>
<p class="text-sm font-normal text-gray-700 mt-2">Project technical planning, project progress management, team scheduling.</p>
            </TimelineBlock>
            <TimelineBlock title="2014 - 2023/2">
              <h3 class="text-lg font-medium text-gray-900">Freelancer</h3>
              <h4 class="font-medium mt-1">- Registered company in 2017</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">Cooperate with many companies. Has extensive experience of website development.</p>
              <h3 class="text-lg font-medium text-gray-900 mt-6">Othe Technology</h3>
              <h4 class="font-medium mt-1">- UI/ Frontend</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">Plan the demo version interface and use web view for UI layout.</p>
              <h3 class="text-lg font-medium text-gray-900 mt-6">meet.jobs</h3>
              <h4 class="font-medium mt-1">- Software Engineer</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">website maintenance, optimization and functional development.</p>
            </TimelineBlock>
            <TimelineBlock title="2012/10 - 2014/02">
              <h3 class="text-lg font-medium text-gray-900">Startup Team@ AppWorks</h3>
              <h4 class="font-medium mt-1">- UI / Frontend</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">Initally work as a UI designer, become frontend engineer about 2013/6.</p>
            </TimelineBlock>
            <TimelineBlock title="2011/01 - 2012/09">
              <h3 class="text-lg font-medium text-gray-900">SHEICO Group</h3>
              <h4 class="font-medium mt-1">- Design Team Leader</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">Design profassional water sportswear (suit for surfing or diving). Plan the exhibition projects and the layout.</p>
            </TimelineBlock>
            <TimelineBlock title="2009/05 - 2010/12">
              <h3 class="text-lg font-medium text-gray-900">SAINT-FUN INTERNATIONAL CO.</h3>
              <h4 class="font-medium mt-1">- ID Engineer</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">Design the appearance and mechanism of arcade game machines. The work content is mainly 3D modeling</p>
            </TimelineBlock>
            <TimelineBlock title="2008 - 2009">
              <h3 class="text-lg font-medium text-gray-900">R.O.C. NANY</h3>
            </TimelineBlock>
            <TimelineBlock title="Education">
              <h3 class="text-lg font-medium text-gray-900">Chang Gung University<br/><small>Bachelor of Industrial Design (2001 - 2005)</small></h3>
              <h3 class="text-lg font-medium text-gray-900 mt-2">National Cheng Kung University - <br/><small>Master of Industrial Design (2005 - 2008)</small></h3>
            </TimelineBlock>
          </template>
          <template v-else >
            <TimelineBlock title="2023/2 - Present" class="py-5 px-3 border-2 border-blue-400 rounded-lg bg-white">
              <h3 class="text-lg font-medium text-gray-900">ELS Tech</h3>
              <h4 class="font-medium mt-1">- 前端 Leader</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">使用 Cocos Creator 遊戲引擎開發遊戲</p>
              <p class="text-sm font-normal text-gray-700 mt-2">搭建及維護遊戲管理後台</p>
              <p class="text-sm font-normal text-gray-700 mt-2">搭建及維護遊戲品牌官網</p>
              <p class="text-sm font-normal text-gray-700 mt-2">Jenkins 自動化部署腳本撰寫與規劃</p>
              <p class="text-sm font-normal text-gray-700 mt-2">專案技術規劃、專案進度管理、人員調度</p>
            </TimelineBlock>
            <TimelineBlock title="2014 - 2023/2">
              <h3 class="text-lg font-medium text-gray-900">Freelancer</h3>
              <h4 class="font-medium mt-1">- 公司負責人</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">以接外包為主，曾與多家企業合作，從活動網站到金流串接，都具備相當的經驗。</p>
              <h3 class="text-lg font-medium text-gray-900 mt-6">奧樂科技</h3>
              <h4 class="font-medium mt-1">- UI/UX 與前端顧問</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">長期合作客戶。此公司為醫療用品結合行動裝置的 App 開發。主要為協助公司規劃 Demo 版介面，並使用 web view 做 UI 的 layout。</p>
              <h3 class="text-lg font-medium text-gray-900 mt-6">meet.jobs</h3>
              <h4 class="font-medium mt-1">- 前端工程師</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">國際求職網站。負責網站前端維護、優化與功能開發。</p>
            </TimelineBlock>
            <TimelineBlock title="2013">
              <h3 class="text-lg font-medium text-gray-900">龍華科技大學</h3>
              <h4 class="font-medium mt-1">- 互動介面設計講師</h4>
            </TimelineBlock>
            <TimelineBlock title="2012/10 - 2014/02">
              <h3 class="text-lg font-medium text-gray-900">育成團隊@ AppWorks</h3>
              <h4 class="font-medium mt-1">- UI 設計師 / 前端工程師</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">加入新創團隊，並在 AppWorks 新創加速器接受為期一年的培訓。此處也是開始寫程式轉捩點。</p>
            </TimelineBlock>
            <TimelineBlock title="2011/01 - 2012/09">
              <h3 class="text-lg font-medium text-gray-900">SHEICO Group</h3>
              <h4 class="font-medium mt-1">- 設計組組長</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">公司為世界最大潛水衣製造商，市占 70%。 工作內容為設計潛水衣外觀與新機能提案。展會期間須規劃參展項目與展場布置。</p>
            </TimelineBlock>
            <TimelineBlock title="2009/05 - 2010/12">
              <h3 class="text-lg font-medium text-gray-900">尚芳國際興業股份有限公司</h3>
              <h4 class="font-medium mt-1">- 工業設計工程師</h4>
              <p class="text-sm font-normal text-gray-700 mt-2">設計大型電玩機台外觀與機構。工作內容以 3D建 模為主。偶爾需支援活動網頁的設計與更新。</p>
            </TimelineBlock>
            <TimelineBlock title="2008 - 2009">
              <h3 class="text-lg font-medium text-gray-900">中華民國海軍義務役</h3>
            </TimelineBlock>
            <TimelineBlock title="Education">
              <h3 class="text-lg font-medium text-gray-900">長庚大學 - 工業設計學士 <small>(2001 - 2005)</small></h3>
              <h3 class="text-lg font-medium text-gray-900">國立成功大學 - 工業設計碩士 <small>(2005 - 2008)</small></h3>
            </TimelineBlock>
          </template>
        </ol>
      </div>
    </div>
    <div v-if="!expend" class="absolute w-full h-1/3 bottom-0 w-full left-0 bg-gradient-to-t from-gray-200 to-transparent flex items-end justify-center pb-10">
      <button @click.prevent="expend = true" class="text-black font-cursive text-xl flex gap-3 items-center animate-pulse">
        <div class="w-8 h-8"><svg-icon name="tap" fill="#000" /></div>
        Click to Expand
      </button>
    </div>
  </div>
</template>

<script>
import { usePageData } from "@vuepress/client"
import { ref } from "vue"
export default {
  name: "Timeline",
  setup () {
    const page = usePageData()
    const expend = ref(false)
    return {
      expend,
      page
    }
  }
}
</script>

<style scoped>

</style>
