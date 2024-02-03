import { useState, useRef } from "react";
import Header from "../components/Header";
import { checkValidData, checkValidData2 } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { BACK_IMG } from "../utils/constants";
import lang from "../utils/langConstants";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [notValid, setnotValid] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.configApp.lang);

  const handleSignIn = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setnotValid(message);
    if (message) return;

    //Sign In Code if no error
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setnotValid("Incorrect Password");
      });
  };

  const handleSignUp = () => {
    const message2 = checkValidData2(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setnotValid(message2);
    if (message2) return;

    //SignUp Code with no error
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
        })
          .then(() => {
            const { uid, email, displayName } = auth;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName })
            );
          })
          .catch((error) => {
            setnotValid(error.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setnotValid(errorCode + errorMessage);
      });
  };

  const toggleSignInForm = () => {
    setisSignIn(!isSignIn);
  };

  //Tailwind Constants
  const inputCss =
    "lg:py-3 md:py-3 lg:text-base md:text-base text-sm py-3 bg-zinc-900 bg-opacity-60 text-white border-[1px] border-gray-400 rounded-md md:px-4 px-3 my-3 lg:px-4 w-full";
  const buttonCss =
    "w-full bg-red-700 py-2 text-white rounded-md my-3 font-semibold";

  return (
    <div className="relative w-12/12">
      <Header />
      <div className="bg-black bg-opacity-75 rounded-md  lg:w-4/12 w-11/12 sm:w-7/12 md:w-5/12 absolute mx-auto lg:my-28 my-44 md:my-24 right-0 left-0 z-20 py-4 md:py-6 lg:py-6">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center items-center flex-col lg:py-8 lg:px-8 py-4 px-2 md:py-8 md:px-8"
        >
          <div className="w-10/12">
            <h1 className="text-white lg:text-4xl text-3xl md:text-4xl font-bold md:my-4 my-3 lg:my-4">
              {isSignIn ? lang[langKey].signIn : lang[langKey].signUp}
            </h1>

            {!isSignIn && (
              <input
                ref={name}
                className={inputCss}
                type="text"
                placeholder={lang[langKey].name}
              ></input>
            )}
            <input
              ref={email}
              className={inputCss}
              type="text"
              placeholder={lang[langKey].email}
            ></input>
            <input
              ref={password}
              className={inputCss}
              type="password"
              placeholder={lang[langKey].password}
            ></input>
            <span className="text-red-700 text-base font-semibold">
              {notValid}
            </span>
            {isSignIn ? (
              <button className={buttonCss} onClick={handleSignIn}>
                {lang[langKey].signIn}
              </button>
            ) : (
              <button className={buttonCss} onClick={handleSignUp}>
                {lang[langKey].signUp}
              </button>
            )}
            <span className=" lg:text-base md:text-base text-sm font-normal text-gray-300">
              {isSignIn ? lang[langKey].newToNetflix : lang[langKey].alreadyAcc}
            </span>
            <span
              className="font-semibold lg:text-base md:text-base text-sm  text-gray-50 px-1.5 cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignIn ? lang[langKey].signUp : lang[langKey].signIn}
            </span>
          </div>
        </form>
      </div>
      <div className="overflow-hidden w-full">
        <img
          className=" brightness-[.6] lg:scale-110 md:scale-x-125 sm:scale-x-150  sm:scale-y-110  md:h-[600px] sm:h-[600px] object-cover h-screen lg:h-[700px]  w-full"
          alt="background"
          src={BACK_IMG}
        ></img>
      </div>
    </div>
  );
};
export default Login;
