'use strict';

module.exports = {
    extends: 'stylelint-config-standard',
    plugins: [
        'stylelint-order',
    ],
    rules: {
        indentation: 4,
        'selector-pseudo-element-colon-notation': 'single',
        'max-nesting-depth': [2, {
            ignore: ['blockless-at-rules'],
        }],
        'no-duplicate-selectors': true,
        'no-unknown-animations': true,
        'number-max-precision': 2,
        'unit-blacklist': ['rem'],
        'value-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'selector-max-compound-selectors': 3,
        'selector-max-id': 1,
        'selector-max-specificity': '1,2,0',
        'selector-max-type': 0,
        'selector-max-universal': 0,
        'selector-no-qualifying-type': true,
        'selector-no-vendor-prefix': true,
        'media-feature-name-no-vendor-prefix': true,
        'at-rule-no-vendor-prefix': true,
        'at-rule-no-unknown': [true, {
            ignoreAtRules: ['mixin', 'include', 'each'],
        }],
        'font-weight-notation': 'named-where-possible',
        'function-url-quotes': 'never',
        'string-quotes': 'double',
        'value-keyword-case': 'lower',
        'block-opening-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'selector-attribute-quotes': 'always',
        'selector-list-comma-newline-before': 'never-multi-line',
        'at-rule-semicolon-newline-after': 'always',
        'max-line-length': [120, {
            ignore: ['comments'],
        }],
        'order/order': [
            'dollar-variables',
            'at-rules',
            'declarations',
            'rules',
        ],
        'order/properties-order': [
            // Positioning
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',

            // Display & Box-model
            'display',
            'float',
            'width',
            'height',
            'max-width',
            'max-height',
            'min-width',
            'min-height',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-color',
            'border-top-color',
            'border-right-color',
            'border-bottom-color',
            'border-left-color',
            'border-style',
            'border-top-style',
            'border-right-style',
            'border-bottom-style',
            'border-left-style',
            'border-width',
            'border-top-width',
            'border-right-width',
            'border-bottom-width',
            'border-left-width',
            'border-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-top-left-radius',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'overflow',
            'overflow-x',
            'overflow-y',
            'clear',

            // Typography
            'font',
            'font-family',
            'font-size',
            'font-style',
            'font-weight',
            'line-height',
            'letter-spacing',
            'word-spacing',
            'color',
            'text-align',
            'text-decoration',
            'text-indent',
            'text-overflow',
            'text-rendering',
            'text-size-adjust',
            'text-shadow',
            'text-transform',
            'word-break',
            'word-wrap',
            'white-space',
            'vertical-align',
            'list-style',
            'list-style-type',
            'list-style-position',
            'list-style-image',
            'pointer-events',
            'cursor',

            // Visual
            'background',
            'background-attachment',
            'background-color',
            'background-image',
            'background-position',
            'background-repeat',
            'background-size',

            // Everything else goes to misc
        ],
    },
};
