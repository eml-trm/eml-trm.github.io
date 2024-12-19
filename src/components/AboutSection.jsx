import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="w-full bg-[#0C3C4F] py-20">
      <div className="container mx-auto px-8 md:px-16 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
            <Image
              src="/Emeline_Merliere.jpg"
              alt="Emeline"
              width={400}
              height={400}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:ml-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#F4E0C6] mb-6">Qui suis-je ?</h3>
            <p className="text-base text-white mb-6 leading-relaxed">
              Je m’appelle Emeline, je suis <strong>développeuse informatique</strong> depuis plus de 6 ans et animée par l’envie de rendre la <strong>technologie accessible à tous</strong>. 
              Mon approche est bienveillante, patiente et adaptée à vos besoins, pour vous aider à utiliser vos outils numériques
              <strong> en toute confiance</strong>, directement chez vous.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Intervention à domicile
              </li>
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Adapté à tous types de niveau
              </li>
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Pédagogie et bienveillance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

