import myRequest from "./index.js" 

// 详情页数据
export const getGoodDetail = (id) => {
	return myRequest.get(`/detail?iid=${id}`)
}


// 推荐数据
export const getCoodRecommend = () => {
	return myRequest.get("/recommend")
}