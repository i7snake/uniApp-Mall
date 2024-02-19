"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "detail-shop-info",
  props: {
    shop: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const formateNumber = common_vendor.computed(() => {
      return (number) => {
        if (number < 1e4)
          return number;
        return (number / 1e4).toFixed(1) + "万";
      };
    });
    return (_ctx, _cache) => {
      return {
        a: __props.shop.shopLogo,
        b: common_vendor.t(__props.shop.name),
        c: common_vendor.t(common_vendor.unref(formateNumber)(__props.shop.cSells)),
        d: common_vendor.t(__props.shop.cGoods),
        e: common_vendor.f(__props.shop.score, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.score),
            c: item.isBetter ? 1 : "",
            d: common_vendor.t(item.isBetter ? "高" : "低"),
            e: item.isBetter ? 1 : "",
            f: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/detail/cpns/detail-shop-info.vue"]]);
wx.createComponent(Component);
