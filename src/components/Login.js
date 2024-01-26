import Header from "../components/Header";
const Login = () => {
  return (
    <div className="relative w-12/12">
      <Header />
      <div className="bg-black bg-opacity-75  lg:w-4/12 w-11/12 sm:w-7/12 md:w-5/12 absolute mx-auto lg:my-28 my-44 md:my-24 right-0 left-0 z-20 py-4 md:py-6 lg:py-6">
        <form className="flex justify-center items-center flex-col lg:py-8 lg:px-8 py-4 px-2 md:py-8 md:px-8">
          <div className="w-10/12">
            <h1 className="text-white lg:text-4xl text-3xl md:text-4xl font-bold md:my-4 my-3 lg:my-4">Sign In</h1>

            <input
              className="lg:py-3 md:py-3 lg:text-base md:text-base text-sm py-3 bg-zinc-900 bg-opacity-60 text-white border-[1px] border-gray-400 rounded-md md:px-4 px-3 my-3 lg:px-4 w-full"
              type="text"
              placeholder="Email Address"
            ></input>
            <input
              className="lg:py-3 md:py-3 lg:text-base md:text-base text-sm py-3 bg-zinc-900 bg-opacity-60 text-white border-[1px] border-gray-400 rounded-md md:px-4 px-3 my-3 lg:px-4 w-full"
              type="password"
              placeholder="Password"
            ></input>
            <button className="w-full bg-red-600 py-2 text-white rounded-md my-3 font-semibold">
              Sign In
            </button>
            <span className=" lg:text-base md:text-base text-sm font-normal text-gray-300">
              New to Netflix?
            </span>
            <span className="font-semibold lg:text-base md:text-base text-sm  text-gray-50 px-1.5 cursor-pointer">
              Sign up now.
            </span>
          </div>
        </form>
      </div>
      <div className="overflow-hidden w-full">
        <img
          className=" brightness-[.4] lg:scale-110 md:scale-x-125 sm:scale-x-150  sm:scale-y-110 scale-x-[2] scale-y-100 md:h-[600px] sm:h-[600px] h-screen lg:h-[700px]  w-full"
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
        ></img>
      </div>
    </div>
  );
};
export default Login;
