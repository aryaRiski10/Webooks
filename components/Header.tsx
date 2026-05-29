import { LibraryBig } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <header className="bg-white shadow-sm sticky top-0 z-100">
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <LibraryBig className="w-8 h-8 text-blue-600"/>
              <span className="text-2xl font-bold text-gray-900">BookHaven</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/browse" className="text-gray-700 hover:text-blue-600 transition-colors">Browse</Link>
              <Link href="/genres" className="text-gray-700 hover:text-blue-600 transition-colors">Genres</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            </nav>

          </div>
        </div>
      </header>
  )
}

export default Header