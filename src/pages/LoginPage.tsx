import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";

function LoginPage() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="absolute top-3 left-5 p-4">
          <img src="HHlogo.jpg" alt="YourLogo" className="h-12 w-12" />
        </div>
        <div className="absolute top-3 right-5 p-4 mobile-img-flag">
          <LanguageSelector setLanguage={setLanguage} hoverClass="hover:shadow-lg" />
        </div>
        <div className="mt-20"> {/* Adjust margin top as needed */}
          <div className="backdrop-blur bg-white bg-opacity-5 p-8 shadow-md rounded-lg text-white">
            <h1 className="text-2xl mb-20 mt-10 ">{language === "fi" ? "Kirjaudu sisään" : "Login Page"}</h1>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-1">{language === "fi" ? "Sähköposti" : "Email"}</label>
                <input type="email" id="email" name="email" className="w-full border rounded-md py-2 px-3 focus:outline-none  border-gray-300 focus:border-blue-500 bg-white bg-opacity-20"  />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1">{language === "fi" ? "Salasana" : "Password"}</label>
                <input type="password" id="password" name="password" className="w-full border rounded-md py-2 px-3 focus:outline-none border-gray-300 focus:border-blue-500 bg-white bg-opacity-20" />
              </div>
              <div>
                <a href="#" className="text-blue-500 hover:underline mt-10">{language === "fi" ? "Unohtuiko salasana?" : "Forgot Password?"}</a>
              </div>
              <div className="flex justify-between items-center">
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{language === "fi" ? "Kirjaudu sisään" : "Login"}</button> 
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-500 hover:underline">{language === "fi" ? "Rekisteröidy" : "Register"}</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
