import LargeFormInput from "../inputsForm/LargeFormInput"
import BasicButton from "../inputsForm/BasicButton"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        stay_logged_in: false,
      });
  
      const handleInputData = (input) => (e) => {
        const { value } = e.target;
    
        setFormData((prevState) => ({
          ...prevState,
          [input]: value,
        }));
      };

      const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/users/login', { formData })
            .then((response) => {
                console.log(response.data)
                setToken(response.data.guid);
                localStorage.setItem("muriel_painting_website_connected", response.data.token);
                navigate("/");
              })
              .catch((error) => {
                console.error('Error:', error);
              });
        } catch (error) {
            console.error('Error connecting:', error);
        }
    };

    return (
        
        <>
            <form action="#" method="POST" className="space-y-6">

            <LargeFormInput label={'Email address'} type={'email'} value={formData.email} changeFormData={handleInputData('email')} />
            <LargeFormInput label={'Password'} type={'password'} value={formData.password} changeFormData={handleInputData('password')} />

                <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
                    Remember me
                    </label>
                </div>

                <div className="text-sm leading-6">
                    {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password ?
                    </a> */}
                </div>
                </div>

                <BasicButton label={'Log in'} handleClick={handleRegister} />
            </form>
        </>
    )
  }
  