if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$v = {
    __name: "tab-control",
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },
    emits: ["tabItemClick"],
    setup(__props, { emit }) {
      const currentIndex = vue.ref(0);
      function handleItemClick(index) {
        currentIndex.value = index;
        emit("tabItemClick", index);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "tab-control" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.titles, (title, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: vue.normalizeClass(["item", currentIndex.value === index ? "active" : ""]),
                onClick: ($event) => handleItemClick(index)
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "title" },
                  vue.toDisplayString(title),
                  1
                  /* TEXT */
                )
              ], 10, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const tabControl = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-86d07902"], ["__file", "D:/前端/练习/uni-app/uniAppMall/components/tab-control/tab-control.vue"]]);
  const ON_LOAD = "onLoad";
  const ON_REACH_BOTTOM = "onReachBottom";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const _imports_0$1 = "/static/images/common/favor.png";
  const _sfc_main$u = {
    __name: "grid-view-item",
    props: {
      itemInfo: {
        type: Object,
        default: () => {
        }
      }
    },
    emits: ["itemClick"],
    setup(__props, { emit }) {
      const props = __props;
      function handleItemClick() {
        emit("itemClick", props.itemInfo);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "goods-item",
          onClick: handleItemClick
        }, [
          vue.createCommentVNode(" 图片懒加载  各组件传递过来的图片||或"),
          vue.createElementVNode("image", {
            class: "image",
            src: __props.itemInfo.image || __props.itemInfo.img || __props.itemInfo.show.img,
            mode: "widthFix"
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "desc-info" }, [
            vue.createElementVNode(
              "view",
              { class: "title" },
              vue.toDisplayString(__props.itemInfo.title),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "info" }, [
              vue.createElementVNode(
                "text",
                { class: "price" },
                "￥" + vue.toDisplayString(__props.itemInfo.price),
                1
                /* TEXT */
              ),
              vue.createElementVNode("image", {
                class: "icon",
                src: _imports_0$1,
                mode: ""
              }),
              vue.createElementVNode(
                "text",
                { class: "cfav" },
                vue.toDisplayString(__props.itemInfo.cfav),
                1
                /* TEXT */
              )
            ])
          ])
        ]);
      };
    }
  };
  const gridViewItem = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-8ed22fda"], ["__file", "D:/前端/练习/uni-app/uniAppMall/components/grid-view-item/grid-view-item.vue"]]);
  var isVue2 = false;
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * pinia v2.0.33
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    */
  let activePinia;
  const setActivePinia = (pinia2) => activePinia = pinia2;
  const getActivePinia = () => vue.getCurrentInstance() && vue.inject(piniaSymbol) || activePinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a = document.createElement("a");
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
      a.href = blob;
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          download(blob, name, opts);
        } else {
          a.target = "_blank";
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      a.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a.href);
      }, 4e4);
      setTimeout(function() {
        click(a);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a = document.createElement("a");
        a.href = blob;
        a.target = "_blank";
        setTimeout(function() {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia2) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia2.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia2) {
    if (checkClipboardAccess())
      return;
    try {
      pinia2.state.value = JSON.parse(await navigator.clipboard.readText());
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia2) {
    try {
      saveAs(new Blob([JSON.stringify(pinia2.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia2) {
    try {
      const open2 = await getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      pinia2.state.value = JSON.parse(text);
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia2) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia2);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia2);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia2);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia2);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: "Reset the state (option store only)",
            action: (nodeId) => {
              const store = pinia2._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (!store._isOptionsAPI) {
                toastMessage(`Cannot reset "${nodeId}" store because it's a setup store.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia2];
          stores = stores.concat(Array.from(pinia2._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia2 : pinia2._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia2 : pinia2._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia2._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        activeAction = void 0;
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        });
        return actions[actionName].apply(trackedStore, arguments);
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    if (options.state) {
      store._isOptionsAPI = true;
    }
    if (typeof options.state === "function") {
      patchActionForGrouping(
        // @ts-expect-error: can cast the store...
        store,
        Object.keys(options.actions)
      );
      const originalHotUpdate = store._hotUpdate;
      vue.toRaw(store)._hotUpdate = function(newStore) {
        originalHotUpdate.apply(this, arguments);
        patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
      };
    }
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia2 = vue.markRaw({
      install(app) {
        setActivePinia(pinia2);
        {
          pinia2._a = app;
          app.provide(piniaSymbol, pinia2);
          app.config.globalProperties.$pinia = pinia2;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia2);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia2.use(devtoolsPlugin);
    }
    return pinia2;
  }
  const isUseStore = (fn) => {
    return typeof fn === "function" && typeof fn.$id === "string";
  };
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  function acceptHMRUpdate(initialUseStore, hot) {
    return (newModule) => {
      const pinia2 = hot.data.pinia || initialUseStore._pinia;
      if (!pinia2) {
        return;
      }
      hot.data.pinia = pinia2;
      for (const exportName in newModule) {
        const useStore = newModule[exportName];
        if (isUseStore(useStore) && pinia2._s.has(useStore.$id)) {
          const id = useStore.$id;
          if (id !== initialUseStore.$id) {
            console.warn(`The id of the store changed from "${initialUseStore.$id}" to "${id}". Reloading.`);
            return hot.invalidate();
          }
          const existingStore = pinia2._s.get(id);
          if (!existingStore) {
            console.log(`[Pinia]: skipping hmr because store doesn't exist yet`);
            return;
          }
          useStore(pinia2, existingStore);
        }
      }
    };
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function skipHydrate(obj) {
    return Object.defineProperty(obj, skipHydrateSymbol, {});
  }
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia2, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia2.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia2.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia2.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia2);
          const store2 = pinia2._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia2, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia2, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia2._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = vue.markRaw([]);
    let actionSubscriptions = vue.markRaw([]);
    let debuggerEvents;
    const initialState = pinia2.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia2.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia2.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia2.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia2.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia2._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia2);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia2,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia2.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(
      assign(
        {
          _hmrPayload,
          _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
          // devtools custom properties
        },
        partialStore
        // must be added later
        // setupStore
      )
    );
    pinia2._s.set($id, store);
    const setupStore = pinia2._e.run(() => {
      scope = vue.effectScope();
      return scope.run(() => setup());
    });
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia2.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia2.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia2.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia2);
              return getter.call(store, store);
            })
          ) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
      });
    }
    pinia2._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia2._a,
          pinia: pinia2,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia2._a,
          pinia: pinia2,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
    }
    function useStore(pinia2, hot) {
      const currentInstance = vue.getCurrentInstance();
      pinia2 = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia2 || currentInstance && vue.inject(piniaSymbol, null);
      if (pinia2)
        setActivePinia(pinia2);
      if (!activePinia) {
        throw new Error(`[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
      }
      pinia2 = activePinia;
      if (!pinia2._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia2);
        } else {
          createOptionsStore(id, options, pinia2);
        }
        {
          useStore._pinia = pinia2;
        }
      }
      const store = pinia2._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia2, true) : createOptionsStore(hotId, assign({}, options), pinia2, true);
        hot._hotUpdate(newStore);
        delete pinia2.state.value[hotId];
        pinia2._s.delete(hotId);
      }
      if (IS_CLIENT && currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
      !hot) {
        const vm = currentInstance.proxy;
        const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache[id] = store;
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  let mapStoreSuffix = "Store";
  function setMapStoreSuffix(suffix) {
    mapStoreSuffix = suffix;
  }
  function mapStores(...stores) {
    if (Array.isArray(stores[0])) {
      console.warn(`[🍍]: Directly pass all stores to "mapStores()" without putting them in an array:
Replace
	mapStores([useAuthStore, useCartStore])
with
	mapStores(useAuthStore, useCartStore)
This will fail in production if not fixed.`);
      stores = stores[0];
    }
    return stores.reduce((reduced, useStore) => {
      reduced[useStore.$id + mapStoreSuffix] = function() {
        return useStore(this.$pinia);
      };
      return reduced;
    }, {});
  }
  function mapState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function() {
        return useStore(this.$pinia)[key];
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function() {
        const store = useStore(this.$pinia);
        const storeKey = keysOrMapper[key];
        return typeof storeKey === "function" ? storeKey.call(this, store) : store[storeKey];
      };
      return reduced;
    }, {});
  }
  const mapGetters = mapState;
  function mapActions(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[key](...args);
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[keysOrMapper[key]](...args);
      };
      return reduced;
    }, {});
  }
  function mapWritableState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[key];
        },
        set(value) {
          return useStore(this.$pinia)[key] = value;
        }
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[keysOrMapper[key]];
        },
        set(value) {
          return useStore(this.$pinia)[keysOrMapper[key]] = value;
        }
      };
      return reduced;
    }, {});
  }
  function storeToRefs(store) {
    {
      store = vue.toRaw(store);
      const refs = {};
      for (const key in store) {
        const value = store[key];
        if (vue.isRef(value) || vue.isReactive(value)) {
          refs[key] = // ---
          vue.toRef(store, key);
        }
      }
      return refs;
    }
  }
  const PiniaVuePlugin = function(_Vue) {
    _Vue.mixin({
      beforeCreate() {
        const options = this.$options;
        if (options.pinia) {
          const pinia2 = options.pinia;
          if (!this._provided) {
            const provideCache = {};
            Object.defineProperty(this, "_provided", {
              get: () => provideCache,
              set: (v) => Object.assign(provideCache, v)
            });
          }
          this._provided[piniaSymbol] = pinia2;
          if (!this.$pinia) {
            this.$pinia = pinia2;
          }
          pinia2._a = this;
          if (IS_CLIENT) {
            setActivePinia(pinia2);
          }
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(pinia2._a, pinia2);
          }
        } else if (!this.$pinia && options.parent && options.parent.$pinia) {
          this.$pinia = options.parent.$pinia;
        }
      },
      destroyed() {
        delete this._pStores;
      }
    });
  };
  const pinia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    get MutationType() {
      return MutationType;
    },
    PiniaVuePlugin,
    acceptHMRUpdate,
    createPinia,
    defineStore,
    getActivePinia,
    mapActions,
    mapGetters,
    mapState,
    mapStores,
    mapWritableState,
    setActivePinia,
    setMapStoreSuffix,
    skipHydrate,
    storeToRefs
  }, Symbol.toStringTag, { value: "Module" }));
  const TIME_OUT = 6e4;
  const BASE_URL = "http://123.207.32.32:7888/api/hy66";
  class MYRequest {
    request(url, method, data) {
      return new Promise((resolve, reject) => {
        uni.request({
          url: BASE_URL + url,
          method: method || "GET",
          timeout: TIME_OUT,
          data,
          success(res) {
            resolve(res.data);
          },
          fail(err) {
            reject(err);
          }
        });
      });
    }
    get(url, params2) {
      return this.request(url, "GET", params2);
    }
    post(url, data) {
      return this.request(url, "POST", params);
    }
  }
  const myRequest = new MYRequest();
  const getHomeMutidata = () => {
    return myRequest.get("/home/multidata", {});
  };
  const getHomeData = (type, page) => {
    return myRequest.get("/home/data", {
      type,
      page
    });
  };
  const types = ["pop", "new", "sell"];
  function getDefaultGoodsListData() {
    let goodsListOrign = {};
    types.forEach((type) => {
      goodsListOrign[type] = { page: 0, list: [] };
    });
    return goodsListOrign;
  }
  const useHomeStore = defineStore("home", {
    state: () => {
      return {
        banners: [],
        recommends: [],
        currentType: "pop",
        //pop new sell
        goodsList: getDefaultGoodsListData()
      };
    },
    actions: {
      setCurrentType(type) {
        this.currentType = type;
      },
      // 获取首页轮播图和推荐栏数据
      async fetchHomeMultiData() {
        const res = await getHomeMutidata();
        this.banners = res.data.banner.list || [];
        this.recommends = res.data.recommend.list || [];
      },
      async fetchHomeData(type, page) {
        const res = await getHomeData(type, page);
        this.goodsList[type].list.push(...res.data.list);
        this.goodsList[type].page = page;
      }
    }
  });
  const _sfc_main$t = {
    __name: "home-banner",
    props: {
      banners: {
        type: Array,
        default: () => []
      }
    },
    emits: ["bannerItemClick"],
    setup(__props, { emit }) {
      function handleItemClick(item) {
        emit("bannerItemClick", item.link);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("swiper", {
          class: "banner",
          "indicator-dots": true,
          "indicator-active-color": "#ff8198",
          autoplay: true,
          interval: 3e3,
          duration: 1e3
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.banners, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", {
                key: item,
                onClick: ($event) => handleItemClick(item)
              }, [
                vue.createElementVNode("image", {
                  class: "swiper-image",
                  src: item.image,
                  mode: "widthFix"
                }, null, 8, ["src"])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const homeBanner = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-945d8e98"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/home/cpns/home-banner.vue"]]);
  const _sfc_main$s = {
    __name: "home-recommend",
    props: {
      recommends: {
        type: Array,
        default: () => []
      }
    },
    emits: ["itemClick"],
    setup(__props, { emit }) {
      function handleItemClick(item) {
        emit("itemClick", item);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "recommend" }, [
          vue.createCommentVNode(" {{recommends}} "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.recommends, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: item,
                class: "recommend-item",
                onClick: ($event) => handleItemClick(item)
              }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: item.image,
                  mode: "widthFix"
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "view",
                  { class: "title" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                )
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const homeRecommend = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-637e2969"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/home/cpns/home-recommend.vue"]]);
  const _imports_0 = "/static/recommend_bg.jpg";
  const _sfc_main$r = {};
  function _sfc_render$4(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "home-popular" }, [
      vue.createElementVNode("image", {
        class: "image",
        src: _imports_0,
        mode: "widthFix"
      })
    ]);
  }
  const homePopular = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$4], ["__scopeId", "data-v-29e3ef9e"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/home/cpns/home-popular.vue"]]);
  const _sfc_main$q = {
    __name: "home",
    setup(__props) {
      const homeStore = useHomeStore();
      const {
        banners,
        recommends,
        goodsList,
        currentType
      } = storeToRefs(homeStore);
      onLoad(() => {
        homeStore.fetchHomeMultiData();
        homeStore.fetchHomeData("pop", 1);
        homeStore.fetchHomeData("new", 1);
        homeStore.fetchHomeData("sell", 1);
      });
      onReachBottom(() => {
        homeStore.fetchHomeData(currentType.value, goodsList.value[currentType.value].page + 1);
      });
      function handleBannerItemClick(link) {
        uni.navigateTo({
          url: "/pages/webview/webview?link=" + link
        });
      }
      function handletabItemClick(index) {
        homeStore.setCurrentType(types[index]);
      }
      function handleGridItemClick(itemInfo) {
        uni.navigateTo({
          url: "/pages/detail/detail?iid=" + itemInfo.iid
        });
      }
      return (_ctx, _cache) => {
        const _component_tab_control = resolveEasycom(vue.resolveDynamicComponent("tab-control"), tabControl);
        const _component_grid_view_item = resolveEasycom(vue.resolveDynamicComponent("grid-view-item"), gridViewItem);
        return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
          vue.createCommentVNode(" 轮播图组件 "),
          vue.createVNode(homeBanner, {
            banners: vue.unref(banners),
            onBannerItemClick: handleBannerItemClick
          }, null, 8, ["banners"]),
          vue.createCommentVNode(" 推荐栏组件 "),
          vue.createVNode(homeRecommend, { recommends: vue.unref(recommends) }, null, 8, ["recommends"]),
          vue.createCommentVNode(" 热门栏组件 "),
          vue.createVNode(homePopular),
          vue.createCommentVNode(" 选项卡组件 components中符合easycom组件规范可以直接使用 无需导入 "),
          vue.createVNode(_component_tab_control, {
            class: "tab-control",
            titles: ["流行", "新款", "精选"],
            onTabItemClick: handletabItemClick
          }),
          vue.createCommentVNode(" 商品列表(九宫格) "),
          vue.createCommentVNode(' <uni-grid \r\n		:column="2" \r\n		:showBorder="false" \r\n		borderColor="#ff8198" \r\n		:highlight="false"\r\n		:square="false">\r\n			<template v-for="(itemInfo,index) in goodsList[currentType].list" :key="itemInfo.iid">\r\n				<uni-grid-item :index="index">\r\n					<grid-view-item :itemInfo="itemInfo" @itemClick="handleGridItemClick"></grid-view-item>\r\n				</uni-grid-item>\r\n			</template>\r\n		</uni-grid> '),
          vue.createElementVNode("view", { class: "goods-list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(goodsList)[vue.unref(currentType)].list, (itemInfo, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: itemInfo.iid,
                  class: "item"
                }, [
                  vue.createVNode(_component_grid_view_item, {
                    itemInfo,
                    onItemClick: handleGridItemClick
                  }, null, 8, ["itemInfo"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__file", "D:/前端/练习/uni-app/uniAppMall/pages/home/home.vue"]]);
  const useCartStore = defineStore("cart", {
    state: () => {
      return {
        cartList: []
        // 购物车的数据
      };
    },
    getters: {
      cartCount() {
        const ischecked = this.cartList.filter((item) => item.checked === true);
        return ischecked.length;
      }
    },
    actions: {
      addCart(info) {
        const oldInfo = this.cartList.find((item) => item.iid === info.iid);
        if (oldInfo) {
          oldInfo.count += 1;
        } else {
          info.count = 1;
          info.checked = true;
          this.cartList.push(info);
        }
      },
      toggleChecked(info) {
        const currentInfo = this.cartList.find((item) => item.iid === info.iid);
        if (currentInfo) {
          currentInfo.checked = !currentInfo.checked;
        }
      },
      checkedAll() {
        let isSelectAll = this.cartList.find((item) => !item.checked);
        this.cartList.forEach((item) => {
          item.checked = isSelectAll ? true : false;
        });
      },
      addCartAction(info) {
        this.addCart(info);
      }
    }
  });
  const _sfc_main$p = {
    __name: "cart-list-item",
    props: {
      itemInfo: {
        type: Object,
        default: () => {
        }
      }
    },
    emits: ["checkedChange"],
    setup(__props, { emit }) {
      function onChange(itemInfo) {
        const cartStore = useCartStore();
        cartStore.toggleChecked(itemInfo);
        emit("checkedChange", itemInfo);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "cart-list-item" }, [
          vue.createElementVNode("view", { class: "item-selector" }, [
            vue.createElementVNode("label", { class: "select-all" }, [
              vue.createElementVNode("radio", {
                checked: __props.itemInfo.checked,
                color: "#ff8198",
                onClick: _cache[0] || (_cache[0] = ($event) => onChange(__props.itemInfo))
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", { class: "label-name" }, "全选")
            ])
          ]),
          vue.createElementVNode("view", { class: "item-img" }, [
            vue.createElementVNode("image", {
              class: "c-img",
              src: __props.itemInfo.imgURL,
              "lazy-load": true
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", { class: "item-info" }, [
            vue.createElementVNode(
              "view",
              { class: "item-title" },
              vue.toDisplayString(__props.itemInfo.title),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "item-desc" },
              "商品描述: " + vue.toDisplayString(__props.itemInfo.desc),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "info-bottom" }, [
              vue.createElementVNode(
                "view",
                { class: "item-price left" },
                "¥" + vue.toDisplayString(__props.itemInfo.newPrice),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "item-count right" },
                "x" + vue.toDisplayString(__props.itemInfo.count),
                1
                /* TEXT */
              )
            ])
          ])
        ]);
      };
    }
  };
  const cartListItem = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-d79ae40c"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/cart/cpns/cart-list-item.vue"]]);
  const _sfc_main$o = {
    __name: "bottom-bar",
    emits: ["checkedAllChange"],
    setup(__props, { emit }) {
      const cartStore = useCartStore();
      const checked = vue.ref(false);
      const totalPrice = vue.computed(() => {
        let isSelectAll = cartStore.cartList.find((item) => !item.checked);
        checked.value = isSelectAll ? false : true;
        return cartStore.cartList.filter((item) => {
          return item.checked;
        }).reduce((preValue, item) => {
          return preValue + item.count * item.newPrice;
        }, 0).toFixed(2);
      });
      const cartCount = vue.computed(() => {
        let counter = cartStore.cartCount || 0;
        if (counter > 0) {
          if (counter === cartStore.cartList.length) {
            checked.value = true;
          }
        } else {
          checked.value = false;
        }
        return counter;
      });
      const onChange = () => {
        checked.value = !checked.value;
        cartStore.checkedAll();
        emit("checkedAllChange", checked.value);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "bottom-bar" }, [
          vue.createElementVNode("label", { class: "select-all" }, [
            vue.createElementVNode("radio", {
              checked: checked.value,
              color: "#ff8198",
              onClick: onChange
            }, null, 8, ["checked"]),
            vue.createElementVNode("text", { class: "label-name" }, "全选")
          ]),
          vue.createElementVNode(
            "text",
            { class: "total-price" },
            "合计: ¥" + vue.toDisplayString(vue.unref(totalPrice)),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { class: "buy-product" },
            "去支付(" + vue.toDisplayString(vue.unref(cartCount)) + ")",
            1
            /* TEXT */
          )
        ]);
      };
    }
  };
  const bottomBar = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-230dd1ee"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/cart/cpns/bottom-bar.vue"]]);
  const _sfc_main$n = {
    __name: "cart",
    setup(__props) {
      const cartStore = useCartStore();
      const { cartList } = storeToRefs(cartStore);
      function handleCheckedChange(itemInfo) {
        formatAppLog("log", "at pages/cart/cart.vue:34", "checked=>", itemInfo.checked);
      }
      function handlecCheckedAllChange(checked) {
        formatAppLog("log", "at pages/cart/cart.vue:38", "checked=>", checked);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "cart" }, [
          vue.createElementVNode("scroll-view", {
            class: "cart-scroll",
            "scroll-y": "true"
          }, [
            vue.unref(cartList) ? (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              vue.renderList(vue.unref(cartList), (item) => {
                return vue.openBlock(), vue.createBlock(cartListItem, {
                  key: item.iid,
                  itemInfo: item,
                  onCheckedChange: handleCheckedChange
                }, null, 8, ["itemInfo"]);
              }),
              128
              /* KEYED_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createVNode(bottomBar, { onCheckedAllChange: handlecCheckedAllChange })
        ]);
      };
    }
  };
  const PagesCartCart = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "D:/前端/练习/uni-app/uniAppMall/pages/cart/cart.vue"]]);
  function getCategory() {
    return myRequest.get("/category");
  }
  function getSubcategory(maitKey) {
    return myRequest.get(`/subcategory?maitKey=${maitKey}`);
  }
  function getCategoryDetail(type, miniWallkey) {
    return myRequest.get(`/subcategory/detail?miniWallkey=${miniWallkey}&type=${type}`);
  }
  const useCategoryStore = defineStore("category", {
    state: () => {
      return {
        categories: [],
        subcategories: [],
        goodsListData: {}
      };
    },
    actions: {
      async fetchCategoryData() {
        const res = await getCategory();
        this.categories = res.data.category.list || [];
      },
      async fechSubcategoryData(maitKey) {
        const res = await getSubcategory(maitKey);
        this.subcategories = res.data.list || [];
      },
      async fetchCategoryDetailData(type, miniWallkey) {
        const res = await getCategoryDetail(type, miniWallkey);
        this.goodsListData = res;
      }
    }
  });
  const _sfc_main$m = {
    __name: "tab-menu",
    props: {
      categories: {
        type: Array,
        default: () => []
      }
    },
    emits: ["menuItemClick"],
    setup(__props, { emit }) {
      const currentTitle = vue.ref("正在流行");
      const menuItemClick = (item) => {
        currentTitle.value = item.title;
        emit("menuItemClick", item);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "tab-menu" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-y": "true",
            class: "tab-menu-scroll"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.categories, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.maitKey,
                  class: vue.normalizeClass(["scroll-view-item", currentTitle.value === item.title ? "active" : ""]),
                  onClick: ($event) => menuItemClick(item)
                }, vue.toDisplayString(item.title), 11, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const tabMenu = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-e41ae005"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/category/cpns/tab-menu.vue"]]);
  const _sfc_main$l = {
    __name: "tab-content-category",
    props: {
      subcategories: {
        type: Array,
        default: () => []
      }
    },
    setup(__props) {
      function itemClick(item) {
        uni.navigateTo({
          url: "/pages/webview/webview?link=" + item.link,
          fail: (err) => {
            formatAppLog("log", "at pages/category/cpns/tab-content-category.vue:31", err);
          }
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "tab-content-category" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.subcategories, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: item,
                class: "content-item",
                onClick: ($event) => itemClick(item)
              }, [
                vue.createElementVNode("image", {
                  class: "c-img",
                  src: item.image,
                  "lazy-load": true
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  { class: "title" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                )
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const tabContentCategory = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-a72c092b"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/category/cpns/tab-content-category.vue"]]);
  const _sfc_main$k = {
    __name: "category",
    setup(__props) {
      const categoryStore = useCategoryStore();
      const {
        categories,
        //一级菜单
        subcategories,
        //二级菜单
        goodsListData
        // 详情数据
      } = storeToRefs(categoryStore);
      const currentType = vue.ref("pop");
      const types2 = ["pop", "new", "sell"];
      const goodsListOrigin = {};
      types2.forEach((type) => {
        goodsListOrigin[type] = [];
      });
      const goodsList = vue.reactive(goodsListOrigin);
      vue.onMounted(() => {
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
        currentType.value = types2[index];
      }
      function handleGoodItemClick(itemInfo) {
        uni.navigateTo({
          url: "/pages/detail/detail?iid=" + itemInfo.iid,
          fail(err) {
            formatAppLog("log", "at pages/category/category.vue:85", err);
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
        return vue.openBlock(), vue.createElementBlock("view", { class: "category" }, [
          vue.createVNode(tabMenu, {
            categories: vue.unref(categories),
            onMenuItemClick: tabMenuItemClick
          }, null, 8, ["categories"]),
          vue.createElementVNode("scroll-view", {
            "scroll-y": "true",
            class: "content-scroll"
          }, [
            vue.createVNode(tabContentCategory, { subcategories: vue.unref(subcategories) }, null, 8, ["subcategories"]),
            vue.createVNode(tabControl, {
              titles: ["综合", "新品", "销量"],
              onTabItemClick: handleTabClick
            }),
            vue.createElementVNode("view", { class: "goods-list" }, [
              vue.createCommentVNode(' @itemClick="handleGoodItemClick" '),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(goodsList[currentType.value], (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: item.cfav + "_" + item.iid,
                    class: "item"
                  }, [
                    vue.createVNode(gridViewItem, {
                      itemInfo: item,
                      onItemClick: handleGoodItemClick
                    }, null, 8, ["itemInfo"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ]);
      };
    }
  };
  const PagesCategoryCategory = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "D:/前端/练习/uni-app/uniAppMall/pages/category/category.vue"]]);
  const getGoodDetail = (id) => {
    return myRequest.get(`/detail?iid=${id}`);
  };
  const getCoodRecommend = () => {
    return myRequest.get("/recommend");
  };
  const useDetailStore = defineStore("detail", {
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
        const res = await getGoodDetail(id);
        formatAppLog("log", "at store/detail.js:23", res);
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
        const res = await getCoodRecommend();
        this.recommendList = ((_a = res.data) == null ? void 0 : _a.list) || [];
      }
    }
  });
  function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
      }
    }
    return fmt;
  }
  function padLeftZero(str) {
    return ("00" + str).substr(str.length);
  }
  const debounce = (method, delay) => {
    delay = delay || 500;
    let timer = null;
    return function() {
      const self2 = this;
      const args = arguments;
      timer && clearTimeout(timer);
      timer = setTimeout(function() {
        method.apply(self2, args);
      }, delay);
    };
  };
  const _sfc_main$j = {
    __name: "detail-nav-bar",
    props: {
      titleInfos: {
        type: Array,
        default: function() {
          return [
            {
              id: 0,
              title: "商品"
            },
            {
              id: 1,
              title: "参数"
            },
            {
              id: 2,
              title: "评论"
            },
            {
              id: 3,
              title: "推荐"
            }
          ];
        }
      },
      defaultIndex: {
        type: Number,
        default: 0
      }
    },
    emits: ["itemClick"],
    setup(__props, { emit }) {
      const props = __props;
      const currentIndex = vue.ref(props.defaultIndex);
      function itemClick(item) {
        currentIndex.value = item.id;
        emit("itemClick", item);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "detail-nav-bar" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.titleInfos, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("text", {
                key: item.id,
                class: vue.normalizeClass(["title", currentIndex.value === item.id ? "active" : ""]),
                onClick: ($event) => itemClick(item)
              }, vue.toDisplayString(item.title), 11, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const DetailNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-eecaef21"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/detail/cpns/detail-nav-bar.vue"]]);
  const _sfc_main$i = {
    __name: "detail-bottom-bar",
    emits: ["addToCart"],
    setup(__props, { emit }) {
      function addToCart() {
        emit("addToCart");
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "detail-bottom-bar" }, [
          vue.createElementVNode("view", { class: "bar-item bar-left" }, [
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("view", { class: "icon service" }),
              vue.createElementVNode("text", { class: "text" }, "客服")
            ]),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("view", { class: "icon shop" }),
              vue.createElementVNode("text", { class: "text" }, "店铺")
            ]),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("view", { class: "icon select" }),
              vue.createElementVNode("text", { class: "text" }, "收藏")
            ])
          ]),
          vue.createElementVNode("view", { class: "bar-item bar-right" }, [
            vue.createElementVNode("view", {
              class: "cart",
              onClick: addToCart
            }, "加入购物车"),
            vue.createElementVNode("view", { class: "buy" }, "购买")
          ])
        ]);
      };
    }
  };
  const DetailBottonBar = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-0243b6c2"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/detail/cpns/detail-bottom-bar.vue"]]);
  const _sfc_main$h = {
    __name: "detail-swiper",
    props: {
      banners: {
        type: Array,
        default: () => []
      },
      height: {
        type: String,
        default: "600rpx"
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "swiper",
          {
            class: "detail-swiper",
            style: vue.normalizeStyle({ height: __props.height }),
            "indicator-dots": "",
            "indicator-active-color": "#ff7555",
            circular: ""
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.banners, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", {
                  key: item,
                  class: "banner-item"
                }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    src: item,
                    mode: "widthFix",
                    "lazy-load": true
                  }, null, 8, ["src"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const DetailSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-a7379e38"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/detail/cpns/detail-swiper.vue"]]);
  const _sfc_main$g = {
    __name: "detail-base-info",
    props: {
      goods: {
        type: Object,
        default: () => {
        }
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "detail-base-info" }, [
          vue.createElementVNode(
            "view",
            { class: "info-title" },
            vue.toDisplayString(__props.goods.itemInfo.title),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "info-price" }, [
            vue.createElementVNode(
              "text",
              { class: "n-price" },
              vue.toDisplayString(__props.goods.itemInfo.price),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              { class: "o-price" },
              vue.toDisplayString(__props.goods.itemInfo.lowPrice),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              { class: "discount" },
              vue.toDisplayString(__props.goods.itemInfo.discountDesc),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "info-other" }, [
            vue.createElementVNode(
              "text",
              null,
              vue.toDisplayString(__props.goods.columns[0]),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              null,
              vue.toDisplayString(__props.goods.columns[1]),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              null,
              vue.toDisplayString(__props.goods.columns[2]),
              1
              /* TEXT */
            ),
            vue.createCommentVNode(" <text>{{goods.services[goods.services.length-1]?.name}}</text> ")
          ]),
          __props.goods.services ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "info-service"
          }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(4, (index) => {
                var _a, _b;
                return vue.createElementVNode("view", {
                  key: index,
                  class: "info-service-item"
                }, [
                  vue.createElementVNode("image", {
                    class: "service-icon",
                    src: (_a = __props.goods.services[index - 1]) == null ? void 0 : _a.icon
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "text",
                    { class: "service-name" },
                    vue.toDisplayString((_b = __props.goods.services[index - 1]) == null ? void 0 : _b.name),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const DetailBaseInfo = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-dd14a04a"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/detail/cpns/detail-base-info.vue"]]);
  const _sfc_main$f = {
    __name: "detail-shop-info",
    props: {
      shop: {
        type: Object,
        default: () => {
        }
      }
    },
    setup(__props) {
      const formateNumber = vue.computed(() => {
        return (number) => {
          if (number < 1e4)
            return number;
          return (number / 1e4).toFixed(1) + "万";
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "detail-shop-info" }, [
          vue.createElementVNode("view", { class: "shop-top" }, [
            vue.createElementVNode("image", {
              class: "top-icon",
              src: __props.shop.shopLogo
            }, null, 8, ["src"]),
            vue.createElementVNode(
              "text",
              { class: "title" },
              vue.toDisplayString(__props.shop.name),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "shop-middle" }, [
            vue.createElementVNode("view", { class: "shop-middle-item shop-middle-left" }, [
              vue.createElementVNode("view", { class: "info-sells" }, [
                vue.createElementVNode(
                  "view",
                  { class: "sells-count" },
                  vue.toDisplayString(vue.unref(formateNumber)(__props.shop.cSells)),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "sells-text" }, "总销量")
              ]),
              vue.createElementVNode("view", { class: "info-goods" }, [
                vue.createElementVNode(
                  "view",
                  { class: "goods-count" },
                  vue.toDisplayString(__props.shop.cGoods),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "goods-text" }, "全部宝贝")
              ])
            ]),
            vue.createElementVNode("view", { class: "shop-middle-item shop-middle-right" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(__props.shop.score, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: "mid-item"
                  }, [
                    vue.createElementVNode(
                      "text",
                      { class: "name" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: vue.normalizeClass(["score", { "score-better": item.isBetter }])
                      },
                      vue.toDisplayString(item.score),
                      3
                      /* TEXT, CLASS */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: vue.normalizeClass(["better", { "better-more": item.isBetter }])
                      },
                      [
                        vue.createElementVNode(
                          "text",
                          null,
                          vue.toDisplayString(item.isBetter ? "高" : "低"),
                          1
                          /* TEXT */
                        )
                      ],
                      2
                      /* CLASS */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createElementVNode("view", { class: "shop-bottom" }, [
            vue.createElementVNode("view", { class: "enter-shop" }, "进店逛逛")
          ])
        ]);
      };
    }
  };
  const DetailShopInfo = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-beb1d165"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/detail/cpns/detail-shop-info.vue"]]);
  const _sfc_main$e = {
    __name: "detail-goods-info",
    props: {
      detailInfo: {
        type: Object,
        default: () => {
        }
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "detail-goods-info" }, [
          vue.createElementVNode("view", { class: "info-desc clear-fix" }, [
            vue.createElementVNode("view", { class: "start" }),
            vue.createElementVNode(
              "view",
              { class: "desc" },
              vue.toDisplayString(__props.detailInfo.desc),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "end" })
          ]),
          __props.detailInfo.detailImage ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: "info-key"
            },
            vue.toDisplayString(__props.detailInfo.detailImage[0].key),
            1
            /* TEXT */
          )) : vue.createCommentVNode("v-if", true),
          __props.detailInfo.detailImage ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "info-list"
          }, [
            vue.createCommentVNode(" 图片懒加载 "),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.detailInfo.detailImage[0].list, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("image", {
                  class: "detail-img",
                  key: index,
                  src: item,
                  mode: "widthFix",
                  "lazy-load": true
                }, null, 8, ["src"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const DetailGoodsInfo = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-809c3d43"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/detail/cpns/detail-goods-info.vue"]]);
  const _sfc_main$d = {
    name: "uniTd",
    options: {
      virtualHost: true
    },
    props: {
      width: {
        type: [String, Number],
        default: ""
      },
      align: {
        type: String,
        default: "left"
      },
      rowspan: {
        type: [Number, String],
        default: 1
      },
      colspan: {
        type: [Number, String],
        default: 1
      }
    },
    data() {
      return {
        border: false
      };
    },
    created() {
      this.root = this.getTable();
      this.border = this.root.border;
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getTable() {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== "uniTable") {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(` :class="{'table--border':border}"  `),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-table-td", { "table--border": $data.border }]),
            style: vue.normalizeStyle({ width: $props.width + "px", "text-align": $props.align })
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$3], ["__scopeId", "data-v-edae4802"], ["__file", "D:/前端/练习/uni-app/uniAppMall/uni_modules/uni-table/components/uni-td/uni-td.vue"]]);
  const _sfc_main$c = {
    name: "TableCheckbox",
    emits: ["checkboxSelected"],
    props: {
      indeterminate: {
        type: Boolean,
        default: false
      },
      checked: {
        type: [Boolean, String],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      index: {
        type: Number,
        default: -1
      },
      cellData: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    watch: {
      checked(newVal) {
        if (typeof this.checked === "boolean") {
          this.isChecked = newVal;
        } else {
          this.isChecked = true;
        }
      },
      indeterminate(newVal) {
        this.isIndeterminate = newVal;
      }
    },
    data() {
      return {
        isChecked: false,
        isDisabled: false,
        isIndeterminate: false
      };
    },
    created() {
      if (typeof this.checked === "boolean") {
        this.isChecked = this.checked;
      }
      this.isDisabled = this.disabled;
    },
    methods: {
      selected() {
        if (this.isDisabled)
          return;
        this.isIndeterminate = false;
        this.isChecked = !this.isChecked;
        this.$emit("checkboxSelected", {
          checked: this.isChecked,
          data: this.cellData
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-table-checkbox",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.selected && $options.selected(...args))
    }, [
      !$props.indeterminate ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["checkbox__inner", { "is-checked": $data.isChecked, "is-disable": $data.isDisabled }])
        },
        [
          vue.createElementVNode("view", { class: "checkbox__inner-icon" })
        ],
        2
        /* CLASS */
      )) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "checkbox__inner checkbox--indeterminate"
      }, [
        vue.createElementVNode("view", { class: "checkbox__inner-icon" })
      ]))
    ]);
  }
  const tableCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$2], ["__scopeId", "data-v-25e435b1"], ["__file", "D:/前端/练习/uni-app/uniAppMall/uni_modules/uni-table/components/uni-tr/table-checkbox.vue"]]);
  const _sfc_main$b = {
    name: "uniTr",
    components: { tableCheckbox },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      keyValue: {
        type: [String, Number],
        default: ""
      }
    },
    options: {
      virtualHost: true
    },
    data() {
      return {
        value: false,
        border: false,
        selection: false,
        widthThArr: [],
        ishead: true,
        checked: false,
        indeterminate: false
      };
    },
    created() {
      this.root = this.getTable();
      this.head = this.getTable("uniThead");
      if (this.head) {
        this.ishead = false;
        this.head.init(this);
      }
      this.border = this.root.border;
      this.selection = this.root.type;
      this.root.trChildren.push(this);
      const rowData = this.root.data.find((v) => v[this.root.rowKey] === this.keyValue);
      if (rowData) {
        this.rowData = rowData;
      }
      this.root.isNodata();
    },
    mounted() {
      if (this.widthThArr.length > 0) {
        const selectionWidth = this.selection === "selection" ? 50 : 0;
        this.root.minWidth = this.widthThArr.reduce((a, b) => Number(a) + Number(b)) + selectionWidth;
      }
    },
    unmounted() {
      const index = this.root.trChildren.findIndex((i) => i === this);
      this.root.trChildren.splice(index, 1);
      this.root.isNodata();
    },
    methods: {
      minWidthUpdate(width) {
        this.widthThArr.push(width);
      },
      // 选中
      checkboxSelected(e) {
        let rootData = this.root.data.find((v) => v[this.root.rowKey] === this.keyValue);
        this.checked = e.checked;
        this.root.check(rootData || this, e.checked, rootData ? this.keyValue : null);
      },
      change(e) {
        this.root.trChildren.forEach((item) => {
          if (item === this) {
            this.root.check(this, e.detail.value.length > 0 ? true : false);
          }
        });
      },
      /**
       * 获取父元素实例
       */
      getTable(name = "uniTable") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_table_checkbox = vue.resolveComponent("table-checkbox");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-table-tr" }, [
      $data.selection === "selection" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["checkbox", { "tr-table--border": $data.border }])
        },
        [
          vue.createVNode(_component_table_checkbox, {
            checked: $data.checked,
            indeterminate: $data.indeterminate,
            disabled: $props.disabled,
            onCheckboxSelected: $options.checkboxSelected
          }, null, 8, ["checked", "indeterminate", "disabled", "onCheckboxSelected"])
        ],
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$1], ["__scopeId", "data-v-b48b3e32"], ["__file", "D:/前端/练习/uni-app/uniAppMall/uni_modules/uni-table/components/uni-tr/uni-tr.vue"]]);
  const _sfc_main$a = {
    name: "uniTable",
    options: {
      virtualHost: true
    },
    emits: ["selection-change"],
    props: {
      data: {
        type: Array,
        default() {
          return [];
        }
      },
      // 是否有竖线
      border: {
        type: Boolean,
        default: false
      },
      // 是否显示斑马线
      stripe: {
        type: Boolean,
        default: false
      },
      // 多选
      type: {
        type: String,
        default: ""
      },
      // 没有更多数据
      emptyText: {
        type: String,
        default: "没有更多数据"
      },
      loading: {
        type: Boolean,
        default: false
      },
      rowKey: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        noData: true,
        minWidth: 0,
        multiTableHeads: []
      };
    },
    watch: {
      loading(val) {
      },
      data(newVal) {
        this.theadChildren;
        if (this.theadChildren) {
          this.theadChildren.rowspan;
        }
        this.noData = false;
      }
    },
    created() {
      this.trChildren = [];
      this.thChildren = [];
      this.theadChildren = null;
      this.backData = [];
      this.backIndexData = [];
    },
    methods: {
      isNodata() {
        this.theadChildren;
        let rowspan = 1;
        if (this.theadChildren) {
          rowspan = this.theadChildren.rowspan;
        }
        this.noData = this.trChildren.length - rowspan <= 0;
      },
      /**
       * 选中所有
       */
      selectionAll() {
        let startIndex = 1;
        let theadChildren = this.theadChildren;
        if (!this.theadChildren) {
          theadChildren = this.trChildren[0];
        } else {
          startIndex = theadChildren.rowspan - 1;
        }
        let isHaveData = this.data && this.data.length > 0;
        theadChildren.checked = true;
        theadChildren.indeterminate = false;
        this.trChildren.forEach((item, index) => {
          if (!item.disabled) {
            item.checked = true;
            if (isHaveData && item.keyValue) {
              const row = this.data.find((v) => v[this.rowKey] === item.keyValue);
              if (!this.backData.find((v) => v[this.rowKey] === row[this.rowKey])) {
                this.backData.push(row);
              }
            }
            if (index > startIndex - 1 && this.backIndexData.indexOf(index - startIndex) === -1) {
              this.backIndexData.push(index - startIndex);
            }
          }
        });
        this.$emit("selection-change", {
          detail: {
            value: this.backData,
            index: this.backIndexData
          }
        });
      },
      /**
       * 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
       */
      toggleRowSelection(row, selected) {
        row = [].concat(row);
        this.trChildren.forEach((item, index) => {
          const select = row.findIndex((v) => {
            if (typeof v === "number") {
              return v === index - 1;
            } else {
              return v[this.rowKey] === item.keyValue;
            }
          });
          let ischeck = item.checked;
          if (select !== -1) {
            if (typeof selected === "boolean") {
              item.checked = selected;
            } else {
              item.checked = !item.checked;
            }
            if (ischeck !== item.checked) {
              this.check(item.rowData || item, item.checked, item.rowData ? item.keyValue : null, true);
            }
          }
        });
        this.$emit("selection-change", {
          detail: {
            value: this.backData,
            index: this.backIndexData
          }
        });
      },
      /**
       * 用于多选表格，清空用户的选择
       */
      clearSelection() {
        let theadChildren = this.theadChildren;
        if (!this.theadChildren) {
          theadChildren = this.trChildren[0];
        }
        theadChildren.checked = false;
        theadChildren.indeterminate = false;
        this.trChildren.forEach((item) => {
          item.checked = false;
        });
        this.backData = [];
        this.backIndexData = [];
        this.$emit("selection-change", {
          detail: {
            value: [],
            index: []
          }
        });
      },
      /**
       * 用于多选表格，切换所有行的选中状态
       */
      toggleAllSelection() {
        let list = [];
        let startIndex = 1;
        let theadChildren = this.theadChildren;
        if (!this.theadChildren) {
          theadChildren = this.trChildren[0];
        } else {
          startIndex = theadChildren.rowspan - 1;
        }
        this.trChildren.forEach((item, index) => {
          if (!item.disabled) {
            if (index > startIndex - 1) {
              list.push(index - startIndex);
            }
          }
        });
        this.toggleRowSelection(list);
      },
      /**
       * 选中\取消选中
       * @param {Object} child
       * @param {Object} check
       * @param {Object} rowValue
       */
      check(child, check, keyValue, emit) {
        let theadChildren = this.theadChildren;
        if (!this.theadChildren) {
          theadChildren = this.trChildren[0];
        }
        let childDomIndex = this.trChildren.findIndex((item, index) => child === item);
        if (childDomIndex < 0) {
          childDomIndex = this.data.findIndex((v) => v[this.rowKey] === keyValue) + 1;
        }
        this.trChildren.filter((v) => !v.disabled && v.keyValue).length;
        if (childDomIndex === 0) {
          check ? this.selectionAll() : this.clearSelection();
          return;
        }
        if (check) {
          if (keyValue) {
            this.backData.push(child);
          }
          this.backIndexData.push(childDomIndex - 1);
        } else {
          const index = this.backData.findIndex((v) => v[this.rowKey] === keyValue);
          const idx = this.backIndexData.findIndex((item) => item === childDomIndex - 1);
          if (keyValue) {
            this.backData.splice(index, 1);
          }
          this.backIndexData.splice(idx, 1);
        }
        const domCheckAll = this.trChildren.find((item, index) => index > 0 && !item.checked && !item.disabled);
        if (!domCheckAll) {
          theadChildren.indeterminate = false;
          theadChildren.checked = true;
        } else {
          theadChildren.indeterminate = true;
          theadChildren.checked = false;
        }
        if (this.backIndexData.length === 0) {
          theadChildren.indeterminate = false;
        }
        if (!emit) {
          this.$emit("selection-change", {
            detail: {
              value: this.backData,
              index: this.backIndexData
            }
          });
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-table-scroll", { "table--border": $props.border, "border-none": !$data.noData }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-table", { "table--stripe": $props.stripe }]),
            style: vue.normalizeStyle({ "min-width": $data.minWidth + "px" })
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
            $data.noData ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-table-loading"
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["uni-table-text", { "empty-border": $props.border }])
                },
                vue.toDisplayString($props.emptyText),
                3
                /* TEXT, CLASS */
              )
            ])) : vue.createCommentVNode("v-if", true),
            $props.loading ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: vue.normalizeClass(["uni-table-mask", { "empty-border": $props.border }])
              },
              [
                vue.createElementVNode("div", { class: "uni-table--loader" })
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render], ["__scopeId", "data-v-c1ea9b5d"], ["__file", "D:/前端/练习/uni-app/uniAppMall/uni_modules/uni-table/components/uni-table/uni-table.vue"]]);
  const _sfc_main$9 = {
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
      const getTableData = vue.computed(() => {
        var _a, _b;
        return ((_b = (_a = props.paramInfo) == null ? void 0 : _a.rule) == null ? void 0 : _b.tables[0]) || [];
      });
      return (_ctx, _cache) => {
        const _component_uni_td = resolveEasycom(vue.resolveDynamicComponent("uni-td"), __easycom_0);
        const _component_uni_tr = resolveEasycom(vue.resolveDynamicComponent("uni-tr"), __easycom_1);
        const _component_uni_table = resolveEasycom(vue.resolveDynamicComponent("uni-table"), __easycom_2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "detail-param-info" }, [
          Object.keys(__props.paramInfo).length !== 0 ? (vue.openBlock(), vue.createBlock(_component_uni_table, {
            key: 0,
            emptyText: "暂无更多数据"
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(getTableData), (table, index) => {
                  return vue.openBlock(), vue.createBlock(
                    _component_uni_tr,
                    { key: index },
                    {
                      default: vue.withCtx(() => [
                        vue.createVNode(
                          _component_uni_td,
                          null,
                          {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(
                                vue.toDisplayString(table[0]),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        vue.createVNode(
                          _component_uni_td,
                          null,
                          {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(
                                vue.toDisplayString(table[1]),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        vue.createVNode(
                          _component_uni_td,
                          null,
                          {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(
                                vue.toDisplayString(table[2]),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        vue.createVNode(
                          _component_uni_td,
                          null,
                          {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(
                                vue.toDisplayString(table[3]),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })) : vue.createCommentVNode("v-if", true),
          Object.keys(__props.paramInfo).length !== 0 ? (vue.openBlock(), vue.createBlock(_component_uni_table, {
            key: 1,
            emptyText: "暂无更多数据"
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(__props.paramInfo.info.set, (info, index) => {
                  return vue.openBlock(), vue.createBlock(
                    _component_uni_tr,
                    { key: index },
                    {
                      default: vue.withCtx(() => [
                        vue.createVNode(
                          _component_uni_td,
                          {
                            class: "col-key",
                            width: 76
                          },
                          {
                            default: vue.withCtx(() => [
                              vue.createTextVNode(
                                vue.toDisplayString(info.key),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        vue.createVNode(
                          _component_uni_td,
                          { class: "col-value" },
                          {
                            default: vue.withCtx(() => [
                              vue.createElementVNode(
                                "text",
                                { style: { color: "#eb4868" } },
                                vue.toDisplayString(info.value),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const DetailParamInfo = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-2310eab6"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/detail/cpns/detail-param-info.vue"]]);
  const _sfc_main$8 = {
    __name: "detail-comment-info",
    props: {
      commentInfo: {
        type: Object,
        default: () => {
        }
      }
    },
    setup(__props) {
      const showDate = vue.computed(() => {
        return (value) => {
          let date = new Date(value * 1e3);
          return formatDate(date, "yyyy-MM-dd");
        };
      });
      return (_ctx, _cache) => {
        return Object.keys(__props.commentInfo).length !== 0 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "detail-comment-info"
        }, [
          vue.createElementVNode("view", { class: "info-header" }, [
            vue.createElementVNode("view", { class: "header-title" }, "用户评价"),
            vue.createElementVNode("view", { class: "header-more" }, [
              vue.createTextVNode(" 更多 "),
              vue.createElementVNode("text", { class: "arrow-right" })
            ])
          ]),
          __props.commentInfo.list[0].user ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "info-user"
          }, [
            vue.createElementVNode("image", {
              class: "user-icon",
              src: __props.commentInfo.list[0].user.avatar
            }, null, 8, ["src"]),
            vue.createElementVNode(
              "text",
              { class: "user-name" },
              vue.toDisplayString(__props.commentInfo.list[0].user.uname),
              1
              /* TEXT */
            )
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "info-detail" }, [
            vue.createElementVNode(
              "text",
              { class: "content" },
              vue.toDisplayString(__props.commentInfo.list[0].content),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "info-other" }, [
              vue.createElementVNode(
                "text",
                { class: "date" },
                vue.toDisplayString(vue.unref(showDate)(__props.commentInfo.list[0].created)),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString(__props.commentInfo.list[0].style),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "info-imgs" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(__props.commentInfo.list[0].images, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("image", {
                    class: "info-img",
                    src: item
                  }, null, 8, ["src"]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true);
      };
    }
  };
  const DetailCommentInfo = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-a18e8ec3"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/detail/cpns/detail-comment-info.vue"]]);
  const _sfc_main$7 = {
    __name: "detail-recommend-info",
    props: {
      recommendList: {
        type: Array,
        default: () => []
      }
    },
    setup(__props) {
      function handleGoodItemClick(itemInfo) {
        formatAppLog("log", "at pages/detail/cpns/detail-recommend-info.vue:24", itemInfo.iid);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "detail-recommend-info" }, [
          vue.createElementVNode("view", { class: "info-header" }, "热门推荐"),
          vue.createElementVNode("view", { class: "goods-list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.recommendList, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.shop_id,
                  class: "item"
                }, [
                  vue.createVNode(gridViewItem, {
                    itemInfo: item,
                    onItemClick: handleGoodItemClick
                  }, null, 8, ["itemInfo"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const DetailRecommendInfo = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-08a1730c"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/detail/cpns/detail-recommend-info.vue"]]);
  const _sfc_main$6 = {
    __name: "detail",
    setup(__props) {
      const id = vue.ref("");
      vue.ref(0);
      const currentNavBarIndex = vue.ref(0);
      const detailStore = useDetailStore();
      const {
        topImages,
        goods,
        shop,
        detailInfo,
        paramInfo,
        commentInfo,
        recommendList
      } = storeToRefs(detailStore);
      onLoad((options) => {
        formatAppLog("log", "at pages/detail/detail.vue:81", options.iid);
        id.value = options.iid;
      });
      vue.onMounted(() => {
        detailStore.fetchGoodDetailData(id.value);
        detailStore.fetchGoodRecommend();
      });
      function handleNavBarItemClick(item) {
        currentNavBarIndex.value = item.id;
      }
      const handleaddToCart = debounce(() => {
        uni.showToast({
          title: "已加入购物车",
          duration: 1e3
        });
        const obj = {};
        obj.iid = id.value;
        obj.imgURL = topImages.value[0];
        obj.title = goods.value.itemInfo.title;
        obj.desc = goods.value.itemInfo.desc;
        obj.newPrice = goods.value.itemInfo.highNowPrice;
        const cartStore = useCartStore();
        cartStore.addCartAction(obj);
      }, 500);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "detail" }, [
          vue.createCommentVNode(" 顶部导航 "),
          vue.createVNode(DetailNavBar, { onItemClick: handleNavBarItemClick }),
          vue.createElementVNode("scroll-view", {
            class: "detail-scroll",
            "scroll-y": "true"
          }, [
            currentNavBarIndex.value === 0 ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              [
                vue.createVNode(DetailSwiper, { banners: vue.unref(topImages) }, null, 8, ["banners"]),
                vue.createVNode(DetailBaseInfo, { goods: vue.unref(goods) }, null, 8, ["goods"]),
                vue.createVNode(DetailShopInfo, { shop: vue.unref(shop) }, null, 8, ["shop"]),
                vue.createVNode(DetailGoodsInfo, { detailInfo: vue.unref(detailInfo) }, null, 8, ["detailInfo"])
              ],
              64
              /* STABLE_FRAGMENT */
            )) : currentNavBarIndex.value === 1 ? (vue.openBlock(), vue.createBlock(DetailParamInfo, {
              key: 1,
              paramInfo: vue.unref(paramInfo)
            }, null, 8, ["paramInfo"])) : currentNavBarIndex.value === 2 ? (vue.openBlock(), vue.createBlock(DetailCommentInfo, {
              key: 2,
              commentInfo: vue.unref(commentInfo)
            }, null, 8, ["commentInfo"])) : (vue.openBlock(), vue.createBlock(DetailRecommendInfo, {
              key: 3,
              recommendList: vue.unref(recommendList)
            }, null, 8, ["recommendList"]))
          ]),
          vue.createCommentVNode(" 底部导航 "),
          vue.createVNode(DetailBottonBar, { onAddToCart: vue.unref(handleaddToCart) }, null, 8, ["onAddToCart"])
        ]);
      };
    }
  };
  const PagesDetailDetail = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "D:/前端/练习/uni-app/uniAppMall/pages/detail/detail.vue"]]);
  const _sfc_main$5 = {
    __name: "user-info",
    setup(__props) {
      function itemClick() {
        formatAppLog("log", "at pages/profile/cpns/user-info.vue:24", "登录/注册");
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "user-info",
          onClick: itemClick
        }, [
          vue.createElementVNode("view", { class: "user-icon" }, [
            vue.createElementVNode("image", {
              class: "avatar",
              src: "/static/images/profile/avatar-default.png"
            })
          ]),
          vue.createElementVNode("view", { class: "login-info" }, [
            vue.createElementVNode("view", { class: "name" }, [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createTextVNode("登录")
              ], true)
            ]),
            vue.createElementVNode("view", { class: "phone" }, [
              vue.createElementVNode("image", {
                class: "phone-icon",
                src: "/static/images/profile/phone.png"
              }),
              vue.createElementVNode("text", null, "暂无绑定手机号")
            ])
          ]),
          vue.createElementVNode("image", {
            class: "arrow",
            src: "/static/images/common/arrow-right.png"
          })
        ]);
      };
    }
  };
  const userInfo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-04da570f"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/profile/cpns/user-info.vue"]]);
  const _sfc_main$4 = {
    __name: "grid-view",
    props: {
      listItems: {
        tyep: Array,
        default: () => []
      }
    },
    setup(__props) {
      const formatPrice = vue.computed(() => {
        return (item) => {
          return item.decimal ? item.price.toFixed(item.decimal) : item.price;
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "grid-view" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.listItems, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "item"
              }, [
                vue.createElementVNode("view", { class: "number" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "price" },
                    vue.toDisplayString(vue.unref(formatPrice)(item)),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(item.unit),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  vue.toDisplayString(item.name),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const gridView = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-32a71587"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/profile/cpns/grid-view.vue"]]);
  const _sfc_main$3 = {
    __name: "list-view",
    props: {
      listItems: {
        type: Array,
        default: () => []
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "list-view" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.listItems, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "item"
              }, [
                vue.createElementVNode("image", {
                  class: "item-img",
                  src: item.icon
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "view",
                  { class: "info" },
                  vue.toDisplayString(item.info),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const listView = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-fea25c28"], ["__file", "D:/前端/练习/uni-app/uniAppMall/pages/profile/cpns/list-view.vue"]]);
  const messagePNG = "/static/images/profile/message.png";
  const appPNG = "/static/images/profile/app.png";
  const vipPNG = "/static/images/profile/vip.png";
  const cartPNG = "/static/images/profile/cart.png";
  const pointerPNG = "/static/images/profile/pointer.png";
  const _sfc_main$2 = {
    __name: "profile",
    setup(__props) {
      const gridItemDatas = vue.ref([
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
        { icon: messagePNG, iconColor: "#ff8198", info: "我的消息" },
        { icon: appPNG, iconColor: "#fc7b53", info: "积分商城" },
        { icon: vipPNG, iconColor: "#ffc636", info: "会员卡" }
      ];
      const serviceList = [
        { icon: cartPNG, iconColor: "#ff8198", info: "我的购物车" },
        { icon: pointerPNG, iconColor: "#ff8198", info: "下载购物APP" }
      ];
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(userInfo, null, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" 登录/注册 ")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(gridView, { listItems: gridItemDatas.value }, null, 8, ["listItems"]),
            vue.createElementVNode("view", { class: "item-bg" }, [
              vue.createVNode(listView, {
                class: "list-item",
                listItems: orderList
              }),
              vue.createVNode(listView, {
                class: "list-item",
                listItems: serviceList
              })
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesProfileProfile = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "D:/前端/练习/uni-app/uniAppMall/pages/profile/profile.vue"]]);
  const _sfc_main$1 = {
    __name: "webview",
    props: {
      link: {
        type: String,
        default: ""
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("web-view", { src: __props.link }, null, 8, ["src"]);
      };
    }
  };
  const PagesWebviewWebview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "D:/前端/练习/uni-app/uniAppMall/pages/webview/webview.vue"]]);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/cart/cart", PagesCartCart);
  __definePage("pages/category/category", PagesCategoryCategory);
  __definePage("pages/detail/detail", PagesDetailDetail);
  __definePage("pages/profile/profile", PagesProfileProfile);
  __definePage("pages/webview/webview", PagesWebviewWebview);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/前端/练习/uni-app/uniAppMall/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(createPinia());
    return {
      app,
      pinia
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
