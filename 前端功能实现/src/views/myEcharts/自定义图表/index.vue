<template>
  <div>
    <form @submit.prevent="generateChart">
      <label>
        请输入数据逗号隔开
        <input v-model="dataInput" type="text" required />
      </label>
      <label>
        图表类型:
        <select v-model="chartType">
          <option value="bar">Bar</option>
          <option value="line">Line</option>
          <option value="pie">Pie</option>
        </select>
      </label>
      <button type="submit">创建图表</button>
    </form>
    <div id="chart" style="width: 600px; height: 400px"></div>
    <!-- <button @click="saveChart">Save Chart</button> -->
  </div>
</template>
<script lang="ts">
import * as echarts from 'echarts'

export default {
  data() {
    return {
      dataInput: '',
      chartType: 'bar',
      chart: null as echarts.ECharts | null,
    }
  },
  mounted() {
    this.chart = echarts.init(document.getElementById('chart'))
  },
  methods: {
    generateChart() {
      const data = this.dataInput.split(',').map(Number)
      const option = {
        xAxis: {},
        yAxis: {},
        series: [
          {
            type: this.chartType,
            data,
          },
        ],
      }
      this.chart?.setOption(option)
    },
    saveChart() {
      const chartData = {
        type: this.chartType,
        data: this.dataInput,
      }
      localStorage.setItem('chart', JSON.stringify(chartData))
    },
  },
}
</script>

<style scoped lang="less">

</style>
