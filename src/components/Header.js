import Logo from "../Image/Logo.png"
const Header = () => {
    return (
        <div className="absolute w-full z-50">
            <img className="lg:w-80 w-52 md:w-80 lg:px-20 md:px-16 px-6 md:py-6 py-4 lg:py-6" src={Logo} alt="logo"></img>

            
        </div>
    )
}
export default Header;