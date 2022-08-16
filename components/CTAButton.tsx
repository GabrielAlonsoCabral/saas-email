import Link from 'next/link'
import React from 'react'

interface ICTAButtonProps {
  title: string
  className?: string
  href?: string
}

export default function CTAButton({
  title,
  className,
  href = '/',
}: ICTAButtonProps) {
  return (
    <Link href={href}>
      <a
        className={`px-6 py-2 text-white bg-purple rounded-md md:ml-5 transition delay-700 hover:bg-gradient-to-tr from-purple to-red-700 focus:bg-gradient-to-tr from-purple to-red-700 ${className}`}
      >
        {title}
      </a>
    </Link>
  )
}
