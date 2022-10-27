import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../Pages/Courses/Courses";
import Error from "../Pages/shared/Error/Error";

export const router = createBrowserRouter([
 {
    path: '/',
    element:<Main></Main>,
    loader:()=> fetch('http://localhost:5000/courses'),
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
        
        
    ],
   
 },
 { 
    path:'*',
    element:<Error></Error>
}
]);