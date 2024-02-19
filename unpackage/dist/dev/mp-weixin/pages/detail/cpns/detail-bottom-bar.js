"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "detail-bottom-bar",
  emits: ["addToCart"],
  setup(__props, { emit }) {
    function addToCart() {
      emit("addToCart");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(addToCart)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/detail/cpns/detail-bottom-bar.vue"]]);
wx.createComponent(Component);
