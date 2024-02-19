"use strict";
const common_vendor = require("../common/vendor.js");
const useCartStore = common_vendor.defineStore("cart", {
  state: () => {
    return {
      cartList: []
      // 购物车的数据
    };
  },
  getters: {
    cartCount() {
      const ischecked = this.cartList.filter((item) => item.checked === true);
      return ischecked.length;
    }
  },
  actions: {
    addCart(info) {
      const oldInfo = this.cartList.find((item) => item.iid === info.iid);
      if (oldInfo) {
        oldInfo.count += 1;
      } else {
        info.count = 1;
        info.checked = true;
        this.cartList.push(info);
      }
    },
    toggleChecked(info) {
      const currentInfo = this.cartList.find((item) => item.iid === info.iid);
      if (currentInfo) {
        currentInfo.checked = !currentInfo.checked;
      }
    },
    checkedAll() {
      let isSelectAll = this.cartList.find((item) => !item.checked);
      this.cartList.forEach((item) => {
        item.checked = isSelectAll ? true : false;
      });
    },
    addCartAction(info) {
      this.addCart(info);
    }
  }
});
exports.useCartStore = useCartStore;
