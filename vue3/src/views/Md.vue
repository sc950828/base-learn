<template>
  <div class="md-wrapper">
    <!-- <mavon-editor v-model="value" /> -->
    <!-- <div v-html="mdTohtml"></div> -->

    <div v-html="htmlStr" class="markdown-body"></div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const MarkdownIt = require("markdown-it");

export default defineComponent({
  name: "",
  components: {},
  props: {},
  emits: {},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const md = new MarkdownIt({ html: true, linkify: true, typographer: true });

    const htmlStr =
      '<h2>课程介绍</h2>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df1c004b2aa248a1bc70b8526145690b~tplv-k3u1fbpfcp-watermark.image?" alt="section0-main.png"></p>\n<p>大家好，我是十三，很高兴为大家介绍这个 Vue3 + Spring Boot 为主要技术栈的前后端分离项目实战课程。</p>\n<p>Vue 作为当下最为流行的前端开发框架之一，使用它可以快速构建企业级的 Web 应用，更因其出色的性能表现，使得众多互联网公司和开发人员对它格外地青睐。<code>Vue3</code> 正式版本已上线半年有余，在 Vue 发布 3.0 之初，<code>Vue3</code> 的周边生态，还不算健全，如路由插件 <code>Vue-Router</code>、状态管理插件 <code>Vuex</code>、各大组件库的 <code>Vue3</code> 版本都还处以 <code>beta</code> 版本，甚至有些组件库都还没有更新，这让广大 <code>Vue</code> 使用者们很难去将自己的项目平稳的迁移至 <code>Vue3</code>。</p>\n<p>随着时间的推移，<code>Vue</code> 的周边插件开始升级为正式版，几大知名的 <code>UI</code> 组件库也都度过的阵痛期，纷纷推出了 <code>Vue3</code> 版本，如 <code>Element-Plus</code>、<code>Ant Design of Vue</code>、<code>Vant</code> 等等，都是业界比较知名的 <code>UI</code> 组件库，它们作为先驱，为 <code>Vue</code> 生态作出的贡献有目共睹，在此也希望大家能一起为 <code>Vue</code> 的生态添砖加瓦。</p>\n<p>我也一直在学习和分享 Vue3 的知识点，比如发布一些 Vue3 的教程：</p>\n<ul>\n<li><a href="https://juejin.cn/post/6874604408030789640" target="_blank" rel="nofollow noopener noreferrer">《Vue3 来了，我们该做些什么？》</a></li>\n<li><a href="https://juejin.cn/post/6882393804310052871" target="_blank" rel="nofollow noopener noreferrer">《Vue3实战系列：结合 Ant-Design-of-Vue 实践 Composition API》</a></li>\n<li><a href="https://juejin.cn/post/6884991023811215374" target="_blank" rel="nofollow noopener noreferrer">《Vue3 来了，Vue3 开源商城项目重构计划正式启动！》</a></li>\n<li><a href="https://juejin.cn/post/6887590229692121096" target="_blank" rel="nofollow noopener noreferrer">《Vue3实战系列：Vue3.0 + Vant3.0 搭建种子项目》</a></li>\n<li><a href="https://juejin.cn/post/6892783570016796679" target="_blank" rel="nofollow noopener noreferrer">《🎉🎉一个基于 Vue 3 + Vant 3 的开源商城项目🎉🎉》</a></li>\n<li><a href="https://juejin.cn/post/6895360073460416525" target="_blank" rel="nofollow noopener noreferrer">《Vue3教程：用 Vue3 开发小程序，这里有一份实践代码！》</a></li>\n<li><a href="https://juejin.cn/post/6903171037211557895" target="_blank" rel="nofollow noopener noreferrer">《Vue3教程：Vue 3.x 快在哪里？》</a></li>\n</ul>\n<p>同时也开源了几个 Vue3 的开源实战项目，开源地址如下：</p>\n<blockquote>\n<p>in GitHub : <a href="https://github.com/newbee-ltd" target="_blank" rel="nofollow noopener noreferrer">https://github.com/newbee-ltd</a></p>\n<p>in Gitee : <a href="https://gitee.com/newbee-ltd" target="_blank" rel="nofollow noopener noreferrer">https://gitee.com/newbee-ltd</a></p>\n</blockquote>\n<p>目前的反响还不错，得到了很多的正向反馈，这些免费的开源项目让大家有了一个不错的 Vue3 练手项目，顺利的完成了课程作业或者在简历里多了一份项目经验，因此也收到了很多感谢的话。</p>\n<p>为了进一步完善平台中前端课程的丰富度，我与掘金平台又合作推出了这本 Vue3 企业级项目实战的小册，帮助大家在掌握 Vue3 基础知识点及使用技巧的同时，通过实战项目来打通 Vue3 项目开发和上线链路上的技能点，真正做到学完即用。这不仅仅是一门教你如何使用 Vue3 的课程，而是会手把手带你用 Vue3 完成和上线一个大型的企业级项目。</p>\n<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6817470ea59d4f35af35b0eee18ef6e8~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p>\n<p>本小册中包含前端和后端知识，对于前端开发人员和后端开发人员都是一个很好的学习选择。</p>\n<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62aae980e39b45bbb5fbbb6b08c238ec~tplv-k3u1fbpfcp-watermark.image?" alt="section-main-three-1.png"></p>\n<p>当然，本小册配套的实战项目源码已经全部开源到 GitHub 上，开源地址是：</p>\n<blockquote>\n<p><a href="https://github.com/newbee-ltd/vue3-admin" target="_blank" rel="nofollow noopener noreferrer">https://github.com/newbee-ltd/vue3-admin</a></p>\n<p><a href="https://gitee.com/newbee-ltd/vue3-admin" target="_blank" rel="nofollow noopener noreferrer">https://gitee.com/newbee-ltd/vue3-admin</a></p>\n</blockquote>\n<p>所有代码都是开源免费的，如果想要 Vue3 或者 element plus 的练手项目，可以直接拿去学习和实践，并不是一定要付费来购买这本小册，大家理性选择即可。最后，希望这本小册能够帮助到你，为你的技术深度和薪水职位的提升提供充足的保障，<strong>通关 Vue3 企业级项目开发，升职加薪快人一步</strong>。</p>\n<h2>课程规划和特点</h2>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ef59d4a9a294663892d423b2b60cf9f~tplv-k3u1fbpfcp-zoom-1.image" alt="section1-main-2023"></p>\n<p>本小册分为三大部分，有 40 个章节，内容丰富，知识覆盖全面。</p>\n<ul>\n<li>\n<p>第一部分：<code>Vue3</code> 基础入门，带你了解 <code>Vue3</code> 的用法，学习基础之后才能更好的上手实战环节。</p>\n</li>\n<li>\n<p>第二部分：<code>Spring Boot</code> 项目搭建相关，<code>MyBatis</code> 操作数据库，接口文档 <code>Swagger</code> 的使用，以及实战前的一些准备工作。</p>\n</li>\n<li>\n<p>第三部分：服务端接口开发实战和后台管理系统 Vue3 开发实战</p>\n</li>\n</ul>\n<p>本小册提供线上接口，没有服务端开发意向的同学，可以通过线上接口，只学习本小册的前端部分的知识，跟着教程同样也能搭建出属于自己的 Vue3 大型企业级项目。</p>\n<h2>小册须知</h2>\n<p>小册比较侧重于项目实战，也具有很强的实操性，可以边读边实践。希望这本小册可以帮你答疑解惑，降低你的学习成本，让你既能够得到一份完整的实操项目，也能够帮你点满目前炽手可热的技能点，为你的技术深度和薪水职位的提升提供充足的保障。</p>\n<p>本小册共计 40 节，小册中实战项目的代码已经开源，开源地址为 <a href="https://github.com/newbee-ltd" target="_blank" rel="nofollow noopener noreferrer">https://github.com/newbee-ltd</a>，项目部署的相关步骤和注意事项大家可以参考小册的第 11 讲<a href="https://juejin.cn/book/6933939264455442444/section/6933954525510238223" target="_blank" rel="nofollow noopener noreferrer">《Vue3 实战项目启动篇》</a>和第 20 讲<a href="https://juejin.cn/book/6933939264455442444/section/6933954371356983299" target="_blank" rel="nofollow noopener noreferrer">《后端 API 项目启动和运行注意事项》</a>，前端项目和后端项目是两个不同的工程，大家需要注意基础环境的搭建。</p>\n<h4>你将收获</h4>\n<ul>\n<li>Vue3 框架的使用和实战；</li>\n<li>最新 Vue 项目构建工具 Vite 2.0 的使用及文件配置和项目搭建；</li>\n<li>前后端分离项目开发实践；</li>\n<li>Vue3 + Element Plus + Spring Boot 企业级商城项目开发实践；</li>\n<li>Echarts 5.0 图表插件的介绍和使用</li>\n<li>如果你在发愁毕业设计或是项目经验，这个项目也可以给你很多思路；</li>\n<li>Spring Boot 技术栈的基础使用和开发技巧；</li>\n<li>掌握 Spring Boot 项目实践；</li>\n<li>Vue-Router 路由原理的解析；</li>\n<li>项目从 0 到 1，最后完成一键线上部署；</li>\n<li>企业级项目开发和统筹的能力。</li>\n</ul>\n<h2>适宜人群</h2>\n<ul>\n<li>前端开发人员；</li>\n<li>想完成一个完整项目作为面试敲门砖的开发者；</li>\n<li>计算机/软件专业大学生；</li>\n<li>需要前后端分离项目实践的开发人员；</li>\n<li>想要成为全栈开发工程师的开发人员；</li>\n<li>需要 Spring Boot 完整项目学习的开发人员；</li>\n<li>需要 Vue3、element-plus 完整项目学习的开发人员；</li>\n<li>从事 Java Web 开发的技术人员；</li>\n<li>想要将自己的项目上线到互联网的开发人员。</li>\n</ul>\n<h4>小册特点</h4>\n<p><strong>1、基础知识巩固，循序渐进</strong></p>\n<p>项目代码量可比肩真实电商管理后台项目，不乏各类 <code>Vue3</code> 和 <code>ES6+</code> 的各种语法，所以这里需要小伙伴们有一定的基础，学完后能对知识有一个全面的巩固。</p>\n<p><strong>2、知识点完善，流程完整</strong></p>\n<p>包含前后端的开发知识讲解，从零到一，由简入深，讲解企业级项目的开发过程。</p>\n<p><strong>3、统筹项目的组件化开发</strong></p>\n<p>抽取通用的组件，不做不必要的重复劳动。工作中为一起开发的小伙伴提供方便的组件，是可以提高工作效率的。项目中会抽取各类组件，教你如何合并同类项，共有页面通过路由差异渲染。</p>\n<p><strong>4、良好的编程习惯</strong></p>\n<p>项目采用 <code>Eslint</code> 严格要求编程格式，严格要求自己敲出高质量的代码。以及遇到问题该如何解决，如何去 <code>Github</code> 给自己使用的插件提问题，而不是在微信群里东问西问，像只无头苍蝇。</p>\n<p><strong>5、学会部署项目到服务器</strong></p>\n<p>在结尾会涉及一些服务器的知识，如果有问题可以随时向我反馈，我会帮助大家从零搭建并且上线这个项目。</p>\n<h2>实战项目介绍</h2>\n<p>本小册的主要技术栈为 <code>Spring Boot + Vue3 + Element-Plus</code>。路由采用 <code>Vue-Router 4.x</code>，图标插件使用 <code>echart 5.0</code> 进行编写。二次封装弹窗组件方便组件调用。<code>Element-Plus</code> 为我们封装好了 <code>el-upload</code> 组件，只需填写上传接口，便可拿到回调的图片地址。</p>\n<p>列表采用 <code>el-table</code> 进行编写，并且采用 <code>el-pagination</code> 作为分页组件。通过 <code>globalProperties</code> 全局属性设置全局通用过滤器（<code>Vue3</code> 废除了全局过滤器），<code>UI</code> 组件的 <code>deep</code> 穿透重写等等知识点，让你学完之后能够立即用于项目实战。</p>\n<h4>布局</h4>\n<p>本项目采用的是左边栏固定，右边栏自适应的形式。</p>\n<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6817470ea59d4f35af35b0eee18ef6e8~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p>\n<p>对于大多数的管理后台项目，算是比较通用的布局形式。右边栏的顶部的底部被抽成公用组件，内容展示区域在中间部分。当然，布局这块，一通百通。你熟练了这个布局，其他的布局形式也将不在话下。我会在项目中为大家讲解，如何通过 <code>Flex</code> 实现自适应布局，这将会是你职场上的“杀手锏”。现如今，你出去面试前端岗位，对于布局的知识，基本上都会考到 <code>Flex</code> 这块，所以学好布局，也将是你拿到好 offer 的一份筹码。</p>\n<h4>公用组件</h4>\n<p>小册中会模拟真实的开发场景，比如遇到同样布局的页面，但是请求的数据不同，你该如何用较少的代码来处理这种情况。很多时候，为了图方便，你会选择再加一个 <code>.vue</code> 页面，然后拷贝之前的代码，将接口数据换一下。这样做未尝不可，但是程序员还有一个特质，就是要学会减少重复的工作，这样做不仅代码量增加，修改页面的时候，你也要改两个地方，那岂不是令人头大。</p>\n<p>小册中采用监听路由变化的方式，当浏览器地址栏的 <code>pathname</code> 变化时，动态地修改请求地址。从而达到切换地址栏时，视图也跟着变化的需求。这样打包完之后，静态资源相对上面那种方式，会小一些。代码量大的话，这将是一种优化手段。</p>\n<h4>新写法</h4>\n<p>全程我将使用 <code>Vue3</code> 的组合 <code>API</code> 写法。这里强调一点，并不是说 <code>Vue3</code> 的组合式 <code>API</code> 写法就比之前的 <code>Option</code> 写法好。而是本小册主要是想尽全力让大家学习，如何去使用 <code>Vue3</code>，尽量将涉及到的写法都实践一遍。至于后面你想用哪种写法，还是因项目而异，有时候 <code>Option</code> 写法，也非常的好用。就我目前写下来后，我发现复杂页面是比较适合组合式 <code>API</code>，简单的页面，可以继续使用之前的 <code>Option</code> 选项 <code>API</code>。这里只是个人看法，仅供参考。</p>\n<h4>项目预览</h4>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07207f6c918f457cac256aa8f5e35666~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/893fd922474c40bd9eb43961791938cd~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9739a8e4e1dd4d8bbce98264b6184b05~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p>\n<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d84b859dcb4a44fcb05563f1143945d0~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p>\n<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d1111db71ce417c86b8b875960a0152~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p>\n<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0093c4d6b8e4dcbbee08f3568b37f27~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p>\n<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ada2ec86f6a410397697225de80d12f~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p>\n<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c75670ff236472087849909152e8aef~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p>\n<h2>Vue 技术栈介绍</h2>\n<h4>搜索指数</h4>\n<p>上图是五年内，百度搜索引擎 PC + 移动端的全国关键词搜索指数折线图：</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab2e492398be48e1aa64fa46f73c0629~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<p>从图中可以看出，2017 年初开始，<code>Vue</code> 在国内的搜索指数开始超越 <code>React</code>，不可否认，当时 <code>Vue 2.0</code> 差不多成熟了，吸引了一波中小企业开始切换至 <code>Vue</code> 技术栈。包括我自己也在 <code>2016</code> 年的时候就开始使用 <code>Vue</code> 开发项目，不过当时没有工程化项目，而是直接通过 <code>script</code> 脚本的形式引入，在 <code>html</code> 页面里写的 <code>Vue</code> 语法。不过也为我解决了用 <code>jq</code> 拼接字符串的头疼问题。</p>\n<p>所以对于刚入行的同学来说，选择 <code>Vue</code> 作为自己的第一个前端框架，是比较明智的，先不说工作机会，网上的解决方案也能帮你解决很多你在学习过程中遇到的问题。待熟悉之后，再开始接触其他的框架，这样的学习曲线，比较平缓，不会那么陡峭。</p>\n<blockquote>\n<p>有趣小发现，图中出现下滑波动的地方，是属于各大节假日期间。可以看出，大家真的是生活工作分的很清楚，Work Life Balance。</p>\n</blockquote>\n<h4>周边热词</h4>\n<p>周边热词，指的是围绕 <code>Vue</code> 关键词，大家还搜索了其他什么技术，我们来看看下面这张百度给出的需求谱图：</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13ca0dcad6644747a936c80022b9e46a~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<p>从中心往周边发散，由强到弱。红框的位置我们可以看出，近几年 <code>Element UI</code> 的地位，就好比鲁迅和周树人，只要你用了 <code>Vue</code>，那必不可少会使用到 <code>Element UI</code>。本小册正是使用了 <code>Element UI</code> 的 <code>Vue3</code> 版本 <code>Element-plus</code>。</p>\n<p>无论哪个公司，都会有后台管理系统的需求，只要是用 <code>Vue</code> 作为主技术栈的公司，那必然会使用到 <code>Element UI</code>。所以，学习并掌握它，是刻不容缓的事情。</p>\n<p>目前 <code>Element-Plus</code> 在 <code>Github</code> 的星星数将近 9k。并且他们的团队对国内小伙伴提出的问题，也非常愿意跟进，从他们的 <a href="https://github.com/element-plus/element-plus/issues" target="_blank" rel="nofollow noopener noreferrer">issue</a> 中，可以看出。并且他们的更新速度也非常及时，能做到周更。所以选择它，作为入门的 UI 组件库，再合适不过。本小册会从 0 到 1，教你如何搭建一个能用于生成环境的后台管理系统。</p>\n<h4>地域分布</h4>\n<p>我们再来分析，各个城市在 <code>React</code> 和 <code>Vue</code> 技术栈之间的使用对比，如下图所示：</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48f718dfe6724d7dabd90050bccd3ad2~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>\n<p>不出所料，北上广深杭，这几大一线城市都在使用 <code>Vue</code>，并且呈现一边倒的趋势（绿色代表 Vue），而后起之秀“成都”，也在悄悄的追赶着，来势汹汹。大家可以对照着该分布图，看看自己所在的城市的技术栈分布。</p>\n<p>不得不说 <code>Vue</code> 对国内用户非常的友好，包括中文文档、生态社区、技术支持、翻译团队。包括作者本人尤雨溪也是美籍华裔，说着一口流利的中文。你可以在各大社区平台，找到它的身影，这对于使用 <code>Vue</code> 的我们，带来了不少亲切感，作者就在身边。</p>\n<h4>就业形式</h4>\n<p>就目前看来，<code>Vue</code> 的需求量在国内还是很大的。就算你是服务端人员，也有些小公司需要你懂得 <code>Vue</code> 的开发，因为小公司必须控制用人成本，最好是一个人能作为全栈使。无论你是否承认，全栈开发肯定是比只有某端能力的吃香。</p>\n<p>近些年，远程开发的形式开始频频出现，特别是这次疫情期间，远程开发一度成为主要的工作形式。如若你想找一份远程开发，不用坐班，在家便可工作赚钱，省去了很多通勤的时间，以及工作的自由度，会让你幸福感倍增。但是，在此之前有一点要提醒大家，目前远程开发大多都是希望员工能有全栈的能力，这样能大大的减少沟通成本，提高工作的效率，所以你如果是服务端人员，建议通过这门册子，把 <code>Vue</code> 的知识学了，后续很多事情，就不用在麻烦别人，凡事都能亲力亲为。</p>\n<p>来吧，朋友们，我们一起踏上这段 Vue3 的学习和实战之路。</p>\n<blockquote>\n<p>文档最近更新时间：2023 年 2 月 7 日。</p>\n</blockquote>';

    const value = ref(
      "## 课程介绍\n\n![section0-main.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df1c004b2aa248a1bc70b8526145690b~tplv-k3u1fbpfcp-watermark.image?)\n\n大家好，我是十三，很高兴为大家介绍这个 Vue3 + Spring Boot 为主要技术栈的前后端分离项目实战课程。\n\nVue 作为当下最为流行的前端开发框架之一，使用它可以快速构建企业级的 Web 应用，更因其出色的性能表现，使得众多互联网公司和开发人员对它格外地青睐。`Vue3` 正式版本已上线半年有余，在 Vue 发布 3.0 之初，`Vue3` 的周边生态，还不算健全，如路由插件 `Vue-Router`、状态管理插件 `Vuex`、各大组件库的 `Vue3` 版本都还处以 `beta` 版本，甚至有些组件库都还没有更新，这让广大 `Vue` 使用者们很难去将自己的项目平稳的迁移至 `Vue3`。\n\n随着时间的推移，`Vue` 的周边插件开始升级为正式版，几大知名的 `UI` 组件库也都度过的阵痛期，纷纷推出了 `Vue3` 版本，如 `Element-Plus`、`Ant Design of Vue`、`Vant` 等等，都是业界比较知名的 `UI` 组件库，它们作为先驱，为 `Vue` 生态作出的贡献有目共睹，在此也希望大家能一起为 `Vue` 的生态添砖加瓦。\n\n我也一直在学习和分享 Vue3 的知识点，比如发布一些 Vue3 的教程：\n\n- [《Vue3 来了，我们该做些什么？》](https://juejin.cn/post/6874604408030789640)\n- [《Vue3实战系列：结合 Ant-Design-of-Vue 实践 Composition API》](https://juejin.cn/post/6882393804310052871)\n- [《Vue3 来了，Vue3 开源商城项目重构计划正式启动！》](https://juejin.cn/post/6884991023811215374)\n- [《Vue3实战系列：Vue3.0 + Vant3.0 搭建种子项目》](https://juejin.cn/post/6887590229692121096)\n- [《🎉🎉一个基于 Vue 3 + Vant 3 的开源商城项目🎉🎉》](https://juejin.cn/post/6892783570016796679)\n- [《Vue3教程：用 Vue3 开发小程序，这里有一份实践代码！》](https://juejin.cn/post/6895360073460416525)\n- [《Vue3教程：Vue 3.x 快在哪里？》](https://juejin.cn/post/6903171037211557895)\n\n同时也开源了几个 Vue3 的开源实战项目，开源地址如下：\n\n> in GitHub : https://github.com/newbee-ltd\n>\n> in Gitee : https://gitee.com/newbee-ltd\n\n目前的反响还不错，得到了很多的正向反馈，这些免费的开源项目让大家有了一个不错的 Vue3 练手项目，顺利的完成了课程作业或者在简历里多了一份项目经验，因此也收到了很多感谢的话。\n\n为了进一步完善平台中前端课程的丰富度，我与掘金平台又合作推出了这本 Vue3 企业级项目实战的小册，帮助大家在掌握 Vue3 基础知识点及使用技巧的同时，通过实战项目来打通 Vue3 项目开发和上线链路上的技能点，真正做到学完即用。这不仅仅是一门教你如何使用 Vue3 的课程，而是会手把手带你用 Vue3 完成和上线一个大型的企业级项目。\n\n![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6817470ea59d4f35af35b0eee18ef6e8~tplv-k3u1fbpfcp-watermark.image)\n\n本小册中包含前端和后端知识，对于前端开发人员和后端开发人员都是一个很好的学习选择。\n\n![section-main-three-1.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62aae980e39b45bbb5fbbb6b08c238ec~tplv-k3u1fbpfcp-watermark.image?)\n\n当然，本小册配套的实战项目源码已经全部开源到 GitHub 上，开源地址是：\n\n> https://github.com/newbee-ltd/vue3-admin\n>\n> https://gitee.com/newbee-ltd/vue3-admin\n\n所有代码都是开源免费的，如果想要 Vue3 或者 element plus 的练手项目，可以直接拿去学习和实践，并不是一定要付费来购买这本小册，大家理性选择即可。最后，希望这本小册能够帮助到你，为你的技术深度和薪水职位的提升提供充足的保障，**通关 Vue3 企业级项目开发，升职加薪快人一步**。\n\n## 课程规划和特点\n\n![section1-main-2023](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ef59d4a9a294663892d423b2b60cf9f~tplv-k3u1fbpfcp-zoom-1.image)\n\n本小册分为三大部分，有 40 个章节，内容丰富，知识覆盖全面。\n\n- 第一部分：`Vue3` 基础入门，带你了解 `Vue3` 的用法，学习基础之后才能更好的上手实战环节。\n\n- 第二部分：`Spring Boot` 项目搭建相关，`MyBatis` 操作数据库，接口文档 `Swagger` 的使用，以及实战前的一些准备工作。\n\n- 第三部分：服务端接口开发实战和后台管理系统 Vue3 开发实战\n\n本小册提供线上接口，没有服务端开发意向的同学，可以通过线上接口，只学习本小册的前端部分的知识，跟着教程同样也能搭建出属于自己的 Vue3 大型企业级项目。\n\n## 小册须知\n\n小册比较侧重于项目实战，也具有很强的实操性，可以边读边实践。希望这本小册可以帮你答疑解惑，降低你的学习成本，让你既能够得到一份完整的实操项目，也能够帮你点满目前炽手可热的技能点，为你的技术深度和薪水职位的提升提供充足的保障。\n\n本小册共计 40 节，小册中实战项目的代码已经开源，开源地址为 [https://github.com/newbee-ltd](https://github.com/newbee-ltd)，项目部署的相关步骤和注意事项大家可以参考小册的第 11 讲[《Vue3 实战项目启动篇》](https://juejin.cn/book/6933939264455442444/section/6933954525510238223)和第 20 讲[《后端 API 项目启动和运行注意事项》](https://juejin.cn/book/6933939264455442444/section/6933954371356983299)，前端项目和后端项目是两个不同的工程，大家需要注意基础环境的搭建。\n\n#### 你将收获\n\n- Vue3 框架的使用和实战；\n- 最新 Vue 项目构建工具 Vite 2.0 的使用及文件配置和项目搭建；\n- 前后端分离项目开发实践；\n- Vue3 + Element Plus + Spring Boot 企业级商城项目开发实践；\n- Echarts 5.0 图表插件的介绍和使用\n- 如果你在发愁毕业设计或是项目经验，这个项目也可以给你很多思路；\n- Spring Boot 技术栈的基础使用和开发技巧；\n- 掌握 Spring Boot 项目实践；\n- Vue-Router 路由原理的解析；\n- 项目从 0 到 1，最后完成一键线上部署；\n- 企业级项目开发和统筹的能力。\n\n## 适宜人群\n\n- 前端开发人员；\n- 想完成一个完整项目作为面试敲门砖的开发者；\n- 计算机/软件专业大学生；\n- 需要前后端分离项目实践的开发人员；\n- 想要成为全栈开发工程师的开发人员；\n- 需要 Spring Boot 完整项目学习的开发人员；\n- 需要 Vue3、element-plus 完整项目学习的开发人员；\n- 从事 Java Web 开发的技术人员；\n- 想要将自己的项目上线到互联网的开发人员。\n\n#### 小册特点\n\n**1、基础知识巩固，循序渐进**\n\n项目代码量可比肩真实电商管理后台项目，不乏各类 `Vue3` 和 `ES6+` 的各种语法，所以这里需要小伙伴们有一定的基础，学完后能对知识有一个全面的巩固。\n\n**2、知识点完善，流程完整**\n\n包含前后端的开发知识讲解，从零到一，由简入深，讲解企业级项目的开发过程。\n\n**3、统筹项目的组件化开发**\n\n抽取通用的组件，不做不必要的重复劳动。工作中为一起开发的小伙伴提供方便的组件，是可以提高工作效率的。项目中会抽取各类组件，教你如何合并同类项，共有页面通过路由差异渲染。\n\n**4、良好的编程习惯**\n\n项目采用 `Eslint` 严格要求编程格式，严格要求自己敲出高质量的代码。以及遇到问题该如何解决，如何去 `Github` 给自己使用的插件提问题，而不是在微信群里东问西问，像只无头苍蝇。\n\n**5、学会部署项目到服务器**\n\n在结尾会涉及一些服务器的知识，如果有问题可以随时向我反馈，我会帮助大家从零搭建并且上线这个项目。\n\n## 实战项目介绍\n\n本小册的主要技术栈为 `Spring Boot + Vue3 + Element-Plus`。路由采用 `Vue-Router 4.x`，图标插件使用 `echart 5.0` 进行编写。二次封装弹窗组件方便组件调用。`Element-Plus` 为我们封装好了 `el-upload` 组件，只需填写上传接口，便可拿到回调的图片地址。\n\n列表采用 `el-table` 进行编写，并且采用 `el-pagination` 作为分页组件。通过 `globalProperties` 全局属性设置全局通用过滤器（`Vue3` 废除了全局过滤器），`UI` 组件的 `deep` 穿透重写等等知识点，让你学完之后能够立即用于项目实战。\n\n#### 布局\n\n本项目采用的是左边栏固定，右边栏自适应的形式。\n\n![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6817470ea59d4f35af35b0eee18ef6e8~tplv-k3u1fbpfcp-watermark.image)\n\n对于大多数的管理后台项目，算是比较通用的布局形式。右边栏的顶部的底部被抽成公用组件，内容展示区域在中间部分。当然，布局这块，一通百通。你熟练了这个布局，其他的布局形式也将不在话下。我会在项目中为大家讲解，如何通过 `Flex` 实现自适应布局，这将会是你职场上的“杀手锏”。现如今，你出去面试前端岗位，对于布局的知识，基本上都会考到 `Flex` 这块，所以学好布局，也将是你拿到好 offer 的一份筹码。\n\n#### 公用组件\n\n小册中会模拟真实的开发场景，比如遇到同样布局的页面，但是请求的数据不同，你该如何用较少的代码来处理这种情况。很多时候，为了图方便，你会选择再加一个 `.vue` 页面，然后拷贝之前的代码，将接口数据换一下。这样做未尝不可，但是程序员还有一个特质，就是要学会减少重复的工作，这样做不仅代码量增加，修改页面的时候，你也要改两个地方，那岂不是令人头大。\n\n小册中采用监听路由变化的方式，当浏览器地址栏的 `pathname` 变化时，动态地修改请求地址。从而达到切换地址栏时，视图也跟着变化的需求。这样打包完之后，静态资源相对上面那种方式，会小一些。代码量大的话，这将是一种优化手段。\n\n#### 新写法\n\n全程我将使用 `Vue3` 的组合 `API` 写法。这里强调一点，并不是说 `Vue3` 的组合式 `API` 写法就比之前的 `Option` 写法好。而是本小册主要是想尽全力让大家学习，如何去使用 `Vue3`，尽量将涉及到的写法都实践一遍。至于后面你想用哪种写法，还是因项目而异，有时候 `Option` 写法，也非常的好用。就我目前写下来后，我发现复杂页面是比较适合组合式 `API`，简单的页面，可以继续使用之前的 `Option` 选项 `API`。这里只是个人看法，仅供参考。\n\n#### 项目预览\n\n![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07207f6c918f457cac256aa8f5e35666~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/893fd922474c40bd9eb43961791938cd~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9739a8e4e1dd4d8bbce98264b6184b05~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d84b859dcb4a44fcb05563f1143945d0~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d1111db71ce417c86b8b875960a0152~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0093c4d6b8e4dcbbee08f3568b37f27~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ada2ec86f6a410397697225de80d12f~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c75670ff236472087849909152e8aef~tplv-k3u1fbpfcp-watermark.image)\n\n## Vue 技术栈介绍\n\n#### 搜索指数\n\n上图是五年内，百度搜索引擎 PC + 移动端的全国关键词搜索指数折线图：\n\n![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab2e492398be48e1aa64fa46f73c0629~tplv-k3u1fbpfcp-zoom-1.image)\n\n从图中可以看出，2017 年初开始，`Vue` 在国内的搜索指数开始超越 `React`，不可否认，当时 `Vue 2.0` 差不多成熟了，吸引了一波中小企业开始切换至 `Vue` 技术栈。包括我自己也在 `2016` 年的时候就开始使用 `Vue` 开发项目，不过当时没有工程化项目，而是直接通过 `script` 脚本的形式引入，在 `html` 页面里写的 `Vue` 语法。不过也为我解决了用 `jq` 拼接字符串的头疼问题。\n\n所以对于刚入行的同学来说，选择 `Vue` 作为自己的第一个前端框架，是比较明智的，先不说工作机会，网上的解决方案也能帮你解决很多你在学习过程中遇到的问题。待熟悉之后，再开始接触其他的框架，这样的学习曲线，比较平缓，不会那么陡峭。\n\n> 有趣小发现，图中出现下滑波动的地方，是属于各大节假日期间。可以看出，大家真的是生活工作分的很清楚，Work Life Balance。\n\n#### 周边热词\n\n周边热词，指的是围绕 `Vue` 关键词，大家还搜索了其他什么技术，我们来看看下面这张百度给出的需求谱图：\n\n![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13ca0dcad6644747a936c80022b9e46a~tplv-k3u1fbpfcp-zoom-1.image)\n\n从中心往周边发散，由强到弱。红框的位置我们可以看出，近几年 `Element UI` 的地位，就好比鲁迅和周树人，只要你用了 `Vue`，那必不可少会使用到 `Element UI`。本小册正是使用了 `Element UI` 的 `Vue3` 版本 `Element-plus`。\n\n无论哪个公司，都会有后台管理系统的需求，只要是用 `Vue` 作为主技术栈的公司，那必然会使用到 `Element UI`。所以，学习并掌握它，是刻不容缓的事情。\n\n目前 `Element-Plus` 在 `Github` 的星星数将近 9k。并且他们的团队对国内小伙伴提出的问题，也非常愿意跟进，从他们的 [issue](https://github.com/element-plus/element-plus/issues) 中，可以看出。并且他们的更新速度也非常及时，能做到周更。所以选择它，作为入门的 UI 组件库，再合适不过。本小册会从 0 到 1，教你如何搭建一个能用于生成环境的后台管理系统。\n\n#### 地域分布\n\n我们再来分析，各个城市在 `React` 和 `Vue` 技术栈之间的使用对比，如下图所示：\n\n![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48f718dfe6724d7dabd90050bccd3ad2~tplv-k3u1fbpfcp-zoom-1.image)\n\n不出所料，北上广深杭，这几大一线城市都在使用 `Vue`，并且呈现一边倒的趋势（绿色代表 Vue），而后起之秀“成都”，也在悄悄的追赶着，来势汹汹。大家可以对照着该分布图，看看自己所在的城市的技术栈分布。\n\n不得不说 `Vue` 对国内用户非常的友好，包括中文文档、生态社区、技术支持、翻译团队。包括作者本人尤雨溪也是美籍华裔，说着一口流利的中文。你可以在各大社区平台，找到它的身影，这对于使用 `Vue` 的我们，带来了不少亲切感，作者就在身边。\n\n#### 就业形式\n\n就目前看来，`Vue` 的需求量在国内还是很大的。就算你是服务端人员，也有些小公司需要你懂得 `Vue` 的开发，因为小公司必须控制用人成本，最好是一个人能作为全栈使。无论你是否承认，全栈开发肯定是比只有某端能力的吃香。\n\n近些年，远程开发的形式开始频频出现，特别是这次疫情期间，远程开发一度成为主要的工作形式。如若你想找一份远程开发，不用坐班，在家便可工作赚钱，省去了很多通勤的时间，以及工作的自由度，会让你幸福感倍增。但是，在此之前有一点要提醒大家，目前远程开发大多都是希望员工能有全栈的能力，这样能大大的减少沟通成本，提高工作的效率，所以你如果是服务端人员，建议通过这门册子，把 `Vue` 的知识学了，后续很多事情，就不用在麻烦别人，凡事都能亲力亲为。\n\n来吧，朋友们，我们一起踏上这段 Vue3 的学习和实战之路。\n\n> 文档最近更新时间：2023 年 2 月 7 日。"
    );

    const mdTohtml = ref("");

    onMounted(() => {
      mdTohtml.value = md.render(
        "## 课程介绍\n\n![section0-main.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df1c004b2aa248a1bc70b8526145690b~tplv-k3u1fbpfcp-watermark.image?)\n\n大家好，我是十三，很高兴为大家介绍这个 Vue3 + Spring Boot 为主要技术栈的前后端分离项目实战课程。\n\nVue 作为当下最为流行的前端开发框架之一，使用它可以快速构建企业级的 Web 应用，更因其出色的性能表现，使得众多互联网公司和开发人员对它格外地青睐。`Vue3` 正式版本已上线半年有余，在 Vue 发布 3.0 之初，`Vue3` 的周边生态，还不算健全，如路由插件 `Vue-Router`、状态管理插件 `Vuex`、各大组件库的 `Vue3` 版本都还处以 `beta` 版本，甚至有些组件库都还没有更新，这让广大 `Vue` 使用者们很难去将自己的项目平稳的迁移至 `Vue3`。\n\n随着时间的推移，`Vue` 的周边插件开始升级为正式版，几大知名的 `UI` 组件库也都度过的阵痛期，纷纷推出了 `Vue3` 版本，如 `Element-Plus`、`Ant Design of Vue`、`Vant` 等等，都是业界比较知名的 `UI` 组件库，它们作为先驱，为 `Vue` 生态作出的贡献有目共睹，在此也希望大家能一起为 `Vue` 的生态添砖加瓦。\n\n我也一直在学习和分享 Vue3 的知识点，比如发布一些 Vue3 的教程：\n\n- [《Vue3 来了，我们该做些什么？》](https://juejin.cn/post/6874604408030789640)\n- [《Vue3实战系列：结合 Ant-Design-of-Vue 实践 Composition API》](https://juejin.cn/post/6882393804310052871)\n- [《Vue3 来了，Vue3 开源商城项目重构计划正式启动！》](https://juejin.cn/post/6884991023811215374)\n- [《Vue3实战系列：Vue3.0 + Vant3.0 搭建种子项目》](https://juejin.cn/post/6887590229692121096)\n- [《🎉🎉一个基于 Vue 3 + Vant 3 的开源商城项目🎉🎉》](https://juejin.cn/post/6892783570016796679)\n- [《Vue3教程：用 Vue3 开发小程序，这里有一份实践代码！》](https://juejin.cn/post/6895360073460416525)\n- [《Vue3教程：Vue 3.x 快在哪里？》](https://juejin.cn/post/6903171037211557895)\n\n同时也开源了几个 Vue3 的开源实战项目，开源地址如下：\n\n> in GitHub : https://github.com/newbee-ltd\n>\n> in Gitee : https://gitee.com/newbee-ltd\n\n目前的反响还不错，得到了很多的正向反馈，这些免费的开源项目让大家有了一个不错的 Vue3 练手项目，顺利的完成了课程作业或者在简历里多了一份项目经验，因此也收到了很多感谢的话。\n\n为了进一步完善平台中前端课程的丰富度，我与掘金平台又合作推出了这本 Vue3 企业级项目实战的小册，帮助大家在掌握 Vue3 基础知识点及使用技巧的同时，通过实战项目来打通 Vue3 项目开发和上线链路上的技能点，真正做到学完即用。这不仅仅是一门教你如何使用 Vue3 的课程，而是会手把手带你用 Vue3 完成和上线一个大型的企业级项目。\n\n![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6817470ea59d4f35af35b0eee18ef6e8~tplv-k3u1fbpfcp-watermark.image)\n\n本小册中包含前端和后端知识，对于前端开发人员和后端开发人员都是一个很好的学习选择。\n\n![section-main-three-1.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62aae980e39b45bbb5fbbb6b08c238ec~tplv-k3u1fbpfcp-watermark.image?)\n\n当然，本小册配套的实战项目源码已经全部开源到 GitHub 上，开源地址是：\n\n> https://github.com/newbee-ltd/vue3-admin\n>\n> https://gitee.com/newbee-ltd/vue3-admin\n\n所有代码都是开源免费的，如果想要 Vue3 或者 element plus 的练手项目，可以直接拿去学习和实践，并不是一定要付费来购买这本小册，大家理性选择即可。最后，希望这本小册能够帮助到你，为你的技术深度和薪水职位的提升提供充足的保障，**通关 Vue3 企业级项目开发，升职加薪快人一步**。\n\n## 课程规划和特点\n\n![section1-main-2023](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2ef59d4a9a294663892d423b2b60cf9f~tplv-k3u1fbpfcp-zoom-1.image)\n\n本小册分为三大部分，有 40 个章节，内容丰富，知识覆盖全面。\n\n- 第一部分：`Vue3` 基础入门，带你了解 `Vue3` 的用法，学习基础之后才能更好的上手实战环节。\n\n- 第二部分：`Spring Boot` 项目搭建相关，`MyBatis` 操作数据库，接口文档 `Swagger` 的使用，以及实战前的一些准备工作。\n\n- 第三部分：服务端接口开发实战和后台管理系统 Vue3 开发实战\n\n本小册提供线上接口，没有服务端开发意向的同学，可以通过线上接口，只学习本小册的前端部分的知识，跟着教程同样也能搭建出属于自己的 Vue3 大型企业级项目。\n\n## 小册须知\n\n小册比较侧重于项目实战，也具有很强的实操性，可以边读边实践。希望这本小册可以帮你答疑解惑，降低你的学习成本，让你既能够得到一份完整的实操项目，也能够帮你点满目前炽手可热的技能点，为你的技术深度和薪水职位的提升提供充足的保障。\n\n本小册共计 40 节，小册中实战项目的代码已经开源，开源地址为 [https://github.com/newbee-ltd](https://github.com/newbee-ltd)，项目部署的相关步骤和注意事项大家可以参考小册的第 11 讲[《Vue3 实战项目启动篇》](https://juejin.cn/book/6933939264455442444/section/6933954525510238223)和第 20 讲[《后端 API 项目启动和运行注意事项》](https://juejin.cn/book/6933939264455442444/section/6933954371356983299)，前端项目和后端项目是两个不同的工程，大家需要注意基础环境的搭建。\n\n#### 你将收获\n\n- Vue3 框架的使用和实战；\n- 最新 Vue 项目构建工具 Vite 2.0 的使用及文件配置和项目搭建；\n- 前后端分离项目开发实践；\n- Vue3 + Element Plus + Spring Boot 企业级商城项目开发实践；\n- Echarts 5.0 图表插件的介绍和使用\n- 如果你在发愁毕业设计或是项目经验，这个项目也可以给你很多思路；\n- Spring Boot 技术栈的基础使用和开发技巧；\n- 掌握 Spring Boot 项目实践；\n- Vue-Router 路由原理的解析；\n- 项目从 0 到 1，最后完成一键线上部署；\n- 企业级项目开发和统筹的能力。\n\n## 适宜人群\n\n- 前端开发人员；\n- 想完成一个完整项目作为面试敲门砖的开发者；\n- 计算机/软件专业大学生；\n- 需要前后端分离项目实践的开发人员；\n- 想要成为全栈开发工程师的开发人员；\n- 需要 Spring Boot 完整项目学习的开发人员；\n- 需要 Vue3、element-plus 完整项目学习的开发人员；\n- 从事 Java Web 开发的技术人员；\n- 想要将自己的项目上线到互联网的开发人员。\n\n#### 小册特点\n\n**1、基础知识巩固，循序渐进**\n\n项目代码量可比肩真实电商管理后台项目，不乏各类 `Vue3` 和 `ES6+` 的各种语法，所以这里需要小伙伴们有一定的基础，学完后能对知识有一个全面的巩固。\n\n**2、知识点完善，流程完整**\n\n包含前后端的开发知识讲解，从零到一，由简入深，讲解企业级项目的开发过程。\n\n**3、统筹项目的组件化开发**\n\n抽取通用的组件，不做不必要的重复劳动。工作中为一起开发的小伙伴提供方便的组件，是可以提高工作效率的。项目中会抽取各类组件，教你如何合并同类项，共有页面通过路由差异渲染。\n\n**4、良好的编程习惯**\n\n项目采用 `Eslint` 严格要求编程格式，严格要求自己敲出高质量的代码。以及遇到问题该如何解决，如何去 `Github` 给自己使用的插件提问题，而不是在微信群里东问西问，像只无头苍蝇。\n\n**5、学会部署项目到服务器**\n\n在结尾会涉及一些服务器的知识，如果有问题可以随时向我反馈，我会帮助大家从零搭建并且上线这个项目。\n\n## 实战项目介绍\n\n本小册的主要技术栈为 `Spring Boot + Vue3 + Element-Plus`。路由采用 `Vue-Router 4.x`，图标插件使用 `echart 5.0` 进行编写。二次封装弹窗组件方便组件调用。`Element-Plus` 为我们封装好了 `el-upload` 组件，只需填写上传接口，便可拿到回调的图片地址。\n\n列表采用 `el-table` 进行编写，并且采用 `el-pagination` 作为分页组件。通过 `globalProperties` 全局属性设置全局通用过滤器（`Vue3` 废除了全局过滤器），`UI` 组件的 `deep` 穿透重写等等知识点，让你学完之后能够立即用于项目实战。\n\n#### 布局\n\n本项目采用的是左边栏固定，右边栏自适应的形式。\n\n![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6817470ea59d4f35af35b0eee18ef6e8~tplv-k3u1fbpfcp-watermark.image)\n\n对于大多数的管理后台项目，算是比较通用的布局形式。右边栏的顶部的底部被抽成公用组件，内容展示区域在中间部分。当然，布局这块，一通百通。你熟练了这个布局，其他的布局形式也将不在话下。我会在项目中为大家讲解，如何通过 `Flex` 实现自适应布局，这将会是你职场上的“杀手锏”。现如今，你出去面试前端岗位，对于布局的知识，基本上都会考到 `Flex` 这块，所以学好布局，也将是你拿到好 offer 的一份筹码。\n\n#### 公用组件\n\n小册中会模拟真实的开发场景，比如遇到同样布局的页面，但是请求的数据不同，你该如何用较少的代码来处理这种情况。很多时候，为了图方便，你会选择再加一个 `.vue` 页面，然后拷贝之前的代码，将接口数据换一下。这样做未尝不可，但是程序员还有一个特质，就是要学会减少重复的工作，这样做不仅代码量增加，修改页面的时候，你也要改两个地方，那岂不是令人头大。\n\n小册中采用监听路由变化的方式，当浏览器地址栏的 `pathname` 变化时，动态地修改请求地址。从而达到切换地址栏时，视图也跟着变化的需求。这样打包完之后，静态资源相对上面那种方式，会小一些。代码量大的话，这将是一种优化手段。\n\n#### 新写法\n\n全程我将使用 `Vue3` 的组合 `API` 写法。这里强调一点，并不是说 `Vue3` 的组合式 `API` 写法就比之前的 `Option` 写法好。而是本小册主要是想尽全力让大家学习，如何去使用 `Vue3`，尽量将涉及到的写法都实践一遍。至于后面你想用哪种写法，还是因项目而异，有时候 `Option` 写法，也非常的好用。就我目前写下来后，我发现复杂页面是比较适合组合式 `API`，简单的页面，可以继续使用之前的 `Option` 选项 `API`。这里只是个人看法，仅供参考。\n\n#### 项目预览\n\n![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07207f6c918f457cac256aa8f5e35666~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/893fd922474c40bd9eb43961791938cd~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9739a8e4e1dd4d8bbce98264b6184b05~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d84b859dcb4a44fcb05563f1143945d0~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d1111db71ce417c86b8b875960a0152~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0093c4d6b8e4dcbbee08f3568b37f27~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ada2ec86f6a410397697225de80d12f~tplv-k3u1fbpfcp-watermark.image)\n\n![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c75670ff236472087849909152e8aef~tplv-k3u1fbpfcp-watermark.image)\n\n## Vue 技术栈介绍\n\n#### 搜索指数\n\n上图是五年内，百度搜索引擎 PC + 移动端的全国关键词搜索指数折线图：\n\n![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab2e492398be48e1aa64fa46f73c0629~tplv-k3u1fbpfcp-zoom-1.image)\n\n从图中可以看出，2017 年初开始，`Vue` 在国内的搜索指数开始超越 `React`，不可否认，当时 `Vue 2.0` 差不多成熟了，吸引了一波中小企业开始切换至 `Vue` 技术栈。包括我自己也在 `2016` 年的时候就开始使用 `Vue` 开发项目，不过当时没有工程化项目，而是直接通过 `script` 脚本的形式引入，在 `html` 页面里写的 `Vue` 语法。不过也为我解决了用 `jq` 拼接字符串的头疼问题。\n\n所以对于刚入行的同学来说，选择 `Vue` 作为自己的第一个前端框架，是比较明智的，先不说工作机会，网上的解决方案也能帮你解决很多你在学习过程中遇到的问题。待熟悉之后，再开始接触其他的框架，这样的学习曲线，比较平缓，不会那么陡峭。\n\n> 有趣小发现，图中出现下滑波动的地方，是属于各大节假日期间。可以看出，大家真的是生活工作分的很清楚，Work Life Balance。\n\n#### 周边热词\n\n周边热词，指的是围绕 `Vue` 关键词，大家还搜索了其他什么技术，我们来看看下面这张百度给出的需求谱图：\n\n![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13ca0dcad6644747a936c80022b9e46a~tplv-k3u1fbpfcp-zoom-1.image)\n\n从中心往周边发散，由强到弱。红框的位置我们可以看出，近几年 `Element UI` 的地位，就好比鲁迅和周树人，只要你用了 `Vue`，那必不可少会使用到 `Element UI`。本小册正是使用了 `Element UI` 的 `Vue3` 版本 `Element-plus`。\n\n无论哪个公司，都会有后台管理系统的需求，只要是用 `Vue` 作为主技术栈的公司，那必然会使用到 `Element UI`。所以，学习并掌握它，是刻不容缓的事情。\n\n目前 `Element-Plus` 在 `Github` 的星星数将近 9k。并且他们的团队对国内小伙伴提出的问题，也非常愿意跟进，从他们的 [issue](https://github.com/element-plus/element-plus/issues) 中，可以看出。并且他们的更新速度也非常及时，能做到周更。所以选择它，作为入门的 UI 组件库，再合适不过。本小册会从 0 到 1，教你如何搭建一个能用于生成环境的后台管理系统。\n\n#### 地域分布\n\n我们再来分析，各个城市在 `React` 和 `Vue` 技术栈之间的使用对比，如下图所示：\n\n![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48f718dfe6724d7dabd90050bccd3ad2~tplv-k3u1fbpfcp-zoom-1.image)\n\n不出所料，北上广深杭，这几大一线城市都在使用 `Vue`，并且呈现一边倒的趋势（绿色代表 Vue），而后起之秀“成都”，也在悄悄的追赶着，来势汹汹。大家可以对照着该分布图，看看自己所在的城市的技术栈分布。\n\n不得不说 `Vue` 对国内用户非常的友好，包括中文文档、生态社区、技术支持、翻译团队。包括作者本人尤雨溪也是美籍华裔，说着一口流利的中文。你可以在各大社区平台，找到它的身影，这对于使用 `Vue` 的我们，带来了不少亲切感，作者就在身边。\n\n#### 就业形式\n\n就目前看来，`Vue` 的需求量在国内还是很大的。就算你是服务端人员，也有些小公司需要你懂得 `Vue` 的开发，因为小公司必须控制用人成本，最好是一个人能作为全栈使。无论你是否承认，全栈开发肯定是比只有某端能力的吃香。\n\n近些年，远程开发的形式开始频频出现，特别是这次疫情期间，远程开发一度成为主要的工作形式。如若你想找一份远程开发，不用坐班，在家便可工作赚钱，省去了很多通勤的时间，以及工作的自由度，会让你幸福感倍增。但是，在此之前有一点要提醒大家，目前远程开发大多都是希望员工能有全栈的能力，这样能大大的减少沟通成本，提高工作的效率，所以你如果是服务端人员，建议通过这门册子，把 `Vue` 的知识学了，后续很多事情，就不用在麻烦别人，凡事都能亲力亲为。\n\n来吧，朋友们，我们一起踏上这段 Vue3 的学习和实战之路。\n\n> 文档最近更新时间：2023 年 2 月 7 日。"
      );
    });

    return { value, mdTohtml, htmlStr };
  },
});
</script>

