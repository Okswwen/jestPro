import { shallowMount } from '@vue/test-utils'
import TodoList from '../../ToDoList.vue'
import Header from '../../components/Header.vue'

it('TodoList 初始化，undoList 应该为空 ', () => {
  const wrapper = shallowMount(TodoList)
  const todoList = wrapper.vm.$data.todoList
  expect(todoList).toEqual([])
})

it('TodoList 监听Header的add 事件，会增加一个内容： ', () => {
  const context = 'steven'
  const wrapper = shallowMount(TodoList)
  const header = wrapper.find(Header)
  header.vm.$emit('add', context)
  // wrapper.vm.addUndoList('steven')
  const todoList = wrapper.vm.$data.todoList
  expect(todoList).toEqual([context])
})
