import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../Pages/shared/Error/Error";

export const router = createBrowserRouter([
 {
    path: '/',
    element:<Main></Main>,
    loader:()=> fetch('http://localhost:5000/courses'),
    children:[

    ],
   
 },
 { 
    path:'*',
    element:<Error></Error>
}
]);