"use strict";
const common_vendor = require("../common/vendor.js");
const service_detail = require("../service/detail.js");
const useDetailStore = common_vendor.defineStore("detail", {
  state: () => {
    return {
      topImages: [],
      goods: {
        itemInfo: {},
        columns: [],
        services: []
      },
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: []
    };
  },
  actions: {
    async fetchGoodDetailData(id) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const res = await service_detail.getGoodDetail(id);
      console.log(res);
      this.topImages = ((_b = (_a = res.result) == null ? void 0 : _a.itemInfo) == null ? void 0 : _b.topImages) || [];
      this.shop = ((_c = res.result) == null ? void 0 : _c.shopInfo) || {};
      this.goods.itemInfo = ((_d = res.result) == null ? void 0 : _d.itemInfo) || [];
      this.goods.services = ((_f = (_e = res.result) == null ? void 0 : _e.shopInfo) == null ? void 0 : _f.services) || [];
      this.goods.columns = ((_g = res.result) == null ? void 0 : _g.columns) || [];
      this.detailInfo = ((_h = res.result) == null ? void 0 : _h.detailInfo) || {};
      this.paramInfo = ((_i = res.result) == null ? void 0 : _i.itemParams) || {};
      this.commentInfo = ((_j = res.result) == null ? void 0 : _j.rate) || {};
    },
    async fetchGoodRecommend() {
      var _a;
      const res = await service_detail.getCoodRecommend();
      this.recommendList = ((_a = res.data) == null ? void 0 : _a.list) || [];
    }
  }
});
exports.useDetailStore = useDetailStore;
