import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layouts } from './Components/Layouts.jsx'
import { ErrorPage } from './Pages/ErrorPage.jsx'
import { Home } from './Pages/Home.jsx'
import { Register } from './Pages/Register.jsx'
import { Login } from './Pages/Login.jsx'
import { UserProfile } from './Pages/UserProfile.jsx'
import { Authors } from './Pages/Authors.jsx'
import { CreatePosts } from './Pages/CreatePosts.jsx'
import { EditePost } from './Pages/EditePost.jsx'
import { AuthorPosts } from './Pages/AuthorPosts.jsx'
import { Dashboard } from './Pages/Dashboard.jsx'
import { Logout } from './Pages/Logout.jsx'
import { PostDetails } from './Pages/PostDetails.jsx'
import { CategoryPost } from './Pages/CategoryPost.jsx'




const router = createBrowserRouter([{
  path:"/",
  element: <Layouts/>,
  errorElement: <ErrorPage/>,
  children:[
    {index: true,  element: <Home/> },
    {path:"/register", element: <Register/>},
    {path:"/login", element: <Login/>},
    {path:"/profile/:id", element: <UserProfile/>},
    {path:"/authors", element: <Authors/>},
    {path:"/create", element: <CreatePosts/>},
    {path:"/posts/users/:id", element: <AuthorPosts/>},
    {path:"/myposts/:id", element: <Dashboard/>},
    {path:"/posts/:id/edite", element: <EditePost/>},
    {path:"/logout", element: <Logout/>},
    {path:"/posts/:id", element: <PostDetails/>},
    {path:"/posts/categories/:category", element: <CategoryPost/>},

    
    
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
