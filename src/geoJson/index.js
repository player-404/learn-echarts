// 自动导入geoJson数据
const modules = import.meta.glob("@/geoJson/*.json", { eager: true });
const pattern = /(?<=geoJson\/).*(?=\.json)/;
const geoJson = {};

Object.keys(modules).forEach(async (item) => {
    const name = item.match(pattern)[0];
    const data = modules[item];
    geoJson[name] = data.default;
});

export default geoJson;
