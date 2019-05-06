<template>
	<div class="test">
		<span>价格: <span class="price">{{price}}</span></span>
		<span>数量:<input type="text" v-model="count"></span>
		<span>总价{{totalPrice}}</span>
		<div class="more">
			<span @click="addPrice" class="text add">价格+1</span>
			<span @click="delPrice" class="text del">价格-1</span>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'test',
		data() {
			return {
				price: 10,
				count: 3
			}
		},
		computed: {
			totalPrice() {
				return this.price * this.count
			}
		},
		methods: {
			addPrice() {
				this.price++
			},
			delPrice() {
				this.price--
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.test{
		padding: 20px 0;
		> span {display: inline-block;}
		input{border:1px solid #ccc;width:100px;}
		.more{
			margin: 10px 0;text-align:center;
			.text{
				padding: 5px 10px; background:#f3f5f7 ;display: inline-block;
			}
		}
	}
</style>
