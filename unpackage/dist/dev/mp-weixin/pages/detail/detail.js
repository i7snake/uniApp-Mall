"use strict";
const common_vendor = require("../../common/vendor.js");
const store_detail = require("../../store/detail.js");
const utils_formatDate = require("../../utils/formatDate.js");
const store_cart = require("../../store/cart.js");
require("../../service/detail.js");
require("../../service/index.js");
if (!Math) {
  (DetailNavBar + DetailSwiper + DetailBaseInfo + DetailShopInfo + DetailGoodsInfo + DetailParamInfo + DetailCommentInfo + DetailRecommendInfo + DetailBottonBar)();
}
const DetailNavBar = () => "./cpns/detail-nav-bar.js";
const DetailBottonBar = () => "./cpns/detail-bottom-bar.js";
const DetailSwiper = () => "./cpns/detail-swiper.js";
const DetailBaseInfo = () => "./cpns/detail-base-info.js";
const DetailShopInfo = () => "./cpns/detail-shop-info.js";
const DetailGoodsInfo = () => "./cpns/detail-goods-info.js";
const DetailParamInfo = () => "./cpns/detail-param-info.js";
const DetailCommentInfo = () => "./cpns/detail-comment-info.js";
const DetailRecommendInfo = () => "./cpns/detail-recommend-info.js";
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const id = common_vendor.ref("");
    common_vendor.ref(0);
    const currentNavBarIndex = common_vendor.ref(0);
    const detailStore = store_detail.useDetailStore();
    const {
      topImages,
      goods,
      shop,
      detailInfo,
      paramInfo,
      commentInfo,
      recommendList
    } = common_vendor.storeToRefs(detailStore);
    common_vendor.onLoad((options) => {
      console.log(options.iid);
      id.value = options.iid;
    });
    common_vendor.onMounted(() => {
      detailStore.fetchGoodDetailData(id.value);
      detailStore.fetchGoodRecommend();
    });
    function handleNavBarItemClick(item) {
      currentNavBarIndex.value = item.id;
    }
    const handleaddToCart = utils_formatDate.debounce(() => {
      common_vendor.index.showToast({
        title: "已加入购物车",
        duration: 1e3
      });
      const obj = {};
      obj.iid = id.value;
      obj.imgURL = topImages.value[0];
      obj.title = goods.value.itemInfo.title;
      obj.desc = goods.value.itemInfo.desc;
      obj.newPrice = goods.value.itemInfo.highNowPrice;
      const cartStore = store_cart.useCartStore();
      cartStore.addCartAction(obj);
    }, 500);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(handleNavBarItemClick),
        b: currentNavBarIndex.value === 0
      }, currentNavBarIndex.value === 0 ? {
        c: common_vendor.p({
          banners: common_vendor.unref(topImages)
        }),
        d: common_vendor.p({
          goods: common_vendor.unref(goods)
        }),
        e: common_vendor.p({
          shop: common_vendor.unref(shop)
        }),
        f: common_vendor.p({
          detailInfo: common_vendor.unref(detailInfo)
        })
      } : currentNavBarIndex.value === 1 ? {
        h: common_vendor.p({
          paramInfo: common_vendor.unref(paramInfo)
        })
      } : currentNavBarIndex.value === 2 ? {
        j: common_vendor.p({
          commentInfo: common_vendor.unref(commentInfo)
        })
      } : {
        k: common_vendor.p({
          recommendList: common_vendor.unref(recommendList)
        })
      }, {
        g: currentNavBarIndex.value === 1,
        i: currentNavBarIndex.value === 2,
        l: common_vendor.o(common_vendor.unref(handleaddToCart))
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
