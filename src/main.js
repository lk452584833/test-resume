// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 加载路由 vue.$route vue.$router
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store' // 加载vuex  $store
import PicPreview from 'vue-picture-preview-extend' // 加载preview 图片查看器
import utils from './common/js/utils.js' // 加载自定义公用类js库
import vMessage from './components/Message/index.js' // 加载自定义弹出信息，以插件形式安装。此方法单独以组件方法形式，是因为多了模板样式
import vMessageSure from './components/MessageSure/index.js' // 加载自定义弹出信息2

import './mock' // 加载模拟数据mock
import '../static/css/reset.css' // 加载rest.css 和 icon.css
import './common/css/icon.css'
import FastClick from 'fastclick' // 解决移动端300毫秒点击延迟
FastClick.attach(document.body)

Vue.use(PicPreview)
Vue.use(utils)
Vue.use(vMessage) // 使用案例header,info.vue
Vue.use(vMessageSure) // 使用案例info.vue
Vue.config.productionTip = false
Vue.config.devtools = true // 配置是否允许 vue-devtools 检查代码
Vue.use(VueAxios, axios)
// Vue.prototype.$axios = axios // 挂载到原型上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
	store: store,
	data: {
		eventHub: new Vue()
	},
  components: { App },
  template: '<App/>',
  created() {
	this.$router.push({path: '/test'})
  }
})
