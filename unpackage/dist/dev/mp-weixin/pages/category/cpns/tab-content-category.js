"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "tab-content-category",
  props: {
    subcategories: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    function itemClick(item) {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + item.link,
        fail: (err) => {
          console.log(err);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.subcategories, (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => itemClick(item), item),
            d: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/category/cpns/tab-content-category.vue"]]);
wx.createComponent(Component);
