<template>
  <div class="undoList">
    <div data-test="count">{{list.length}}</div>
    <ul>
      <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'undoList',
  props: {
    list: {
      type: Array,
      default: () => []
      // default () {
      //   return []
      // }
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