<style>
.markdown-body {
  word-break: break-word;
  line-height: 1.75;
  font-weight: 400;
  font-size: 16px;
  overflow-x: hidden;
  color: #252933;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  line-height: 1.5;
  margin-top: 35px;
  margin-bottom: 10px;
  padding-bottom: 5px;
}
.markdown-body h1 {
  font-size: 24px;
  line-height: 38px;
  margin-bottom: 5px;
}
.markdown-body h2 {
  font-size: 22px;
  line-height: 34px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ececec;
}
.markdown-body h3 {
  font-size: 20px;
  line-height: 28px;
}
.markdown-body h4 {
  font-size: 18px;
  line-height: 26px;
}
.markdown-body h5 {
  font-size: 17px;
  line-height: 24px;
}
.markdown-body h6 {
  font-size: 16px;
  line-height: 24px;
}
.markdown-body p {
  line-height: inherit;
  margin-top: 22px;
  margin-bottom: 22px;
}
.markdown-body img {
  max-width: 100%;
}
.markdown-body hr {
  border: none;
  border-top: 1px solid #ddd;
  margin-top: 32px;
  margin-bottom: 32px;
}
.markdown-body code {
  word-break: break-word;
  border-radius: 2px;
  overflow-x: auto;
  background-color: #fff5f5;
  color: #ff502c;
  font-size: 0.87em;
  padding: 0.065em 0.4em;
}
.markdown-body code,
.markdown-body pre {
  font-family: Menlo, Monaco, Consolas, Courier New, monospace;
}
.markdown-body pre {
  overflow: auto;
  position: relative;
  line-height: 1.75;
}
.markdown-body pre > code {
  font-size: 12px;
  padding: 15px 12px;
  margin: 0;
  word-break: normal;
  display: block;
  overflow-x: auto;
  color: #333;
  background: #f8f8f8;
}
.markdown-body a {
  text-decoration: none;
  color: #0269c8;
  border-bottom: 1px solid #d1e9ff;
}
.markdown-body a:active,
.markdown-body a:hover {
  color: #275b8c;
}
.markdown-body table {
  display: inline-block !important;
  font-size: 12px;
  width: auto;
  max-width: 100%;
  overflow: auto;
  border: 1px solid #f6f6f6;
}
.markdown-body thead {
  background: #f6f6f6;
  color: #000;
  text-align: left;
}
.markdown-body tr:nth-child(2n) {
  background-color: #fcfcfc;
}
.markdown-body td,
.markdown-body th {
  padding: 12px 7px;
  line-height: 24px;
}
.markdown-body td {
  min-width: 120px;
}
.markdown-body blockquote {
  color: #666;
  padding: 1px 23px;
  margin: 22px 0;
  border-left: 4px solid #cbcbcb;
  background-color: #f8f8f8;
}
.markdown-body blockquote:after {
  display: block;
  content: "";
}
.markdown-body blockquote > p {
  margin: 10px 0;
}
.markdown-body ol,
.markdown-body ul {
  padding-left: 28px;
}
.markdown-body ol li,
.markdown-body ul li {
  margin-bottom: 0;
  list-style: inherit;
}
.markdown-body ol li .task-list-item,
.markdown-body ul li .task-list-item {
  list-style: none;
}
.markdown-body ol li .task-list-item ol,
.markdown-body ol li .task-list-item ul,
.markdown-body ul li .task-list-item ol,
.markdown-body ul li .task-list-item ul {
  margin-top: 0;
}
.markdown-body ol ol,
.markdown-body ol ul,
.markdown-body ul ol,
.markdown-body ul ul {
  margin-top: 3px;
}
.markdown-body ol li {
  padding-left: 6px;
}
.markdown-body .contains-task-list {
  padding-left: 0;
}
.markdown-body .task-list-item {
  list-style: none;
}
@media (max-width: 720px) {
  .markdown-body h1 {
    font-size: 24px;
  }
  .markdown-body h2 {
    font-size: 20px;
  }
  .markdown-body h3 {
    font-size: 18px;
  }
}

