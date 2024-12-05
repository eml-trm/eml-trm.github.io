"use client"
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../public/logo.png'
import { useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const headerHeight = 100 // Hauteur de votre header en pixels, changed from 80 to 100
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleClick)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick)
      })
    }
  }, [])


  return (
    <header className="fixed top-0 left-0 w-full bg-[#0C3C4F] shadow-md z-50">
      <div className="container mx-auto  h-20 flex items-center justify-between">
      <div className="flex items-center">
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
        <div className="flex items-center space-x-6">
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
      </div>
    </header>
  )
}

export default Header




