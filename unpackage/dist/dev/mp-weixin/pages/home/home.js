"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_tab_control2 = common_vendor.resolveComponent("tab-control");
  const _easycom_grid_view_item2 = common_vendor.resolveComponent("grid-view-item");
  (_easycom_tab_control2 + _easycom_grid_view_item2)();
}
const _easycom_tab_control = () => "../../components/tab-control/tab-control.js";
const _easycom_grid_view_item = () => "../../components/grid-view-item/grid-view-item.js";
if (!Math) {
  (homeBanner + homeRecommend + homePopular + _easycom_tab_control + _easycom_grid_view_item)();
}
const homeBanner = () => "./cpns/home-banner.js";
const homeRecommend = () => "./cpns/home-recommend.js";
const homePopular = () => "./cpns/home-popular.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home.useHomeStore();
    const {
      banners,
      recommends,
      goodsList,
      currentType
    } = common_vendor.storeToRefs(homeStore);
    common_vendor.onLoad(() => {
      homeStore.fetchHomeMultiData();
      homeStore.fetchHomeData("pop", 1);
      homeStore.fetchHomeData("new", 1);
      homeStore.fetchHomeData("sell", 1);
    });
    common_vendor.onReachBottom(() => {
      homeStore.fetchHomeData(currentType.value, goodsList.value[currentType.value].page + 1);
    });
    function handleBannerItemClick(link) {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + link
      });
    }
    function handletabItemClick(index) {
      homeStore.setCurrentType(store_home.types[index]);
    }
    function handleGridItemClick(itemInfo) {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail?iid=" + itemInfo.iid
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleBannerItemClick),
        b: common_vendor.p({
          banners: common_vendor.unref(banners)
        }),
        c: common_vendor.p({
          recommends: common_vendor.unref(recommends)
        }),
        d: common_vendor.o(handletabItemClick),
        e: common_vendor.p({
          titles: ["流行", "新款", "精选"]
        }),
        f: common_vendor.f(common_vendor.unref(goodsList)[common_vendor.unref(currentType)].list, (itemInfo, index, i0) => {
          return {
            a: common_vendor.o(handleGridItemClick, itemInfo.iid),
            b: "265a8826-4-" + i0,
            c: common_vendor.p({
              itemInfo
            }),
            d: itemInfo.iid
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
