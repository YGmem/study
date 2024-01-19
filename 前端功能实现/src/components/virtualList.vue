<template>
  <div>
    <div class="scroll-container" @scroll="onScroll" >
      <div class="list-item-container" :style="{transform: `translateX(${translateX}px)`}">
        <div
          v-for="index in visibleIndices"
          :key="index"
          class="list-item"
        >
          <slot name="item" :item="items[index]" :index="index"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'VirtualList',
  props: {
    itemData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      items: this.itemData,
      visibleIndices: [] as any,
      itemWidth: 100,
      translateX: undefined
    };
  },
  mounted(){
    this.initVisibleIndices()
    console.log(this.items,this.visibleIndices);
  },
  methods: {
    onScroll(event:any) {
      console.log("🚀 ~ file: virtualList.vue:41 ~ onScroll ~ event:", event)
      const scrollLeft = event.target.scrollLeft;
      const firstIndex = Math.floor(scrollLeft / this.itemWidth);
      let lastIndex = Math.floor((scrollLeft + event.target.clientWidth) / this.itemWidth) + 1;
      lastIndex = Math.min(this.items.length - 1, lastIndex);
      this.visibleIndices = this.itemData.slice(firstIndex,lastIndex)
      this.translateX = scrollLeft
      console.log("🚀 ~ file: virtualList.vue:47 ~ onScroll ~ firstIndex,lastIndex:", firstIndex,lastIndex,this.itemData)
      console.log("🚀 ~ file: virtualList.vue:47 ~ onScroll ~ this.visibleIndices:", this.visibleIndices)
    },
    initVisibleIndices() {
      const containerWidth = this.$el.clientWidth
      let visibleCount = Math.ceil(containerWidth / this.itemWidth)
      visibleCount = Math.min(this.items.length, visibleCount); 
      this.visibleIndices = Array.from({length: visibleCount}, (_, i) => i);
      console.log( this.visibleIndices);
    },
  },
};
</script>

<style scoped>
.scroll-container {
  width: 500px;
  overflow-x: auto;
  white-space: nowrap;
}
.list-item-container {
  display: inline-block;
}
.list-item {
  display: inline-block;
  text-wrap: nowrap;
  overflow: hidden;
  width: 100px;
}
</style>