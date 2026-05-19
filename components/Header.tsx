import { LibraryBig } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <LibraryBig className="w-8 h-8 text-blue-600"/>
              <span className="text-2xl font-bold text-gray-900">BookHaven</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Browse</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Categories</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            </nav>

            <div className="flex items-center gap-3">
              Menu
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header