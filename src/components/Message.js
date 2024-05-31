import React from 'react';
import { Transition, Dialog, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import SideShow from './SideShow';

const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
  

const Message = ({ isOpen, toggleMessage }) => {
  return (
    
    <SideShow isOpen={isOpen} toggleCart={toggleMessage} products={people} type={"message"} label={'Messages'} />
  );
};

export default Message;
