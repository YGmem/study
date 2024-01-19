import { http } from './apiBase'
import router from '@/router';
import { ref } from 'vue';

let currentVersion = ref('')


// 获取版本
export function getVersion() {
  return http.request('get', '/version')
}


/*  1 版本更新第一种方式,递归获取版本,提示刷新 我这里是调用接口，实际项目是掉接口获取public的版本文件 */
// setInterval(async () => {
//   let { data } = await getVersion()
//   console.log(currentVersion.value, data);

//   if (currentVersion.value && data && currentVersion.value !== data) {
//     alert('版本更新请刷新页面')
//     currentVersion.value = data
//   } else {
//     currentVersion.value = data
//   }

// }, 1000);



/* 2 监听script 资源获取是否错误，以检查更新 ,这样更新文件的时候需要先删除旧文件，而不是覆盖式更新 */

// function ListenerVersion(e: Event) {
//   console.log("🚀 ~ file: version.ts:32 ~ ListenerVersion ~ e:", e)
//   let srcElement = e.target as HTMLScriptElement
//   if (srcElement?.tagName === 'SCRIPT' && srcElement?.src) {
//     alert('监测到版本更新,请刷新页面')
//   }
// }

// window.addEventListener('error', ListenerVersion, true)



/* 3 在路由切换或者浏览器visibility切换的回调的时候去判断版本，这种也是结合第一种去获取版本,也是目前接口获取，实际去获取public的文件 */
async function getNowVersion() {
  let { data } = await getVersion()
  console.log(currentVersion.value, data);

  if (currentVersion.value && data && currentVersion.value !== data) {
    alert('版本更新请刷新页面')
    currentVersion.value = data
  } else {
    currentVersion.value = data
  }
}


// 路由切换获取版本检查更新
router.beforeEach((to, form, next) => {
  getNowVersion()
  next()
})



document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    getNowVersion();
  }
});

