"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_cart = require("../../../store/cart.js");
const _sfc_main = {
  __name: "bottom-bar",
  emits: ["checkedAllChange"],
  setup(__props, { emit }) {
    const cartStore = store_cart.useCartStore();
    const checked = common_vendor.ref(false);
    const totalPrice = common_vendor.computed(() => {
      let isSelectAll = cartStore.cartList.find((item) => !item.checked);
      checked.value = isSelectAll ? false : true;
      return cartStore.cartList.filter((item) => {
        return item.checked;
      }).reduce((preValue, item) => {
        return preValue + item.count * item.newPrice;
      }, 0).toFixed(2);
    });
    const cartCount = common_vendor.computed(() => {
      let counter = cartStore.cartCount || 0;
      if (counter > 0) {
        if (counter === cartStore.cartList.length) {
          checked.value = true;
        }
      } else {
        checked.value = false;
      }
      return counter;
    });
    const onChange = () => {
      checked.value = !checked.value;
      cartStore.checkedAll();
      emit("checkedAllChange", checked.value);
    };
    return (_ctx, _cache) => {
      return {
        a: checked.value,
        b: common_vendor.o(onChange),
        c: common_vendor.t(common_vendor.unref(totalPrice)),
        d: common_vendor.t(common_vendor.unref(cartCount))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/cart/cpns/bottom-bar.vue"]]);
wx.createComponent(Component);
