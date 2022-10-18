<script setup>
import { useEcharts, registerMap } from "../utils/echarts";
import { onMounted, reactive, ref, watch } from "vue";
import { pushHistory } from "../utils/mapHistory";
import geoJson from "../geoJson";
import countryData from "../geoJson/全国.json";

const index = ref("");
const lines = ref(null);
const historyList = reactive([]);
const myEchart = ref(null);
const geoCoorMap = reactive({
    成都: [103.9526, 30.7617],
    三亚: [109.5227, 18.2577],
    呼和浩特: [111.4124, 40.4901],
    银川市: [106.2064, 38.5026],
    北京: [116.4551, 40.2539],
    银川: [106.3586, 38.1775],
    拉萨: [91.1865, 30.1465],
    井冈山: [114.303, 26.7498],
    九寨沟: [103.9441, 33.1649],
});

onMounted(() => {
    myEchart.value = useEcharts(lines.value, {
        width: "auto",
        height: "auto",
    });
    index.value = 0;
    pushHistory(historyList, countryData.info);
});

watch(index, (newv) => {
    const name = historyList[newv].name;
    const map = geoJson[name].geoJson;
    registerMap(name, { geoJson: map });
    myEchart.value.setOption({
        geo: {
            map: name,
            selectedMode: false,
            itemStyle: {
                areaColor: "#333",
                borderColor: "green",
            },
        },
        series: [
            {
                name: "航班",
                type: "lines",
                selectedMode: true,
                lineStyle: {
                    // 线的颜色
                    color: "red",
                    // 线宽。
                    width: 2,
                    // 用于指定线段末端的绘制方式
                    cap: "round",
                    opacity: 1,
                    curveness: 0.3,
                },
                label: {
                    show: true,
                    position: "middle",
                },
                data: [
                    {
                        name: "成-亚航班",
                        coords: [
                            [103.9526, 30.7617],
                            [109.5227, 18.2577],
                        ],
                    },
                    {
                        name: "呼-亚航班",
                        coords: [
                            [111.4124, 40.4901],
                            [109.5227, 18.2577],
                        ],
                    },
                    {
                        name: "北-银航班",
                        coords: [
                            [116.4551, 40.2539],
                            [106.3586, 38.1775],
                        ],
                    },
                ],
                //线特效的配置
                effect: {
                    show: true,
                    symbol: "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",
                    symbolSize: 18,
                    period: 10,
                    trailLength: 0,
                    //当动画到达终点时，是否原路返回。
                    roundTrip: false,
                },
                emphasis: {
                    disabled: false,
                    focus: "self",
                    lineStyle: {
                        color: "yellow",
                    },
                    label: {
                        color: "yellow",
                    },
                },
                select: {
                    lineStyle: {
                        disabled: false,
                        color: "yellowGreen",
                    },
                    label: {
                        color: "green",
                        fontWeight: "bolder",
                    },
                },
            },
            {
                type: "effectScatter",
                coordinateSystem: "geo",
                label: {
                    show: true,
                    position: "top",
                    formatter(params) {
                        return params.value[2];
                    },
                },
                itemStyle: {
                    color: "yellow",
                },
                data: [
                    [103.9526, 30.7617, "成都"],
                    [109.5227, 18.2577, "三亚"],
                    [111.4124, 40.4901, "呼和浩特"],
                    [116.4551, 40.2539, "北京"],
                ],
            },
        ],
    });
});
</script>
<template>
    <!-- 路径图 -->
    <div id="lines" ref="lines"></div>
</template>
<style lang="scss" scoped>
#lines {
    width: 900px;
    height: 900px;
}
</style>
