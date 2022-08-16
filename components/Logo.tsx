import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  const { theme } = useTheme()
  return (
    <Link href="/">
      <a className="flex items-center space-x-2 text-2xl font-medium text-black-800 dark:text-gray-100">
        <span>
          <Image
            src={theme === 'dark' ? '/img/icon-purple.png' : '/img/icon.png'}
            alt="N"
            width="32"
            height="32"
            className="w-8"
          />
        </span>
        <span className="dark:bg-gradient-to-r from-purple rounded">
          Citizens
        </span>
      </a>
    </Link>
  )
}
