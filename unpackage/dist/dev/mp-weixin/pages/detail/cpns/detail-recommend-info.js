"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  gridViewItem();
}
const gridViewItem = () => "../../../components/grid-view-item/grid-view-item.js";
const _sfc_main = {
  __name: "detail-recommend-info",
  props: {
    recommendList: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    function handleGoodItemClick(itemInfo) {
      console.log(itemInfo.iid);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.recommendList, (item, index, i0) => {
          return {
            a: common_vendor.o(handleGoodItemClick, item.shop_id),
            b: "4d06609a-0-" + i0,
            c: common_vendor.p({
              itemInfo: item
            }),
            d: item.shop_id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/detail/cpns/detail-recommend-info.vue"]]);
wx.createComponent(Component);
