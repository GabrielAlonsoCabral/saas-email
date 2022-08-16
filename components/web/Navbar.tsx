import Link from 'next/link'
import ThemeChanger from '../DarkSwitch'
import { Disclosure } from '@headlessui/react'
import CTAButton from '../CTAButton'
import Logo from '../Logo'

export default function Navbar() {
  const navigation = [
    'Products',
    'Features',
    'Developers',
    'Services & Support',
    'Pricing',
  ]

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Logo />

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-neutral-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href="/">
                        <a className="w-full px-4 py-2 -ml-4 text-gray-800 dark:hover:text-gray-100 rounded-md dark:text-gray-300 hover:text-purple focus:text-white focus:bg-purple dark:focus:bg-purple dark:focus:text-white focus:outline-none dark:focus:bg-neutral-700">
                          {item}
                        </a>
                      </Link>
                    ))}

                    <div className="mt-5 flex flex-row mb-5">
                      <div>
                        <span className="text-gray-800 dark:text-gray-300">
                          Dark Mode
                        </span>
                      </div>
                      <div className="ml-5">
                        <ThemeChanger />
                      </div>
                    </div>

                    <CTAButton
                      title="Get Started"
                      className="w-full mt-3 text-center lg:ml-5"
                    />

                    <Link href="/">
                      <a className="w-full px-6 py-2 mt-3 text-center text-black rounded-md md:ml-5 border border-purple dark:border-white dark:text-white dark:hover:border-purple">
                        Login
                      </a>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/">
                  <a className="inline-block px-4 py-2 text-sm font-normal text-gray-800 no-underline rounded-md dark:text-gray-400 hover:text-purple dark:hover:text-gray-100 focus:text-white focus:bg-purple focus:outline-none dark:focus:text-white">
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <CTAButton title="Get Started" />
          <Link href="/">
            <a className="px-6 py-2 text-black rounded-md md:ml-5 border border-purple dark:border-white dark:text-white hover:border-purple border-1">
              Login
            </a>
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  )
}
