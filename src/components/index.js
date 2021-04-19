import DgButton from './DgButton'
import Vue from 'vue'

const components = [
  DgButton
]

components.forEach((component) => {
  Vue.component(component.name)
})
