import {runCallBack, getData} from './demo'
import Axios from 'axios'

jest.mock('axios') // jest 模拟调用

// test('测试 runcallback', () => {
//   const func = () => {
//     return 'jest'
//   }
//   expect(runCallBack(func)).toBe('jest')
// })

// expect(received).toBe(expected) // Object.is equality

//     Expected: "jest"
//     Received: undefined

/** 
 * jest mock
 * mock 捕获函数的调用 jest.fn()
 * 作用：a、捕获函数的调用以及返回结果，this的指向，调用顺序 b、自定义返回结果 c、改变内部的实现
*/

test('测试 runcallback', () => {
  const func = jest.fn() // 使用jest生成函数
  // func.mockReturnValueOnce('dell').mockReturnValueOnce('imooc')
  func.mockReturnValue('imooc')
  // console.log(func.mock) // calls: [], instances: [], invocationCallOrder: [], results: [] 
  runCallBack(func)
  runCallBack(func)
  expect(func.mock.calls.length).toBe(2)
  // expect(func).toBeCalled()
  // expect(func.mock.calls[0]).toEqual(['abc'])
  console.log(func.mock)
})

test.only('测试 getdata 异步', async () => {
  Axios.get.mockResolvedValue({data: 'steven'}) // 改变内部的实现
  await getData().then((data) => {
    expect(data).toBe('steven')
  })
})
