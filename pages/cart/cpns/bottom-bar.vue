<template>
	<view class="bottom-bar">
		<label class="select-all">
				<radio :checked="checked" color="#ff8198" @click="onChange"/>
				<text class="label-name">全选</text>
		</label>
		<text class="total-price">合计: ¥{{totalPrice}}</text>
		<text class="buy-product">去支付({{cartCount}})</text>
	</view>
</template>

<script setup>
	import { computed, ref } from "vue"
	import { useCartStore } from "@/store/cart.js"
	import {storeToRefs} from "pinia"
	
	const cartStore = useCartStore()
	const checked = ref(false)
	
	
	const totalPrice = computed(() => {
		// 1.判断是否有未选中的按钮
		let isSelectAll = cartStore.cartList.find(item => !item.checked);
		checked.value = isSelectAll ? false : true
		// 返回计算结果
		return cartStore.cartList.filter(item => {
			// 过滤选中的商品
			return item.checked
		}).reduce((preValue,item) => {
			// 计算
			return preValue + item.count * item.newPrice
		},0).toFixed(2)
		
	})	
			
	const cartCount = computed(() => {
		let counter = cartStore.cartCount || 0
		// console.log(counter);
		if(counter > 0) {
			if(counter === cartStore.cartList.length) {
				checked.value = true
			}
		}else {
			checked.value = false
		}
		
		// uni.setNavigationBarTitle({
		// 	title: `购物车`
		// });
		return counter
	})
	
	const emit = defineEmits(["checkedAllChange"])
	const onChange = () => {
		checked.value = !checked.value
		// 1.判断是否有未选中的按钮
		cartStore.checkedAll()
		
		emit("checkedAllChange", checked.value)
	}
	
</script>

<style lang="scss">
	.bottom-bar{
	    position: fixed;
	    left: 0;
		right:0;
		
		width: 100%;
		height: 88rpx;
		background-color: #eee;
		
	    box-shadow: 0 -4rpx 6rpx rgba(0, 0, 0, .2);
	    font-size: 28rpx;
	    color: #888;
	    line-height: 88rpx;
	    padding-left: 70rpx;
	    box-sizing: border-box;
	}
	/*  #ifndef  H5  */
	.bottom-bar{
		bottom: 0rpx;
	}
	/*  #endif  */
	
	/*  #ifdef  H5 */
	.bottom-bar{
		bottom: 94rpx;
	}
	/*  #endif  */
	
	
	.select-all {
	    position: absolute;
	    line-height: 0;
	    left: 24rpx;
	    top: 26rpx;
		transform: scale(.8);
	
	}
	
	.label-name{
		margin-left: 10rpx;
		font-size: 32rpx;
	}
	  
	.total-price {
	    margin-left: 100rpx;
	    font-size: 32rpx;
	    color: #666;
	}
	  
	.buy-product {
	    background-color: orangered;
	    color: #fff;
	    width: 200rpx;
	    height: 88rpx;
	    text-align: center;
	    line-height: 88rpx;
	    float: right;
	}
</style>