.markdown-body pre,
.markdown-body pre > code.hljs {
  color: #333;
  background: #f8f8f8;
}
.hljs-comment,
.hljs-quote {
  color: #998;
  font-style: italic;
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-subst {
  color: #333;
  font-weight: 700;
}
.hljs-literal,
.hljs-number,
.hljs-tag .hljs-attr,
.hljs-template-variable,
.hljs-variable {
  color: teal;
}
.hljs-doctag,
.hljs-string {
  color: #d14;
}
.hljs-section,
.hljs-selector-id,
.hljs-title {
  color: #900;
  font-weight: 700;
}
.hljs-subst {
  font-weight: 400;
}
.hljs-class .hljs-title,
.hljs-type {
  color: #458;
  font-weight: 700;
}
.hljs-attribute,
.hljs-name,
.hljs-tag {
  color: navy;
  font-weight: 400;
}
.hljs-link,
.hljs-regexp {
  color: #009926;
}
.hljs-bullet,
.hljs-symbol {
  color: #990073;
}
.hljs-built_in,
.hljs-builtin-name {
  color: #0086b3;
}
.hljs-meta {
  color: #999;
  font-weight: 700;
}
.hljs-deletion {
  background: #fdd;
}
.hljs-addition {
  background: #dfd;
}
.hljs-emphasis {
  font-style: italic;
}
.hljs-strong {
  font-weight: 700;
}
</style>
