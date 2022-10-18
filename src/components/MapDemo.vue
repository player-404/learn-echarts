<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef, onMounted } from "vue";
const map = shallowRef(null);

onMounted(() => {
    AMapLoader.load({
        key: "dab839808367ff062e90a5e8700b2216",
        version: "2.0",
        AMapUI: {
            version: "1.1",
            plugins: [],
        },
        plugins: ["AMap.GeoJSON"],
        Loca: {
            version: "2.0.0",
        },
    })
        .then((AMap) => {
            map.value = new AMap.GeoJSON("container", {
                extensions: "all",
                level: "country",
            });
            console.log(map.value);
            map.value.search('江西省', (status, result) => {
                var bounds = result.districtList[0].boundaries;
                if (bounds) {
                    
                }
            })
        })
        .catch((err) => {
            console.log(err);
        });
});
</script>
<template>
    <div id="container"></div>
</template>
<style lang="scss" scoped>
#container {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 800px;
}
</style>
