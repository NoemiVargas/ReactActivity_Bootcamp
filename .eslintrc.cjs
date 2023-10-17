module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    settings: {
		react: {
			version: 'detected',
		},
	},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    overrides: [
        {
            env: {
                "node": true
            },
            files: [
                ".eslintrc.{js,cjs}"
            ],
            parserOptions: {
                "sourceType": "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
		'no-unused-vars': 'warn',
    	'@typescript-eslint/no-unused-vars': 'warn'
	},
}
