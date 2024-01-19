<template>
  <div>
    <div id="funnelChart" style="width: 500px;height: 500px;"></div>

  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import * as echarts from 'echarts'

onMounted(() => {
  const chartDom = document.getElementById('funnelChart')
  const myChart = echarts.init(chartDom)
  let option

  option = {
    series: [
      {
        type: 'funnel',
        data: [
          { value: 100, name: 'Step 1' },
          { value: 80, name: 'Step 2' },
          { value: 60, name: 'Step 3' },
          { value: 40, name: 'Step 4' },
          { value: 20, name: 'Step 5' },
          {
            value: 10,
            name: 'Step 6',
            itemStyle: {
            // Customize the style for the last data point
              color: '#c0c0c0',
              borderColor: '#c0c0c0',
              borderWidth: 1
            }
          }
        ],
        label: {
          show: true,
          position: 'inside'
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            show: true
          }
        }
      }
    ]
  }
  // option = {
  //   title: {
  //     text: 'Funnel'
  //   },
  //   tooltip: {
  //     trigger: 'item',
  //     formatter: '{a} <br/>{b} : {c}%'
  //   },
  //   toolbox: {
  //     feature: {
  //       dataView: { readOnly: false },
  //       restore: {},
  //       saveAsImage: {}
  //     }
  //   },
  //   legend: {
  //     data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
  //   },
  //   series: [
  //     {
  //       name: 'Funnel',
  //       type: 'funnel',
  //       left: '10%',
  //       top: 60,
  //       bottom: 60,
  //       width: '80%',
  //       min: 0,
  //       max: 100,
  //       minSize: '0%',
  //       maxSize: '100%',
  //       sort: 'descending',
  //       gap: 2,
  //       label: {
  //         show: true,
  //         position: 'inside'
  //       },
  //       labelLine: {
  //         length: 10,
  //         lineStyle: {
  //           width: 1,
  //           type: 'solid'
  //         }
  //       },
  //       itemStyle: {
  //         borderColor: '#fff',
  //         borderWidth: 1
  //       },
  //       emphasis: {
  //         label: {
  //           fontSize: 20
  //         }
  //       },
  //       data: [
  //         { value: 60, name: 'Visit' },
  //         { value: 40, name: 'Inquiry' },
  //         { value: 20, name: 'Order' },
  //         { value: 80, name: 'Click' },
  //         {
  //           value: 10,
  //           name: 'Step 6',
  //           itemStyle: {
  //             // 设置最后一个数据点的样式
  //             color: '#c0c0c0',
  //             borderColor: '#c0c0c0',
  //             borderWidth: 1
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // };

  option && myChart.setOption(option)
})

</script>

<style scoped lang='less'>

</style>
