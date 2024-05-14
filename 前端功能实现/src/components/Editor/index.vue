<template>
<div>   
        <div className="shop">
            <div className="text-area" >
                <div ref="editorElemMenu"
                    style="backgroundColor: '#f1f1f1'; border:'1px solid #ccc'"
                    className="editorElem-menu">
                </div>
                <div style="height: 300;border: '1px solid #ccc',borderTop: 'none'" ref="editorElemBody" className="editorElem-body">
                </div>
            </div>
        </div>
</div>


</template>

<script lang="ts">

import { onMounted ,reactive,toRefs,defineComponent,ref} from 'vue'
import E from 'wangeditor'

interface DataProps {
    editor: any;
    editorContent: string
    getContent:(ref?: any) => void
}



export default defineComponent({
    name:'Editor',
     components: {
    },
    props: {
        options: Object,
        value: String,
    },
    setup(props, { emit }) {
    const editorElemMenu = ref();
    const editorElemBody = ref();
    const data: DataProps = reactive({
            editorContent: '',
            editor: {},
            getContent: ()=> {
                console.log("111",props)    
                data.editor.txt.html(props.value)
            }
        })
        onMounted(() => {
            let _this = this;
            const elemMenu = editorElemMenu.value;
            const elemBody = editorElemBody.value;
             data.editor = new E(elemMenu, elemBody)
              // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
                    data.editor.config.onchange = (html: any) => {
                        console.log(data.editor.txt.html())
                         data.editorContent = data.editor.txt.html()
                             // 向外部返回一个处理过的值
                         emit('onEditor', data.editor.txt.html())
                        emit('update:value', data.editor.txt.html())
                    }
                    data.editor.config.customUploadImg = function (files: any, insert: any ) {
                          // files 是 input 中选中的文件列表insert 是获取图片 url 后，插入到编辑器的方法
                          // let file;
                          // if (files && files.length) {
                          //     file = files[0];
                          // } else {
                          //     return
                          // }
                          // 图片上传
                          console.log("files1",files)

                          const formData = new FormData();
                          formData.append('file', files[0]);
                          console.log("files",files,insert)
                          // formData.append('Banners',{id:editorinfo.id,naviChildId:editorinfo.naviChildId})
                      }

                    data.editor.config.menus = [
                        'head',  // 标题
                        'bold',  // 粗体
                        'fontSize',  // 字号
                        'fontName',  // 字体
                        'italic',  // 斜体
                        'underline',  // 下划线
                        'strikeThrough',  // 删除线
                        'foreColor',  // 文字颜色
                        'backColor',  // 背景颜色
                        'link',  // 插入链接
                        'list',  // 列表
                        'justify',  // 对齐方式
                        'quote',  // 引用
                        'emoticon',  // 表情
                        'image',  // 插入图片
                        'table',  // 表格
                        'video',  // 插入视频
                        'code',  // 插入代码
                        'undo',  // 撤销
                        'redo'  // 重复
                    ]
                    data.editor.config.uploadImgShowBase64 = true
                    data.editor.create()

                    // data.getContent()
        })
        const refData = toRefs(data);
        return {
            ...refData,
            editorElemMenu,
            editorElemBody
        }
    }
})
</script>

<style scoped>
.part_right {
    width: 100%;
    background: #f2f2f2;
    min-height: 100vh;
}
.list {
    width:96%;
    margin: 0 auto;

    /* background: gray; */
    padding-top: 50px;
}
.list ul li{
    list-style-type: none;
    display: flex;
    border-bottom: 1px solid #e6e5e5;
    min-height: 50px;
    background: #d5d5d5;
}
.list ul li>div{
    flex: 1;
    line-height: 50px;
}
.list ol li{
    list-style-type: none;
    display: flex;
    border-bottom: 1px solid #e6e5e5;
    min-height: 30px;
}
.list ol li>div{
    flex: 1;
    line-height: 30px;
}
.flright {
    float: right;
    margin-right: 2%;
}
</style>

