import { Menu, Transition } from '@headlessui/react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';

type Props = {
  anchor: 'up' | 'down';
  open?: boolean;
  menu: React.ReactNode;
  dropdownList: {
    label: string;
    value?: string;
    func?: () => void;
  }[];
};

export default function Dropdown(props: Props) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button
        // className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        >
          {props.menu}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'>
        <Menu.Items
          className={`${
            props.anchor === 'up'
              ? '-top-2 transform -translate-y-full absolute w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
              : 'absolute right-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
          }`}>
          {props.dropdownList.map(list => (
            <div className='px-1 py-1' key={list.label}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={list.func}
                    className={`${
                      active ? 'bg-gray-700/50 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    <ActiveIcon
                      active={active}
                      className='mr-2 h-5 w-5'
                      aria-hidden='true'
                    />
                    {list.label}
                  </button>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function ActiveIcon(props: { active?: boolean; className?: string }) {
  return (
    <ArrowRightOnRectangleIcon
      className={`${props.className} ${props.active ? '' : '#EDE9FE'}`}
    />
  );
}
