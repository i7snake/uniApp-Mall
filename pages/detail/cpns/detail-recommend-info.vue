<template>
	<view class="detail-recommend-info">
		<view class="info-header">热门推荐</view>
		<view class="goods-list">
			<template v-for="(item,index) in recommendList" :key="item.shop_id">
				<view class="item">
					<grid-view-item :itemInfo="item" @itemClick="handleGoodItemClick"></grid-view-item>
				</view>
			</template>
		</view>
	</view>
</template>

<script setup>
	import gridViewItem from "@/components/grid-view-item/grid-view-item.vue"
	const props = defineProps({
		recommendList: {
			type: Array,
			default: () => []
		}
	})
	
	function handleGoodItemClick(itemInfo) {
		console.log(itemInfo.iid);
	}
</script>

<style lang="scss">
	.detail-recommend-info {
		background-color: white;
		padding: 10rpx;

		.info-header {
			line-height: 40px;
			padding-left: 8px;
			font-size: 15px;
			color: #333;
		}

		.goods-list {
			@include normalFlex;
			flex-wrap: wrap;

			padding: 16rpx;

			.item {
				width: 48%;
			}
		}
	}
</style>