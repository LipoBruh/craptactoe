# Tailwind

## Notes

#### Ressources


#### Installation 

Installing tailwind dependencies can be done with the package manager. Note : `-D` is equivalent to `--save-dev`.

Tailwindcss is the main framework used, postcss "transpiles" the tailwind classes in css. Autoprefixer adds `-webkit-` and `-moz-` to insure backwards compatibility with browsers.

`npm install -D tailwindcss postcss autoprefixer`

To add tailwind.config.js to the directory : 

`npx tailwindcss init`

Finish by adding the following header to your .css files.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

a:hover {
  /*...*/
}
```

Do not forget to import the .css file:
`import "./index.css";`


Important step : A postcss.config.js or .cjs must be present to allow vite to function properly for development purposes. Content of the postcss.config file :

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Content of the vite.config file : 

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
});
```







You can now use the `className="..."` attribute in your HTML tags, more specifically in the HTML returned by your react component.

To transpile, when building :
`npx postcss src/styles.css -o dist/styles.css`
