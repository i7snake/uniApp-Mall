<template>
		<view class="tab-content-category">
			<template v-for="(item, index) in subcategories" :key="item">
				<view class="content-item" @click="itemClick(item)">
					<!-- #ifndef H5  -->
					<image class="c-img" :src="item.image" :lazy-load="true"></image>
					<!-- #endif  -->
					
					<!-- #ifdef H5  -->
					<img class="c-img" v-lazy="item.image" />
					<!-- #endif  -->
					<text class="title">{{item.title}}</text>
				</view>
			</template>
			
		</view>
</template>

<script setup>
	const props = defineProps({
		subcategories: {
			type:Array,
			default: () => []
		}
	})
	
	function itemClick(item) {
		uni.navigateTo({
			url:"/pages/webview/webview?link=" + item.link,
			fail:(err) => {
				console.log(err)
			}
		})
	}
</script>

<style lang="scss">
	.tab-content-category{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		.content-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 33.33%;
			.c-img{
				width: 130rpx;
				height: 130rpx;
				margin-top: 30rpx;
			}
			.title{
				margin-top: 30rpx;
				text-align: center;
				font-size: 24rpx;
				color: $gNormalColor;
			}
		}
	}
</style>