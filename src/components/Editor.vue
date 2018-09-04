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
import 'codemirror/mode/pug/pug.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/theme/neat.css'

export default {
  name: 'Editor',
  components: {
    codemirror
  },
  props: ['code', 'lang', 'className', 'onChange'],
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
        matchTags: true,
        theme: 'neat'
      }
    }
  }
}
</script>
