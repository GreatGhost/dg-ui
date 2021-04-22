import Button from './DgButton'
import Dialog from './dialog'
import Input from './input'
import Switch from './swtich'
import Vue from 'vue'

const components = [
  Button,
  Dialog,
  Input,
  Switch
]

components.forEach((component) => {
  Vue.component(component.name,component)
})
