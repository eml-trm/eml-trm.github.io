import Image from 'next/image'
import assistantImg from '../../public/assistant-1.png'
import guidanceImg from '../../public/guidance-1.png'
import consultingImg from '../../public/consulting-2.png'


const ServiceItem = ({ title, description, imageSrc, imageAlt, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-16`}>
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
    <div className="w-[400px] h-[400px]">
      <Image
          src={imageSrc}
          alt={imageAlt}
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
    </div>
    </div>
    <div className={`w-full md:w-1/2 ${reverse ? 'md:pr-8' : 'md:pl-8'}`}>
      <h3 className="text-2xl font-bold text-[#F4E0C6] mb-4">{title}</h3>
      <p className="text-white leading-relaxed">{description}</p>
    </div>
  </div>
)

const highlightWords = (text, wordsToHighlight) => {
  const regex = new RegExp(`(${wordsToHighlight.join('|')})`, 'gi');
  return text.split(regex).map((part, index) =>
    wordsToHighlight.includes(part) ? (
      <strong key={index} className="font-bold">{part}</strong>
    ) : (
      part
    )
  );
};


const ServicesSection = () => {
  return (
    <section className="w-full bg-[#31646F] text-white py-20">
      <div className="container mx-auto px-8 md:px-16 max-w-6xl">
        <h2 className="text-4xl md:text-4xl font-bold text-center text-[#F4E0C6] mb-16">Mes services</h2>
        <ServiceItem 
          title="Assistance informatique à domicile"
          description={highlightWords(
            "Je vous accompagne chez vous pour vous former à l’utilisation de votre smartphone, tablette et ordinateur. Mon approche personnalisée s'adapte à votre niveau et à vos besoins spécifiques.",
            ["chez vous", "approche personnalisée", "votre niveau"]
          )}
          imageSrc={assistantImg}
          imageAlt="Assistance informatique"
          reverse={false}
        />
        <ServiceItem
          title="Accompagnement sur les outils numériques"
          description={highlightWords(
            "Apprenez à utiliser efficacement les logiciels de bureautique, internet, ou les applications mobiles, je vous guide pas à pas pour développer vos compétences.",
            ["efficacement", "guide pas à pas", "vos compétences"]
          )}
          imageSrc={guidanceImg}
          imageAlt="Accompagnement"
          reverse={true}
        />
        <ServiceItem
          title="Conseils d’achat personnalisé"
          description={highlightWords(
            "Je vous aide à choisir le matériel parfaitement adapté à vos besoins et votre budget, pour des équipements utiles et sans superflu.",
            ["parfaitement adapté", "vos besoins", "votre budget", "équipements utiles"]
          )}
          imageSrc={consultingImg}
          imageAlt="Conseils d'achat"
          reverse={false}
        />
      </div>
    </section>
  )
}

export default ServicesSection

