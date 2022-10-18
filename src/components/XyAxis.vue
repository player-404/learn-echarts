<script setup lang="ts">
import { trigger } from "@vue/reactivity";
import { ref, onMounted } from "vue";
import { useEcharts } from "../utils/echarts";
const main = ref(null);

onMounted(() => {
    const myEchar = useEcharts(main.value, null, {
        with: "auto",
        height: "auto",
    });
    myEchar.setOption({
        dataset: [
            {
                dimensions: ["name", "chinese", "math", "english"],
                source: [
                    ["张三", 80, 45, 89],
                    ["李四", 88, 98, 98],
                    ["王五", 96, 87, 56],
                    ["刘娥", 99, 97, 100],
                    ["许手", 96, 94, 86],
                ],
            },
        ],
        xAxis: {
            type: "value",
            axisLine: {
                show: true,
                symbol: "arrow",
                symbolSize: [5, 5],
                lineStyle: {
                    color: "red",
                    width: 10,
                },
            },
        },
        yAxis: {
            type: "category",
            show: true,
            axisLine: {
                show: true,
                symbol: "arrow",
                symbolSize: [5, 5],
                lineStyle: {
                    color: "blue",
                },
            },
        },
        series: {
            type: "bar",
        },
        dataZoom: [
            {
                type: "slider",
                show: false,
                start: 0,
                end: 100,
                xAxisIndex: 0,
                // handleSize: 8,
            },
            {
                type: "inside",
                start: 0,
                end: 100,
            },
            {
                type: "slider",
                show: false,
                yAxisIndex: 0,
                filterMode: "empty",
                width: 12,
                height: "70%",
                handleSize: 8,
                showDataShadow: false,
                // left: "93%",
            },
        ],
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
