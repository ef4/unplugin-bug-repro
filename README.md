## Bug reproduction for https://github.com/unjs/unplugin/issues/238

1. `pnpm install`
2. `pnpm build:rollup`
3. `pnpm serve`

    Visit localhost:8080 and you should successfully see "Hello world"

4. Stop http-server.
5. `pnpm build:webpack`
6. `pnpm serve`
7. Hard refresh localhost:8080, you should see 

    > Uncaught TypeError: some_runtime_dependency__WEBPACK_IMPORTED_MODULE_0__.capitalize is not a function

