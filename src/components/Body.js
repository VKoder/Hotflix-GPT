import Browse from "./Browse";
import Login from "./Login";
import {  createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";

const Body=()=>{

    const dispatch = useDispatch()
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
        
    ])

    onAuthStateChanged(auth, (user) => {
        if (user) {

          const {uid, email, displayName} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}))
            
       
        } else {
            dispatch(removeUser())
        }
      });

    return (
        <>
       <RouterProvider router={appRouter}/>
        </>
    )
}
export default Body;