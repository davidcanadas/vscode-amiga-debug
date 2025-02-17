/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    root: true,
    env: {
        "browser": true,
        "es6": true,
        "node": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
        sourceType: "module"
    },
    plugins: [
        "eslint-plugin-import",
        "eslint-plugin-prefer-arrow",
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/array-type": [
            "warn",
            {
                "default": "array"
            }
        ],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/member-delimiter-style": [
            "warn",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-loss-of-precision": "error",
        "@typescript-eslint/no-misused-new": "warn",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-shadow": [
            "off",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-return": "warn",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-namespace-keyword": "warn",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/require-await": "warn",
        "@typescript-eslint/restrict-plus-operands": "warn",
        "@typescript-eslint/restrict-template-expressions": "warn",
        "@typescript-eslint/semi": [
            "warn",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": [
            "warn",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "warn",
        "comma-dangle": "off",
        "complexity": "off",
        "constructor-super": "warn",
        "curly": "off",
        "dot-notation": "off",
        "eqeqeq": [
            "warn",
            "always"
        ],
        "guard-for-in": "warn",
        "id-denylist": [
            "warn",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "warn",
        "import/order": "off",
        "indent": "off",
        "max-classes-per-file": "off",
        "max-len": "off",
        "new-parens": "warn",
        "no-array-constructor": "off",
        "no-bitwise": "off",
        "no-caller": "warn",
        "no-cond-assign": "off",
        "no-console": "off",
        "no-constant-condition": "off",
        "no-debugger": "warn",
        "no-case-declarations": "off",
        "no-empty": [
            "warn",
            {
                "allowEmptyCatch": true
            }
        ],
        "no-empty-function": "off",
        "no-eval": "warn",
        "no-extra-semi": "off",
        "no-fallthrough": "off",
        "no-implied-eval": "off",
        "no-invalid-this": "off",
        "no-loss-of-precision": "off",
        "no-new-wrappers": "warn",
        "no-redeclare": "warn",
        "no-shadow": "off",
        "no-throw-literal": "warn",
        "no-trailing-spaces": "off",
        "no-undef-init": "warn",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "warn",
        "no-unused-expressions": "warn",
        "no-unused-labels": "warn",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-var": "warn",
        "object-shorthand": "warn",
        "one-var": [
            "off",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": [
            "warn",
            {
                "singleReturnOnly": true
            }
        ],
        "prefer-const": "warn",
        "quotes": "off",
        "radix": "off",
        "require-await": "off",
        "semi": "warn",
        "use-isnan": "warn",
        "valid-typeof": "off"
    }
};
