<!-- 
    图例: 
    图例是图表中对内容区元素的注释、用不同形状、颜色、文字等来标示不同数据列，通过点击对应数据列的标记，可以显示或隐藏该数据列。图例虽然不是图表中的主要信息、却是了解图表信息的钥匙。
-->
<script setup>
import { ref, onMounted } from "vue";
import { useEcharts } from "../utils/echarts";
const main = ref(null);
onMounted(() => {
    const myEcharts = useEcharts(main.value, null, {
        width: "auto",
        height: "auto",
    });
    myEcharts.setOption({
        legend: {
            orient: "vertical",
            right: 10,
            top: "center",
            backgroundColor: "#ccc",
            select: {
                2017: true,
            },
            data: [
                {
                    name: "2015",
                    icon: "circle",
                },
                {
                    name: "2017",
                    icon: "pin",
                },
                {
                    name: "2016",
                },
            ],
        },
        dataset: {
            source: [
                ["product", "2015", "2016", "2017"],
                ["Matcha Latte", 43.3, 85.8, 93.7],
                ["Milk Tea", 83.1, 73.4, 55.1],
                ["Cheese Cocoa", 86.4, 65.2, 82.5],
                ["Walnut Brownie", 72.4, 53.9, 39.1],
            ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
    });
});
</script>
<template>
    <div class="main" ref="main"></div>
</template>
<style lang="scss" scoped>
.main {
    width: 900px;
    height: 600px;
}
</style>
