<template>
  <div id="app">
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from './pages/todolist/ToDoList'

export default {
  name: 'app',
  components: {
    ToDoList
  }
}
</script>

<style lang="scss">
 * {
  margin: 0;
  padding: 0;
}
</style>
