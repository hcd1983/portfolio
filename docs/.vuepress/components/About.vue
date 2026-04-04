<template>
<section id="about" class="block pt-10 pb-20 bg-gray-100">
  <div class="container max-w-[900px]">
    <div class="mx-auto flex flex-col items-center gap-y-5 md:gap-y-0 md:flex-row md:justify-between md:gap-x-12">
      <div class="order-2">
        <h3 class="text-6xl font-cursive pt-3 mb-10">About</h3>
        <template v-if="page.lang === 'en-US'">
          <h1 class="text-3xl font-bold">Hi, I am <span class="text-blue-500">Dean</span>.</h1>
          <p class="mt-6 text-base leading-loose">
            I moved from product design into software engineering, with both design thinking and hands-on engineering in my toolkit. Because I understand product, interface, and technology together, I care about more than “feature done”—I weigh user experience, interaction flow, and overall product quality. That mix helps me bridge design and engineering when gathering requirements, and when complex problems show up, I reason from product, user, and system angles to pick sensible paths.
          </p>
          <p class="mt-4 text-base leading-loose">
            I am solid on foundational web tech—<span class="text-blue-500">HTML, CSS, JavaScript, PHP</span>—and work comfortably with mainstream stacks such as <span class="text-blue-500">Node.js, Laravel, Vue, and React</span>. I have freelanced, taught interactive interface design at university, and advised several companies, building cross-domain project experience and communication habits. Those years mean I do not only implement—I can stand at the intersection of product, design, technology, and business needs and propose fuller solutions.
          </p>
          <p class="mt-4 text-base leading-loose">
            Today I am a frontend lead at a game company, focused on <span class="text-blue-500">Cocos Creator</span> while contributing to technical planning, project management, and staffing. I am not only a frontend engineer but an <strong>integration core</strong> for the team: work spans the full delivery chain—game frontend, shared assets, configuration, versioning, deployments, and release notes—not just a single feature. From landing requirements and syncing across projects to pushing releases and curating docs, my job is to move work to a state where it can ship stably, not merely “built.”
          </p>
          <p class="mt-4 text-base leading-loose">
            Where I add value: <strong>cross-project integration</strong>, propagating the same needs, fixes, and shared logic quickly across games and modules to cut rework and misses; <strong>delivery and release</strong>, staying on top of STG, REL, and PROD state, deploy outcomes, S3 backups, and release notes so outcomes land reliably; and <strong>systems thinking and collaboration</strong>, operating across frontend implementation, backend protocols, resource setup, and team process—linking development, deployment, documentation, and cross-functional conversation to keep projects moving.
          </p>
          <p class="mt-4 text-base leading-loose">
            Alongside frontend and delivery, I invest in <strong>AI workflows and tooling</strong>—for example <strong>proposal-generator</strong>, GitLab-based work-report automation, ByteHouse analytics flows, and packaged <strong>skills / agent</strong> capabilities. This is not casual tool use; it turns everyday dev, data queries, proposals, and reporting into repeatable, retainable, extensible AI collaboration. My role expands toward someone who advances technical delivery, process design, and tooling—not only code.
          </p>
          <p class="mt-4 text-base leading-loose">
            Looking ahead, I want to keep growing in frontend architecture, cross-project integration, technical leadership, and AI workflows—becoming a leader who not only implements but aligns resources, improves process, and amplifies what the whole team can ship.
          </p>
        </template>
        <template v-else>
          <h1 class="text-3xl font-bold">Hi, 我是 <span class="text-blue-500">欣迪</span></h1>
          <p class="mt-6 text-base leading-loose">
            我是一位從產品設計領域轉職為軟體工程師的技術工作者，具備設計思維與工程實作的雙重背景。因為同時理解產品、介面與技術，我在開發過程中不只關注功能是否完成，也重視使用者體驗、互動流程與整體產品品質。這樣的背景讓我在設計與工程之間能更有效地整合需求，並在面對複雜技術問題時，從產品、使用者與系統三個角度思考最合適的解法。
          </p>
          <p class="mt-4 text-base leading-loose">
            我具備 <span class="text-blue-500">HTML</span>、<span class="text-blue-500">CSS</span>、<span class="text-blue-500">JavaScript</span>、<span class="text-blue-500">PHP</span> 等前後端基礎技術能力，並熟悉 <span class="text-blue-500">Node.js</span>、<span class="text-blue-500">Laravel</span>、<span class="text-blue-500">Vue</span>、<span class="text-blue-500">React</span> 等主流框架。過去曾擔任 Freelancer、大學互動介面設計講師，並於多家企業擔任技術顧問，累積了跨領域專案實務與溝通協調經驗。這些經歷讓我不只是能完成開發工作，也能站在產品、設計、技術與商業需求的交會點，提供更完整的解決方案。
          </p>
          <p class="mt-4 text-base leading-loose">
            目前我任職於遊戲公司擔任前端 Leader，主要負責使用 <span class="text-blue-500">Cocos Creator</span> 進行遊戲前端開發，同時參與技術規劃、專案管理與人員調度。我的角色不只是前端工程師，更是團隊中的<strong>整合核心</strong>。工作內容不侷限於單一遊戲功能開發，而是橫跨遊戲前端、共用資源、設定配置、版本控管、部署流程與 Release Note 等完整交付鏈。從需求落地、跨專案同步、上版推進到文件整理，我負責的不只是把功能做出來，而是把需求真正推進到可穩定上線的狀態。
          </p>
          <p class="mt-4 text-base leading-loose">
            我的價值主要體現在幾個面向。首先是<strong>跨專案整合能力</strong>，能夠將同一類需求、修正或共用邏輯快速同步到多個遊戲與共用模組，降低重工與遺漏風險。其次是<strong>交付與上版能力</strong>，我不只參與功能實作，也能掌握 STG、REL、PROD 的版本狀態、部署結果、S3 備份與 Release Note，確保團隊成果能穩定交付。此外，我也具備<strong>系統理解與協作能力</strong>，能同時站在前端實作、後端協議、資源配置與團隊流程的交界點，在開發、部署、文件與跨部門溝通之間建立連結，成為推動專案前進的重要角色。
          </p>
          <p class="mt-4 text-base leading-loose">
            除了前端與交付工作之外，我進一步參與 AI workflow 與工具化相關專案，例如 <strong>proposal-generator</strong>、GitLab 工作彙報自動化、ByteHouse 分析流程，以及 skills／agent 能力封裝。這些工作不只是使用 AI 工具，而是將團隊日常開發、資料查詢、提案與報告流程，轉化為可重複執行、可沉澱、可擴充的 AI 協作能力。這讓我在團隊中的定位，不只是前端工程師，而是能同時推動技術交付、流程規劃與工具演進的多功能整合人才。
          </p>
          <p class="mt-4 text-base leading-loose">
            未來，我希望持續深化自己在前端架構、跨專案整合、技術管理與 AI workflow 上的能力，成為不只懂技術實作，也能整合團隊資源、優化流程並放大團隊產出的技術領導者。
          </p>
        </template>

        <div class="flex gap-[20px] mt-10 justify-center md:justify-start">
          <a
              v-for="{sub, url, icon, color}, key in socialLink"
              :key="key"
              :href="url"
              target="_blank"
              class="flex flex-col items-center md:opacity-70 md:hover:opacity-100 transition-opacity duration-500 ease-in-out"
          >
            <div class="w-8 h-8">
              <svg-icon :name="icon" :color="color" />
            </div>
            <p>{{ sub }}</p>
          </a>
        </div>
      </div>
      <div class="shrink-0 flex-grow order-1 md:order-2">
        <img class="rounded-full w-full max-w-[130px] md:max-w-[200px]" :src="portraitSrc" alt="Dean" loading="lazy">
<!--        <img class="rounded-full w-full max-w-[130px] md:max-w-[200px]" src="@assets/icons/ai.svg" alt="Portrait" loading="lazy">-->
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { useSiteData, usePageData } from '@vuepress/client'
import portraitSrc from '../assets/image.png'

export default {
  name: "About",
  setup() {
    const page = usePageData()
    const site = useSiteData()
    return {
      socialLink: site.value.globalData.socialLink,
      page,
      portraitSrc,
    }
  },
}
</script>

<style scoped>

</style>
