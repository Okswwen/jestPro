<template>
  <div class="hello">
    <Header @add="addTodoList" />
    <undo-list></undo-list>
    <ul>
      <li v-for="item in todoList" :key="item" data-test="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import Header from './components/Header'
import UndoList from './components/UndoList'

export default {
  name: 'todolist',
  props: {
    msg: String
  },
  components: {
    Header,
    UndoList
  },
  data () {
    return {
      todoList: []
    }
  },
  methods: {
    addTodoList (value) {
      this.todoList.push(value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
