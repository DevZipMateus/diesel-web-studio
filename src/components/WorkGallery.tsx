import { Wrench, Zap, Settings, Award, Gauge } from 'lucide-react';

const WorkGallery = () => {
  const workItems = [
    {
      image: "/assets/bomba-injetora-caterpillar.jpg",
      title: "Bomba Injetora Caterpillar",
      description: "Recondicionamento completo de bomba injetora Caterpillar com teste de pressão e calibração.",
      category: "Bomba Injetora",
      icon: Wrench
    },
    {
      image: "/assets/bomba-alta-cp3.jpg",
      title: "Bomba de Alta Pressão CP3",
      description: "Teste e calibração de bomba de alta pressão CP3 em equipamento especializado com verificação de vazão e pressão.",
      category: "Alta Pressão",
      icon: Gauge
    },
    {
      image: "/assets/bico-injetor-120043.jpg",
      title: "Bico Injetor 120043",
      description: "Teste de vazão e calibração do bico injetor 120043 em bancada especializada com medição precisa de pulverização.",
      category: "Bico Injetor",
      icon: Zap
    }
  ];

  const capabilities = [
    {
      icon: Wrench,
      title: "Bombas injetoras",
      description: "Recondicionamento de bombas Bosch, Delphi, Denso, Caterpillar e outras marcas",
      brands: ["Bosch", "Delphi", "Denso", "Caterpillar", "Lucas"]
    },
    {
      icon: Zap,
      title: "Bicos injetores",
      description: "Teste, limpeza e calibração de bicos injetores de todas as marcas",
      brands: ["Bosch", "Delphi", "Continental", "Denso", "Siemens"]
    },
    {
      icon: Settings,
      title: "Unidades injetoras",
      description: "Reparo especializado em unidades injetoras eletrônicas",
      brands: ["Bosch", "Delphi", "Cummins", "Detroit", "Volvo"]
    },
    {
      icon: Award,
      title: "Sistemas eletrônicos",
      description: "Diagnóstico e reparo de módulos de controle eletrônico",
      brands: ["Bosch", "Continental", "Delphi", "Denso", "Marelli"]
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Nossos trabalhos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Confira alguns exemplos de peças e componentes que trabalhamos com excelência e precisão.
            </p>
          </div>

          {/* Work Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {workItems.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg shadow-elegant overflow-hidden hover:shadow-glow transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image}
                    alt={`${item.title} - Serviço especializado da Jpdiesel em injeção eletrônica diesel`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-accent/10 p-2 rounded-lg mr-3">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Placeholder cards for more work examples */}
            <div className="bg-card rounded-lg shadow-elegant p-8 text-center border-2 border-dashed border-muted">
              <div className="bg-muted/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Unidades injetoras
              </h3>
              <p className="text-muted-foreground text-sm">
                Em breve: exemplos de unidades injetoras reparadas
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-elegant p-8 text-center border-2 border-dashed border-muted">
              <div className="bg-muted/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Sistemas eletrônicos
              </h3>
              <p className="text-muted-foreground text-sm">
                Diagnóstico e reparo de módulos ECU
              </p>
            </div>
          </div>

          {/* Capabilities Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Marcas e componentes que trabalhamos
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Especializados nas principais marcas do mercado com tecnologia e expertise comprovada.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-elegant text-center hover:shadow-glow transition-all duration-300"
                >
                  <div className="bg-gradient-accent w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-3">
                    {capability.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {capability.description}
                  </p>
                  <div className="space-y-1">
                    {capability.brands.map((brand, brandIndex) => (
                      <span 
                        key={brandIndex}
                        className="inline-block text-xs bg-muted text-muted-foreground px-2 py-1 rounded mr-1 mb-1"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-hero text-white p-8 rounded-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Precisa de reparo ou manutenção?
              </h3>
              <p className="text-white/90 mb-6">
                Entre em contato conosco e receba um diagnóstico profissional para seu equipamento.
              </p>
              <a
                href="https://wa.me/5581997612976"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-hero px-8 py-3 rounded-lg font-semibold"
              >
                Solicitar diagnóstico
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;