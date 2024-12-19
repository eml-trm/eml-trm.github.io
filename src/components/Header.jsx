"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const logoImg = "/logo.png"

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0C3C4F] shadow-md z-50">
      <div className="container mx-auto h-20 flex items-center justify-between">
        <div className="flex items-center ml-4">
          <div className="h-12 w-12 mr-2">
            <Image
              src={logoImg}
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="mx-4 text-white">
            Assistante numérique
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <Link href="/#home" className="text-white hover:text-[#D1D9C9] transition-colors">
              Accueil
            </Link>
            <Link href="/#services" className="text-white hover:text-[#D1D9C9] transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-white hover:text-[#D1D9C9] transition-colors">
              À propos
            </Link>
            <Link href="/#contact" className="bg-[#D1D9C9] text-[#0C3C4F] font-bold py-2 px-4 rounded hover:bg-[#b8c0b3] transition-colors">
              Contactez-moi
            </Link>
          </nav>
        </div>
        <div className="md:hidden mr-4">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0C3C4F] py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/#home" className="text-white hover:text-[#D1D9C9] transition-colors">
              Accueil
            </Link>
            <Link href="/#services" className="text-white hover:text-[#D1D9C9] transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-white hover:text-[#D1D9C9] transition-colors">
              À propos
            </Link>
            <Link href="/#contact" className="bg-[#D1D9C9] text-[#0C3C4F] font-bold py-2 px-4 rounded hover:bg-[#b8c0b3] transition-colors">
              Contactez-moi
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header



