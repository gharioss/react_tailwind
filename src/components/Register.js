import { useState } from "react"
import Login from "./connexion/Login";
import Signin from "./connexion/Signin";
import RegisterWithATool from "./connexion/RegisterWithATool";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Register() {
    const [loginState, setloginState] = useState(false);
    const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      stay_logged_in: false,
    });

    const handleInputData = (input) => (e) => {
      const { value } = e.target;
  
      setFormData((prevState) => ({
        ...prevState,
        [input]: value,
      }));

      console.log(formData)
    };
  
    const changeLoginState = () => {
        setloginState((current) => !current);
      };

    return (
      <>
        <div className="flex min-h-full flex-1">
          <div className="flex flex-1 flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {loginState ? 'Login' : 'Sign in'} to your account
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                {loginState ? 'Not a member ?' : 'Already a member ?'}{' '}
                  <button onClick={changeLoginState} href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    {loginState ? 'Sign in' : 'Login'}
                  </button>
                </p>
              </div>
  
              <div className="mt-5">
              { loginState ? <Login handleFormData={handleInputData} values={formData} /> : <Signin handleFormData={handleInputData} values={formData} /> }
  
                <RegisterWithATool />
              </div>
            </div>
          </div>
          <div className="hidden w-0 flex-1 lg:block">
            <img
              className="inset-0 h-[800px] w-full object-cover"
              src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              alt=""
            />
          </div>
        </div>
      </>
    )
  }
  