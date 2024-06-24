import React, { useEffect, useState } from 'react'
import { PhotoIcon } from '@heroicons/react/24/solid'
import axios from "axios";
import SelectFormInput from '../inputsForm/SelectFormInput';


function FormPainting() {
    const [allHeight, setallHeight] = useState([]);
    const [allWidth, setallWidth] = useState([]);
    const [allDepth, setallDepth] = useState([]);
    const [allColor, setallColor] = useState([]);
    const [allAvailability, setallAvailability] = useState([]);
    const [allOrientation, setallOrientation] = useState([]);
    const [allType, setallType] = useState([]);
    const [files, setFiles] = useState([]);
    const [message, setMessage] = useState('');
  
    const handleFileChange = (e) => {
      setFiles(e.target.files);
    };
    
    const [paintingFormData, setpaintingFormData] = useState({
        name: "",
        price: "",
        height: "1",
        width: "1",
        depth: "1",
        color: "1",
        availability: "1",
        orientation: "1",
        type_painting: "1",
      });

    useEffect(() => {
        axios.get("http://localhost:8080/size").then((response) => {
            setallHeight(response.data.height)
            setallWidth(response.data.width)
            setallDepth(response.data.depth)
            setallColor(response.data.color)
            setallAvailability(response.data.availability)
            setallOrientation(response.data.orientation)
            setallType(response.data.type)
        });
      }, []);

  
      const handleInputData = (input) => (e) => {
        const { value } = e.target;
    
        setpaintingFormData((prevState) => ({
          ...prevState,
          [input]: value,
        }));
        console.log(paintingFormData)
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append('files', files[i]);
        }
    
        try {
          const response = await axios.post('http://localhost:8080/paintings/upload', {formData, paintingFormData}, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(response.data.message);
        } catch (error) {
          console.log('File upload failed.');
        }
      };

  return (
    <div className='mx-auto sm:max-w-xl md:max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-[100rem] lg:px-8'>
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Ajout de tableau</h2>

          <div className="col-span-full">
      <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
        Cover photo
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                multiple
                onChange={handleFileChange}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          <form onSubmit={handleSubmit}>
            <button type="submit" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Upload
            </button>
          </form>
          {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
        </div>
      </div>
    </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
              <label htmlFor="name_painting" className="block text-sm font-medium leading-6 text-gray-900">
                Nom du tableau
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name_painting"
                  id="name_painting"
                  value={paintingFormData.name}
                  onChange={handleInputData('name')}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="price_painting" className="block text-sm font-medium leading-6 text-gray-900">
                Prix du tableau
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="price_painting"
                  id="price_painting"
                  value={paintingFormData.price}
                  onChange={handleInputData('price')}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <SelectFormInput
                data={allHeight.map(item => ({ id: item.id_height, value: item.height }))}
                label="Hauteur du tableau"
                type={'height'}
                value={paintingFormData.height}
                handleInputChange={handleInputData('height')}
            />
            <SelectFormInput
                data={allWidth.map(item => ({ id: item.id_width, value: item.width }))}
                label="Largeur du tableau"
                type={'width'}
                value={paintingFormData.width}
                handleInputChange={handleInputData('width')}
            />
            <SelectFormInput
                data={allDepth.map(item => ({ id: item.id_depth, value: item.depth }))}
                label="Profondeur du tableau"
                type={'depth'}
                value={paintingFormData.depth}
                handleInputChange={handleInputData('depth')}
            />
            <SelectFormInput
                data={allColor.map(item => ({ id: item.id_color, value: item.color }))}
                label="Couleur principale du tableau"
                type={'color'}
                value={paintingFormData.color}
                handleInputChange={handleInputData('color')}
            />
            <SelectFormInput
                data={allAvailability.map(item => ({ id: item.id_availability, value: item.availability }))}
                label="Disponibilité du tableau"
                type={'availability'}
                value={paintingFormData.availability}
                handleInputChange={handleInputData('availability')}
            />
            <SelectFormInput
                data={allOrientation.map(item => ({ id: item.id_orientation, value: item.orientation }))}
                label="Orientation du tableau"
                type={'orientation'}
                value={paintingFormData.orientation}
                handleInputChange={handleInputData('orientation')}
            />

            <SelectFormInput
                data={allType.map(item => ({ id: item.id_type, value: item.type_painting }))}
                label="Type du tableau"
                type={'type'}
                value={paintingFormData.type}
                handleInputChange={handleInputData('type')}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
  )
}

export default FormPainting