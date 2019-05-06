import Vue from 'vue'
import Test from '@/components/test/test.vue'

describe('测试Test.vue', () => {
  it('点击后价格加一', () => {
		const VueTest = Vue.extend(Test) // 组件实列
		const vm = new VueTest().$mount() // 挂载
		const add = vm.$el.querySelector('.add') // 获取点击元素
		const clickEvent = new window.Event('click') // 新建点击事件
		add.dispatchEvent(clickEvent) // 节点分派一个点击事件
		vm._watcher.run() // 监听点击事件
		expect(Number(vm.$el.querySelector('.price').textContent)).to.equal(11) // 断言
  })
	it('点击后价格减一', () => {
		const VueTest = Vue.extend(Test) // 组件实列
		const vm = new VueTest().$mount() // 挂载
		const add = vm.$el.querySelector('.del') // 获取点击元素
		const clickEvent = new window.Event('click') // 新建点击事件
		add.dispatchEvent(clickEvent) // 节点分派一个点击事件
		vm._watcher.run() // 监听点击事件
		expect(Number(vm.$el.querySelector('.price').textContent)).to.equal(9) // 断言
	})
})
