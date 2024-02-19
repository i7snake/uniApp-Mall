"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "grid-view-item",
  props: {
    itemInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["itemClick"],
  setup(__props, { emit }) {
    const props = __props;
    function handleItemClick() {
      emit("itemClick", props.itemInfo);
    }
    return (_ctx, _cache) => {
      return {
        a: __props.itemInfo.image || __props.itemInfo.img || __props.itemInfo.show.img,
        b: common_vendor.t(__props.itemInfo.title),
        c: common_vendor.t(__props.itemInfo.price),
        d: common_assets._imports_0,
        e: common_vendor.t(__props.itemInfo.cfav),
        f: common_vendor.o(handleItemClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/components/grid-view-item/grid-view-item.vue"]]);
wx.createComponent(Component);
