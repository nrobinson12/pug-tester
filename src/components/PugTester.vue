<template>
  <multipane class="pugtester fill-size" layout="vertical">
    <multipane class="code" layout="horizontal">
      <div class="box-header">
        pug
      </div>
      <div class="pug-code">
        <editor
          className="fill-size"
          lang="pug"
          :code="pugCode"
          :onChange="onPugChange"          
        ></editor>
      </div>
      <multipane-resizer></multipane-resizer>
      <div class="box-header">
        json
      </div>
      <div class="json-code">
        <editor
          className="fill-size"
          :lang="{ name: 'javascript', json: true }"
          :code="jsonCode"
          :onChange="onJsonChange"
        ></editor>
      </div>
    </multipane>
    <multipane-resizer></multipane-resizer>
    <div class="fill-size">
      <div class="box-header">
        result
      </div>
      <div class="output fill-size">
        OUTPUT
      </div>
    </div>
  </multipane>
</template>

<script>
import { Multipane, MultipaneResizer } from 'vue-multipane'
import Editor from './Editor.vue'

export default {
  name: 'PugTester',
  components: {
    Multipane,
    MultipaneResizer,
    Editor
  },
  data() {
    return {
      jsonCode: '{\n\t"message": "Welcome to my Pug Tester!"\n}',
      pugCode: 'div(style="color:red;")\n\th1 #{message}'
    }
  },
  methods: {
    onPugChange(newCode) {
      console.log('pug changed:', newCode)
      this.pugCode = newCode
    },
    onJsonChange(newCode) {
      console.log('json changed:', newCode)
      this.jsonCode = newCode
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.fill-size {
  height: 100%;
  width: 100%;
}
.code {
  width: 40%;
  min-width: 10%;
}
.box-header {
  padding: 5px;
  background-color: #cccccc;
}
.pug {
  &-code {
    min-width: 100%;
    max-width: 100%;
    min-height: 10%;
    height: 50%;
    background-color: red;
  }
}
.json {
  &-code {
    flex-grow: 1;
    min-height: 10%;
    background-color: blue;
  }
}
.output {
  flex-grow: 1;
  min-width: 10%;
  background-color: green;
}
.pugtester > .multipane-resizer,
.pugtester .code > .multipane-resizer {
  margin: 0;
  position: relative;
  background-color: #d9d9d9;
  &:before {
    display: block;
    content: '';
    position: absolute;
  }
  &:hover {
    &:before {
      border-color: #737373;
    }
  }
}
.pugtester > .multipane-resizer {
  left: 0;
  &:before {
    width: 2px;
    height: 40px;
    top: 50%;
    left: 45%;
    margin-top: -20px;
    margin-left: -1.5px;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
  }
}
.pugtester .code > .multipane-resizer {
  top: 0;
  &:before {
    width: 40px;
    height: 2px;
    left: 50%;
    top: 45%;
    margin-left: -20px;
    margin-top: -1.5px;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
  }
}
</style>
