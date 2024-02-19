"use strict";
const service_index = require("./index.js");
function getCategory() {
  return service_index.myRequest.get("/category");
}
function getSubcategory(maitKey) {
  return service_index.myRequest.get(`/subcategory?maitKey=${maitKey}`);
}
function getCategoryDetail(type, miniWallkey) {
  return service_index.myRequest.get(`/subcategory/detail?miniWallkey=${miniWallkey}&type=${type}`);
}
exports.getCategory = getCategory;
exports.getCategoryDetail = getCategoryDetail;
exports.getSubcategory = getSubcategory;
