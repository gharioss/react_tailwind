import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

function EditListPainting() {
  const [paintingsData, setPaintingsData] = useState([]);

  const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]

  useEffect(() => {
    axios.get("http://localhost:8000/paintings").then((response) => {
      console.log(response.data)
        setPaintingsData(response.data);
    });
  }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  Image
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Nom
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Prix
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Dimensions
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Orientation
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Couleur
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Modifier</span>
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Supprimer</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paintingsData.map((painting) => (
                <tr key={painting.name}>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><img className='w-[100px]' src={'http://localhost:8000/' + painting.first_image} alt="product" /></td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {painting.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{painting.price + ' '}$</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{paintingsData[0]?.width + ' W x ' + paintingsData[0]?.height + ' H x ' + paintingsData[0]?.depth + ' D cm'}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{painting.orientation}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{painting.color}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">

                    <Link to={`/edit_painting/${painting.id_painting}`} className="text-indigo-600 hover:text-indigo-900">
                      Modifier<span className="sr-only">, {painting.name}</span>
                    </Link>
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <a href="#" className="text-[#9c2b2e] hover:text-[#641a1d]">
                    Supprimer<span className="sr-only">, {painting.name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EditListPainting