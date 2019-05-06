import Vue from 'vue'
import VueRouter from 'vue-router'
import Projects from '@/components/projects/projects'
import Works from '@/components/works/works'
import Info from '@/components/info/info'
import Test from '@/components/test/test'

Vue.use(VueRouter)

const routes123 = [
	{path: '/projects', component: Projects},
	{path: '/works', component: Works},
	{path: '/info', component: Info},
	{path: '/test', component: Test}
]

export default new VueRouter({
	routes: routes123,
	linkActiveClass: 'active'
})
