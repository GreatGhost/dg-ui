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
import "./fonts/iconfont.css";

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

function install(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

// 判斷是否是直接引入，如果是，就不用Vue.use()
if (!typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install
};
