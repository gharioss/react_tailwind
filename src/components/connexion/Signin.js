import { useState } from "react"
import SmallFormInput from "../inputsForm/SmallFormInput"
import LargeFormInput from "../inputsForm/LargeFormInput"
import BasicButton from "../inputsForm/BasicButton"

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
export default function Signin() {
    return (
        <>
        <form action="#" method="POST" className="space-y-6">
            <div className="flex flex-row">
                <SmallFormInput label={"First name"} />
                <SmallFormInput label={"Last name"} />
            </div>

        <LargeFormInput label={'Email address'} type={'email'} />
        <LargeFormInput label={'Password'} type={'password'} />
        <LargeFormInput label={'Confirm Password'} type={'password'} />

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
            </div>
        </div>

        <BasicButton label={'Sign in'} />
        </form>
    </>
    )
  }
  