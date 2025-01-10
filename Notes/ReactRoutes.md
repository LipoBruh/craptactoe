# REACT

## Interesting topics to read on :
- Lazy Loading, Code splitting
- HTML5 API, history.pushState
- Actions, Loaders



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
https://www.youtube.com/watch?v=OMQ2QARHPo0&list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf&index=1
https://reactrouter.com/start/framework/routing


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
#### Link components
We can use Link components instead of HTML `<a>` tags to define links. We specify the
path in the `to=''` prop and we nest the link test as a child of the component. Using `<a>` will perform
a DOM refresh by doing an HTTP GET request. Using the Link component will perform javascript / client side routing
and will not send an HTTP request.
`<Link to="/">Home</Link>`


#### Dynamic paths

In the Router, dynamic links can be defined like so : 
```js
const router = createBrowserRouter([
//...
  {
    path:'/tictactoe',
    element: <Layout/>,
    children:[
        {
          path:'/tictactoe/loading',
          element: <LoadingPage/>
        },
        {
          path:'/tictactoe/room/:roomID',
          element: <Room/>,
        },
    ],
  },
  //...
  ])
```
Each child / page component will be rendered inside the `<Outlet/>` component of its parent.

Seems to make sense to swap between elements within the layout of a page. Using routes will initiate HTML requests, which will lead to the refreshing of the page. Only `<Link/>` components seem to prevend refreshing for now.

#### Route parameters

In the last code snippet, we notice that `path:'/tictactoe/room/:roomID'`, :roomID is a route parameter that can take any value. In typescript, a type validation could be enforced.

The component needs a `useParams()` to get access to the parameter: 
```js
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Room() {
    const params = useParams(); //or const {roomId} = useParams();
    const id = params.roomID

  return (
    <div>Room {id}</div>
  )
}
```

The route parameter can also be accessed in the loader because of the way the route is defined (params is related to the parent wrapper component / Route).


## Loader

We want to load data to a component before it is rendered. The loader function can be linked to an API fetch. Allows to do so without explicitely adding a useEffect hook (local state) in the target component. We instead define a loader function inside the component / route file.

The principle is to use json-server dev dependency to use an available port to write data to a local file. We can access the data by using a get API call with our own backend at the local file endpoint. Requires the json-server dependency to work with the method shown in the code block. 

Realistically, you would simply make an API call on your backend and retrieve the data from the response.

```js
//loader fx (async)
export const componentLoader = async () =>{
  const res = await fetch('path/...')
  return res.json()
}
```

In the route, the loader can be utilized like so :
```js
    {
    path:'/',
    element: <Index/>,
    errorElement: <Page404/>,
    loader: componentLoader
    }
```

In the component, we need to use the hood `useLoaderData()` :
```js
import {useLoaderData} from "react-router-dom"
//
export default function Component() {
  const res = useLoaderData()

  return (/*...*/)
}
```

If we want to access the route parameter :

```js
export const componentLoader = async ({params}) =>{
  const {exID} = params 
  ///
  const res = await fetch(`path/${id}`)
  //check if response is ok
  if(!res.ok){
    throw Error('...') //Useful for errors for that specific route
  }
  return res.json()
}
```

#### Errors 

Note : If we have parent and child routes, the raised error will be handled by the first route that handles the error explicitely. If the child route does not handle errors, the error bubbles up to the first parent that has an `errorElement` parameter defined.

Errors raised from inside the **loader** or during its runtime will be handled by `errorElement`, but not errors raised on the `element` component. 

```js
    {
    path:'/',
    element: <Index/>,
    errorElement: <ErrorComponent/>,
    loader: componentLoader
    }
```
If we want to use error specific pages, we can create a component for a specific route. 

```js
import { useRouterError } from 'react-router-dom'
//
export default function ErrorComponent() {
    const error = useRouteError()
  //
  return (
    <>
      <div>Error :  {error.message}</div>
      <Link to="/"> Go to Homepage </Link>
    </>
  )
}
```

Other `useRouteError()` parameters are available, like `status`, `data`...
If it is desired to raise an error from inside the element component, it is said that using `throw Response` would be more appropriate than throwing an error.


#### Breadcrumbs

Breadcrumbs are a list of pages visited to reach a destination. Not exactly like an history, rather it is similar to the path of an endpoint.

Very much as simple as using the `useLocation()` hook in a component to extract the path of the current page.

#### Actions

Seems to be a way to redirect the user to a path / page after an event like a form submission. 

Triggering action :
```js
<Form method="post" action="/page1">
```

Will fire the action field in the Route specified by the path `"/page1"`.

```js
    {
    path:'/page1',
    element: <Component/>,
    errorElement: <ErrorComponent/>,
    loader: componentLoader
    action : componentAction
    }
```

The action can be defined in a similar way than a loader would be (inside the child component file that will be wrapped by the parent Route component):

```js
import {Form, redirect} from 'react-router-dom'
//request here is a prop provided by the parent Route
//It allows us to access the form data
export const componentAction = async ({request}) =>{
  const data = await request.formData()
  //... ex : email = data.get('email') -> form field must have name='email'

  //note, an action must return something, else it will throw an error, minimaly   return null 
  return redirect('/') //is it possible for an action to return a 
  //redirect object
}
```

Note, loaders can also return redirects. The redirect is done before the rendering of any component happens (can provide savings). It is a client side / js way of navigating that will not send a HTTP request. If the routing done by the redirect is incorrect, the error is handled by `errorElement`.

The `navigate('/')` would lead to a similar result, but needs to be implemented a bit differently (not as a return). Returning a `<Navigate to="/" replace={true}/>` would lead to a similar result. The `replace` keyword is to prevent navigation in the browser history back to that page by replacing the previous page instead of appending to the history.

Note, protecting pages or data is better done on the backend. Frontend / javascript redirecting may not be a real security measure.