<template>
  <div class="input-demos">
    <dg-input :disabled="true" v-model="username"></dg-input>
    <dg-input v-model="username" :clearable="true"></dg-input>
    <dg-input type="password" v-model="password" :showPassword="true"></dg-input>

    <!-- v-model语法糖 vlaue和input的结合 -->
    <!-- <input :value="job" @input="job=$event.target.value" /> -->
  </div>
</template>

<script>
export default {
    data(){
        return {
            username:'张三',
            job:"工人",
            password:''
        }
    }
}
</script>

<style lang="scss" scoped>
.input-demos {
  ::v-deep .one-input{
    width: 200px;
  }
}

</style>
