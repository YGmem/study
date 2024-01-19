<template>
  <div>
    <!-- 话路线会填充 m表示移动 L表示画线 z结束 会填充 -->
    <svg width="300" height="180" style="display: inline-block">
      <path
        d="
      M 18,3
      L 46,3
      L 46,40
      L 61,40
      L 32,68
      L 3,40
      L 18,40
      Z
    "
      ></path>
    </svg>

    <!-- 动画效果 attributeName：发生动画效果的属性名。
      from：单次动画的初始值。
      to：单次动画的结束值。
      dur：单次动画的持续时间。
      repeatCount：动画的循环模式。  -->
    <svg width="500px" height="200px" style="display: inline-block">
      <rect x="0" y="0" width="100" height="100" fill="#feac5e">
        <animate
          attributeName="x"
          from="0"
          to="500"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>

    <!-- <animate>标签对 CSS 的transform属性不起作用，如果需要变形，就要使用<animateTransform>标签。 下面代码中，<animateTransform>的效果为旋转（rotate），这时from和to属性值有三个数字，第一个数字是角度值，第二个值和第三个值是旋转中心的坐标。from="0 200 200"表示开始时，角度为0，围绕(200, 200)开始旋转；to="360 400 400"表示结束时，角度为360，围绕(400, 400)旋转。 -->
    <svg width="500px" height="500px" style="display: inline-block">
      <rect x="250" y="250" width="50" height="50" fill="#4bc0c8">
        <animateTransform
          attributeName="transform"
          type="rotate"
          begin="0s"
          dur="10s"
          from="0 100 100"
          to="260 300 300"
          repeatCount="indefinite"
        />
      </rect>
    </svg>

    <svg width="400" height="160">
      <g class="layer" transform="translate(60,10)">
        <circle r="5" cx="0" cy="105" />
        <circle r="5" cx="90" cy="90" />
        <circle r="5" cx="180" cy="60" />
        <circle r="5" cx="270" cy="0" />

        <g class="y axis">
          <line x1="0" y1="0" x2="0" y2="120" />
          <text x="-40" y="105" dy="5">$10</text>
          <text x="-40" y="0" dy="5">$80</text>
        </g>
        <g class="x axis" transform="translate(0, 120)">
          <line x1="0" y1="0" x2="270" y2="0" />
          <text x="-30" y="20">January 一月</text>
          <text x="240" y="20">April 四月</text>
        </g>
      </g>
    </svg>

    <svg height="31.88" width="32">
      <radialGradient id="sunGradient">
        <stop offset="0%" style="stop-color: yellow; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: orange; stop-opacity: 1" />
      </radialGradient>
      <circle cx="16" cy="16" r="8" fill="url(#sunGradient)" />
      <circle
        cx="16"
        cy="16"
        r="9.6"
        fill="none"
        stroke="orange"
        stroke-width="1.6"
        stroke-dasharray="0.8,0.8"
      />
    </svg>

    <svg class="gauge" viewBox="0 0 100 50">
      <path class="gauge__track" d="M 10,40 A 30,30 0,0,1 90,40" />
      <path
        class="gauge__fill"
        d="M 10,40 A 30,30 0,0,1 90,40"
        style="stroke-dasharray: 0, 100"
      />
      <path class="gauge__cover" d="M 10,40 A 30,30 0,0,1 90,40" />
    </svg>

    <svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Draw the arc -->
      <path
        id="arc"
        d="M 10,110 A 100,100 0,0,1 210,110"
        fill="transparent"
        stroke="#ddd"
        stroke-width="2"
      />

      <!-- Draw the scale lines -->
      <g id="scale-lines">
        <!-- We will generate these lines using JavaScript -->
      </g>

      <!-- Draw the fill -->
      <path
        id="fill"
        d="M 10,110 A 100,100 0,0,1 210,110"
        fill="transparent"
        stroke="#f00"
        stroke-width="2"
        stroke-dasharray="0,628"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const fillPercentage = ref(0)

onMounted(() => {
  setTimeout(() => {
    fillPercentage.value = 75 // Set this to the desired fill percentage
  }, 1000)

  const scaleLines = document.getElementById('scale-lines')
  const radius = 100 // 半圆的半径
  const centerX = 110 // 半圆的中心点的x坐标
  const centerY = 110 // 半圆的中心点的y坐标

  for (let i = 0; i <= 20; i++) {
    // 计算每条刻度线的角度
    const angle = (Math.PI * i) / 20

    // 计算刻度线的起点和终点
    const startX = centerX + radius * Math.cos(angle) + ''
    const startY = centerY - radius * Math.sin(angle) + ''
    const endX =
      centerX + (radius + (i % 4 === 0 ? 10 : 5)) * Math.cos(angle) + ''
    const endY =
      centerY - (radius + (i % 4 === 0 ? 10 : 5)) * Math.sin(angle) + ''

    // 创建刻度线元素
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    line.setAttribute('x1', startX)
    line.setAttribute('y1', startY)
    line.setAttribute('x2', endX)
    line.setAttribute('y2', endY)
    line.setAttribute('stroke', '#ddd')
    line.setAttribute('stroke-width', '2')

    // 添加刻度线到SVG中
    scaleLines?.appendChild(line)
  }

  const fill = document.getElementById('fill') as unknown as SVGPathElement

  // Set the dash array to the length of the path
  const length = fill?.getTotalLength()
  fill.style.strokeDasharray = `0 ${length}`

  // Create the animation
  const animation = fill.animate(
    [
      { strokeDasharray: `0 ${length}` },
      { strokeDasharray: `${length} ${length}` },
    ],
    {
      duration: 2000, // The duration of the animation in milliseconds
      fill: 'forwards', // The animation will hold the end state when completed
    }
  )
})
</script>

<style scoped>
.gauge {
  width: 100%;
  height: auto;
}

.gauge__track,
.gauge__fill,
.gauge__cover {
  stroke-width: 1;
  fill: none;
}

.gauge__track {
  stroke: #ddd;
}

.gauge__fill {
  stroke: #f00;
  transition: stroke-dasharray 1s linear;
}

.gauge__cover {
  stroke: #fff;
  stroke-dasharray: 5 5;
}
</style>
