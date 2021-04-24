import Button from "./button";
import Dialog from "./dialog";
import Input from "./input";
import Switch from "./swtich";
import Radio from "./radio";
import RadioGroup from "./radio-group";
import CheckBox from "./checkbox";
import CheckboxGroup from "./checkbox-group";
import Form from "./form";
import FormItem from "./form-item";
import Vue from "vue";

const components = [
  Button,
  Dialog,
  Input,
  Switch,
  Radio,
  RadioGroup,
  CheckBox,
  CheckboxGroup,
  Form,
  FormItem
];

components.forEach(component => {
  Vue.component(component.name, component);
});
