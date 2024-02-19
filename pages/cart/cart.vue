<template>
	<view class="cart">
		<scroll-view class="cart-scroll" scroll-y="true" >
			<template 
			v-if="cartList" 
			v-for="item in cartList" 
			:key="item.iid">
				<cartListItem 
				:itemInfo="item" 
				@checkedChange="handleCheckedChange"></cartListItem>
			</template>
		</scroll-view>
		
		<bottom-bar @checkedAllChange="handlecCheckedAllChange"></bottom-bar>
	</view>
</template>

<script setup>
	import {computed} from "vue"
	import {useCartStore} from "@/store/cart.js"
	import {storeToRefs} from "pinia"
	
	import cartListItem from "./cpns/cart-list-item.vue"
	import bottomBar from "./cpns/bottom-bar.vue"
	
	const cartStore = useCartStore()
	const {cartList} = storeToRefs(cartStore)
	// console.log(cartList);
	// const cartList =  computed(() => {
	// 	return cartStore.cartList || []
	// })
	
	function handleCheckedChange(itemInfo) {
		console.log('checked=>', itemInfo.checked)
	}
	
	function handlecCheckedAllChange(checked) {
		console.log('checked=>', checked)
	}
	
</script>

<style lang="scss">
	page, .cart{
		height: 100%;
	}
	.cart{
	// background-color: red;
	}
	.cart-scroll{
		height: calc(100% - 88rpx);
	}

</style>
