import React from 'react'
import Container from '../Container'

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-purple px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Let{"'"}s get sending ?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            See what you can accomplish with the world{"'"}s best email delivery
            platform. It{"'"}s easy to get started.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href=""
            rel="noopener noreferrer"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Sign Up For Free
          </a>
        </div>
      </div>
    </Container>
  )
}
