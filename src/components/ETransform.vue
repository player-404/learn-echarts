<script setup lang="ts">
import { useEcharts } from "../utils/echarts";
import { ref, onMounted } from "vue";
const main = ref(null);
const main1 = ref(null);
const main2 = ref(null);

onMounted(() => {
    const myEchar = useEcharts(main.value, null, {
        with: "auto",
        height: "auto",
    });
    myEchar.setOption({
        tooltip: {},
        dataset: [
            {
                source: [
                    ["Product", "Sales", "Price", "Year"],
                    ["Cake", 123, 32, 2011],
                    ["Cereal", 231, 14, 2011],
                    ["Tofu", 235, 5, 2011],
                    ["Dumpling", 341, 25, 2011],
                    ["Biscuit", 122, 29, 2011],
                    ["Cake", 143, 30, 2012],
                    ["Cereal", 201, 19, 2012],
                    ["Tofu", 255, 7, 2012],
                    ["Dumpling", 241, 27, 2012],
                    ["Biscuit", 102, 34, 2012],
                    ["Cake", 153, 28, 2013],
                    ["Cereal", 181, 21, 2013],
                    ["Tofu", 395, 4, 2013],
                    ["Dumpling", 281, 31, 2013],
                    ["Biscuit", 92, 39, 2013],
                    ["Cake", 223, 29, 2014],
                    ["Cereal", 211, 17, 2014],
                    ["Tofu", 345, 3, 2014],
                    ["Dumpling", 211, 35, 2014],
                    ["Biscuit", 72, 24, 2014],
                ],
            },
            {
                // 链式调用，第一个 转换的数据会给到后一个，最终输出一个新的dataset
                transform: [
                    {
                        // 过滤原始数据
                        type: "filter",
                        config: {
                            dimension: "Product",
                            value: "Tofu",
                        },
                    },
                    {
                        // 排序原始数据
                        type: "sort",
                        config: {
                            dimension: "Year",
                            order: "desc",
                        },
                    },
                ],
            },
        ],
        series: {
            type: "pie",
            // 这个系列引用上述 transform 的结果。
            datasetIndex: 1,
        },
    });

    const ec1 = useEcharts(main1.value, null, {
        width: "auto",
        height: "auto",
    });
    ec1.setOption({
        dataset: [
            {
                source: [
                    ["Product", "Sales", "Price", "Year"],
                    ["Cake", 123, 32, 2011],
                    ["Cereal", 231, 14, 2011],
                    ["Tofu", 235, 5, 2011],
                    ["Dumpling", 341, 25, 2011],
                    ["Biscuit", 122, 29, 2011],
                    ["Cake", 143, 30, 2012],
                    ["Cereal", 201, 19, 2012],
                    ["Tofu", 255, 7, 2012],
                    ["Dumpling", 241, 27, 2012],
                    ["Biscuit", 102, 34, 2012],
                    ["Cake", 153, 28, 2013],
                    ["Cereal", 181, 21, 2013],
                    ["Tofu", 395, 4, 2013],
                    ["Dumpling", 281, 31, 2013],
                    ["Biscuit", 92, 39, 2013],
                    ["Cake", 223, 29, 2014],
                    ["Cereal", 211, 17, 2014],
                    ["Tofu", 345, 3, 2014],
                    ["Dumpling", 211, 35, 2014],
                    ["Biscuit", 72, 24, 2014],
                ],
            },
            {
                transform: {
                    type: "filter",
                    config: {
                        dimension: "Year",
                        "=": "2011",
                    },
                },
            },
        ],
        xAxis: {
            type: "category",
        },
        yAxis: {},
        series: [
            {
                type: "pie",
                datasetIndex: 1,
            },
        ],
    });

    const ec2 = useEcharts(main2.value, null, {
        width: "auto",
        height: "auto",
    });
    ec2.setOption({
        tooltip: {},
        dataset: [
            {
                dimensions: ["name", "age", "profession", "score", "date"],
                source: [
                    [" Hannah Krause ", 41, "Engineer", 314, "2011-02-12"],
                    ["Zhao Qian ", 20, "Teacher", 351, "2011-03-01"],
                    [" Jasmin Krause ", 52, "Musician", 287, "2011-02-14"],
                    ["Li Lei", 37, "Teacher", 219, "2011-02-18"],
                    [" Karle Neumann ", 25, "Engineer", 253, "2011-04-02"],
                    [" Adrian Groß", 19, "Teacher", null, "2011-01-16"],
                    ["Mia Neumann", 71, "Engineer", 165, "2011-03-19"],
                    [" Böhm Fuchs", 36, "Musician", 318, "2011-02-24"],
                    ["Han Meimei ", 67, "Engineer", 366, "2011-03-12"],
                ],
            },
            {
                transform: {
                    type: "sort",
                    // 按分数排序
                    config: { dimension: "score", order: "desc" },
                },
            },
        ],
        series: {
            type: "bar",
            encode: {
                x: "name",
                y: "score",
            },
            datasetIndex: 1,
        },
        xAxis: {
            type: "category",
        },
        yAxis: {},
    });
});
</script>
<template>
    <div class="main" ref="main"></div>
    <div class="main1" ref="main1"></div>
    <div class="main2" ref="main2"></div>
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
.main2 {
    width: 900px;
    height: 600px;
}
</style>
