<template>
  <div id="app">
    <div id="editor">

    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Editor from '@toast-ui/editor'

export default {
  name: 'writing-tool',
  mounted () {
    const editor = new Editor({
      el: document.querySelector('#editor')
    })
    console.log(editor)
  }
}
</script>

<style>
/* CSS */
#editor {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100% !important;
}
</style>
