"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "detail-swiper",
  props: {
    banners: {
      type: Array,
      default: () => []
    },
    height: {
      type: String,
      default: "600rpx"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banners, (item, index, i0) => {
          return {
            a: item,
            b: item
          };
        }),
        b: __props.height
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/detail/cpns/detail-swiper.vue"]]);
wx.createComponent(Component);
