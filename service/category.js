import myRequest from "./index.js" 


// 一级菜单
export function getCategory() {
	return myRequest.get("/category")
}

// 二级菜单
export function getSubcategory(maitKey) {
	return myRequest.get(`/subcategory?maitKey=${maitKey}`)
}


// 详情数据
export function getCategoryDetail(type, miniWallkey) {
	return myRequest.get(`/subcategory/detail?miniWallkey=${miniWallkey}&type=${type}`)
}