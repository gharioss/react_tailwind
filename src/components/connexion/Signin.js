import SmallFormInput from "../inputsForm/SmallFormInput"
import LargeFormInput from "../inputsForm/LargeFormInput"
import BasicButton from "../inputsForm/BasicButton"
import axios from "axios";
import { useState } from "react";


export default function Signin() {
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
      };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8000/users/register', { formData });
        console.log('User registered successfully');
    } catch (error) {
        console.error('Error registering:', error);
    }
};
    return (
        <>
        <form className="space-y-6">
            <div className="flex flex-row">
                <SmallFormInput type={'text'} label={"First name"} value={formData.first_name} changeFormData={handleInputData('first_name')} />
                <SmallFormInput type={'text'} label={"Last name"} value={formData.last_name} changeFormData={handleInputData('last_name')} />
            </div>

        <LargeFormInput label={'Email address'} type={'email'} value={formData.email} changeFormData={handleInputData('email')} />
        <LargeFormInput label={'Password'} type={'password'} value={formData.password} changeFormData={handleInputData('password')} />
        <LargeFormInput label={'Confirm Password'} type={'password'} value={formData.confirm_password} changeFormData={handleInputData('confirm_password')} />

        <div className="flex items-center justify-between">
            <div className="flex items-center">
            <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="remember_me" className="ml-3 block text-sm leading-6 text-gray-700">
                Remember me
            </label>
            </div>

            <div className="text-sm leading-6">
            </div>
        </div>

        <BasicButton label={'Sign in'} handleClick={handleRegister} />
        </form>
    </>
    )
  }
  