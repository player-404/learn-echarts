<script setup>
import { ref, onMounted } from "vue";
import { useEcharts } from "../utils/echarts";
const main = ref(null);
const main2 = ref(null);
const main3 = ref(null);

onMounted(() => {
    const myEchart = useEcharts(main.value, null, {
        width: "auto",
        height: "auto",
    });
    myEchart.setOption({
        series: [
            {
                type: "pie",
                data: [
                    {
                        value: 335,
                        name: "直接访问",
                    },
                    {
                        value: 234,
                        name: "联盟广告",
                    },
                    {
                        value: 1548,
                        name: "搜索引擎",
                    },
                ],
                // pie 的大小
                radius: "90%",
            },
        ],
    });

    const ec1 = useEcharts(main2.value, null, {
        width: "auto",
        height: "auto",
    });

    ec1.setOption({
        series: [
            {
                type: "pie",
                label: {
                    show: false,
                    position: "center",
                    emphasis: {
                        show: true,
                    },
                },
                labelLine: {
                    show: false,
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: "30",
                        fontWeight: "bold",
                    },
                },
                data: [
                    {
                        value: 335,
                        name: "A",
                    },
                    {
                        value: 234,
                        name: "B",
                    },
                    {
                        value: 1548,
                        name: "C",
                    },
                ],
                radius: ["50%", "90%"],
            },
        ],
    });

    const ec2 = useEcharts(main3.value, null, {
        width: "auto",
        height: "auto",
    });

    ec2.setOption({
        series: [
            {
                type: "pie",
                data: [
                    {
                        value: 100,
                        name: "A",
                    },
                    {
                        value: 200,
                        name: "B",
                    },
                    {
                        value: 300,
                        name: "C",
                    },
                    {
                        value: 400,
                        name: "D",
                    },
                    {
                        value: 500,
                        name: "E",
                    },
                ],
                roseType: "area",
                radius: "40%",
            },
        ],
    });
});
</script>
<template>
    <div class="main" ref="main"></div>
    <div class="main2" ref="main2"></div>
    <div class="main3" ref="main3"></div>
</template>
<style lang="scss" scoped>
.main {
    width: 900px;
    height: 600px;
}
.main2 {
    width: 900px;
    height: 600px;
}

.main3 {
    width: 900px;
    height: 600px;
}
</style>
