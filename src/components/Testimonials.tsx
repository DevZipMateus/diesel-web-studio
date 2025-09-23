import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Paulo Bernardo",
      comment: "Ótimo atendimento!"
    },
    {
      name: "Tony Piego", 
      comment: "Excelente trabalho, recomendo!"
    },
    {
      name: "Leandro Batista da Silva Leo",
      comment: "Serviço de qualidade, muito satisfeito."
    },
    {
      name: "Miguel Silvaah",
      comment: "Atendimento impecável."
    },
    {
      name: "Fábio Francisco",
      comment: "Bom."
    },
    {
      name: "Carlos André de Lima Andre",
      comment: "Profissionais de confiança, ótimo atendimento."
    },
    {
      name: "José Edson",
      comment: "Super recomendo!"
    },
    {
      name: "José Severino",
      comment: "Atendimento nota 10."
    },
    {
      name: "José Maria Souza Garcia",
      comment: "Melhor mecânico em diesel."
    },
    {
      name: "Luiz Leite Neto (Netinho)",
      comment: "Atendimento diferenciado."
    },
    {
      name: "Arthur Ferreira Andrade",
      comment: "Atendimento excelente e as soluções propostas foram muito boas."
    },
    {
      name: "Jonnathanm Thimoth",
      comment: "Excelentes serviços e atendimento."
    },
    {
      name: "Pinheiro Junior",
      comment: "Top de linha, recomendo."
    },
    {
      name: "Priscila Maria",
      comment: "Muito organizado, ótimo atendimento, excelentes profissionais."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Depoimentos de clientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Veja o que nossos clientes falam sobre nossos serviços e atendimento especializado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 relative"
              >
                <div className="absolute top-4 right-4 text-accent/20">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-4 h-4 fill-diesel-yellow text-diesel-yellow" 
                    />
                  ))}
                </div>
                
                <p className="text-foreground mb-4 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Cliente Jpdiesel
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-hero text-white p-12 rounded-lg text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">100%</h3>
                <p className="text-white/90">Clientes satisfeitos</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">5+</h3>
                <p className="text-white/90">Anos de experiência</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">500+</h3>
                <p className="text-white/90">Serviços realizados</p>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-lg mb-6 text-white/90">
                Junte-se aos nossos clientes satisfeitos
              </p>
              <a
                href="https://wa.me/5581997612976"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-hero px-8 py-3 rounded-lg font-semibold"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;