import Button from './DgButton'
import Dialog from './dialog'
import Input from './input'
import Vue from 'vue'

const components = [
  Button,
  Dialog,
  Input
]

components.forEach((component) => {
  Vue.component(component.name,component)
})
