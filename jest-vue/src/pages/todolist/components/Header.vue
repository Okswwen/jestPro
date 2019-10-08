<template>
  <div class="header">
    <div class="h_wrap">
      <div class="todoList">todoList</div>
      <input
        type="text"
        data-test="input"
        v-model="iptValue"
        placeholder="doing something"
        @keyup.enter="addToDoItem"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data () {
    return {
      iptValue: ''
    }
  },
  methods: {
    addToDoItem () {
      if (this.iptValue) {
        this.$emit('add', this.iptValue)
        this.iptValue = ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: relative;
  height: 80px;
  line-height: 80px;
  background-color: #999;
  .h_wrap {
    width: 800px;
    margin: 0 auto;
    overflow: hidden;
  }
  .todoList {
    float: left;
    font-size: 24px;
    color: #fff;
  }
  input {
    margin-left: 60px;
    width: 300px;
    height: 44px;
    border: 1px solid #666;
    padding-left: 15px;
    border-radius: 8px;
  }
}

</style>
