import {defineStore} from "pinia"
import { getHomeData, getHomeMutidata } from "@/service/home.js"

export const types = ["pop","new","sell"]
function getDefaultGoodsListData() {
	let goodsListOrign = {}
	types.forEach((type) => {
		goodsListOrign[type] = { page:0,list:[] }
	})
	return goodsListOrign
}

export const useHomeStore = defineStore("home",{
	state: ()=>  {
		return {
			banners: [],
			recommends: [],
			currentType: "pop", //pop new sell
			goodsList: getDefaultGoodsListData()
		}
	},
	actions: {
		setCurrentType(type) {
			this.currentType = type
		},
		// 获取首页轮播图和推荐栏数据
		async fetchHomeMultiData() {
			const res = await getHomeMutidata()
			// console.log(res);
			this.banners = res.data.banner.list || []
			this.recommends = res.data.recommend.list || []

		},
		async fetchHomeData(type,page) {
			// type:pop new sell
			// page: 1 2 3 4 ...
			const res = await getHomeData(type,page)
			this.goodsList[type].list.push(...res.data.list)
			this.goodsList[type].page = page
		}
	}
})