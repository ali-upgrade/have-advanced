(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{453:function(e,t,r){"use strict";r.r(t);var o=r(2),v=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vuerouter导航守卫"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuerouter导航守卫"}},[e._v("#")]),e._v(" VueRouter导航守卫")]),e._v(" "),t("p",[t("code",[e._v("vue-router")]),e._v("提供的导航守卫主要用来通过跳转或取消的方式守卫导航，简单来说导航守卫就是路由跳转过程中的一些钩子函数，路由跳转是一个大的过程，这个大的过程分为跳转前中后等等细小的过程，而在每一个过程中都有钩子函数，这些钩子函数能使我们在这些过程中进行一些操作，这就是导航守卫。")]),e._v(" "),t("h2",{attrs:{id:"描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[e._v("#")]),e._v(" 描述")]),e._v(" "),t("p",[e._v("vue-router一套钩子来触发路由在不同阶段触发的函数，导航守卫分成三大块：全局守卫、路由独享守卫和组件内守卫。全局守卫顾名思义所有路由在进入跳转的时候都会触发，整个全局路由分为三个阶段依次是beforeEach、beforeResolve、afterEach。路由独享守卫顾名思义只在定义路由和路由组件中的对象中使用，其只有一个阶段beforeEnter。组件内守卫是只在组件中触发的路由内容，其有三个阶段依次是beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave。参数或查询的改变并不会触发进入或离开的导航守卫，可以通过观察$route对象来应对这些变化，或使用beforeRouteUpdate的组件内守卫。")]),e._v(" "),t("h2",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[e._v("#")]),e._v(" 参数")]),e._v(" "),t("p",[e._v("通常导航守卫接收三个参数，当然并不是所有钩子函数都是如此，不接收相关参数的钩子函数会特别说明。")]),e._v(" "),t("ul",[t("li",[e._v("to: Route: 即将要进入的目标路由对象，即组件内的this.$route。")]),e._v(" "),t("li",[e._v("from: Route: 当前导航正要离开的路由对象。")]),e._v(" "),t("li",[e._v('next: Function: 一定要调用该方法来resolve这个钩子，需要确保next函数在任何给定的导航守卫中都被严格调用一次，其可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错，此函数执行效果依赖next方法的调用参数。\nnext(): 进行管道中的下一个钩子，如果全部钩子执行完了，则导航的状态就是确认confirmed的。\nnext(false): 中断当前的导航，如果浏览器的URL改变了，例如用户手动或者浏览器后退按钮，那么URL地址会重置到from路由对应的地址。\nnext("/")或者next({ path: "/" }): 跳转到一个不同的地址，当前的导航被中断，然后进行一个新的导航，可以向next传递任位置对象，且允许设置诸如replace: true、name: "home"之类的选项以及任何用在router-link的to prop或router.push中的选项。\nnext((vm)=>{}): beforeRouteEnter是支持给next传递回调的唯一守卫，回调内接收的参数为当前组件的vm，对于beforeRouteUpdate和beforeRouteLeave来说，this已经可用了，所以无需也不支持传递回调。\nnext(error) (2.4.0+): 如果传入next的参数是一个Error实例，则导航会被终止且该错误会被传递给router.onError()注册过的回调。')])]),e._v(" "),t("h2",{attrs:{id:"导航解析流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导航解析流程"}},[e._v("#")]),e._v(" 导航解析流程")]),e._v(" "),t("ul",[t("li",[e._v("导航被触发。")]),e._v(" "),t("li",[e._v("在失活的组件里调用beforeRouteLeave守卫。")]),e._v(" "),t("li",[e._v("调用全局的beforeEach守卫。")]),e._v(" "),t("li",[e._v("在重用的组件里调用beforeRouteUpdate守卫2.2+。")]),e._v(" "),t("li",[e._v("在路由配置里调用beforeEnter。")]),e._v(" "),t("li",[e._v("解析异步路由组件。")]),e._v(" "),t("li",[e._v("在被激活的组件里调用beforeRouteEnter。")]),e._v(" "),t("li",[e._v("调用全局的beforeResolve守卫2.5+。")]),e._v(" "),t("li",[e._v("导航被确认。")]),e._v(" "),t("li",[e._v("调用全局的afterEach钩子。")]),e._v(" "),t("li",[e._v("组件生命周期beforeCreate、created、beforeMount、mounted。")]),e._v(" "),t("li",[e._v("触发DOM更新。")]),e._v(" "),t("li",[e._v("调用beforeRouteEnter守卫中传给next的回调函数，创建好的组件实例会作为回调函数的参数传入。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);