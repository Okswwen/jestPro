import { shallowMount } from '@vue/test-utils'
import UndoList from '../../components/UndoList.vue'
import utils, { findTestWrapper } from '../../../../utils/testUtils'

// it('Header 样式发生变化，做出提示 ', () => {
//   const wrapper = shallowMount(UndoList)
//   expect(wrapper).toMatchSnapshot()
// })

it('UndoList 参数为空 [] count值为0，列表无内容 ', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: []
    }
  })
  const countElem = findTestWrapper(wrapper, 'count')
  const listItems = utils.findTestWrapper(wrapper, 'item')
  // const undoList = wrapper.vm.$data.undoList
  expect(countElem.at(0).text()).toEqual('0')
  expect(listItems.length).toEqual(0)
})
