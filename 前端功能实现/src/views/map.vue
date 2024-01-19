<template>
  <div
    style="min-height: 500px; justify-content: center; position: relative"
    id="map"
  />
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from "vue";
import { Scene, PolygonLayer } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import { Choropleth } from "@antv/l7plot";
onMounted(() => {
  const scene = new Scene({
    id: "map",
    map: new GaodeMap({
      pitch: 35.210526315789465,
      style: "dark",
      center: [104.288144, 31.239692],
      zoom: 4.4,
      token: "362cef75097c34f2c62182d42e57f0f0",
    }),
  });
  const choropleth = new Choropleth({
    source: {
      data: [{ adcode: 350128, value: 200 }],
      joinBy: {
        sourceField: "adcode",
        geoField: "adcode",
      },
    },
    viewLevel: {
      level: "district",
      adcode: 350128,
    },
    autoFit: true,
    color: {
      field: "value",
      value: ["#B8E1FF", "#7DAAFF", "#3D76DD", "#0047A5", "#001D70"],
      scale: { type: "quantize" },
    },
    style: {
      opacity: 1,
      stroke: "#ccc",
      lineWidth: 0.6,
      lineOpacity: 1,
    },
    label: {
      visible: true,
      field: "name",
      style: {
        fill: "#000",
        opacity: 0.8,
        fontSize: 10,
        stroke: "#fff",
        strokeWidth: 1.5,
        textAllowOverlap: false,
        padding: [5, 5],
      },
    },
    state: {
      active: { stroke: "black", lineWidth: 1 },
    },
    tooltip: {
      items: ["name", "adcode", "value"],
    },
    zoom: {
      position: "bottomright",
    },
    legend: {
      position: "bottomleft",
    },
  });

  scene.on("loaded", () => {
    choropleth.addToScene(scene);
  });
});
</script>

<style scoped lang='scss'>
</style>