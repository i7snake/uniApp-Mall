import {defineStore} from "pinia"

export const useCartStore = defineStore("cart", {
	state: () => {
		return {		
			cartList: [] // 购物车的数据
		}		
	},
	getters: {
		cartCount() {
		const ischecked = this.cartList.filter(item => item.checked === true)
		return ischecked.length
		 // return this.cartList.length
		}
	},
	actions: {
		addCart(info) {
		    // console.log(info);
		    // 1.查看是否添加过
		    const oldInfo = this.cartList.find(item => item.iid === info.iid)
		
		    // 2.+1或者新添加
		    if (oldInfo) {
		      oldInfo.count += 1
		    } else {
		      info.count = 1
		      info.checked = true
		      this.cartList.push(info)
		    }
		},
		toggleChecked(info) {
			const currentInfo = this.cartList.find(item => item.iid === info.iid)
			if(currentInfo){
				currentInfo.checked = !currentInfo.checked
			}
		},
		checkedAll() {
			// 1.判断是否有未选中的按钮
			let isSelectAll = this.cartList.find(item => !item.checked);
			this.cartList.forEach((item)=>{
				item.checked = isSelectAll ? true : false
			})
		},
		addCartAction (info) { // 添加购物车
			this.addCart(info)
		}
	}
	
})