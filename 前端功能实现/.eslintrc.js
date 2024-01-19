module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    // include: ["src"],
    // exclude: ["**/node_modules", "**/.*/"],
    // "parser": "babel-eslint",
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential",
        'plugin:@typescript-eslint/recommended',
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser",
        extraFileExtensions: ['.vue'],
    },
    parser: 'vue-eslint-parser',
    "plugins": [
        "vue",
        '@typescript-eslint'
    ],
    "rules": {
        "vue/multi-word-component-names": "off"
    }
}
