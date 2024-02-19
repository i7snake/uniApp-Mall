"use strict";
const common_vendor = require("../../common/vendor.js");
const store_cart = require("../../store/cart.js");
if (!Math) {
  (cartListItem + bottomBar)();
}
const cartListItem = () => "./cpns/cart-list-item.js";
const bottomBar = () => "./cpns/bottom-bar.js";
const _sfc_main = {
  __name: "cart",
  setup(__props) {
    const cartStore = store_cart.useCartStore();
    const { cartList } = common_vendor.storeToRefs(cartStore);
    function handleCheckedChange(itemInfo) {
      console.log("checked=>", itemInfo.checked);
    }
    function handlecCheckedAllChange(checked) {
      console.log("checked=>", checked);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(cartList)
      }, common_vendor.unref(cartList) ? {
        b: common_vendor.f(common_vendor.unref(cartList), (item, k0, i0) => {
          return {
            a: common_vendor.o(handleCheckedChange, item.iid),
            b: "2eb02c8d-0-" + i0,
            c: common_vendor.p({
              itemInfo: item
            }),
            d: item.iid
          };
        })
      } : {}, {
        c: common_vendor.o(handlecCheckedAllChange)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
