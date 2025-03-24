import Link from 'next/link'
import { Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#333333] text-[#f4f4f4] py-8">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between md:space-x-8">
          {/* Colonne 1 : Contact */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Contactez-moi</h3>
            <p className="mb-2">
              <a href="mailto:emeline.merliere@gmail.com" className="hover:underline">
                emeline.merliere@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:0775773750" className="hover:underline">
                07 75 77 37 50
              </a>
            </p>
          </div>

          {/* Colonne 2 : Réseaux sociaux */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Suivez-moi</h3>
            <div className="flex items-center">
                <Facebook size={20} className="mr-2" />
                <a href="https://www.facebook.com/profile.php?id=61574066081710" className="hover:underline">
                Facebook
                </a>
            </div>
          </div>

          {/* Colonne 3 : Zone d'intervention */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Zone d’intervention</h3>
            <p className="max-w-xs">
              J’intervention dans un rayon de 30 km autour de Tillières-sur-Avre.
            </p>
          </div>
        </div>

        {/* Ligne de copyright */}
        <div className="mt-10 pt-4 border-t border-gray-700 text-center text-sm">
          © 2024 Emeline Merlière. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}

export default Footer

