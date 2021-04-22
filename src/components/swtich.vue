<template>
  <div
      for=""
      @click="handleClick"
      class="one-switch"
      :class="{
        'is-checked': value
      }"
  >
    <span class="one-switch_core" ref="core">
      <span class="one-switch_button"></span>
    </span>

    <!-- input -->
    <input type="checkbox"  :name="name" ref="input">
  </div>
</template>

<script>
export default {
  name: "DgSwitch",

  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.setColor();
    this.$refs.input.checked=this.value;
  },
  methods: {
    handleClick() {
      this.$emit("input", !this.value);

      // 这里调用$nextTick
      this.$nextTick(() => {
        this.setColor();
        this.$refs.input.checked=this.value;
      });
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        var color = !this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.one-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .one-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .one-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  .one-switch_input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin:0;
  }
}

.is-checked {
  .one-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .one-switch_button {
      transform: translateX(20px);
    }
  }
}
</style>
