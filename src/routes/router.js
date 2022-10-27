import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Course from "../Pages/Courses/Course";
import Courses from "../Pages/Courses/Courses";
import Error from "../Pages/shared/Error/Error";

export const router = createBrowserRouter([
 {
    path: '/',
    element:<Main></Main>,
    children:[
    {
        path: '/',
        loader:()=> fetch('http://localhost:5000/courses'),
        element:<Courses></Courses>,
        
    },
    {
        path: '/courses',
        loader:()=> fetch('http://localhost:5000/courses'),
        element:<Courses></Courses>
    },
    {
        path:'/blog',
        element:<Blog></Blog>
    }
       
        
    ],
   
 },
 {
    path:'/course/:id',
    element:<Course></Course>,
    loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
 } ,
 { 
    path:'*',
    element:<Error></Error>
}
]);