"use strict";
const common_vendor = require("../common/vendor.js");
const service_category = require("../service/category.js");
const useCategoryStore = common_vendor.defineStore("category", {
  state: () => {
    return {
      categories: [],
      subcategories: [],
      goodsListData: {}
    };
  },
  actions: {
    async fetchCategoryData() {
      const res = await service_category.getCategory();
      this.categories = res.data.category.list || [];
    },
    async fechSubcategoryData(maitKey) {
      const res = await service_category.getSubcategory(maitKey);
      this.subcategories = res.data.list || [];
    },
    async fetchCategoryDetailData(type, miniWallkey) {
      const res = await service_category.getCategoryDetail(type, miniWallkey);
      this.goodsListData = res;
    }
  }
});
exports.useCategoryStore = useCategoryStore;
