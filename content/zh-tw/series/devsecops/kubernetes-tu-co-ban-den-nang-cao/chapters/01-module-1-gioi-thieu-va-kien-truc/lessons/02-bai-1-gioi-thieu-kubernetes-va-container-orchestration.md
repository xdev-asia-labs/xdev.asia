---
id: 019c9617-fc21-7282-8fc3-c1147ba22e10
title: 第 1 課：Kubernetes 與容器編排簡介
slug: bai-1-gioi-thieu-kubernetes-va-container-orchestration
description: 第一課介紹容器編排和 Kubernetes——這是理解 K8s 為何成為行業標準的基礎。了解歷史、基本架構以及與類似技術的比較。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 1
section_title: 模組 1：簡介和 Kubernetes 架構
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6562" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6562)"/>

  <!-- Decorations -->
  <g>
    <circle cx="680" cy="250" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="920" cy="210" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="90" x2="1100" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="120" x2="1050" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="961.650635094611,127.5 961.650635094611,152.5 940,165 918.349364905389,152.5 918.349364905389,127.5 940,115" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：Kubernetes 與容器簡介</tspan>
      <tspan x="60" dy="42">编曲</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 1：簡介與說明Kubernetes 架構</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="%F0%9F%8E%AF-m%E1%BB%A5c-ti%C3%AAu-b%C3%A0i-h%E1%BB%8Dc">🎯 課程目標____HTMLTAG_68__HTMLTAG_69___完成本課程後，您將：___HTMLTAG_70__HTMLTAG_71__HTMLTAG_72___✅ 了解容器編排是什麼以及為什麼需要它_</li>_____14_____________了解容器編排的功能與重要性Kubernetes___HTMLTAG_75__HTMLTAG_76___✅ 將 Kubernetes 與其他工具進行比較___HTMLTAG_77__HTMLTAG_78___✅ 了解 Kubernetes 的整體架構___HTMLTAG_79__HTMLTAG_80___生態系及其社群___HTMLTAG_81__HTMLTAG_82__HTMLTAG_83___第 1 部分：什麼是容器編排？ ___HTMLTAG_84__HTMLTAG_85___1.1。擴充時的容器問題___HTMLTAG_86__HTMLTAG_87___假設您有一個簡單的 Web 應用程式在 Docker 容器中執行：___HTMLTAG_88__CODEBLOCK_0__HTMLTAG_89__HTMLTAG_90____一切正常... <strong>問題 1：流量突然增加增加___HTMLTAG_95__HTMLTAG_96__HTMLTAG_97__HTMLTAG_98___1個容器不足以處理__HTMLTAG_99__HTMLTAG_100____需要擴充10、20、1001010個容器？ ___HTMLTAG_103__HTMLTAG_104__HTMLTAG_105___❌ <strong>問題 2：容器損壞崩潰___HTMLTAG_107__HTMLTAG_108__HTMLTAG_109__HTMLTAG_110___誰將偵測並重新啟動？ ___HTMLTAG_111__HTMLTAG_112___如何確保 99.9% 的正常運作時間？ ___HTMLTAG_113__HTMLTAG_114__HTMLTAG_115___❌ <strong>問題3：多台伺服器___HTMLTAG_117__HTMLTAG_118__HTMLTAG_119__HTMLTAG_120___伺服器如何將容器部署到多台伺服器？ ___HTMLTAG_121__HTMLTAG_122___如何有效管理資源（CPU、RAM）結果？ ___HTMLTAG_123__HTMLTAG_124__HTMLTAG_125___❌ <strong>問題 4：更新應用程式___HTMLTAG_127__HTMLTAG_128__HTMLTAG_129__HTMLTAG_130___如何滾動更新停機時間？ ___HTMLTAG_131__HTMLTAG_132___出現錯誤時回溯？ ___HTMLTAG_133__HTMLTAG_134__HTMLTAG_135___❌ <strong>問題 5：服務發現___HTMLTAG_137__HTMLTAG_138__HTMLTAG_139__HTMLTAG_140___具有動態 IP的容器___HTMLTAG_141__HTMLTAG_142___服務如何互相尋找和呼叫？ ___HTMLTAG_143__HTMLTAG_144__HTMLTAG_145___❌ <strong>問題6：設定管理___HTMLTAG_147__HTMLTAG_148__HTMLTAG_149__HTMLTAG_150___管理數百個容器的機密及設定____HTMLTAG_151__HTMLTAG_152___其他開發、登台、生產環境___HTMLTAG_1531HTMLTAG153115115115131300700070UUUUU​​T。容器編排是解決方案___HTMLTAG_156__HTMLTAG_157__HTMLTAG_158___容器編排</strong> 是容器部署、管理、擴充和網路的自動化。 ___HTMLTAG_160__HTMLTAG_161__HTMLTAG_162___Orchestrator 可以：___HTMLTAG_163__HTMLTAG_164__CODEBLOCK_1__HTMLTAG_165___1.3。現實生活中的範例____HTMLTAG_166__HTMLTAG_167__HTMLTAG_168___編排之前：___HTMLTAG_169__HTMLTAG_170__CO DEBLOCK_2__HTMLTAG_171__HTMLTAG_172___使用容器編排：___HTMLTAG_173__HTMLTAG_174__CODEBLOCK_3__H TMLTAG_175___自動編排：___HTMLTAG_176__HTMLTAG_177__HTMLTAG_178___將5個容器部署到不同的伺服器____HTMLTAG_179__HTMLTAG_180____監控並在崩潰時重新啟動___HTMLTAG_181HTMLTAG_1801181185____MLTAG_184____根據需要進行擴充___HTMLTAG_185__HTMLTAG_186__HTMLTAG_187__HTMLTAG_188___第 2 部分：為什麼需要 KUBERNETES？ ___HTMLTAG_189__HTMLTAG_190___2.1。背景___HTMLTAG_191__HTMLTAG_192__HTMLTAG_193___Google 的 Borg (2003-2015)___HTMLTAG_194__HTMLTAG_195__HTMLTAG_196__HTMLTAG_197___每週每天運行數十億個容器___HTMLTAG_198__HTMLTAG_199___Borg：要管理的內部系統容器___HTMLTAG_200__HTMLTAG_201___15年以上大型系統操作經驗___HTMLTAG_202__HTMLTAG_ 203__HTMLTAG_204__HTMLTAG_205___Kubernetes誕生（2014）____HTMLTAG_206__HTMLTAG_207__HTMLTAG_208__HTMLTAG_209___Google開源Kubernetes (K8s)____HTMLTAG_210__HTMLTAG_211___基於 Borg 和 Omega 的經驗____HTMLTAG_212__HTMLTAG_213___專為雲端原生應用程式設計___HTMLTAG_214__HTMLTAG_215___為CNCF（雲端原生運算基金會）捐款___HTMLTAG_216__HTMLTAG_217__HTMLTAG_218___2.2。為什麼 Kubernetes 會盛行？ ___HTMLTAG_219__HTMLTAG_220__HTMLTAG_221___1。經過生產驗證___HTMLTAG_222__HTMLTAG_223__CODEBLOCK_4__HTMLTAG_224__HTMLTAG_225___2。與供應商無關___HTMLTAG_226__HTMLTAG_227__HTMLTAG_228__HTMLTAG_229___在任何地方運行：本地、雲端、混合____HTMLTAG_230__HTMLTAG_231___不鎖定於 1 個雲端供應商____HTMLTAGML_232HTTAG_231___不鎖定於 1 個雲端提供者____HTMLTAGML_232HT AWS、GCP、Azure、裸機之間移植金屬____HTMLTAG_234__HTMLTAG_235__HTMLTAG_236__HTMLTAG_237___3。可擴充且彈性___HTMLTAG_238__HTMLTAG_239__HTMLTAG_240__HTMLTAG_241___外掛架構____HTMLTAG_242__HTMLTAG_243___自訂資源定義(CRD)</li>_ HTMLTAG_245___操作員模式___HTMLTAG_246__HTMLTAG_247___豐富生態系</li></ul><p><strong>4。大型社區____HTMLTAG_252__HTMLTAG_253__HTMLTAG_254__HTMLTAG_255___100,000+貢獻者___HTMLTAG_256__HTMLTAG_257___數百萬用戶___HTMLTAG_258__HTMLTAG_259___成熟的工具和文件___HTMLTAG_260__HTMLTAG_261___1264HTMLTAG_262__HTMLTAG_263HTMLTAG1_262__HTMLTAG1_26155。業界標準___HTMLTAG_266__HTMLTAG_267__CODEBLOCK_5__HTMLTAG_268___2.3。令人印象深刻的數字___HTMLTAG_269__HTMLTAG_270___📊 <strong>Kubernetes 採用率 (2024)___HTMLTAG_272__HTMLTAG_273__HTMLTAG_274__HTMLTAG_272__HTMLTAG_273__HTMLTAG_274__HTMLTAG_275196% K8s___HTMLTAG_276__HTMLTAG_277___560 萬開發人員使用K8s___HTMLTAG_278__HTMLTAG_279___前 2 個最受歡迎的平台 (Stack Overflow)___HTMLTAG_280__HTMLTAG_281___89% 的容器在 K88s上運行___HTMLTAG_282__HTMLTAG_283__HTMLTAG_284___🚀 <strong>使用案例___HTMLTAG_286__HTMLTAG_287__HTMLTAG_288__HTMLTAG_289___微服務架構___HTMLTAG_290__HTMLTAG_291___CI/CD管道___HTMLTAG_292__ 93___機器學習工作負載___HTMLTAG_294__HTMLTAG_295___大數據處理____HTMLTAG_296__HTMLTAG_297____混合/多雲部署____HTMLTAG_298__HTMLTAG_299__HTMLTAG_300__% 3 部分：Kubernetes 與其他工具的比較____HTMLTAG_302__HTMLTAG_303___3.1。 Kubernetes 與 Docker Swarm</h4>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>標準__HTMLTAG_310___
