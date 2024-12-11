'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User, Search, Heart, ShoppingCart, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const actionIcons = [
  { name: 'User Profile', icon: User, href: '/account' },
  { name: 'Search', icon: Search, href: '/' },
  { name: 'Wishlist', icon: Heart, href: '/' },
  { name: 'Shopping Cart', icon: ShoppingCart, href: '/cart' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white py-2 shadow-md sticky top-[-3px] z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-semibold text-gray-900 hover:text-black transition-colors pr-8"
          >
            BrandLogo
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 font-medium text-gray-800">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className="hover:text-black transition-colors hover:underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Icons */}
          <div className="flex items-center gap-1">
            {actionIcons.map((item) => (
              <Link key={item.name} href={item.href} aria-label={item.name}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 hover:bg-transparent"
                >
                  <item.icon size={20} className="text-gray-700" />
                </Button>
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 hover:bg-transparent md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu size={20} className="text-gray-700" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 py-4 border-t">
            <ul className="flex flex-col space-y-4 font-medium text-gray-800">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block hover:text-black transition-colors px-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

