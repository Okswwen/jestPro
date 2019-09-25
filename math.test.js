// const result = add(7, 3)
// const expectedR1 = 10

// if(result !== expectedR1) {
//   throw Error(`3 + 7 应该等于 ${expectedR1},但是结果却是 ${result}`)
// }

// const res = minus(7, 3)
// const expectedR2 = 4

// if(res !== expectedR2) {
//   throw Error(`7 - 3 应该等于 ${expectedR2},但是结果却是 ${res}`)
// }

// function expect(result) {
//   return {
//     toBe: function(actual) {
//       if(result !== actual) {
//         throw Error('预期值跟实际值不相符')
//       }
//     }
//   }
// }

// function test(desc, fn) {
//   try {
//     fn()
//     console.log(`${desc}， 通过测试`);
//   } catch (e) {
//     console.log(`${desc}， 没有通过测试`);
//   }
// }
/**
 * jest
 * 单元测试 集成测试
 * 单元测试：模块测试
 * 集成测试：多个模块测试
 */

/**
* npm run jest
* jest (babel-jest)
* babel-core  使用 处理babel-jest
* 取 .babelrc中的配置
* 运行测试代码之前，结合babel，将代码转换成nodejs环境可以执行的
* 运行转换过后的代码
*/

// es6 module
import {add, minus,multi} from './main'
// commonJs
// const {add,minus,multi} = require('./main')
test('测试加法 7 + 3', () => {
  expect(add(7,3)).toBe(10)
})
test('测试减法 7 - 3', () => {
  expect(minus(7,3)).toBe(4)
})
test('测试乘法 7 * 3', () => {
  expect(multi(7,3)).toBe(21)
})