<th>Kubernetes</th>
<th>Docker 群</th>
</tr>
</thead>
<tbody>
<tr>
___HTMLTAG_319__HTMLTAG_320___複雜性___HTMLTAG_321__HTMLTAG_322___
<td>高，很多概念__HTMLTAG_324___
<td>簡單易學</td>
</tr>
<tr>
___HTMLTAG_329__HTMLTAG_330___設定___HTMLTAG_331__HTMLTAG_332___
<td>更複雜</td>
<td>非常簡單__HTMLTAG_336___
</tr>
<tr>
___HTMLTAG_339__HTMLTAG_340___可擴充性___HTMLTAG_341__HTMLTAG_342___
<td>非常好（1000+ 個節點）</td>
<td>良好（100+ 個節點）</td>
</tr>
<tr>
___HTMLTAG_349__HTMLTAG_350___生態系___HTMLTAG_351__HTMLTAG_352___
<td>非常寬</td>
<td>限制</td>
</tr>
<tr>
___HTMLTAG_359__HTMLTAG_360___自動縮放___HTMLTAG_361__HTMLTAG_362___
<td>本機 HPA、VPA</td>
<td>有限</td>
</tr>
<tr>
___HTMLTAG_369__HTMLTAG_370___負載平衡____HTMLTAG_371__HTMLTAG_372___
<td>高級（入口）</td>
<td>基本</td>
</tr>
<tr>
___HTMLTAG_379__HTMLTAG_380___社群___HTMLTAG_381__HTMLTAG_382___
<td>巨大</td>
<td>小得多</td>
</tr>
<tr>
___HTMLTAG_389__HTMLTAG_390___企業支援___HTMLTAG_391__HTMLTAG_392___
<td>所有雲端供應商</td>
<td>有限</td>
</tr>
<tr>
___HTMLTAG_399__HTMLTAG_400___學習曲線___HTMLTAG_401__HTMLTAG_402___
<td>陡峭</td>
<td>溫和</td>
</tr>
<tr>
___HTMLTAG_409__HTMLTAG_410___生產就緒___HTMLTAG_411__HTMLTAG_412___
<td>是</td>
<td>是（但很少使用）</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
___HTMLTAG_421__HTMLTAG_422___結論：</strong> Docker Swarm 較簡單，但 K8s 較強大且是業界標準。 ___HTMLTAG_424__HTMLTAG_425___3.2。 Kubernetes 與 Apache Mesos</h4>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>標準</th>
<th>Kubernetes</th>
<th>Apache Mesos</th>
</tr>
</thead>
<tbody>
<tr>
___HTMLTAG_441__HTMLTAG_442___焦點___HTMLTAG_443__HTMLTAG_444___
<td>容器編排__HTMLTAG_446___
<td>通用叢集管理器</td>
</tr>
<tr>
___HTMLTAG_451__HTMLTAG_452___架構___HTMLTAG_453__HTMLTAG_454___
<td>整體</td>
<td>兩級（Mesos + Marathon）</td>
</tr>
<tr>
___HTMLTAG_461__HTMLTAG_462___採用___HTMLTAG_463__HTMLTAG_464___
<td>非常高</td>
<td>平均</td>
</tr>
<tr>
___HTMLTAG_471__HTMLTAG_472___用例___HTMLTAG_473__HTMLTAG_474___
<td>容器，微服務</td>
<td>容器、大數據、分析</td>
</tr>
<tr>
___HTMLTAG_481__HTMLTAG_482___複雜性___HTMLTAG_483__HTMLTAG_484___
<td>高</td>
<td>非常高</td>
</tr>
<tr>
___HTMLTAG_491__HTMLTAG_492___容器支援___HTMLTAG_493__HTMLTAG_494___
<td>本機</td>
<td>透過 Marathon/DC/OS</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
___HTMLTAG_503__HTMLTAG_504___結論：</strong> Mesos 較靈活，但也較複雜。 K8s 專注於容器。 ___HTMLTAG_506__HTMLTAG_507___3.3。 Kubernetes 與 Nomad</h4>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>標準</th>
<th>Kubernetes</th>
<th>HashiCorp Nomad</th>
</tr>
</thead>
<tbody>
<tr>
___HTMLTAG_523__HTMLTAG_524___簡單性___HTMLTAG_525__HTMLTAG_526___
<td>複雜</td>
<td>簡單</td>
</tr>
<tr>
___HTMLTAG_533__HTMLTAG_534___工作負載類型___HTMLTAG_535__HTMLTAG_536___
<td>容器</td>
<td>容器、虛擬機器、二進位檔案</td>
</tr>
<tr>
___HTMLTAG_543__HTMLTAG_544___生態系___HTMLTAG_545__HTMLTAG_546___
<td>巨大</td>
<td>成長</td>
</tr>
<tr>
___HTMLTAG_553__HTMLTAG_554___多雲___HTMLTAG_555__HTMLTAG_556___
<td>優秀</td>
<td>優秀</td>
</tr>
<tr>
___HTMLTAG_563__HTMLTAG_564___採用___HTMLTAG_565__HTMLTAG_566___
<td>非常高</td>
<td>中</td>
</tr>
<tr>
___HTMLTAG_573__HTMLTAG_574___HashiCorp 整合___HTMLTAG_575__HTMLTAG_576___
<td>有限</td>
<td>本地（Vault、Consul）</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
___HTMLTAG_585__HTMLTAG_586___結論：</strong>Nomad 更簡單，工作負載更多樣化，但生態系統更小。 ___HTMLTAG_588__HTMLTAG_589___3.4。何時使用什麼？ ___HTMLTAG_590__HTMLTAG_591__HTMLTAG_592___在下列情況下選擇 Kubernetes：___HTMLTAG_593__HTMLTAG_594__HTMLTAG_595__HTMLTAG_596_____59____10____ML_DMLTAGMLG1需要大規模擴充（100+服務）___HTMLTAG_599__HTMLTAG_600___✅ 具有 DevOps 經驗的團隊___HTMLTAG_601__HTMLTAG_602___✅ 需要豐富的生態系統___HTMLTAG_603__HTMLTAG_604___✅多雲策略___HTMLTAG_605__HTMLTAG_606______HTMLTAG_607__HTMLTAG_608___選擇 Docker Swarm何時：___HTMLTAG_609__HTMLTAG_610__HTMLTAG_611__HTMLTAG_612__HTMLTAG_610__HTMLTAG_611__HTMLTAG_612___✅ 小團隊，_____1414U41______2____ML____ML____ML____需要快速部署___HTMLTAG_615__HTMLTAG_616___✅ 熟悉 Docker CLI___HTMLTAG_617__HTMLTAG_618___✅ 無需擴充太多大型___HTMLTAG_619__HTMLTAG_620__HTMLTAG_62111TAG_62121156212113點Nomad：___HTMLTAG_623__HTMLTAG_624__HTMLTAG_625__HTMLTAG_626___✅ 多樣化的工作負載（不只是容器）</li><li>✅ Used HashiCorp stack</li><li>✅ Need simplicity</li><li>✅ Edge computing_</li></ul><hr><h3 id="ph%E1%BA%A7n-4-ki%E1%BA%BFn-tr%C3%BAc-kubernetes-t%E1%BB%95ng-quan">PART 4: KUBERNETES ARCHITECTURE概述____HTMLTAG_637__HTMLTAG_638___4.1。 Kubernetes 叢集___HTMLTAG_639__CODEBLOCK_6__HTMLTAG_640___4.2。控制平面組件（主）___HTMLTAG_641__HTMLTAG_642__HTMLTAG_643___1。 API 伺服器_</strong> 🚪___HTMLTAG_645__HTMLTAG_646__HTMLTAG_647___Kubernetes 的「閘道」____HTMLTAG_648__HTMLTAG_649___處理所有 REST請求____HTMLTAG_650__HTMLTAG_651___身份驗證和身份驗證授權____HTMLTAG_652__HTMLTAG_653___驗證和處理請求____HTMLTAG_654__HTMLTAG_655___etcd前端____HTMLTAG_656__HTMLTAG_657__CODEBLOCK_7__HTMLTAG_658__HTMLTAG_659___2。等等。 truth</li><li>Highly available (HA設定）___HTMLTAG_670__HTMLTAG_671___只有 API 伺服器與 etcd 通訊____HTMLTAG_672__HTMLTAG_673__HTMLTAGML_674HTMLTAG_675___ML Scheduler</strong> 📅</p><ul><li>Decide which Node the Pod runs on</li><li>Consider: resources, conMLTAG_680___<li>Consider: resources, conMLU​​DMLTA_U453____MLTAD. not deploy (kubelet)做）</li></ul><pre><code>Flow:
1. User tạo Pod
2. Scheduler xem Pods chưa assign
3. Chọn Node tốt nhất
4. Update Pod spec với nodeName
</code></pre><p><strong>4。 Controller Manager</strong> 🎮</p><ul><li>Run multiple controllers_</li><li>_Monitor cluster state____MLTAffUU​​Um​​_FMLTAcluster state____MLTAcluster 414147_47_cluster state____​​MLTAcluster 410047_47_cluster state_cluster state_cluster。 desired state</li></ul><p><strong>Important controllers:</strong></p><ul></strong></p><ul>___HTMLTAG_703_MLTAG_7017070_2____4UUU​​TTAGMLTAGMLTAGMLTAGML health</li><li><strong>Replication Controller</strong>: Make sure Pods number is correct</li>___HTMLTAG_711HTHTMLTAG_7112____] Endpoints物件___HTMLTAG_714__HTMLTAG_715__HTMLTAG_716___服務帳戶控制器</strong>：建立預設服務帳戶____HTMLTAG_718__HTMLTAG_719__HTMLTAG_720___4.3。工作節點元件___HTMLTAG_721__HTMLTAG_722__HTMLTAG_723___1。 kubelet</strong> 👷_</p><ul><li>Agent runs on each node_</li><li>Get Pod spec. running run_</li><li>Report node/pod status to API Server</li><li>_Execute liveness/readiness probes_</li>___HTMLTAG_Execute liveness/readiness probes_</li>___HTMLTAG_7372_MLTAG_7372_MLTAG]GMLTAGMLTAG_7372_MLTAG kube-proxy_</strong> 🔀____HTMLTAG_741__HTMLTAG_742__HTMLTAG_743___每個節點的網路代理____HTMLTAG_744__HTMLTAG_745___維護網路規則____HTMLTAG_746HTMLTAG746HT服務抽象化___HTMLTAG_748__HTMLTAG_749___負載平衡 Services</li><li>Modes: iptables, IPVS, userspace_</li></ul>___HTMLTAG_userspace_</li></ul>___HTMLTAG_userspace_</li></ul>___HTMLTAG_754513____ML_7575____ 🐳___HTMLTAG_757__HTMLTAG_758__HTMLTAG_759___運行容器的軟體___HTMLTAG_760__HTMLTAG_761____實作 Kubernetes CRI（容器執行時間介面）___HTMLTAG_762__HTMLTAG_763___熱門：___MLTAG_7676476767676767767672：_____ （建議）___HTMLTAG_766__HTMLTAG_767___CRI-O___HTMLTAG_768__HTMLTAG_769___Docker（在 K8s 1.24+ 中已棄用）___HTMLTAG_770__HTMLTAG_771__HTMLTAG_770__HTMLTAG_771__HTMLTAG_7701247_771__HTMLTAG_7701247_771__HT附加元件（可選但重要）___HTMLTAG_775__HTMLTAG_776__HTMLTAG_777___DNS</strong> (CoreDNS)___HTMLTAG_779__HTMLTAG_780__HTMLTAG_781___服務發現___HTMLTAG_782__HTMLTAG_783___將服務名稱解析為IP___HTMLTAG_784__HTMLTAG_785___每個服務都有一個 DNS名稱___HTMLTAG_786__HTMLTAG_787__HTMLTAG_788__HTMLTAG_789___儀表板___HTMLTAG_790__HTMLTAG_791__HTMLTAG_792__HTMLTAG_793___叢集管理的 Web UI____HTMLTAG_794__HTMLTAG_795___可視化資源____HTMLTAG_796__HTMLTAG_797__HTMLTAG_798__HTMLTAG_799___監控_</strong>（伺服器)____HTMLTAG_801__HTMLTAG_802__HTMLTAG_803___收集資源指標___HTMLTAG_804__HTMLTAG_805___CPU、記憶體用法____HTMLTAG_806__HTMLTAG_807___啟用HPA（水平 Pod 自動縮放器）___HTMLTAG_808__HTMLTAG_809__HTMLTAG_810__HTMLTAG_811___日誌記錄___HTMLTAG_812__HTMLTAG_813__HTMLTAG_814__HTMLTAG_815%KMLTAG_815%、Flusearch Kibana)___HTMLTAG_816__HTMLTAG_817___集中式日誌記錄___HTMLTAG_818__HTMLTAG_819__HTMLTAG_820__HTMLTAG_821___第 5 部分：KUBERNETES 生態系統___HTMLTAG_8221.G_82211G_8221。 CNCF 景觀___HTMLTAG_824__HTMLTAG_825___Kubernetes 是 CNCF 生態系的一部份：___HTMLTAG_826__CODEBLOCK_9__HTMLTAG_827___5.2。核心工具____HTMLTAG_828__HTMLTAG_829__HTMLTAG_830___包管理___HTMLTAG_831__HTMLTAG_832__HTMLTAG_833__HT MLTAG_834__HTMLTAG_835___Helm</strong>：包管理器K8s___HTMLTAG_837__HTMLTAG_838__HTMLTAG_839__ _Kustomize</strong>：配置管理___HTMLTAG_841__HTMLTAG_842__HTMLTAG_843__HTMLTAG_844___GitOps_ __HTMLTAG_845__HTMLTAG_846__HTMLTAG_847__HTMLTAG_848__HTMLTAG_849___ArgoCD_</strong>：声明式 GitOps CD___HTMLTAG_851__HTMLTAG_852__HTMLTAG_853___Flux</strong>：GitOps 工具包____HTMLTAG_855__HTMLTAG_856__HTMLTAG_857__HTMLTAG_858___服务网格___HTMLTAG_859__HTMLTAG_860__HTMLTAG_861_ _HTMLTAG_862__HTMLTAG_863___Istio</strong>：完整的服務格____HTMLTAG_865__HTMLTAG_866__HTMLTAG_867____Li nkerd</strong>：簡單，輕量級___HTMLTAG_869__HTMLTAG_870__HTMLTAG_871__HTMLTAG_872___監控與可觀察性____HTMLTAG_8 73__HTMLTAG_874__HTMLTAG_875__HTMLTAG_876__HTMLTAG_877___Prometheus_</strong>：指標收集___HTMLTAG_879_ _HTMLTAG_880__HTMLTAG_881___Grafana</strong>：可视化___HTMLTAG_883__HTMLTAG_884__HTMLTAG_885___Jaeger </strong>：分布式跟踪___HTMLTAG_887__HTMLTAG_888__HTMLTAG_889__HTMLTAG_890___安全性___HTMLTAG_891__HTMLTAG _892__HTMLTAG_893__HTMLTAG_894__HTMLTAG_895___Falco_</strong>：运行时安全___HTMLTAG_897__HTMLTAG_898__H TMLTAG_899___OPA</strong>：策略引擎___HTMLTAG_901__HTMLTAG_902__HTMLTAG_903___Trivy</strong>：漏洞功能掃描器___HTMLTAG_905__HTMLTAG_906__HTMLTAG_907___5.3。託管 Kubernetes 服務___HTMLTAG_908__HTMLTAG_909__HTMLTAG_910___主要雲端供應商：___HTMLTAG_911__HTMLTAG_912__HTMLTAG_913__HTMLTAG_914__HTMLTAG_912__HTMLTAG_913__HTMLTAG_914__HTMLTAG_912__HTMLTAG_913__HTMLTAG_914__HTMLTAG_915____A___HTMLTA15___16 Kubernetes服務）___HTMLTAG_917__HTMLTAG_918__HTMLTAG_919___Google Cloud</strong>：GKE（Google Kubernetes Engine）___HTMLTAG_921__HTMLTAG_922__HTMLTAG_923___AzureHTMLTAMLA4737723073：U3707073：U37S：7073U7073：UUS：S___ML服務）___HTMLTAG_925__HTMLTAG_926__HTMLTAG_927___IBM雲端</strong>：IKS___HTMLTAG_929__HTMLTAG_930__HTMLTAG _931___DigitalOcean</strong>：DOKS___HTMLTAG_933__HTMLTAG_934__HTMLTAG_935___Linode</strong>： LKE___HTMLTAG_937__HTMLTAG_938__HTMLTAG_939__HTMLTAG_940___Loi有用：____HTMLTAG_941__HTMLTAG_942__HTMLTAG_943__HTMLTAG_944___控制平面管理___HTMLTAG_945__HTMLTAG_946___自動升級____HTMLTAG_947__HTMLTAG_948___與雲1 50___設定簡單____HTMLTAG_951__HTMLTAG_952___成本：僅付費工作節點____HTMLTAG_953__HTMLTAG_954__HTMLTAG_955__HTMLTAG_956___第6部分：KUBERNETES概念官員報告___HTMLTAGML_9571858582：KUBERNETES概念官員報告___HTMLTAGML_95718582______157%。宣告式與命令式___HTMLTAG_959__HTMLTAG_960__HTMLTAG_961___命令式（舊方式）：___HTMLTAG_962__HTMLTAG_963__CODEBLOCK_10______HTMLTAG_964__HTMLTAG_963__CODEBLOCK_10______HTMLTAG_964__HTMLTAG_963__ HTMLTAG_966__HTMLTAG_967__CODEBLOCK_11__CODEBLOCK_12__HTMLTAG_968__HTMLTAG_969___為什麼聲明式更好：___HTMLTAG_970__HTMLTAG_971__HTMLTAG_972__3MLG_972__3ML基礎設施即代碼___HTMLTAG_974__HTMLTAG_975___✅ 版本控制友好___HTMLTAG_976__HTMLTAG_977___✅ 冪等（多次運行=相同的結果）___HTMLTAG_978__HTMLTAG_97921✅％輕鬆回滾___HTMLTAG_982__HTMLTAG_983__HTMLTAG_984___6.2.所需狀態與目前狀態___HTMLTAG_985__CODEBLOCK_13__HTMLTAG_986__HTMLTAG_987___控制器持久：___HTMLTAMLTA1988 91___觀看目前狀態___HTMLTAG_992__HTMLTAG_993___與所需狀態進行比較___HTMLTAG_994__HTMLTAG_995___採取要匹配的操作___HTMLTAG_996__HTMLTAG_997______10011]___HTMLTAGMLTAG_996__HTMLTAG_997___1（協調循環）___HTMLTAG1098HTMLTAGMLTAG10.415____MLTAG標籤與選擇器___HTMLTAG_1001__HTMLTAG_1002__HTMLTAG_1003___標籤</strong> = 用於組織物件的鍵值對____HTMLTAG_1005__CODEBLOCK_14__HTMLTAG_1006_HTMLTA1001070___________用於查找的查詢物件____HTMLTAG_1009__CODEBLOCK_15__HTMLTAG_1010__HTMLTAG_1011___用例：___HTMLTAG_1012__HTMLTAG_1013__HTMLTAG_1014__HTMLTAG_1015___MLTAG_1014__HTMLTAG_1015___MLTAG_1014__HTMLTAG_1015___MLTAG_1014__ Pod___HTMLTAG_1016__HTMLTAG_1017___部署管理Pod____HTMLTAG_1018__HTMLTAG_1019___網路策略應用程式規則____HTML TAG_1020__HTMLTAG_1021___查詢與過濾___HTMLTAG_1022__HTMLTAG_1023__HTMLTAG_1024__HTMLTAG_1025___第7 部分：KUBERNETES 實際應用 -真實範例TE___HTMLTAG_1026__HTMLTAG_1027___場景：電子商務網站___HTMLTAG_1028__HTMLTAG_1029__HTMLTAG_1030___需求：___HTMLTAG_1031__HTMLTAG_1032__HTMLTAGact103331031032__HTMLTAG_10331037：2013732__HTMLTAG_10333132：___32__HT (3副本）___HTMLTAG_1035__HTMLTAG_1036___後端 API：Node.js（5 個副本，自動縮放）___HTMLTAG_1037__HTMLTAG_1038___資料庫：PostgreSQL（1 個實例，持久）___HTMLTAG_1039__HTMLTAG_1040___快取：Redis（3副本）___HTMLTAG_1041__HTMLTAG_1042___高可用性___HTMLTAG_1043__HTMLTAG_1044___零停機時間更新___HTMLTAG_1045_ _HTMLTAG_1046___基於流量的自動縮放____HTMLTAG_1047__HTMLTAG_1048__HTMLTAG_1049__HTMLTAG_1050___Kubernetes解決了這個問題：___HTMLTAG_1051__HTMLTAG_1052__CODEBLOCK_16__HTMLTAG_1053__HTMLTAG_1054___Kubernetes自動：___HTMLTAG_1055__HTMLTAG_1056HTuberMLTAG10574 前端部署 5 7174 467 + 1 個 DB___HTMLTAG_1059__HTMLTAG_1060___✅ 跨節點分發___HTMLTAG_1061__HTMLTAG_1062___✅ 重啟，如果crash___HTMLTAG_1063__HTMLTAG1064___✅ 當流20___HTMLTAG_1065__HTMLTAG_1066___✅ 負載平衡請求___HTMLTAG_1067__HTMLTAG_1068___✅ 資料庫的持久性資料___HTMLTAG_1069__HTMLTAG_1070___✅捲動更新否停機____HTMLTAG_1071__HTMLTAG_1072__HTMLTAG_1073__HTMLTAG_1074___💡重點____HTMLTAG_1075__HTMLTAG_1076___需要記住的重點：___HTMLTAG_1077__HTMLTAG_1078__HTMLTAG_1079__HTMLTAG_1080___容器編排解決了容器擴充和管理問題____HTMLTAG_1081__HTMLTAG _1082__HTMLTAG_1083___自動擴充、自我修復、負載平衡___HTMLTAG_1084__HTMLTAG_1085___服務發現、捲動更新___HTMLTAG_1086__HTMLTAG_1087_ _HTMLTAG_1088__HTMLTAG_1089__HTMLTAG_1090___Kubernetes是業界標準___HTMLTAG_1091__HTMLTAG_1092__HTMLTAG_1093___經過Google生產驗證___HTMLTAG_1094__HTMLTAG_1095___最大社區___HTMLTAG_1096__HTMLTAG_1097___供應商不可知的___HTMLTAG_1098 __HTMLTAG_1099__HTMLTAG_1100__HTMLTAG_1101__HTMLTAG_1102___K8s架構有2個主要部分：____HTMLTAG_1103__HTML TAG_1104__HTMLTAG_1105____控制平面：API伺服器、etcd、調度程式、控制器___HTMLTAG_1106__HTMLTAG_1107___工作節點：kubele t、kube-proxy、容器運行時___HTMLTAG_1108__HTMLTAG_1109__HTMLTAG_1110__HTMLTAG_1111__HTMLTAG_1112___聲明式>命令式___HTMLTAG_1113__HTMLTAG_1114__HTMLTAG_1115___宣告所需狀態___HTMLTAG_1116__HTMLTAG_1117___K8s自動協調___HTMLTAG_1118__HTMLTAG_1119__HTMLTAG_1120__HTMLTAG_1121__HTMLTAG_1122___Rich生態系____HTMLTAG_1123__HTMLTAG_1124__HTMLTAG_CF125_____景觀___HTMLTAG_1126__HTMLTAG_1127___滿足各種需求的工具___HTMLTAG_1128__HTMLTAG_1129___託管服務可用___HTMLTAG_1130__HTMLTAG_1131 __HTMLTAG_1132__HTMLTAG_1133__HTMLTAG_1134__HTMLTAG_1135__HTMLTAG_1136___🎯練習____HTMLTAG_1137__HTMLTAG_1138___練習1：研究與比較比較___HTMLTAG_1139__HTMLTAG_1140____學習並編寫以下之間的詳細比較（200-300字）：____HTMLTAG_1141__HTMLTAG_1142__HTMLTAG_1143____KKubernetes___1410011414UUU_UU_UU​​U55_DoC_UU​​D1414U​​D11414UU​​T_UUU​​T54114U​​D1514U​​D1TAG11414U​​D11414UU​​R Swarm___HTMLTAG_1146__HTMLTAG_1147___Amazon ECS___HTMLTAG_1148__HTMLTAG_1149__HTMLTAG_1150___重點：易用性、可擴充性、生態系統、成本。 ___HTMLTAG_1151__HTMLTAG_1152___練習2：心智圖___HTMLTAG_1153__HTMLTAG_1154___繪製心智圖（可以使用工具或手）關於：___HTMLTAG_1155__HTMLTAG_1156__HTMLTAG_1157___71架構___HTMLTAG_1158__HTMLTAG_1159___包含所有元件___HTMLTAG_1160__HTMLTAG_1161___描述每個組件的作用___HTMLTAG_1162__HTMLTAG_1163__HTMLTAG_1164___練習3：用例分析____HTMLTAG_1165__HTMLTAG_1166___選擇您正在處理的應用程式或知道：___HTMLTAG_1167__HTMLTAG_1168__HTMLTAG_1169___描述目前架構____HTMLTAG_ 1170__HTMLTAG_1171___如果部署到K8s則畫一張圖___HTMLTAG_1172__HTMLTAG_1173___好處和挑戰列表___HTMLTAG_1174__HTMLTAG_1175__HTMLTAG_1176___練習4：影片學習___HTMLTAG_1177__HTMLTAG_1178___觀看《100秒Kubernetes》和《15分鐘講解Kubernetes》影片___HTMLTAG_1179__HTMLTAG_1180__HTMLTAG_1 181___5個重點總結___HTMLTAG_1182__HTMLTAG_1183___記下不懂的地方以了解更多____HTMLTAG_1184__HTMLTAG_1185__HTMLTAG_1186__HTMLTAG_1187___📖參考資料____HTMLTAG_1188__HTMLTAG_1189___文章撰寫____HTMLTAG_1190__HTMLTAG_1191__HTMLTAG_1192__HTMLTAG_1193___Kubernetes 官方文檔-概念____HTMLTAG_1194__HTMLTAG_1195__HTMLTAG_1196__HTMLTAG_1197____CNCF Kubernetes概述___HTMLTAG_1198__HTMLTAG_1199__HTMLTAG_1200__HTMLTAG_1201___圖解兒童指南Kubernetes____HTMLTAG_1202__HTMLT AG_1203__HTMLTAG_1204__HTMLTAG_1205___視訊____HTMLTAG_1206__HTMLTAG_1207__HTMLTAG_1208__HTMLTAG_1209___5分鐘內的 Kubernetes___HTMLTAG_1210__HTMLTAG_1211__HTMLTAG_1212__HTMLTAG_1213___Kubernetes 中的解釋100秒____HTMLTAG_1214__HTMLTAG_1215__HTMLTAG_1216__HTMLTAG_1217___互動____HTMLTAG_1218__HTMLTAG_1219__HTMLTA G_1220__HTMLTAG_1221___玩Kubernetes____HTMLTAG_1222__HTMLTAG_1223__HTMLTAG_1224__HTMLTAG_1225___Katacoda Kubernetes 情境____HTMLTAG_1226__HTMLTAG_1227__HTMLTAG_1228__HTMLTAG_1229__HTMLTAG_1230____⏭️ POSTU____HTMLTAG_1231__HTMLTAG_1232HTMLTAGMLTA___12334 1231__HTMLTAG_1232HTMLTAGML Kubernetes___HTMLTAG_1234__HTMLTAG_1235__HTMLTAG_1236___在下一課中，我們將：___HTMLTAG_1237__HTMLTAG_1238__HTMLTAG_1239___安裝 Minikube並且kubectl___HTMLTAG_1240__HTMLTAG_1241___啟動第一個集群____HTMLTAG_1242__HTMLTAG_1243___探索 Kubernetes 儀表板____HTMLTAG_1244__HTMLTAG_124511指令____HTMLTAG_1246__HTMLTAG_1247___了解kubeconfig____HTMLTAG_1248__HTMLTAG_1249__HTMLTAG_1250__HTMLTAG_1251___標準設備：___HTMLTAG_1252__HTMLTAG_153152G1252__HT__412G 4GB RAM 的電腦____HTMLTAG_1256__HTMLTAG_1257___安裝Docker____HTMLTAG_1258__HTMLTAG_1259___安裝 VirtualBox 或 VMware___HTMLTAG_1260__HTMLTAG_1261___