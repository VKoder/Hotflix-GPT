import Logo from "../Image/Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { MULTI_LANG } from "../utils/constants";
import { addLang } from "../store/configApp";
import lang from "../utils/langConstants";

const Header = () => {


  const toggleGPTSearchView = () => {};

  const handlelang =(e)=>{
    dispatch(addLang(e.target.value))
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const langKey = useSelector((store) => store.configApp.lang);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full z-50 flex justify-between overflow-hidden items-center lg:px-20 md:px-16 px-6">
      <img
        className="lg:w-48 sm:w-28 w-20 md:w-40  md:py-6 py-4 lg:py-6"
        src={Logo}
        alt="logo"
      ></img>

      <div>
      <select className="bg-gray-400" onChange={handlelang}>
      {MULTI_LANG.map(option => <option className="text-black" value={option.identifier}>{option.name}</option>)}
      </select>
        {user && (
          <div>
            <button
              className="bg-purple-400 text-base font-semibold"
              onClick={toggleGPTSearchView}
            >
              {lang[langKey].gptSearch}
            </button>
            <span className="text-white">{lang[langKey].welcome},{user.displayName}</span>
            <button className="text-white  bg-black" onClick={handleSignOut}>
              {lang[langKey].signOut}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
