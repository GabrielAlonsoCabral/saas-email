import React from 'react'
import Container from '../Container'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Div from '../Animations/Div'

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <Div position="bottom" key={index}>
            <div key={item.question} className="mb-5">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-neutral-800 dark:text-gray-200">
                      <span>{item.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-indigo-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                      {item.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </Div>
        ))}
      </div>
    </Container>
  )
}

const faqdata = [
  {
    question: 'Do you offer a free trial ?',
    answer: 'Yes, we offer 1000 emails per month.',
  },
  {
    question: 'Can I use it in a commercial project ?',
    answer: 'Yes, this you can.',
  },
  {
    question: 'Does exist some lib for Node.js ?',
    answer: 'No, but its in our roadmap.',
  },
  {
    question: 'Do you offer technical support ?',
    answer: 'Yes, we offer technical support for all plans.',
  },
]
