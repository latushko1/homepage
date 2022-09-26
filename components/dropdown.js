import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center border-2 border-primary dark:border-secondary rounded-xl bg-secondary dark:bg-primary px-4 py-2 text-sm font-medium text-primary dark:text-secondary shadow-sm focus:outline-none">
          Menu
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-secondary dark:bg-primary shadow-lg focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#about"
                  className={classNames(
                    active ? 'bg-secondary dark:bg-primary text-primary dark:text-secondary ' : 'text-primary dark:text-secondary',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  About
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#works"
                  className={classNames(
                    active ? 'bg-secondary dark:bg-primary text-primary dark:text-secondary ' : 'text-primary dark:text-secondary',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Works
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#links"
                  className={classNames(
                    active ? 'bg-secondary dark:bg-primary text-primary dark:text-secondary ' : 'text-primary dark:text-secondary',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Links
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown