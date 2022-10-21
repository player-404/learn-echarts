<script setup>
import { useEcharts } from "../utils/echarts";
import { ref, onMounted } from "vue";
const main = ref(null);
const main1 = ref(null);
const main2 = ref(null);
const main3 = ref(null);
const data = ref([]);

function update() {
    for (let i = 0; i < data.value.length; i++) {
        const math = Math.random();
        if (math > 0.9) {
            data.value[i] += Math.round(math * 2000);
        } else {
            data.value[i] += Math.round(math * 200);
        }
    }
}
onMounted(() => {
    const myEcharts = useEcharts(main.value, null, {
        width: "auto",
        height: "auto",
    });
    myEcharts.setOption({
        tooltip: {},
        legend: {},
        title: {
            text: "经济情况",
            textStyle: {
                color: "red",
                fontSize: 30,
                fontWeight: "bolder",
            },
        },
        dataset: {
            dimensions: ["name", 2019, 2020, 2021, 2022],
            source: [
                ["江西", 45, 56, 65, 66],
                ["上海", 89, 90, 92, 97],
                ["浙江", 87, 82, 79, 90],
                ["深圳", 99, 94, 87, 90],
            ],
        },

        xAxis: {
            name: "省份",
            type: "category",
        },
        yAxis: {},
        series: [
            {
                type: "bar",
                itemStyle: {
                    shadowColor: "#91cc75",
                    borderType: "dashed",
                },
                // bar 宽度
                barWidth: "10%",
                // bar 间距
                barGap: "10%",
                // 添加背景色
                showBackground: true,
                backgroundStyle: {
                    color: "rgba(220, 220, 220, 0.8)",
                },
            },
            {
                type: "bar",
                showBackground: true,
                backgroundStyle: {
                    color: "rgba(220, 220, 220, 0.8)",
                },
            },
            {
                type: "bar",
                showBackground: true,
                backgroundStyle: {
                    color: "rgba(220, 220, 220, 0.8)",
                },
            },
            {
                type: "bar",
                // 北京
                showBackground: true,
                backgroundStyle: {
                    color: "rgba(220, 220, 220, 0.8)",
                },
            },
        ],
    });

    const ec1 = useEcharts(main1.value, null, {
        width: "auto",
        height: "auto",
    });

    ec1.setOption({
        xAxis: {
            data: ["a", "b", "c", "d"],
        },
        yAxis: {},
        series: [
            {
                type: "bar",
                data: [56, 67, 89, 76],
                stack: "x",
            },
            {
                type: "bar",
                data: [5, 6, 4, 5],
                stack: "x",
            },
            {
                type: "bar",
                data: [8, 13, 14, 15],
                stack: "x",
            },
            {
                type: "bar",
                data: [34, 23, 45, 57],
            },
        ],
    });
    const ec2 = useEcharts(main2.value, null, {
        width: "auto",
        height: "auto",
    });
    for (let i = 0; i < 5; ++i) {
        data.value.push(Math.round(Math.random() * 200));
    }
    let option = {
        yAxis: {
            type: "category",
            //动态排序效果
            realtimeSort: true,
            //从小到大的排列
            inverse: true,
            //第一次柱条排序动画的时长
            animationDuration: 300,
            //第一次后柱条排序动画的时长
            animationDurationUpdate: 300,
            data: ["A", "B", "C", "D", "E"],
            max: 3,
        },
        xAxis: {
            max: "dataMax",
        },
        series: [
            {
                realtimeSort: true,
                type: "bar",
                data: data.value,
                label: {
                    show: true,
                    position: "right",
                    valueAnimation: true,
                },
                legend: {
                    show: true,
                },
                animationDuration: 3000,
                animationDurationUpdate: 3000,
                animationEasing: "linear",
                animationEasingUpdate: "linear",
            },
        ],
    };
    ec2.setOption(option);

    setInterval(() => {
        update();
        ec2.setOption(option);
    }, 3000);

    const ec3 = useEcharts(main3.value, null, {
        width: "auto",
        height: "auto",
    });

    ec3.setOption({
        dataset: {
            dimensions: ["月份", 1, 2, 3, 4, 5],
            source: [[1, 500], [2, 100], [3, -50], [4, 200], []],
        },
    });
});
</script>
<template>
    <div class="main" ref="main"></div>
    <div class="main1" ref="main1"></div>
    <div class="mian2" ref="main2"></div>
    <div class="main3" ref="main3"></div>
</template>
<style lang="scss" scoped>
.main {
    width: 900px;
    height: 600px;
}
.main1 {
    width: 900px;
    height: 600px;
}
.mian2 {
    width: 900px;
    height: 600px;
}

.main3 {
    width: 900px;
    height: 600px;
}
</style>
