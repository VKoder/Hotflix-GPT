import Logo from "../Image/Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { MULTI_LANG } from "../utils/constants";
import { addLang } from "../store/configApp";
import lang from "../utils/langConstants";
import { addGptToggle } from "../store/gptSlice";

const Header = () => {
  const gptview = useSelector((store) => store.gpt.gptSearchView);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const langKey = useSelector((store) => store.configApp.lang);

  const toggleGPTSearchView = () => {
    dispatch(addGptToggle());
  };

  const handlelang = (e) => {
    dispatch(addLang(e.target.value));
  };
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
        if (window.location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gradient-to-b from-black absolute w-full z-50 flex justify-between overflow-hidden items-center lg:px-10 md:px-10 sm:px-8 px-4">
      <Link to={"/browse"}>
        <img
          className="lg:w-48 sm:w-28 w-20 md:w-40   md:py-6 py-4 lg:py-6"
          src={Logo}
          alt="logo"
        ></img>
      </Link>

      <div className="flex flex-row justify-center items-center">
        {user && (
          <div className="flex justify-center items-center flex-row lg:gap-2 gap-0.5 sm:gap-1">
            <span className="text-white pr-2 font-normal text-xs md:font-semibold md:text-lg lg:font-semibold lg:text-lg">
              {lang[langKey].welcome}
              {user.displayName}
            </span>
            {gptview ? (
              <>
                <button
                  className="bg-purple-500 lg:text-base hidden md:block font-normal hover:opacity-80 py-1 px-2 rounded-md mr-1.5"
                  onClick={toggleGPTSearchView}
                >
                  <i class="ri-home-4-line lg:pr-1 pr-0.5"></i>
                  Home
                </button>
                <button
                  className="bg-purple-500 text-sm md:hidden font-normal hover:opacity-80 py-0.5 px-1 rounded-md mr-0.5"
                  onClick={toggleGPTSearchView}
                >
                  <i class="ri-home-4-line lg:pr-1 pr-0.5"></i>Home
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-purple-500 lg:text-base hidden md:block font-normal hover:opacity-80 py-1 px-2 rounded-md mr-1.5"
                  onClick={toggleGPTSearchView}
                >
                  <i class="ri-search-2-line pr-1"></i>
                  {lang[langKey].gptSearch}
                </button>
                <button
                  className="bg-purple-500 text-sm md:hidden font-normal hover:opacity-80 py-0.5 px-1 rounded-md mr-0.5"
                  onClick={toggleGPTSearchView}
                >
                  <i class="ri-search-2-line lg:pr-1 pr-0.5"></i>GPT
                </button>
              </>
            )}

            <button
              className="text-white hidden md:block lg:text-base md:text-base font-normal hover:opacity-80 py-1 px-1 rounded-md mr-2.5 bg-zinc-700"
              onClick={handleSignOut}
            >
              <i class="ri-logout-box-r-line pr-0.5 lg:pr-1"></i>
              {lang[langKey].signOut}
            </button>
            <button
              className="text-white md:hidden  text-sm font-normal hover:opacity-80 py-0.5 px-1 rounded-md mr-0.5 bg-zinc-700"
              onClick={handleSignOut}
            >
              <i class="ri-logout-box-r-line pr-0.5 lg:pr-1"></i>
            </button>
          </div>
        )}
        <select
          className="bg-gray-300 text-black border cursor-pointer border-black sm:px-1.5 sm:py-1 px-0.5 py-0.5 lg:px-2 lg:py-1 md:px-2 md:py-1 rounded-md"
          onChange={handlelang}
        >
          {MULTI_LANG.map((option) => (
            <option
              key={option.name}
              className="text-black lg:px-2 lg:py-1 md:px-2 :px-1 :py-0.5 sm:px-1.5 sm:py-0.5 md:py-1"
              value={option.identifier}
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Header;
