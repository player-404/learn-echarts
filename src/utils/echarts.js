// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import {
    BarChart,
    PieChart,
    BoxplotChart,
    ScatterChart,
    MapChart,
    LinesChart,
    EffectScatterChart,
    LineChart,
} from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LegendComponent,
    DataZoomComponent,
    VisualMapComponent,
} from "echarts/components";
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    LegendComponent,
    PieChart,
    BoxplotChart,
    ScatterChart,
    DataZoomComponent,
    MapChart,
    VisualMapComponent,
    LinesChart,
    EffectScatterChart,
    LineChart,
]);

// 注册地图
export const useRegisterMap = (name, geoJosn) => echarts.registerMap(name, geoJosn);

// 初始化
export const useEcharts = (el, theme, options) => echarts.init(el, theme, options);
