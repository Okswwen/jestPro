import timer from './timer'

jest.useFakeTimers() // jest模拟使用假的settime那些函数，用来跳过等待

test('测试time，类型函数', () => {
  const fnc = jest.fn()
  timer(fnc)
  // jest.runAllTimers() // 运行所有的timers，配合下面的1，当有两个timer，将error
  // jest.runOnlyPendingTimers() // 运行一个timers，仅仅创建的
  jest.advanceTimersByTime(3000) // advanceTimersByTime
  expect(fnc).toHaveBeenCalledTimes(1)
  // timer(() => {
  //   expect('123').toBe('123')
  //   done()
  // })
});