import myRequest from "./index.js" 

//首页 home 接口请求
 
 // 1. 获取首页Banner等数据
export const getHomeMutidata = () => {
	return myRequest.get("/home/multidata",{})
}


//2. 首页商品列表
export const getHomeData =(type,page) => {
	return myRequest.get("/home/data",{
		type,
		page
	})
}
