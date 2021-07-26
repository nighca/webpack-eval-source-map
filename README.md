# Webpack `eval-source-map` demo

Demo for reproducing webpack `eval-source-map` issue with Hot Module Replacement.

## How to reproduce

#### 1. install deps & start dev server

```
npm i
npx webpack serve
open http://localhost:8080
```

Now we will see a runtime error in browser console:

```
utils.ts?8813:2 Uncaught TypeError: Cannot read property 'b' of undefined
    at echo (utils.ts?8813:2)
    at eval (index.ts?a959:5)
```

#### 2. edit `utils.ts`

First, comment line 2 of file `utils.ts`

```ts
// console.log((window as any).a.b)
```

Then save file, which should cause a hot update.

Then uncomment line 2 of file `utils.ts` and save file, which should cause another hot update and a new runtime error:

```
VM3252 utils.ts:6 Uncaught TypeError: Cannot read property 'b' of undefined
    at echo (VM3252 utils.ts:6)
    at eval (index.ts?a959:5)
```

Stack info of the new runtime error is not correct: `utils.ts?8813:2` is expected instead of `VM3252 utils.ts:6`

## More info

The problem does not exist with non-eval `devtool` setting, such as `source-map` / `inline-source-map`.
