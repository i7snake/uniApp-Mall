"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "tab-menu",
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  emits: ["menuItemClick"],
  setup(__props, { emit }) {
    const currentTitle = common_vendor.ref("正在流行");
    const menuItemClick = (item) => {
      currentTitle.value = item.title;
      emit("menuItemClick", item);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.categories, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.n(currentTitle.value === item.title ? "active" : ""),
            c: common_vendor.o(($event) => menuItemClick(item), item.maitKey),
            d: item.maitKey
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/category/cpns/tab-menu.vue"]]);
wx.createComponent(Component);
