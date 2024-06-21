import SmallFormInput from "../inputsForm/SmallFormInput"
import LargeFormInput from "../inputsForm/LargeFormInput"
import BasicButton from "../inputsForm/BasicButton"
import axios from "axios";


export default function Signin({ handleFormData, values }) {

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('aaaaaaaaaaaaaaaa')
    try {
        await axios.post('http://localhost:8080/users/register', { values });
        console.log('User registered successfully');
    } catch (error) {
        console.error('Error registering:', error);
    }
};
    return (
        <>
        <form className="space-y-6">
            <div className="flex flex-row">
                <SmallFormInput type={'text'} label={"First name"} value={values.first_name} changeFormData={handleFormData('first_name')} />
                <SmallFormInput type={'text'} label={"Last name"} value={values.last_name} changeFormData={handleFormData('last_name')} />
            </div>

        <LargeFormInput label={'Email address'} type={'email'} value={values.email} changeFormData={handleFormData('email')} />
        <LargeFormInput label={'Password'} type={'password'} value={values.password} changeFormData={handleFormData('password')} />
        <LargeFormInput label={'Confirm Password'} type={'password'} value={values.confirm_password} changeFormData={handleFormData('confirm_password')} />

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
  