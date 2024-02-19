<template>
	<view class="goods-item" @click="handleItemClick">
		<!-- 图片懒加载  各组件传递过来的图片||或-->
		<!-- #ifndef H5 -->
		<image class="image" :src="itemInfo.image || itemInfo.img || itemInfo.show.img  " mode="widthFix"></image>
		<!-- #endif -->
		
		<!-- #ifdef H5 -->
		<img class="image" v-lazy=" itemInfo.image || itemInfo.img || itemInfo.show.img ">
		<!-- #endif -->
		<view class="desc-info">
			<view class="title">{{itemInfo.title}}</view>
			<view class="info">
				<text class="price">￥{{itemInfo.price}}</text>
				<image class="icon" src="@/static/images/common/favor.png" mode=""></image>
				<text class="cfav">{{itemInfo.cfav}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	
	const props = defineProps({
		itemInfo: {
			type: Object,
			default: () => {}
		}
	})
	
	const emit = defineEmits(["itemClick"])
	function handleItemClick() {
		emit("itemClick",props.itemInfo)
	}

</script>

<style lang="scss">
	@import "@/uni.scss";
	.goods-item {
		position: relative;
	  width: 100%;
	  text-align: center;
	  color: #333;
	  padding-bottom: 85rpx;
	  margin-top: 10rpx;
	}
	
	.image {
	  width: 100%;
	  border-radius: 10rpx;
	}
	
	.desc-info {
	  position: absolute;
	  left: 0;
	  right: 0;
	  bottom: 10rpx;
	}
	
	.title {
	 @include textEllipsis();
	  font-size: 28rpx;
	}
	
	.info {
	  font-size: 26rpx;
	}
	
	.info .price {
	  color: #ff5777;
	}
	
	.info .icon {
	  width: 30rpx;
	  height: 30rpx;
	  padding: 0 6rpx 0 10rpx;
	  position: relative;
	  top: 8rpx;
	}
	
	.cfav {
	  /* padding-left: 10rpx; */
	  position: relative;
	}

</style>