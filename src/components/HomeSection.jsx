import Link from 'next/link'

import computerImg from '../../public/computer.png'

const HomeSection = () => {
  return (
    <section className="w-full bg-[#0C3C4F] text-white py-20">
      <div className="container mx-auto px-8 md:px-16 max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F4E0C6] mb-6">
            À vos côtés pour vos besoins numériques
          </h1>
          <p className="text-lg text-white mb-12 text-center leading-relaxed">
            Obtenez de l’aide avec vos appareils en <strong>toute simplicité</strong>, 
            directement chez vous avec <strong>mon aide</strong>.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <Link href="/#contact" className="bg-[#D1D9C9] text-[#0C3C4F] font-bold py-2 px-4 rounded hover:bg-[#b8c0b3] transition-colors">
            Contactez-moi
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeSection

