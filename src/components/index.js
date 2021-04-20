import DgButton from './DgButton'
import DgDialog from './dialog'
import Vue from 'vue'

const components = [
  DgButton,
  DgDialog
]

components.forEach((component) => {
  Vue.component(component.name,component)
})
