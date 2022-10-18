<script setup>
import mapGeoJson from "../geoJson";
import { ref, shallowRef, onMounted, watch, reactive, watchEffect } from "vue";
import { registerMap, useEcharts } from "../utils/echarts";
import { pushHistory, popHistiry } from "../utils/mapHistory.js";
import mapData from "../geoJson/全国.json";

const map = shallowRef(mapGeoJson);
const main = ref(null);
const myEchart = shallowRef(null);
const historyList = reactive([]);
const index = ref();

onMounted(() => {
    myEchart.value = useEcharts(main.value, null, {
        width: "auto",
        height: "auto",
    });
    pushHistory(historyList, mapData.info);
    index.value = 0;
    // 点击地图下钻
    myEchart.value.on("click", (params) => {
        console.log("params", params.name);
        const name = params.name;
        if (!map.value[name]) return;
        index.value = index.value + 1;
        pushHistory(historyList, map.value[name].info);
    });

    // 点击空白处时，返回地图的上一级
    myEchart.value.getZr().on("click", async (event) => {
        if (!event.target) {
            console.log("点击了空白处");
            popHistiry(historyList)
                .then(() => {
                    index.value = index.value - 1;
                })
                .catch((err) => {
                    console.log("不能再返回了");
                });
        }
    });
});

watch(index, (newv) => {
    // 清空当前实例，会移除实例中所有的组件和图表。
    let name = historyList[newv].name;
    const geoJson = map.value[name].geoJson;
    registerMap(name, { geoJson });
    myEchart.value.setOption({
        // 标题组件，包含主标题和副标题。
        title: {
            show: true,
            // 主题文字内容
            text: "全国经济情况(假)",
            // 主标题文字样式
            textStyle: {
                color: "red",
                fontStyle: "italic",
                textBorderColor: "#000",
                textBorderWidth: 1,
                width: 100,
                textShadowColor: "red",
                textShadowBlur: 3,
                textShadowOffsetY: 3,
            },
            subtext: "2022-10-11（数据随机）",
            subtextStyle: {
                color: "red",
                fontStyle: "italic",
            },
            left: "center",
        },
        // 地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集
        geo: {
            map: name,
            show: false,
        },
        //  提示框组件。
        tooltip: {
            show: true,
            trigger: "item",
            // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
            formatter(params) {
                return `${params.name}: ${params.value}`;
            },
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            textStyle: {
                color: "#fff",
            },
        },
        //visualMap 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）, 与series关联
        // visualMap: {
        //     type: "continuous", // 定义为连续型 visualMap
        //     //指定 visualMapContinuous 组件的允许的最小值
        //     min: 0,
        //     //指定 visualMapContinuous 组件的允许的最大值
        //     max: 100,
        //     //指定手柄对应数值的位置
        //     range: [0, 100],
        //     //是否显示拖拽用的手柄
        //     calculable: true,
        //     //拖拽时，是否实时更新。
        //     realtime: true,
        //     //两端的文本
        //     text: ["high", "low"],
        //     //定义 在选中范围中 的视觉元素
        //     inRange: {
        //         //图元的颜色。
        //         color: ["#121122", "rgba(3,4,5,0.4)", "red"],
        //     },
        //     left: 250,
        //     bottom: 400,
        // },
        // 数据集
        dataset: {
            //纬度
            dimensions: ["name", "value"],
            source: [
                ["江西省", 58],
                ["上海市", 92],
                ["湖北省", 76],
                ["重庆市", 67],
                ["河南省", 71],
                ["安徽省", 82],
                ["湖南省", 78],
                ["福建省", 87],
                ["广东省", 90],
                ["浙江省", 88],
                ["江苏省", 79],
                ["广西壮族自治区", 67],
                ["贵州省", 80],
                ["四川省", 77],
                ["云南省", 45],
                ["陕西省", 60],
            ],
        },
        series: [
            // 散点，必须使用geo组件
            {
                name: "pm2.5",
                type: "scatter",
                coordinateSystem: "geo",
                data: [
                    {
                        name: "江西",
                        value: [115.892151, 28.676493, 58],
                    },
                    {
                        name: "上海",
                        value: [121.472644, 31.231706, 92],
                    },
                ],
                symbolSize: 50,
                symbol: "pin",
                label: {
                    show: true,
                    formatter(parmas) {
                        console.log("parmas", parmas);
                        return parmas.value[2];
                    },
                },
                itemStyle: {
                    color: "red",
                    opacity: 1,
                },
            },
            // 地图组件
            {
                name: "经济",
                type: "map",
                // 使用 registerMap 注册的地图名称。
                map: name,
                // 是否显示地理坐标系组件。
                show: true,
                // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                roam: true,
                label: {
                    show: true,
                    color: "#fff",
                },
                itemStyle: {
                    // 地图整体颜色
                    areaColor: "#fff",
                    // 地图线条颜色
                    borderColor: "#1773c3",
                    // 阴影颜色
                    shadowColor: "#1773c3",
                    // 阴影大小
                    shadowBlur: 4,
                    shadowOffsetY: 1,
                    // 图形颜色，与areaColor颜色一致，优先级若于areaColor
                    color: "#000",
                    //描边线宽
                    borderWidth: 0,
                    //描边类型。
                    borderType: [5, 10],
                    borderDashOffset: 130,
                },
                //高亮状态下的多边形和标签样式。
                emphasis: {
                    disabled: false,
                    focus: "none",
                    label: {
                        color: "red",
                        fontWeight: "bolder",
                    },
                    // 地图区域的多边形 图形样式。
                    itemStyle: {
                        areaColor: "#1773c3",
                    },
                },
                //选中状态下的多边形和标签样式。
                select: {
                    label: {
                        fontWeight: "bolder",
                        color: "#fff",
                    },
                    itemStyle: {
                        areaColor: "#000",
                    },
                },
                // regions: [
                //     {
                //         name: "江西省",
                //         itemStyle: {
                //             areaColor: "red",
                //             color: "red",
                //         },
                //     },
                // ],
            },
            //用于带有起点和终点信息的线数据的绘制，主要用于地图上的航线，路线的可视化
            {
                type: "lines",
                name: "经济带",
                coordinateSystem: "geo",
                // 线数据集。
                data: [
                    {
                        nasme: "123",
                        lineStyle: {
                            color: "rgb(200, 35, 45)",
                            opacity: 1,
                            width: 1,
                        },
                        coords: [
                            // 起点
                            [115.892151, 28.676493],
                            // 终点
                            [121.472644, 31.231706],
                        ],
                    },
                ],
                zlevel: 100,
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
    width: 1400px;
    height: 900px;
}
</style>
