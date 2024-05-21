import { useState } from "react"
import SmallFormInput from "../inputsForm/SmallFormInput"
import LargeFormInput from "../inputsForm/LargeFormInput"

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
export default function Login() {
    return (
        <>
            <form action="#" method="POST" className="space-y-6">
                <div className="flex flex-row">
                    <SmallFormInput label={"First name"} />
                    <SmallFormInput label={"Last name"} />
                </div>

            <LargeFormInput label={'Email address'} />
            <LargeFormInput label={'Password'} />

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
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password ?
                </a>
                </div>
            </div>

            <div>
                <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Sign in
                </button>
            </div>
            </form>
        </>
    )
  }
  