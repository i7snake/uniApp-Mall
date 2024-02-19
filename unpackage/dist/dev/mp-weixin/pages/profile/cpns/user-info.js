"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "user-info",
  setup(__props) {
    function itemClick() {
      console.log("登录/注册");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(itemClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/profile/cpns/user-info.vue"]]);
wx.createComponent(Component);
