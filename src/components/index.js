import Button from "./button";
import Dialog from "./dialog";
import Input from "./input";
import Switch from "./swtich";
import Radio from "./radio";
import RadioGroup from "./radio-group";
import CheckBox from "./checkbox";
import CheckboxGroup from "./checkbox-group";
import Vue from "vue";

const components = [
  Button,
  Dialog,
  Input,
  Switch,
  Radio,
  RadioGroup,
  CheckBox,
  CheckboxGroup
];

components.forEach(component => {
  Vue.component(component.name, component);
});
