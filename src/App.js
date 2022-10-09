import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Friends from './component/Friends/Friends';
import Home from './component/Home/Home';
import PostDetails from './component/PostDetails/PostDetails';
import Posts from './component/Posts/Posts';
import Products from './component/Products/Products';
import Main from './layout/main'

function App() {
  const router = createBrowserRouter([
    { path: '/',
      element: <Main></Main>, 
      children: [
        { path: '/', element: <Home></Home> },
        { path: 'home', element: <Home></Home> },
        { path: 'about', element: <About></About> },
        { path: 'products', element: <Products></Products> },
        {
          path: 'friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Friends></Friends>
        },
        {
          path: 'posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts');
          },
          element: <Posts></Posts>
        },
        {
          path: 'friend/:friendId',
          loader: async ({params}) =>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: '/posts/post/:postId',
          loader: async ({params}) =>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
          },
          element: <PostDetails></PostDetails>
        }
      ] 
    },
    {path: '*', element: <h1>404 This Route is not defined</h1>},
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
