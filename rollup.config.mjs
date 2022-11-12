import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import pkg from "./package.json" assert {type: "json"}
import { terser } from "rollup-plugin-terser";


export default [
  // browser-friendly UMD build
  {
    input: "./index.js",
    output: [
      {
        name: "tailwindcss-attributes",
        file: pkg.main,
        format: "cjs",
        sourcemap: true
      },
      {
        name: "tailwindcss-attributes",
        file: pkg.browser,
        format: "esm",
        sourcemap: true
      },
    ],
    plugins: [
      resolve({
        moduleDirectories: ['node_modules']
      }), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      terser()
      // (process.env.NODE_ENV === 'production' && terser())
    ],
    external: ['']
  },
]
