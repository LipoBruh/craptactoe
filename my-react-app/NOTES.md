# REACT




## Routes

#### Old Router logic : 

This `<Routes>` component wraps around all `<Route>` components.
Each  `<Route>` can have a `path="/"` prop and `element={<Layout/>}` prop.

```js
<Routes>
    <Route path="/" element={<Layout/>}>
    <Route path="/page1" element={<Page1/>}>
</Routes>
```



#### New Router logic

Based on `createrBrowserRouter` that is the recommended way to manage routes.
https://www.youtube.com/watch?v=oTIJunBa6MA

```js
//main.jsx
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';

const router = createBrowserRouter([{
  path:'/',
  element: <App/>
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

```