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
          <TimelineBlock title="2014 - Present">
            <h3 class="text-lg font-medium text-gray-900">Freelancer</h3>
            <h4 class="font-medium mt-1">- 公司負責人</h4>
            <p class="text-sm font-normal text-gray-700 mt-2">以接外包為主，曾與多家企業合作，從活動網站到金流串接，都具備相當的經驗。</p>
            <h3 class="text-lg font-medium text-gray-900 mt-6">奧樂科技</h3>
            <h4 class="font-medium mt-1">- UI/UX 與前端顧問</h4>
            <p class="text-sm font-normal text-gray-700 mt-2">長期合作客戶。此公司為醫療用品結合行動裝置的 App 開發。主要為協助公司規劃 Demo 版介面，並使用 web view 做 UI 的 layout。</p>
            <h3 class="text-lg font-medium text-gray-900 mt-6">meet.jobs</h3>
            <h4 class="font-medium mt-1">- 前端工程師</h4>
            <p class="text-sm font-normal text-gray-700 mt-2">國際求職網站。在這邊主要負責網站前端維護與功能開發。</p>
          </TimelineBlock>
          <TimelineBlock title="2013">
            <h3 class="text-lg font-medium text-gray-900">龍華科技大學</h3>
            <h4 class="font-medium mt-1">- 互動介面設計講師</h4>
          </TimelineBlock>
          <TimelineBlock title="2012 - 2014">
            <h3 class="text-lg font-medium text-gray-900">育成團隊@ AppWorks</h3>
            <h4 class="font-medium mt-1">- UI 設計師 / 前端工程師</h4>
            <p class="text-sm font-normal text-gray-700 mt-2">加入新創團隊，並在 AppWorks 新創加速器接受為期一年的培訓。此處也是開始寫程式轉捩點。</p>
          </TimelineBlock>
          <TimelineBlock title="2011 - 2012">
            <h3 class="text-lg font-medium text-gray-900">SHEICO Group</h3>
            <h4 class="font-medium mt-1">- 設計組組長</h4>
            <p class="text-sm font-normal text-gray-700 mt-2">公司為世界最大潛水衣製造商，市占 70%。 工作內容為設計潛水衣外觀與新機 能提案。展會期間須規劃參展項目與展場布置。</p>
          </TimelineBlock>
          <TimelineBlock title="2009 - 2010">
            <h3 class="text-lg font-medium text-gray-900">尚芳國際興業股份有限公司</h3>
            <h4 class="font-medium mt-1">- 工業設計工程師</h4>
            <p class="text-sm font-normal text-gray-700 mt-2">設計大型電玩機台外觀與機構。工作內容以 3D建 模為主。偶爾需支援活動網頁的設計與更新。</p>
          </TimelineBlock>
          <TimelineBlock title="2007 - 2008">
            <h3 class="text-lg font-medium text-gray-900">中華民國海軍義務役</h3>
          </TimelineBlock>
          <TimelineBlock title="Education">
            <h3 class="text-lg font-medium text-gray-900">長庚大學 - 工業設計學士 <small>(2001 - 2004)</small></h3>
            <h3 class="text-lg font-medium text-gray-900">國立成功大學 - 工業設計碩士 <small>(2004 - 2007)</small></h3>
          </TimelineBlock>
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
import { ref } from "vue"
export default {
  name: "Timeline",
  setup () {
    const expend = ref(false)
    return {
      expend
    }
  }
}
</script>

<style scoped>

</style>
