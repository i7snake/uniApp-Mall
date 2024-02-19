<template>
	<view class="detail-comment-info" v-if="Object.keys(commentInfo).length !== 0">
		<view class="info-header">
			<view class="header-title">用户评价</view>
			<view class="header-more">
				更多
				<text class="arrow-right"></text>
			</view>
		</view>
		<view class="info-user" v-if="commentInfo.list[0].user">
			<image class="user-icon" :src="commentInfo.list[0].user.avatar"></image>
			<text class="user-name">{{commentInfo.list[0].user.uname}}</text>
		</view>
		<view class="info-detail">
			<text class="content">
				{{commentInfo.list[0].content}}
			</text>
			<view class="info-other">
				<text class="date">{{showDate(commentInfo.list[0].created)}}</text>
				<text>{{commentInfo.list[0].style}}</text>
			</view>
			<view class="info-imgs">
				<image class="info-img" :src="item" v-for="(item, index) in commentInfo.list[0].images"></image>
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed } from "vue";
import {formatDate} from "@/utils/formatDate.js"
const props = defineProps({
	commentInfo: {
		type: Object,
		default: () => {}
	}
})

const showDate = computed(() => {
	return (value) => {
		let date = new Date(value * 1000)
		return formatDate(date,"yyyy-MM-dd")
	}
})
</script>

<style lang="scss">
	
	.detail-comment-info {
	  padding: 10rpx 24rpx;
	  color: #333;
	  border-bottom: 10rpx solid #f2f5f8;
	  background-color: white;
	  
	}
	
	.info-header {
	  height: 100rpx;
	  line-height: 100rpx;
	  border-bottom: 2rpx solid rgba(0,0,0,.1);
	}
	
	.header-title {
	  float: left;
	  font-size: 30rpx;
	}
	
	.header-more {
	  float: right;
	  margin-right: 20rpx;
	  font-size: 26rpx;
	}
	.arrow-right{
		border-top: 1px solid #999;
		border-left: 1px solid #999;
		width: 9px;
		height: 9px;
		background-color: transparent;
		transform: rotate(135deg);
		display: inline-block;
	}
	
	.info-user {
	  padding: 20rpx 0 10rpx;
	}
	
	.info-user .user-icon {
	  width: 84rpx;
	  height: 84rpx;
	  border-radius: 50%;
	}
	
	.info-user .user-name {
	  position: relative;
	  font-size: 30rpx;
	  top: -30rpx;
	  margin-left: 20rpx;
	}
	
	.info-detail {
	  padding: 0 10rpx 30rpx;
	}
	
	.info-detail .content {
	  font-size: 28rpx;
	  color: #777;
	  line-height: 1.5;
	}
	
	.info-detail .info-other {
	  font-size: 24rpx;
	  color: #999;
	  margin-top: 20rpx;
	}
	
	.info-other .date {
	  margin-right: 16rpx;
	}
	
	.info-imgs {
	  margin-top: 20rpx;
	}
	
	.info-imgs .info-img {
	  width: 140rpx;
	  height: 140rpx;
	  margin-right: 10rpx;
	}
</style>