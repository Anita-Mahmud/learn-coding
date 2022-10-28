import { PDFDownloadLink } from "@react-pdf/renderer";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Check from "../Pages/Courses/Check";
import Course from "../Pages/Courses/Course";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Login from "../Pages/Login/Login";
import Pdf from "../Pages/PDF/Pdf";
import Register from "../Pages/Register/Register";
import Error from "../Pages/shared/Error/Error";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
 {
    path: '/',
    element:<Main></Main>,
    children:[
    {
        path: '/',
        loader:()=> fetch('https://code-server-eosin.vercel.app/courses'),
        element:<Courses></Courses>,
        
    },
    {
        path: '/courses',
        loader:()=> fetch('https://code-server-eosin.vercel.app/courses'),
        element:<Courses></Courses>
    },
    {
        path:'/blog',
        element:<Blog></Blog>
    },
    {
      path:'/faq',
      element:<FAQ></FAQ>
  }
       
        
    ],
   
 },
 {
    path:'/login',
    element:<Login></Login>
 },
 {
    path:'/register',
    element:<Register></Register>
 },
 {
    path:'/course/:id',
    element:<Course></Course>,
    loader: ({params}) => fetch(`https://code-server-eosin.vercel.app/course/${params.id}`)
 } ,

 
 {
    path:'/course/premium/:id',
    element:<PrivateRoute><Check></Check></PrivateRoute>,
    loader: ({params}) => fetch(`https://code-server-eosin.vercel.app/course/${params.id}`)
 } ,
 { 
    path:'*',
    element:<Error></Error>
}
]);