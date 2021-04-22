<template>
    <div>
    <dg-switch v-model="checked"></dg-switch>
    <dg-switch v-model="checked" activeColor="green" inactiveColor="red"></dg-switch>

    </div>

</template>

<script>
export default {
    data(){
        return {
            checked:false
        }
    }
}
</script>