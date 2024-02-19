"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "detail-goods-info",
  props: {
    detailInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.detailInfo.desc),
        b: __props.detailInfo.detailImage
      }, __props.detailInfo.detailImage ? {
        c: common_vendor.t(__props.detailInfo.detailImage[0].key)
      } : {}, {
        d: __props.detailInfo.detailImage
      }, __props.detailInfo.detailImage ? {
        e: common_vendor.f(__props.detailInfo.detailImage[0].list, (item, index, i0) => {
          return {
            a: index,
            b: item
          };
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/detail/cpns/detail-goods-info.vue"]]);
wx.createComponent(Component);
