<template>
    <div>
        <dg-button type="primary" @click="visible=!visible">确认</dg-button>
        <!-- <dg-dialog :visible.sync="visible">
            <template v-slot:title>
                <h3 style="font-size:18px;height:24px;margin:0;line-height:24px">温馨提示</h3>
            </template>
        </dg-dialog> -->
        <dg-dialog title="提交订单" :visible.sync="visible">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
            <template v-slot:footer>
                <dg-button @click="visible=!visible">取消</dg-button>
                <dg-button type="primary">确认</dg-button>
            </template>
        </dg-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            visible:false
        }
    }
}
</script>