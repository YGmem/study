<template>
  <Header class="header" />
  <div class="page">
    <Side class="side" />
    <Content  class="content"/>
  </div>
  <RemoteCss href="http://10.10.114.29:8042/api/resources/files/anon/apply/logo/2024/1/30/cc75bc6781e345708d188f2bb536db54.css" />
  <div v-html="html"></div>
</template>
<script setup lang="ts">
import Content from '@/views/layout/Content.vue'
import Header from '@/views/layout/Header.vue'
import Side from '@/views/layout/Side.vue'
import { defineComponent, h } from 'vue'
import { isIOS } from '@/utils/utils'

const RemoteCss = defineComponent({
  render () {
    return h('link', { rel: 'stylesheet', href: this.href })
  },  
  props: {
    href: { type: String, required: true }
  }
})

let a = ()=>{
  console.log(111);
  
}
const html = `<div id="web-footer">
    <div class="top">
      <div class="el-containers">
        <div class="category about-us">
          <div class="title" onClick="a">关于我们</div>
          <ul>
            <el-button type="primary">111</el-button>
            <li><a href="javascript:;">常见问题</a></li>
            <li><a href="javascript:;">免责声明</a></li>
            <li><a href="http://127.0.0.1:5173/;">意见反馈</a></li>
            <li><a href="javascript:;">帮助中心</a></li>
          </ul>
        </div>
        <div class="category">
          <div class="title">联系方式</div>
          <ul>
            <li>
              <label for="">在线咨询：</label>
              <div class="with-bac">
                客服QQ
              </div>
            </li>
            <!-- <li v-if='isShowContent ==0'>座机号码：0556-12345678 </li> -->
            <li v-if='isShowContent ==0'>平台地址：福州市鼓楼区东街7号 </li>
            <li>
              工作时间：工作日 上午8:00-12:00 下午14:00-18:00
            </li>
          </ul>
        </div>
        <div class="category">
          <div class="title">友情链接</div>
          <ul>
            <li><a href="javascript:;" class="with-bac">{{ platformTitle }}</a></li>
          </ul>
        </div>
        <div class="category">
          <div class="title">关于平台</div>
          <ul>
            <li style="line-height: 1.8;">{{ platformTitle }}满足企业通过平台上便捷地按需使用资源,平台聚合全国优质的服务能力资源,为缺乏开发能力的企业提供基础云资源、行业云平台、个性化云应用、解决方案等各类服务,满足企业名类上云需求。</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="guidance" v-if='isShowContent ==0'>指导运营单位：中国电信股份有限公司福建分公司</div>
      <div class="Copyrightc">Copyrightc {{ platformTitle }} All Right Reserved</div>
    </div>
  </div>`

</script>

<style scoped lang="less">
.header{
    height: 10%;
}
.page{
  height: 90%;
  display: flex;

  .side{
    width: 200px;
  }
  .content{
    margin: 20px;
    width: 100%;
    height: 100%;
  }

}
</style>
