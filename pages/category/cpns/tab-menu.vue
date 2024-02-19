<template>
	<view class="tab-menu">
		<scroll-view  scroll-y="true" class="tab-menu-scroll">
			<template v-for="(item, index) in categories" :key="item.maitKey">
				<view :class="['scroll-view-item', currentTitle === item.title ? 'active' : '']"
					@click="menuItemClick(item)"
				>
					{{item.title}}
				</view>
			</template>
		</scroll-view>
	</view>
</template>

<script setup>
import { ref } from "vue";
	
	
	const props = defineProps({
		categories: {
			type: Array,
			default: () => []
		}
	})
	
	const emit = defineEmits(["menuItemClick"])
	const currentTitle = ref("正在流行")
	const menuItemClick = (item) => {
		currentTitle.value = item.title
		emit("menuItemClick",item)
	}
	
	
</script>

<style lang="scss">
	.tab-menu{
		height: 100%;
		width: 194rpx;
		overflow: hidden;
		.tab-menu-scroll{
			height: 100%;
		}
		.scroll-view-item{
			height: 90rpx;
			line-height: 90rpx;
			width: 100%;
			background-color: #f6f6f6;
			text-align: center;
			
			font-size: 28rpx;
			&.active{
				background-color: white;
				border-left: 6rpx solid $gPrimaryColor;
				color: $gPrimaryColor;
				font-weight: 700;
			}
		}
	
	}
</style>