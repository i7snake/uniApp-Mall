"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "detail-base-info",
  props: {
    goods: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.goods.itemInfo.title),
        b: common_vendor.t(__props.goods.itemInfo.price),
        c: common_vendor.t(__props.goods.itemInfo.lowPrice),
        d: common_vendor.t(__props.goods.itemInfo.discountDesc),
        e: common_vendor.t(__props.goods.columns[0]),
        f: common_vendor.t(__props.goods.columns[1]),
        g: common_vendor.t(__props.goods.columns[2]),
        h: __props.goods.services
      }, __props.goods.services ? {
        i: common_vendor.f(4, (index, k0, i0) => {
          var _a, _b;
          return {
            a: (_a = __props.goods.services[index - 1]) == null ? void 0 : _a.icon,
            b: common_vendor.t((_b = __props.goods.services[index - 1]) == null ? void 0 : _b.name),
            c: index
          };
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/detail/cpns/detail-base-info.vue"]]);
wx.createComponent(Component);
