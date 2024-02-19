import App from './App'
import * as pinia from "pinia"
import { createSSRApp } from 'vue'

// #ifdef H5
import lazyPlugin from 'vue3-lazy'  //在h5端使用
// #endif

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia.createPinia())
// #ifdef H5
  app.use(lazyPlugin,{
  	  loading:"./static/logo.png"  // 图片懒加载时默认图片
  })
// #endif
  return {
    app,
	pinia
  }
}
