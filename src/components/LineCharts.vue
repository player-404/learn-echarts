<script setup>
import { ref, onMounted } from "vue";
import { useEcharts } from "../utils/echarts";

const main = ref(null);
const main2 = ref(null);

onMounted(() => {
    const myEcharts = useEcharts(main.value, null, {
        width: "auto",
        height: "auto",
    });

    myEcharts.setOption({
        legend: {
            data: [
                {
                    name: "s",
                },
                {
                    name: "b",
                },
                {
                    name: "c",
                },
            ],
        },
        dataset: [
            {
                dimensions: ["月份", 1, 2, 3, 4],
                source: [
                    [1, 34],
                    [2, 45],
                    [3, 67],
                    [4, 87],
                ],
            },
            {
                dimensions: ["月份", 1, 2, 3, 4],
                source: [
                    [1, 45],
                    [2, 56],
                    [3, 34],
                    [4, 90],
                ],
            },
            {
                dimensions: ["月份", 1, 2, 3, 4],
                source: [
                    [1, 87],
                    [2, 67],
                    [3, 76],
                    [4, 34],
                ],
            },
        ],
        xAxis: {
            type: "category",
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                name: "s",
                type: "line",
                datasetIndex: 0,
                stack: "x",
                // 区域面积
                areaStyle: {},
                //平滑曲线图
                smooth: true,
            },
            {
                name: "b",
                type: "line",
                datasetIndex: 1,
                itemStyle: {
                    color: "red",
                },
                stack: "x",
                // 区域面积
                areaStyle: {},
                //平滑曲线图
                smooth: true,
            },
            {
                name: "c",
                type: "line",
                datasetIndex: 2,
                itemStyle: {
                    color: "blue",
                },
                stack: "x",
                //区域面积
                areaStyle: {},
                //平滑曲线图
                smooth: true,
            },
        ],
    });

    const ec1 = useEcharts(main2.value, null, {
        width: "auto",
        height: "auto",
    });
    ec1.setOption({
        xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                name: "Step Start",
                type: "line",
                step: "start",
                data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
                name: "Step Middle",
                type: "line",
                step: "middle",
                data: [220, 282, 201, 234, 290, 430, 410],
            },
            {
                name: "Step End",
                type: "line",
                step: "end",
                data: [450, 432, 401, 454, 590, 530, 510],
            },
        ],
    });
});
</script>
<template>
    <div class="mains" ref="main"></div>
    <div class="main2" ref="main2"></div>
</template>
<style lang="scss" scoped>
.mains {
    width: 900px;
    height: 600px;
}
.main2 {
    width: 900px;
    height: 600px;
}
</style>
