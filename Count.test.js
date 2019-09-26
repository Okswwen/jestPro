import Count from './Count'

describe('test count功能：', () => {
  // 实例化
  let counter = null

  // 所有的测试，使用到一个实例，这会相互影响
  // 使用jest钩子函数，使用这个函数方法
  beforeAll(() => {
    console.log('before-all')
  })
  // 每次运行test之前，实例化一次
  beforeEach(() => {
    console.log('before-each')
    counter = new Count()
  });
  afterAll(() => {
    console.log('after-all')
  })

  // describe 用来分组
  describe('测试add相关的代码', () => {
    test.only('测试 count中的 addOne方法', () => {
      console.log('add')
      counter.addOne()
      expect(counter.number).toBe(1)
    })
  })
  describe('测试minus相关的代码', () => {
    test('测试 count中的 miunsOne方法', () => {
      console.log('minus')
      counter.minusOne()
      expect(counter.number).toBe(-1)
    })
  });
});