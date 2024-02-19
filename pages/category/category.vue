<template>
	<view class="category">
		<tab-menu :categories="categories" @menuItemClick="tabMenuItemClick"></tab-menu>
		<scroll-view scroll-y="true" class="content-scroll">
			<tab-content-category :subcategories="subcategories"></tab-content-category>
			<tab-control :titles="['综合', '新品', '销量']" @tabItemClick="handleTabClick"></tab-control>
			<view class="goods-list">
				<!-- @itemClick="handleGoodItemClick" -->
				<template v-for="(item, index) in goodsList[currentType]" :key="item.cfav + '_' + item.iid">
					<view class="item">
						<grid-view-item :itemInfo="item" @itemClick="handleGoodItemClick"></grid-view-item>
					</view>
				</template>


			</view>
		</scroll-view>
	</view>
</template>

<script setup>
	import {
		onMounted,
		reactive,
		ref
	} from "vue";
	import {
		storeToRefs
	} from "pinia"
	import {
		useCategoryStore
	} from "@/store/category.js"

	import tabMenu from "./cpns/tab-menu.vue"
	import tabContentCategory from "./cpns/tab-content-category.vue"
	import tabControl from "@/components/tab-control/tab-control.vue"
	import gridViewItem from "@/components/grid-view-item/grid-view-item.vue"


	const categoryStore = useCategoryStore()
	const {
		categories, //一级菜单
		subcategories, //二级菜单
		goodsListData // 详情数据
	} = storeToRefs(categoryStore)

	const currentType = ref("pop")
	const types = ["pop", "new", "sell"] // 综合 新品 销量
	const goodsListOrigin = {}
	types.forEach((type) => {
		goodsListOrigin[type] = []
	})
	const goodsList = reactive(goodsListOrigin)
	// console.log(goodsList);


	// 组件挂载完成
	onMounted(() => {
		categoryStore.fetchCategoryData().then((res) => {
			// 初始化第一个菜单数据
			if (categories.value && categories.value.length) {
				getCategoryContentData(categories.value[0])
			}
		})


	})


	function tabMenuItemClick(menuData) {
		if (menuData) {
			getCategoryContentData(menuData)
		}
	}

	function handleTabClick(index) {
		currentType.value = types[index]
	}
	
	function handleGoodItemClick(itemInfo) {
		// console.log(itemInfo.iid);
		uni.navigateTo({
			url:"/pages/detail/detail?iid=" + itemInfo.iid,
			fail(err) {
				console.log(err);
			}
		})
	}


	const getCategoryContentData = (menuData = {}) => {

		let {
			maitKey,
			miniWallkey
		} = menuData
		categoryStore.fechSubcategoryData(maitKey)
		getCategoryDataAction("pop", miniWallkey)
		getCategoryDataAction("new", miniWallkey)
		getCategoryDataAction("sell", miniWallkey)
	}
	const getCategoryDataAction = (type, miniWallkey) => {
		categoryStore.fetchCategoryDetailData(type, miniWallkey).then((res) => {
			goodsList[type] = goodsListData.value
		})
	}
	// console.log(goodsList);
</script>

<style lang="scss">
	@import "@/uni.scss";
	// // 小程序的page高度为100%, 需要相对定位。这里使用scrollview滚动
	// page {
	// 	height: 100%;
	// 	// position: relative;
	// }

	.category {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		// background-color: red;

		display: flex;
		flex-direction: row;
		overflow: hidden;

		.content-scroll {
			flex: 1;
			height: 100%;
			background-color: white;
			padding: 20rpx 16rpx 40rpx 16rpx;
			-webkit-overflow-scrolling: touch;

			.goods-list {
				@include normalFlex;
				flex-wrap: wrap;

				padding: 16rpx;

				.item {
					width: 48%;
				}
			}
		}
	}
</style>