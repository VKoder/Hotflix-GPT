import Logo from "../Image/Logo.png";
import { signOut } from "firebase/auth";
import {  auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {

    const navigate = useNavigate()
    const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {});
  };

  return (
    <div className="absolute w-full z-50 flex justify-between items-center">
      <img
        className="lg:w-80 w-52 md:w-80 lg:px-20 md:px-16 px-6 md:py-6 py-4 lg:py-6"
        src={Logo}
        alt="logo"
      ></img>
    {user &&  
    <div><span>Welcome,{user.displayName}</span>
    <button className="text-white  bg-black" onClick={handleSignOut}>
        Sign Out
      </button></div>}
    </div>
  );
};
export default Header;
