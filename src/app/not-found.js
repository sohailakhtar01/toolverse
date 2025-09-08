// app/not-found.js
import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            404
          </h1>
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-gray-900">Page Not Found</h2>
            <p className="text-gray-600 mt-2">
              The tool you're looking for might have been moved or doesn't exist.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/browse-tools"
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-purple-200 text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200"
            >
              <Search className="w-4 h-4" />
              Browse All Tools
            </Link>
            
            <Link 
              href="/submit-tool"
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-pink-200 text-pink-600 rounded-lg hover:bg-pink-50 transition-all duration-200"
            >
              Submit Your Tool
            </Link>
          </div>
        </div>

        

        {/* Contact */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Still can't find what you're looking for?</p>
          <Link href="mailto:sohail@thetoolsverse.com" className="text-purple-600 hover:underline">
            Contact us for help
          </Link>
        </div>
      </div>
    </div>
  )
}
