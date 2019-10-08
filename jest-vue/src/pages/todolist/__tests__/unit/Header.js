import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'
import utils from '../../../../utils/testUtils'

it('Header 样式发生变化，做出提示 ', () => {
  const wrapper = shallowMount(Header)
  expect(wrapper).toMatchSnapshot()
})

it('Header 包含一个 input 框 ', () => {
  const wrapper = shallowMount(Header)
  const input = utils.findTestWrapper(wrapper, 'input')
  // wrapper.find('[data-test = "input"]')
  expect(input.exists()).toBe(true)
})

it('Header 包含一个 input 框,初始值为空 ', () => {
  const wrapper = shallowMount(Header)
  const iptValue = wrapper.vm.$data.iptValue
  expect(iptValue).toBe('')
})

it('Header 中input 框,value变化时，数据跟着改变 ', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test = "input"]')
  input.setValue('steven')
  const iptValue = wrapper.vm.$data.iptValue
  expect(iptValue).toBe('steven')
})

it('Header 中input 框,无内容，回车无反应 ', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test = "input"]')
  input.setValue('')
  input.trigger('keyup.enter')

  expect(wrapper.emitted().add).toBeFalsy()
})

it('Header 中input 框,有内容，向外触发事件,同时清除iptValue的值 ', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test = "input"]')
  const iptValue = wrapper.vm.$data.iptValue
  input.setValue('steven')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy()
  expect(iptValue).toBe('')
})
