module.exports = {
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es2017: true,
    browser: true,
    commonjs: true,
    node: true,
  },
  rules: {
    // 关闭断行符规范
    'linebreak-style': 'off',
    // 规范变量驼峰命名，对象的属性名不做强制规定
    'camelcase': ['error', { 'properties': 'never' }],
    // 不允许使用var
    'no-var': ['error'],
    // 不允许未使用的变量，但参数除外
    'no-unused-vars': ['error', { args: 'none' }],
    // 中置运算符左右空格
    'space-infix-ops': ['error'],
    // 单目运算符空格
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    // 关键词左右空格
    'keyword-spacing': ['error'],
    // 不允许使用尾随逗号
    'comma-dangle': ['error', 'never'],
    // 逗号在结尾
    'comma-style': ['error', 'last'],
    // 逗号结尾空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 结尾必有分号，忽略一个块中的最后一个分号
    'semi': ['error', 'always', { omitLastInOneLineBlock: true }],
    // 分号在结尾
    'semi-style': ['error', 'last'],
    // 分号结尾空格
    'semi-spacing': ['error', { before: false, after: true }],
    // 使块的括号风格一致
    'brace-style': ['error', '1tbs'],
    // 字符串单引号
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    // 只允许单行省略大括号
    'curly': ['error', 'all'],
    // 强制使用箭头函数回调
    'prefer-arrow-callback': ['error'],
    // 强制使用箭头函数括号
    'arrow-parens': ['error', 'always'],
    // 不允许多层三元运算，可读性差
    'no-nested-ternary': ['error'],
    // 不允许多空格（为了好看）
    'no-multi-spaces': ['warn', {
      exceptions: {
        VariableDeclarator: true
      }
    }],
    // 永远不会被重新赋值的变量用const声明（提高可维护性）
    'prefer-const': ['error'],
    // 使用模板字面来创建包含变量或表达式的字符串
    'no-template-curly-in-string': ['error'],
    // 每个模块使用一个 import 语句(使代码更清晰)
    'no-duplicate-imports': ['error'],
    // 每个定义了 setter 的属性都要有一个 getter
    'accessor-pairs': ['error'],
    // 同一属性的 getter 和 setter 要相邻定义
    'grouped-accessor-pairs': ['error'],
    // 规定了每个函数的最大行数（帮助维护和降低复杂性）
    'max-lines-per-function': ['warn', 120],
    // 多行注释强制规范特定的风格
    'multiline-comment-style': ['error', 'starred-block'],
    // 尽可能避免保留 console 方法
    'no-console': ['warn'],
    // 尽可能避免保留 debugger 方法
    'no-debugger': ['warn'],
    // 不允许与代码在同一行的注释
    'no-inline-comments': ['error'],
    // 禁用 if 语句，作为 else 块的唯一语句
    'no-lonely-if': ['error'],
    // 建议使用模板字面量，而不用 + 运算符连接的字符串
    'prefer-template': ['warn'],
    // 强制 // 或 /* 后面必须有至少一个空格
    'spaced-comment': ['error', 'always'],
    // 禁止超过最大空行数（减少留白占用更多的屏幕）
    'no-multiple-empty-lines': ['error', { 'max': 3, 'maxEOF': 0 }],
    // 不允许在行末有尾随空格
    'no-trailing-spaces': ['error']
  }
}