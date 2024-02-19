<template>
	<view class="detail">
		<!-- 顶部导航 -->
		<detail-nav-bar @itemClick="handleNavBarItemClick"></detail-nav-bar>

		<scroll-view class="detail-scroll" scroll-y="true">
			<template v-if="currentNavBarIndex === 0">
				<detail-swiper :banners="topImages"></detail-swiper>
				<detail-base-info :goods="goods"></detail-base-info>
				<detail-shop-info :shop="shop"></detail-shop-info>
				<detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
			</template>

			<template v-else-if="currentNavBarIndex === 1">
				<detail-param-info :paramInfo="paramInfo"></detail-param-info>
			</template>

			<template v-else-if="currentNavBarIndex === 2">
				<detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
			</template>

			<template v-else>
				<detail-recommend-info :recommendList="recommendList"></detail-recommend-info>
			</template>

		</scroll-view>

		<!-- 底部导航 -->
		<detail-botton-bar @addToCart="handleaddToCart"></detail-botton-bar>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from "vue"
	import {
		storeToRefs
	} from "pinia"
	import {
		onLoad,
	} from "@dcloudio/uni-app"

	import {
		useDetailStore
	} from "@/store/detail.js"
	import {debounce} from "@/utils/formatDate.js"
	import {useCartStore} from "@/store/cart.js"  

	import DetailNavBar from './cpns/detail-nav-bar.vue'
	import DetailBottonBar from './cpns/detail-bottom-bar.vue'
	import DetailSwiper from './cpns/detail-swiper.vue'
	import DetailBaseInfo from './cpns/detail-base-info.vue'
	import DetailShopInfo from './cpns/detail-shop-info.vue'
	import DetailGoodsInfo from "./cpns/detail-goods-info.vue"
	import DetailParamInfo from './cpns/detail-param-info.vue'
	import DetailCommentInfo from './cpns/detail-comment-info.vue'
	import DetailRecommendInfo from './cpns/detail-recommend-info.vue'

	const id = ref("")
	const scrollTop = ref(0)
	const currentNavBarIndex = ref(0)

	const detailStore = useDetailStore()
	// detail详情页仓库数据
	const {
		topImages,
		goods,
		shop,
		detailInfo,
		paramInfo,
		commentInfo,
		recommendList
	} = storeToRefs(detailStore)



	// 接收iid
	onLoad((options) => {
		console.log(options.iid);
		id.value = options.iid
		
	})
	onMounted(() => {
		detailStore.fetchGoodDetailData(id.value)
		detailStore.fetchGoodRecommend()
	})

	function handleNavBarItemClick(item) {
		currentNavBarIndex.value = item.id
	}

	//防抖 向购物车传递参数
	const handleaddToCart = debounce(() => {
		// console.log(111);
		uni.showToast({
			title: "已加入购物车",
			duration: 1000
		})
		
			// 1.创建对象
			const obj = {}
			// 2.对象信息
			obj.iid = id.value
			obj.imgURL = topImages.value[0]
			obj.title = goods.value.itemInfo.title
			obj.desc = goods.value.itemInfo.desc
			// obj.count = 1 
			obj.newPrice = goods.value.itemInfo.highNowPrice
			// console.log(obj);
			// 添加cartStore中
			const cartStore = useCartStore()
			cartStore.addCartAction(obj)
			
	},500)

</script>

<style lang="scss">
	page {
		background-color: $gBgColor;
		height: 100%;
	}

	.detail {
		height: 100%;
	}

	.detail-scroll {
		height: calc(100% - 204rpx);
	}
</style>