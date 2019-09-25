
/** 
 * toBe 匹配器 matchers
 * 类似js中的object.is
*/
test('测试21 匹配 21', () => {
  expect(21).toBe(21)
})

/** 
 * toEqual 匹配器 matchers
 * 用来匹配对象
 * 
*/
const a = {'one': 1}
test('对象相等', () => {
  expect(a).toEqual({'one': 1})
})

// toBeNull toBeUndefined toBeDefined是否定义过 toBeTruthy是否为真 toBeFalsy是否为假 not 不是

test('not 匹配器', () => {
  const a = 1
  expect(a).not.toBeFalsy()
  expect(a).toBeTruthy()
})

// 数字相关的
// toBeGreaterThan 比某个数字大 toBeLessThan 比某个数字小 toBeGreaterThanOrEqual 大于等于 toBeCloseTo 相等，会忽略精度问题
test('toBeGreaterThan', () => {
  const count = 10
  expect(count).toBeGreaterThan(8)
})

// 数组 Array Set
// toContain 包含
test('测试数组 toContain', () => {
  const arr = ['dell', 'imooc', 'steven']
  expect(arr).toContain('steven')
})

// 异常 throw error
const throwNewErrorFunc = () => {
  throw new Error('this is a new error')
}

test('toThrow 抛出异常', () => {
  expect(throwNewErrorFunc).toThrow()
})