"use strict";
const common_vendor = require("../../common/vendor.js");
const store_category = require("../../store/category.js");
require("../../service/category.js");
require("../../service/index.js");
if (!Math) {
  (tabMenu + tabContentCategory + tabControl + gridViewItem)();
}
const tabMenu = () => "./cpns/tab-menu.js";
const tabContentCategory = () => "./cpns/tab-content-category.js";
const tabControl = () => "../../components/tab-control/tab-control.js";
const gridViewItem = () => "../../components/grid-view-item/grid-view-item.js";
const _sfc_main = {
  __name: "category",
  setup(__props) {
    const categoryStore = store_category.useCategoryStore();
    const {
      categories,
      //一级菜单
      subcategories,
      //二级菜单
      goodsListData
      // 详情数据
    } = common_vendor.storeToRefs(categoryStore);
    const currentType = common_vendor.ref("pop");
    const types = ["pop", "new", "sell"];
    const goodsListOrigin = {};
    types.forEach((type) => {
      goodsListOrigin[type] = [];
    });
    const goodsList = common_vendor.reactive(goodsListOrigin);
    common_vendor.onMounted(() => {
      categoryStore.fetchCategoryData().then((res) => {
        if (categories.value && categories.value.length) {
          getCategoryContentData(categories.value[0]);
        }
      });
    });
    function tabMenuItemClick(menuData) {
      if (menuData) {
        getCategoryContentData(menuData);
      }
    }
    function handleTabClick(index) {
      currentType.value = types[index];
    }
    function handleGoodItemClick(itemInfo) {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail?iid=" + itemInfo.iid,
        fail(err) {
          console.log(err);
        }
      });
    }
    const getCategoryContentData = (menuData = {}) => {
      let {
        maitKey,
        miniWallkey
      } = menuData;
      categoryStore.fechSubcategoryData(maitKey);
      getCategoryDataAction("pop", miniWallkey);
      getCategoryDataAction("new", miniWallkey);
      getCategoryDataAction("sell", miniWallkey);
    };
    const getCategoryDataAction = (type, miniWallkey) => {
      categoryStore.fetchCategoryDetailData(type, miniWallkey).then((res) => {
        goodsList[type] = goodsListData.value;
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(tabMenuItemClick),
        b: common_vendor.p({
          categories: common_vendor.unref(categories)
        }),
        c: common_vendor.p({
          subcategories: common_vendor.unref(subcategories)
        }),
        d: common_vendor.o(handleTabClick),
        e: common_vendor.p({
          titles: ["综合", "新品", "销量"]
        }),
        f: common_vendor.f(goodsList[currentType.value], (item, index, i0) => {
          return {
            a: common_vendor.o(handleGoodItemClick, item.cfav + "_" + item.iid),
            b: "06fec0cd-3-" + i0,
            c: common_vendor.p({
              itemInfo: item
            }),
            d: item.cfav + "_" + item.iid
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
