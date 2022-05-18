module.exports = {
    root: true,
    env: { node: true },
    extends: [
        'plugin:prettier/recommended',
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'airbnb-base',
        'plugin:vue/recommended',
        '@vue/prettier',
        '@vue/typescript/recommended'
    ],

    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        ecmaFeatures: { 'legacyDecorators': true }
    },

    rules: {
        // 可能的错误或逻辑错误有关
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-await-in-loop': 'error',
        // 风格指南
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': 'error',
        'brace-style': 'off',
        'comma-dangle': [2, 'never'],
        'comma-spacing': 'off',
        'comma-style': [2, 'last'],
        'consistent-this': [2, 'self', 'that'],
        'eol-last': 2,
        'func-call-spacing': [2, 'never'],
        'implicit-arrow-linebreak': 'error',
        'indent': ['error', 4, { SwitchCase: 2 }],
        'quotes': ['error', 'single'],
        // 'semi': ['error', 'always'],
        'key-spacing': ['error', {
            'mode': 'strict',
            'afterColon': true,
            'beforeColon': false
        }],
        'keyword-spacing': ['error', {
            before: true,
            after: true
        }],
        'line-comment-position': [2, { 'position': 'above' }],
        'max-depth': [2, { max: 4 }],
        'max-len': [
            'error',
            {
                code: 120,
                tabWidth: 2,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],
        'max-lines-per-function': [2, 200],
        'no-multiple-empty-lines': [2, {
            'max': 1,
            'maxEOF': 0
        }],
        'semi-spacing': [2, {
            'before': false,
            'after': true
        }],
        'semi-style': [2, 'last'],
        'no-trailing-spaces': 2,
        'no-plusplus': 0,
        'one-var': ['error', 'never'],
        'no-unneeded-ternary': 2,
        'space-infix-ops': 'off',
        'space-unary-ops': 'error',
        'object-curly-spacing': ['error', 'always'],
        'no-new-wrappers': 2,
        'no-proto': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-implicit-globals': 'error',
        'max-nested-callbacks': [2, { 'max': 3 }],
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-nested-ternary': 2,
        'operator-linebreak': [2, 'after'],
        'object-property-newline': [2, { allowAllPropertiesOnSameLine: false }],
        'spaced-comment': [2, 'always', {
            'line': {
                'markers': ['/'],
                'exceptions': ['-', '+']
            },
            'block': {
                'markers': ['!'],
                'exceptions': ['*'],
                'balanced': true
            }
        }],
        'newline-per-chained-call': 2,
        'switch-colon-spacing': [2, {
            'after': true,
            'before': false
        }],
        'object-curly-newline': ['error', {
            'ObjectExpression': {
                'multiline': true,
                'consistent': true
            },
            'ObjectPattern': {
                'multiline': true,
                'minProperties': 3
            },
            'ImportDeclaration': {
                'multiline': true,
                'minProperties': 3
            },
            'ExportDeclaration': {
                'multiline': true,
                'minProperties': 3
            }
        }],
        'no-unused-expressions': [
            'error',
            { 'allowShortCircuit': true }
        ],
        'arrow-parens': ['error', 'always'],
        'prettier/prettier': [
            'off',
            {
                singleQuote: true,
                semi: true,
                trailingComma: true,

                // 下面属性，并不能很好的处理内联标签，没有解决方案
                // 由于prettier功能上和eslint一致（prettier的官网文档也是这样定位的），关闭prettier，仅使用eslint
                htmlWhitespaceSensitivity: 'strict'
            }
        ],
        'space-before-blocks': 'off',
        // 最佳实践的
        'accessor-pairs': 2,
        'array-callback-return': 2,
        'class-methods-use-this': 0,
        'curly': ['error', 'all'],
        'eqeqeq': [2, 'always'],
        'guard-for-in': 2,
        'no-empty-function': 2,
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': [2, { 'exceptions': ['Promise'] }],
        'no-extra-bind': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-spaces': [2, {
            'ignoreEOLComments': true,
            'exceptions': {
                'Property': true,
                'BinaryExpression': false,
                'VariableDeclarator': true,
                'ImportDeclaration': true
            }
        }],
        'no-new-func': 2,
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: ['state', 'vm', 'item', 'config']
            }
        ],
        'no-return-assign': 2,
        'no-return-await': 'error',
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-return': 2,
        'no-void': 2,
        'yoda': [1, 'never'],
        // 变量声明相关的规则
        'no-catch-shadow': 2,
        'no-restricted-globals': 2,
        'no-shadow-restricted-names': 2,
        'no-label-var': 2,
        'no-undef-init': 2,
        'one-var-declaration-per-line': [2, 'always'],
        'no-use-before-define': [2, { 'functions': false }],
        'require-await': 0,
        // es6 相关规则
        'arrow-spacing': [2, {
            'before': true,
            'after': true
        }],
        'prefer-arrow-callback': [1, { 'allowNamedFunctions': true }],
        'prefer-destructuring': [
            1,
            {
                'array': true,
                'object': true
            },
            { 'enforceForRenamedProperties': false }
        ],
        'prefer-rest-params': 2,
        'no-useless-constructor': 2,
        'no-useless-computed-key': 1,
        'camelcase': 2,
        // typescript 相关规则
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/space-infix-ops': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/member-delimiter-style': 2,
        '@typescript-eslint/method-signature-style': 2,
        '@typescript-eslint/no-empty-interface': 2,
        '@typescript-eslint/space-before-blocks': [2, 'always'],
        '@typescript-eslint/brace-style': ['error'],
        '@typescript-eslint/comma-spacing': ['error'],
        '@typescript-eslint/space-before-function-paren': ['error', 'always'],
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { 'exceptAfterOverload': false }],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/semi': ['error', 'always'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        // import 相关
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': [
            'error',
            { 'devDependencies': false }
        ],
        'import/extensions': [
            'error',
            'never',
            {
                'vue': 'always',
                'less': 'always',
                'css': 'always',
                'scss': 'always',
                'mp3': 'always'
            }
        ],
        'import/no-anonymous-default-export': ['error', {
            allowArray: false,
            allowArrowFunction: true,
            allowAnonymousClass: true,
            allowAnonymousFunction: false,
            allowCallExpression: true,
            allowLiteral: false,
            allowObject: true
        }],
        /* vue 相关的 */
        'vue/attribute-hyphenation': 'error',
        'vue/attributes-order': 'error',
        'vue/block-tag-newline': [
            'error',
            {
                singleline: 'always',
                multiline: 'always',
                maxEmptyLines: 1
            }
        ],
        'vue/comment-directive': 'error',
        'vue/component-definition-name-casing': 'error',
        'vue/component-name-in-template-casing': ['error', 'kebab-case', {
            'registeredComponentsOnly': true,
            'ignores': []
        }],
        'vue/component-tags-order': [
            'error',
            { order: ['docs', 'template', 'script', 'style'] }
        ],
        'vue/custom-event-name-casing': 'error',
        'vue/html-closing-bracket-newline': 'error',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/html-comment-content-newline': 'error',
        'vue/html-comment-content-spacing': 'error',
        'vue/html-comment-indent': ['error', 4],
        'vue/html-end-tags': 'error',
        'vue/html-indent': ['error', 4],
        'vue/html-quotes': 'error',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'always',
                    component: 'always'
                },
                svg: 'always',
                math: 'always'
            }
        ],
        'vue/jsx-uses-vars': 'error',
        'vue/match-component-file-name': [
            'error',
            {
                extensions: ['vue', 'jsx', 'tsx'],
                shouldMatchCase: true
            }
        ],
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: { max: 3 },
                multiline: { max: 1 }
            }
        ],
        'vue/max-len': [
            'error',
            {
                code: 120,
                template: 120,
                tabWidth: 2,
                comments: 120,
                ignorePattern: '',
                ignoreComments: false,
                ignoreTrailingComments: false,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
                ignoreHTMLAttributeValues: true,
                ignoreHTMLTextContents: true
            }
        ],
        'vue/multiline-html-element-content-newline': 'error',
        'vue/singleline-html-element-content-newline': ['error', {
            ignoreWhenNoAttributes: true,
            ignoreWhenEmpty: true,
            ignores: ['pre', 'textarea', 'router-link', 'a', 'abbr', 'audio', 'b', 'bdi', 'bdo', 'canvas', 'cite', 'code', 'data', 'del', 'dfn', 'em', 'i', 'iframe', 'ins', 'kbd', 'label', 'map', 'mark', 'noscript', 'object', 'output', 'picture', 'q', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'svg', 'time', 'u', 'var', 'video']
        }],
        'vue/mustache-interpolation-spacing': 'error',
        'vue/no-arrow-functions-in-watch': 'error',
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-custom-modifiers-on-v-model': 'error',
        'vue/no-deprecated-data-object-declaration': 'error',
        'vue/no-deprecated-destroyed-lifecycle': 'off',
        'vue/no-deprecated-dollar-listeners-api': 'error',
        'vue/no-deprecated-dollar-scopedslots-api': 'error',
        'vue/no-deprecated-events-api': 'error',
        'vue/no-deprecated-filter': 'off',
        'vue/no-deprecated-functional-template': 'error',
        'vue/no-deprecated-html-element-is': 'error',
        'vue/no-deprecated-inline-template': 'error',
        'vue/no-deprecated-props-default-this': 'error',
        'vue/no-deprecated-scope-attribute': 'error',
        'vue/no-deprecated-slot-attribute': 'error',
        'vue/no-deprecated-slot-scope-attribute': 'error',
        'vue/no-deprecated-v-bind-sync': 'error',
        'vue/no-deprecated-v-on-native-modifier': 'error',
        'vue/no-deprecated-v-on-number-modifiers': 'error',
        'vue/no-deprecated-vue-config-keycodes': 'error',
        'vue/no-dupe-keys': 'error',
        'vue/no-dupe-v-else-if': 'error',
        'vue/no-duplicate-attr-inheritance': 'error',
        'vue/no-duplicate-attributes': 'error',
        'vue/no-empty-component-block': 'error',
        'vue/no-irregular-whitespace': 'error',
        'vue/no-lifecycle-after-await': 'error',
        'vue/no-lone-template': 'error',
        'vue/no-multi-spaces': 'error',
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-multiple-slot-args': 'error',
        'vue/no-multiple-template-root': 'off',
        'vue/no-mutating-props': 'error',
        'vue/no-parsing-error': 'error',
        'vue/no-potential-component-option-typo': 'error',
        'vue/no-ref-as-operand': 'error',
        'vue/no-reserved-component-names': [
            'error',
            {
                disallowVueBuiltInComponents: true,
                disallowVue3BuiltInComponents: true
            }
        ],
        'vue/no-reserved-keys': 'error',
        'vue/no-restricted-component-options': 'error',
        'vue/no-restricted-static-attribute': 'error',
        'vue/no-restricted-v-bind': 'error',
        'vue/no-setup-props-destructure': 'error',
        'vue/no-shared-component-data': 'error',
        'vue/no-side-effects-in-computed-properties': 'error',
        'vue/no-spaces-around-equal-signs-in-attribute': 'error',
        'vue/no-static-inline-styles': 'error',
        'vue/no-template-key': 'error',
        'vue/no-template-shadow': 'error',
        'vue/no-template-target-blank': 'off',
        'vue/no-textarea-mustache': 'error',
        'vue/no-unregistered-components': [
            'error',
            { ignorePatterns: ['router-link', 'router-view'] }
        ],
        'vue/no-unsupported-features': 'error',
        'vue/no-unused-components': 'error',
        'vue/no-unused-properties': [
            'error',
            { groups: ['props', 'data', 'computed', 'methods', 'setup'] }
        ],
        'vue/no-unused-vars': 'error',
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/no-useless-mustaches': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/no-v-for-template-key-on-child': 'error',
        'vue/no-v-html': 'error',
        'vue/no-v-model-argument': 'error',
        'vue/no-watch-after-await': 'error',
        'vue/one-component-per-file': 'error',
        'vue/order-in-components': 'error',
        'vue/padding-line-between-blocks': 'error',
        'vue/prop-name-casing': 'error',
        'vue/require-component-is': 'error',
        'vue/require-default-prop': 'error',
        'vue/require-direct-export': 'off',
        'vue/require-explicit-emits': 'off',
        'vue/require-name-property': 'error',
        'vue/require-prop-type-constructor': 'error',
        'vue/require-prop-types': 'error',
        'vue/require-render-return': 'error',
        'vue/require-slots-as-functions': 'error',
        'vue/require-toggle-inside-transition': 'error',
        'vue/require-v-for-key': 'error',
        'vue/require-valid-default-prop': 'error',
        'vue/return-in-computed-property': 'error',
        'vue/return-in-emits-validator': 'off',
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 0,
                switchCase: 2,
                ignores: []
            }
        ],
        'vue/this-in-template': 'error',
        'vue/v-bind-style': 'error',
        'vue/v-on-function-call': 'error',
        'vue/v-on-style': 'error',
        'vue/v-slot-style': 'error',
        'vue/valid-template-root': 'error',
        'vue/valid-v-bind': 'error',
        'vue/valid-v-cloak': 'error',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-html': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-is': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-on': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-pre': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-slot': 'error',
        'vue/valid-v-text': 'error',
        'vue/first-attribute-linebreak': 'error',
        'vue/space-infix-ops': 'error'
    },

    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src']
                ],
                extensions: ['.js', '.ts', '.d.ts', '.less', '.vue', 'scss', 'css']
            }
        }
    },

    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: { jest: true }
        }
    ]
};
