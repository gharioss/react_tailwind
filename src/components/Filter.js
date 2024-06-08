
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid';
import CardMain from './cards/CardMain';
import axios from "axios";

const filters = [
  {
    id: 'availability',
    name: 'Availability',
    options: [
      { value: 'available', label: 'For sale' },
      { value: 'unavailable', label: 'Not for sale' },
      { value: 'sold', label: 'Sold' },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'blue', label: 'Blue' },
      { value: 'purple', label: 'Purple' },
      { value: 'green', label: 'Green' },
      { value: 'red', label: 'Red' },
      { value: 'black', label: 'Black' },
    ],
  },
  {
    id: 'prices',
    name: 'Prices',
    options: [
      { value: '100-500', label: 'Under 500$' },
      { value: '500-1000', label: '500$ - 1,000$' },
      { value: '1000-2000', label: '1,000$ - 2,000$' },
      { value: '2000-5.000', label: '2,000$ - 5,000$' },
      { value: '5000-10000', label: '5,000$ - 10,000$' },
      { value: '10000-1000000', label: 'OVer 10,000$' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'small', label: 'Small' },
      { value: 'medium', label: 'Medium' },
      { value: 'large', label: 'Large' },
      { value: 'oversized', label: 'Oversized' },
    ],
  },
  {
    id: 'orientation',
    name: 'Orientation',
    options: [
      { value: 'horizontal', label: 'Horizontal' },
      { value: 'vertical', label: 'Vertical' },
      { value: 'square', label: 'Square' },
    ],
  },
  {
    id: 'type',
    name: 'Type',
    options: [
      { value: 'normal', label: 'Normal' },
      { value: 'multi', label: 'Multiple Panel' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FilterCategory() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [checkedValues, setCheckedValues] = useState({});
  const [paintingsData, setPaintingsData] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:8080/paintings").then((response) => {
          setPaintingsData(response.data);
      });
    }, []);

  useEffect(() => {
    if (Object.keys(checkedValues).length > 0) {
      axios.post('http://localhost:8080/paintings/filterPaintings', checkedValues)
        .then((response) => {
          setPaintingsData(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [checkedValues]);

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setCheckedValues((prev) => {
      const values = prev[name] || [];
      if (checked) {
        return { ...prev, [name]: [...values, value] };
      } else {
        return { ...prev, [name]: values.filter((v) => v !== value) };
      }
    });    
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure as="div" key={section.name} className="border-t border-gray-200 pb-4 pt-4">
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pb-2 pt-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      onChange={handleFilterChange}
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto sm:max-w-xl md:max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-[100rem] lg:px-8">
          <div className="border-b border-gray-200 pb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
            <p className="mt-4 text-base text-gray-500">
              Checkout out the latest release of Basic Tees, new and improved with four openings!
            </p>
          </div>

          <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">Filters</span>
                <PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <div key={section.name} className={sectionIdx === 0 ? null : 'pt-3'}>
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}`}
                                defaultValue={option.value}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                onChange={handleFilterChange}
                              />
                              <label htmlFor={`${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            {/* Product grid */}
            <div className="mt-6 md:col-span-3 lg:col-span-2 lg:mt-0 xl:col-span-3 flex flex-wrap">
                {paintingsData.map((painting, index) => (
                    <CardMain key={index} painting={painting} />
                ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
