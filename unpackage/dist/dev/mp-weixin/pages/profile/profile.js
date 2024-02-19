"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  userInfo();
}
const userInfo = () => "./cpns/user-info.js";
const _sfc_main = {
  __name: "profile",
  setup(__props) {
    const gridItemDatas = common_vendor.ref([
      {
        price: 0,
        decimal: 2,
        // 保留2位小数点
        unit: "元",
        name: "我的余额"
      },
      {
        price: 0,
        unit: "个",
        name: "我的优惠"
      },
      {
        price: 0,
        unit: "分",
        name: "我的积分"
      }
    ]);
    const orderList = [
      { icon: common_assets.messagePNG, iconColor: "#ff8198", info: "我的消息" },
      { icon: common_assets.appPNG, iconColor: "#fc7b53", info: "积分商城" },
      { icon: common_assets.vipPNG, iconColor: "#ffc636", info: "会员卡" }
    ];
    const serviceList = [
      { icon: common_assets.cartPNG, iconColor: "#ff8198", info: "我的购物车" },
      { icon: common_assets.pointerPNG, iconColor: "#ff8198", info: "下载购物APP" }
    ];
    return (_ctx, _cache) => {
      return {
        a: gridItemDatas.value,
        b: orderList,
        c: serviceList
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/profile/profile.vue"]]);
wx.createPage(MiniProgramPage);
