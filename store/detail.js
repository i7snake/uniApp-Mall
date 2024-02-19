import {defineStore} from "pinia"
import { getGoodDetail,getCoodRecommend} from "@/service/detail.js"

export const useDetailStore = defineStore("detail",{
	state:()=> {
		return {
			topImages: [],
			goods: {
				itemInfo: {},
				columns: [],
				services:[],
			},
			shop: {},
			detailInfo: {},
			paramInfo: {},
			commentInfo: {},
			recommendList: []
		}
	},
	actions: {
		async fetchGoodDetailData(id) {
			const res = await getGoodDetail(id)
			console.log(res);
			this.topImages = res.result?.itemInfo?.topImages || []
			this.shop = res.result?.shopInfo || {}
			this.goods.itemInfo = res.result?.itemInfo || []
			this.goods.services = res.result?.shopInfo?.services || []
			this.goods.columns  =  res.result?.columns || []
			this.detailInfo = res.result?.detailInfo || {} 
			this.paramInfo = res.result?.itemParams || {}
			this.commentInfo = res.result?.rate || {}			
		},
		async fetchGoodRecommend() {
			const res = await getCoodRecommend()
			// console.log(res);
			this.recommendList = res.data?.list || []
		}
	}
})