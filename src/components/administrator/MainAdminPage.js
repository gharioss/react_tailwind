import React from 'react'
import { MdEdit } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

import { Link } from 'react-router-dom';


function MainAdminPage() {
  return (
<div class='flex items-center justify-center px-24 w-screen'>
    <div>
        <div class="mt-8 grid grid-cols-2 gap-6" id="frameworks-integration">
        <Link to="/add_painting" class="grid w-full min-w-[350px] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25">
            <span class="my-6 grid h-24 w-24 place-items-center">
                <IoAdd className='h-20 w-20' />
            </span>
        </Link>
        <Link to="/all_paintings" class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25">
            <span class="my-6 grid h-24 w-24 place-items-center">
                <MdEdit className='h-20 w-20' />
            </span>
        </Link>
        </div>
    </div>
</div>
  )
}

export default MainAdminPage