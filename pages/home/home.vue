<template>
	<view class="home">
		<!-- 轮播图组件 -->
		<home-banner :banners="banners" @bannerItemClick="handleBannerItemClick"></home-banner>
		<!-- 推荐栏组件 -->
		<home-recommend :recommends="recommends"></home-recommend>
		<!-- 热门栏组件 -->
		<home-popular></home-popular>

		<!-- 选项卡组件 components中符合easycom组件规范可以直接使用 无需导入 -->
		<tab-control 
		class="tab-control"
		:titles="['流行','新款','精选']" 
		@tabItemClick="handletabItemClick">
		</tab-control>
		<!-- 商品列表(九宫格) -->
		<!-- <uni-grid 
		:column="2" 
		:showBorder="false" 
		borderColor="#ff8198" 
		:highlight="false"
		:square="false">
			<template v-for="(itemInfo,index) in goodsList[currentType].list" :key="itemInfo.iid">
				<uni-grid-item :index="index">
					<grid-view-item :itemInfo="itemInfo" @itemClick="handleGridItemClick"></grid-view-item>
				</uni-grid-item>
			</template>
		</uni-grid> -->
		
		<view class="goods-list">
			<template v-for="(itemInfo,index) in goodsList[currentType].list" :key="itemInfo.iid">
				<view class="item">
					<grid-view-item :itemInfo="itemInfo" @itemClick="handleGridItemClick"></grid-view-item>
				</view>
			</template>
		</view>


	</view>
</template>

<script setup>
	
	import {
		onLoad, onReachBottom
	} from "@dcloudio/uni-app"
	import {
		storeToRefs
	} from "pinia"

	import {
		useHomeStore,
		types
	} from "@/store/home.js"
	import homeBanner from "./cpns/home-banner.vue"
	import homeRecommend from "./cpns/home-recommend.vue"
	import homePopular from "./cpns/home-popular.vue"

	const homeStore = useHomeStore()
	const {
		banners,
		recommends,
		goodsList,
		currentType
	} = storeToRefs(homeStore)

	onLoad(() => {
		// 触发异步action
		homeStore.fetchHomeMultiData()

		homeStore.fetchHomeData("pop", 1) //获取流行第一页
		homeStore.fetchHomeData("new", 1) //获取新款第一页
		homeStore.fetchHomeData("sell", 1) //获取精选第一页
	})
	// 监听页面滚动到底部
	onReachBottom(() => {
		// console.log(111); 加载对应分类的下一页数据
		homeStore.fetchHomeData(currentType.value,goodsList.value[currentType.value].page + 1)
	})
	
	

	// 监听轮播图事件触发后 拿到link传递给webview组件
	function handleBannerItemClick(link) {
		uni.navigateTo({
			url: "/pages/webview/webview?link=" + link
		})
	}

	// tab-control的点击事件
	function handletabItemClick(index) {
		// console.log(index); //0>pop 1>new 2>sell
		homeStore.setCurrentType(types[index])
	}
	
	// grid-view-item 的点击事件 (会跳转到详情页面)
	function handleGridItemClick(itemInfo) {
		uni.navigateTo({
			url:"/pages/detail/detail?iid=" + itemInfo.iid
		})
	}
</script>

<style lang="scss">
	@import "@/uni.scss";
	
	// // 小程序的page高度auto，其它的为100%, 超过需要出现滚动条
	// page{
	// 	/* #ifdef MP-WEIXIN */
	// 	height: auto;
	// 	/* #endif */	
	// 	overflow: auto;
	// }
	
	.tab-control {
		position: sticky;
		top: 0rpx;
		z-index: 100;
		background-color: white;
	}
	
	.goods-list {
		@include normalFlex;
		flex-wrap: wrap;
		
		padding: 16rpx;
		
		.item {
			width: 48%;
		}
	}

</style>