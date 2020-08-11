import Vue from 'vue'
import Element from 'element-ui'
import '../element-variables.scss'

// 以下设置，项目中所有拥有 size 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000。
Vue.use(Element, { size: 'small', zIndex: 3000 })
