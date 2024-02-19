"use strict";
const service_index = require("./index.js");
const getGoodDetail = (id) => {
  return service_index.myRequest.get(`/detail?iid=${id}`);
};
const getCoodRecommend = () => {
  return service_index.myRequest.get("/recommend");
};
exports.getCoodRecommend = getCoodRecommend;
exports.getGoodDetail = getGoodDetail;
