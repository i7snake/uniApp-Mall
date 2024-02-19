"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_cart = require("../../../store/cart.js");
const _sfc_main = {
  __name: "cart-list-item",
  props: {
    itemInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["checkedChange"],
  setup(__props, { emit }) {
    function onChange(itemInfo) {
      const cartStore = store_cart.useCartStore();
      cartStore.toggleChecked(itemInfo);
      emit("checkedChange", itemInfo);
    }
    return (_ctx, _cache) => {
      return {
        a: __props.itemInfo.checked,
        b: common_vendor.o(($event) => onChange(__props.itemInfo)),
        c: __props.itemInfo.imgURL,
        d: common_vendor.t(__props.itemInfo.title),
        e: common_vendor.t(__props.itemInfo.desc),
        f: common_vendor.t(__props.itemInfo.newPrice),
        g: common_vendor.t(__props.itemInfo.count)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/cart/cpns/cart-list-item.vue"]]);
wx.createComponent(Component);
