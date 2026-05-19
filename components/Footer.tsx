import { LibraryBig } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className='grid md:grid-flow-col'>
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <LibraryBig className="w-8 h-8 text-blue-600"/>
                <span className="text-xl font-bold text-white">BookHaven</span>
              </div>
              <h3 className="md:w-[450px] mb-4">
                Your gateway to unlimited knowledge and endless stories. Join our community of readers today.
              </h3>
            </div>
            <div className="col-span-2">
              <h6 className="text-white mb-3">Quick Links</h6>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Browse Books</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">New Arrivals</a></li>
              </ul>
            </div>
            <div className="col-span-2">
              <h6 className="text-white mb-3">Support</h6>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 BookHaven. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer