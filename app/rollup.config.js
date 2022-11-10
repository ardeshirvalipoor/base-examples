
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript'
import cjs from "rollup-plugin-cjs-es";

export default {
    input: 'index.ts',
    output: {
        file: '../www/public/bundle.js',
        format: 'cjs', // iife, umd, amd, cjs
        sourcemap: true,
    },
    plugins: [
        // terser(),
        typescript(),
        cjs({
            nested: true
        }),
    ]
}