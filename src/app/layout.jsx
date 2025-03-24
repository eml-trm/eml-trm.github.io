import Footer from '@/components/Footer'
import Header from '../components/Header'
import './globals.css'
import { Amaranth } from 'next/font/google'

const inter = Amaranth({ subsets: ['latin'], weight: ['400', '700'], })

export const metadata = {
  title: 'Assistante numérique à domicile',
  description: 'Services d\'accompagnement numérique personnalisés à domicile',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
      <script data-goatcounter="https://emeline-merliere.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}

