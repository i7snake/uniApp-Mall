<template>
	<view class="detail-base-info">
		<view class="info-title">{{goods.itemInfo.title}}</view>
		
		<view class="info-price">
			<text class="n-price">{{goods.itemInfo.price}}</text>
			<text class="o-price">{{goods.itemInfo.lowPrice}}</text>
			<text class="discount">{{goods.itemInfo.discountDesc}}</text>
		</view>
		<view class="info-other">
			<text>{{goods.columns[0]}}</text>
			<text>{{goods.columns[1]}}</text>
			<text>{{goods.columns[2]}}</text>
			<!-- <text>{{goods.services[goods.services.length-1]?.name}}</text> -->
		</view>
		<view class="info-service" v-if="goods.services">
			<template v-for="(index) in 4" :key="index">
				<view class="info-service-item">
					 <image class="service-icon" :src="goods.services[index-1]?.icon"></image>
					 <text class="service-name">{{goods.services[index-1]?.name}}</text>
				</view>
			</template>
		</view>
		
	</view>
</template>

<script setup>
	const props = defineProps({
		goods: {
			type: Object,
			default: () => {}
		}
	})
</script>

<style lang="scss">
	.detail-base-info{
		margin-top: 30rpx;
		margin-bottom: 10rpx;
		padding: 0 16rpx;
		color: #999;
		background-color: white;
	
		  .info-title {
		    color: #222;
			text-indent: 20rpx;
		  }
		
		  .info-price {
		    margin-top: 20rpx;
		  }
		
		  .info-price .n-price {
		    font-size: 48rpx;
		    color: $gTintColor;
		  }
		
		  .info-price .o-price {
		    font-size: 26rpx;
		    margin-left: 10rpx;
		    text-decoration: line-through;
		  }
		
		  .info-price .discount {
		    font-size: 24rpx;
		    padding: 4rpx 10rpx;
		    color: #fff;
		    background-color: $gTintColor;
		    border-radius: 16rpx;
		    margin-left: 10rpx;
		
		    /*让元素上浮一些: 使用相对定位即可*/
		    position: relative;
		    top: -16rpx;
		  }
		
		  .info-other {
		    margin-top: 30rpx;
		    line-height: 60rpx;
		    display: flex;
		    font-size: 26rpx;
		    border-bottom: 1px solid rgba(100,100,100,.1);
		    justify-content: space-between;
		  }
		
		  .info-service {
		    display: flex;
		    justify-content: space-between;
		    line-height: 120rpx;
		  }
		
		  .info-service-item .service-icon {
		    width: 28rpx;
		    height: 28rpx;
		    position: relative;
		    top: 4rpx;
		  }
		
		  .info-service-item .service-name {
		    font-size: 26rpx;
		    color: #333;
		  }
	}
</style>