<template>
  <codemirror
    :class="this.className"
    v-model="cmCode"
    :options="cmOptions"
    @input="this.onChange"
  ></codemirror>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/edit/closebrackets.js'

export default {
  name: 'Editor',
  components: {
    codemirror
  },
  props: ['code', 'className', 'onChange'],
  data() {
    return {
      cmCode: this.code,
      cmOptions: {
        tabSize: 2,
        mode: this.lang,
        lineNumbers: true,
        line: true,
        linWrapping: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        matchTags: false
      }
    }
  }
}
</script>
