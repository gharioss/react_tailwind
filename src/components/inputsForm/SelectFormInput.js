import React from 'react'

function SelectFormInput({ label, type, value, handleInputChange, data }) {

  return (
    <div className="sm:col-span-3">
        <label htmlFor={type} className="block text-sm font-medium leading-6 text-gray-900">
        { label }
        </label>
        <div className="mt-2">
        <select
        id={type}
        name={type}
        value={value}
        onChange={handleInputChange}
a        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
        {data.map((item) => (
            <option key={item.id} value={item.id}>{item.value}</option>
        ))}
        </select>
        </div>
    </div>
  )
}

export default SelectFormInput