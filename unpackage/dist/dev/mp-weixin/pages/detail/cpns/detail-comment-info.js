"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_formatDate = require("../../../utils/formatDate.js");
const _sfc_main = {
  __name: "detail-comment-info",
  props: {
    commentInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const showDate = common_vendor.computed(() => {
      return (value) => {
        let date = new Date(value * 1e3);
        return utils_formatDate.formatDate(date, "yyyy-MM-dd");
      };
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: Object.keys(__props.commentInfo).length !== 0
      }, Object.keys(__props.commentInfo).length !== 0 ? common_vendor.e({
        b: __props.commentInfo.list[0].user
      }, __props.commentInfo.list[0].user ? {
        c: __props.commentInfo.list[0].user.avatar,
        d: common_vendor.t(__props.commentInfo.list[0].user.uname)
      } : {}, {
        e: common_vendor.t(__props.commentInfo.list[0].content),
        f: common_vendor.t(common_vendor.unref(showDate)(__props.commentInfo.list[0].created)),
        g: common_vendor.t(__props.commentInfo.list[0].style),
        h: common_vendor.f(__props.commentInfo.list[0].images, (item, index, i0) => {
          return {
            a: item
          };
        })
      }) : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/detail/cpns/detail-comment-info.vue"]]);
wx.createComponent(Component);
