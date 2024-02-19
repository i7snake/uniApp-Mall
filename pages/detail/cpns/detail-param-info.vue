<template>
	<view class="detail-param-info">
		<uni-table emptyText="暂无更多数据" v-if="Object.keys(paramInfo).length !== 0">
			<template v-for="(table,index) in getTableData" :key="index">
				<uni-tr>
					<uni-td>{{table[0]}}</uni-td>
					<uni-td>{{table[1]}}</uni-td>
					<uni-td>{{table[2]}}</uni-td>
					<uni-td>{{table[3]}}</uni-td>
				</uni-tr>
			</template>
		</uni-table>
		
		<uni-table emptyText="暂无更多数据" v-if="Object.keys(paramInfo).length !== 0">
			<template v-for="(info,index) in paramInfo.info.set" :key="index">
				<uni-tr>
					<uni-td class="col-key" :width="76">{{info.key}}</uni-td>
					<uni-td class="col-value">
						<text :style="{color: '#eb4868' }">
							{{info.value}}
						</text>
					</uni-td>
				</uni-tr>
			</template>
		</uni-table>
	</view>
</template>

<script setup>
import { computed } from "vue";
	 const props = defineProps({
		 paramInfo: {
			 tyep: Object,
			 default: () => {}
 		 }
	 })
	 
	 const getTableData = computed(()=> {
		 return props.paramInfo?.rule?.tables[0] || []
	 })
</script>

<style lang="scss">
	.detail-param-info{
		background-color: white;
		padding: 40rpx 30rpx;
		margin-bottom: 10rpx;
		.col-key {
			display: inline-block;
			width: 180rpx !important;
		}
		.col-value{
			
		}
	}
</style>