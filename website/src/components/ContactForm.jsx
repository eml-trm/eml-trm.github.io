const ContactForm = () => {
  return (
    <section className="w-full bg-[#31646F] text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F4E0C6] mb-8">
          Un besoin ou une question ? Contactez-moi !
        </h2>
        <p className="text-center text-white mb-12">
          Je suis là pour répondre à vos questions ou planifier une intervention. 
          Remplissez ce formulaire et je vous répondrai rapidement.
        </p>
        <div className="max-w-4xl mx-auto shadow-lg">
          <iframe 
            src="https://framaforms.org/accompagnement-informatique-1733144945"
            width="100%" 
            height="890" 
            style={{ border: 0 }}
            title="Formulaire de contact"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactForm

