<template>
  <DockMenu dock="LEFT" :items="items"> </DockMenu>
</template>

<script>
import { defineComponent } from 'vue';
import { DockMenu } from 'vue-dock-menu';
import 'vue-dock-menu/dist/vue-dock-menu.css';

export default defineComponent({
  name: 'example',
  components: {
    DockMenu,
  },
  setup: () => {
    return {
      items: [
        {
          name: '基本信息',
          menu: [{ name: '个人信息' }, { name: '个人信息卡片' }, { name: '设置工作台' }],
        },
        {
          name: '图床',
          menu: [{ name: '导入图片' }, { name: '保存到本地' }, { name: '云端同步' }],
        },
        {
          name: '目录/文件管理',
          menu: [{ name: '创建文件夹' }, { name: '创建文件' }, { name: '修改日志' }],
        },
        {
          name: '文件编辑',
          menu: [{ name: 'markdown 编辑器' }, { name: '块编辑' }, { name: '后退/前进' }, { name: '保存到本地' }, { name: '云端备份' }],
        },
        {
          name: '发布',
          menu: [{ name: '模板管理' }, { name: '预览' }, { name: '发布' }, { name: '分发' }, { name: '发布历史' }],
        },
      ],
    };
  },
});
</script>
