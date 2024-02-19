<template>
	<view class="detail-nav-bar">
		<template v-for="(item,index) in titleInfos" :key="item.id">
			<text 
			class="title" 
			:class="currentIndex === item.id? 'active' : '' "
			@click="itemClick(item)">
				{{item.title}}
			</text>
		</template>
	</view>
</template>

<script setup>
	import {ref} from "vue"
	const props = defineProps({
		titleInfos: {
			type: Array,
			default: function() {
				return [
					{
						id: 0,
						title: '商品'
					},
					{
						id: 1,
						title: '参数'
					},
					{
						id: 2,
						title: '评论'
					},
					{
						id: 3,
						title: '推荐'
					}
				]
			}
		},
		defaultIndex: {
			type:Number,
			default:0
		}
	})
	
	
	const currentIndex = ref(props.defaultIndex)
	const emit = defineEmits(['itemClick'])
	function itemClick(item) {
		currentIndex.value = item.id
		emit('itemClick', item)
	}
</script>

<style lang="scss">
	.detail-nav-bar{
	
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: white;
		
		height: 88rpx;
		border-bottom: 1rpx solid $gBgColor;
		// position: sticky;
		// top: 88rpx;
		// z-index: 9;
		
		.title{
			flex: 1;
			text-align: center;
			line-height: 88rpx;
			font-size: 28rpx;
			color: $gNormalColor;
		}
		.title.active{
			color: $gTintColor;
			font-weight: 700;
		}
	}
</style>