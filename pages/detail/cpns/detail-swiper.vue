<template>
	<swiper class="detail-swiper" :style="{height : height}"
					indicator-dots 
					indicator-active-color="#ff7555"
					circular>
		<template v-for="(item, index) in banners" :key="item">
			<swiper-item class="banner-item">
				<image class="image"  :src="item" mode="widthFix" :lazy-load="true"></image>
			</swiper-item>
		</template>
	</swiper>
</template>

<script setup>
	const props = defineProps({
		banners: {
			type:Array,
			default: () => []
		},
		height: {
			type:String,
			default: "600rpx"
		}
	})
</script>

<style lang="scss">
	.detail-swiper {
		background-color: white;
		.banner-item {
			.image {
				width: 100%;
			}
		}
	}
</style>