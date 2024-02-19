"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  (_easycom_uni_td2 + _easycom_uni_tr2 + _easycom_uni_table2)();
}
const _easycom_uni_td = () => "../../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_tr = () => "../../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_table = () => "../../../uni_modules/uni-table/components/uni-table/uni-table.js";
if (!Math) {
  (_easycom_uni_td + _easycom_uni_tr + _easycom_uni_table)();
}
const _sfc_main = {
  __name: "detail-param-info",
  props: {
    paramInfo: {
      tyep: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    const getTableData = common_vendor.computed(() => {
      var _a, _b;
      return ((_b = (_a = props.paramInfo) == null ? void 0 : _a.rule) == null ? void 0 : _b.tables[0]) || [];
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: Object.keys(__props.paramInfo).length !== 0
      }, Object.keys(__props.paramInfo).length !== 0 ? {
        b: common_vendor.f(common_vendor.unref(getTableData), (table, index, i0) => {
          return {
            a: common_vendor.t(table[0]),
            b: "2237852e-2-" + i0 + "," + ("2237852e-1-" + i0),
            c: common_vendor.t(table[1]),
            d: "2237852e-3-" + i0 + "," + ("2237852e-1-" + i0),
            e: common_vendor.t(table[2]),
            f: "2237852e-4-" + i0 + "," + ("2237852e-1-" + i0),
            g: common_vendor.t(table[3]),
            h: "2237852e-5-" + i0 + "," + ("2237852e-1-" + i0),
            i: "2237852e-1-" + i0 + ",2237852e-0",
            j: index
          };
        }),
        c: common_vendor.p({
          emptyText: "暂无更多数据"
        })
      } : {}, {
        d: Object.keys(__props.paramInfo).length !== 0
      }, Object.keys(__props.paramInfo).length !== 0 ? {
        e: common_vendor.f(__props.paramInfo.info.set, (info, index, i0) => {
          return {
            a: common_vendor.t(info.key),
            b: "2237852e-8-" + i0 + "," + ("2237852e-7-" + i0),
            c: common_vendor.t(info.value),
            d: "2237852e-9-" + i0 + "," + ("2237852e-7-" + i0),
            e: "2237852e-7-" + i0 + ",2237852e-6",
            f: index
          };
        }),
        f: common_vendor.p({
          width: 76
        }),
        g: common_vendor.p({
          emptyText: "暂无更多数据"
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/前端/项目/uni-app/uniAppMall/pages/detail/cpns/detail-param-info.vue"]]);
wx.createComponent(Component);
