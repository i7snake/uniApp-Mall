"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "detail-nav-bar",
  props: {
    titleInfos: {
      type: Array,
      default: function() {
        return [
          {
            id: 0,
            title: "商品"
          },
          {
            id: 1,
            title: "参数"
          },
          {
            id: 2,
            title: "评论"
          },
          {
            id: 3,
            title: "推荐"
          }
        ];
      }
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ["itemClick"],
  setup(__props, { emit }) {
    const props = __props;
    const currentIndex = common_vendor.ref(props.defaultIndex);
    function itemClick(item) {
      currentIndex.value = item.id;
      emit("itemClick", item);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.titleInfos, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.n(currentIndex.value === item.id ? "active" : ""),
            c: common_vendor.o(($event) => itemClick(item), item.id),
            d: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/detail/cpns/detail-nav-bar.vue"]]);
wx.createComponent(Component);
