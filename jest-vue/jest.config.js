module.exports = {
  // 文件后缀名的默认补存
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  // 测试某文件需要用到的loader，进行转换
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  // 排除相关文件夹，避免test
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  // 模块映射 以@符号开始的，到root/src中查找
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // 快照如何渲染
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  // 查找的test的目录
  testMatch: [
    // '**/tests/unit/**/*.(spec|test).(js|jsx|ts|tsx)|**/__tests__/**/*.(js|jsx|ts|tsx)'
    '**/__tests__/**/*.(js|jsx|ts|tsx)'
  ],
  testPathIgnorePatterns: [
    // eslint-disable-next-line no-useless-escape
    '\.eslintrc\.js'
  ],
  // jest模拟生成dom结构中，配置测试地址
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
