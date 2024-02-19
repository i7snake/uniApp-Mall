import {defineStore} from "pinia"
import {getCategory,getSubcategory,getCategoryDetail} from "@/service/category.js"

export const useCategoryStore = defineStore("category",{
	state: () => {
		return {
			categories: [],
			subcategories: [],
			goodsListData: {},
		}
	},
	actions: {
		async fetchCategoryData() {
			const res = await getCategory()
			// console.log(res);
			this.categories = res.data.category.list || []
		},
		async fechSubcategoryData(maitKey) {
			const res = await getSubcategory(maitKey)
			// console.log(res);
			this.subcategories = res.data.list || []
			// console.log(this.subcategories);
		},
		async fetchCategoryDetailData(type, miniWallkey) {
			const res = await getCategoryDetail(type, miniWallkey)
			// console.log(res);
			this.goodsListData = res 
			// console.log(this.goodsListData );
		}
	}
})