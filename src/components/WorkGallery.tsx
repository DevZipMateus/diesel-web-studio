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
    },
    {
      image: "/assets/bomba-injetora-mercedes-up.jpg",
      title: "Bomba Injetora Mercedes A",
      description: "Recondicionamento e teste da bomba injetora Mercedes A (Bosch) em bancada com verificação de todos os parâmetros técnicos.",
      category: "Bomba Injetora",
      icon: Wrench
    },
    {
      image: "/assets/bomba-injetora-dp100.jpg",
      title: "Bomba Injetora DP100",
      description: "Teste completo de bomba injetora DP100 em bancada com verificação de performance e calibração de todos os cilindros.",
      category: "Bomba Injetora",
      icon: Wrench
    },
    {
      image: "/assets/unidades-mercedes-up.jpg",
      title: "Unidades Injetoras Mercedes UP",
      description: "Recondicionamento completo de unidades injetoras Mercedes UP com testes especializados e calibração de alta precisão.",
      category: "Unidade Injetora",
      icon: Settings
    },
    {
      image: "/assets/bomba-ve.jpg",
      title: "Bomba Injetora VE",
      description: "Teste e calibração de bomba injetora VE em bancada especializada com verificação completa de pressão e vazão.",
      category: "Bomba Injetora",
      icon: Wrench
    },
    {
      image: "/assets/unidade-ui.jpg",
      title: "Unidade Injetora UI",
      description: "Teste especializado de unidade injetora UI em equipamento de alta precisão com verificação eletrônica completa.",
      category: "Unidade Injetora",
      icon: Settings
    },
    {
      image: "/assets/unidades-up.jpg",
      title: "Unidades Injetoras UP",
      description: "Recondicionamento e teste de unidades injetoras UP com calibração precisa e verificação de todos os parâmetros.",
      category: "Unidade Injetora",
      icon: Settings
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
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 md:mb-6">
              Nossos trabalhos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Confira alguns exemplos de peças e componentes que trabalhamos com excelência e precisão.
            </p>
          </div>

          {/* Work Gallery */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
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
                <div className="p-4 md:p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-accent/10 p-1.5 md:p-2 rounded-lg mr-2 md:mr-3">
                      <item.icon className="w-4 md:w-5 h-4 md:h-5 text-accent" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-accent bg-accent/10 px-2 md:px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Capabilities Section */}
          <div>
            <div className="text-center mb-10 md:mb-12">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-3 md:mb-4">
                Marcas e componentes que trabalhamos
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                Especializados nas principais marcas do mercado com tecnologia e expertise comprovada.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="bg-card p-4 md:p-6 rounded-lg shadow-elegant text-center hover:shadow-glow transition-all duration-300"
                >
                  <div className="bg-gradient-accent w-12 md:w-16 h-12 md:h-16 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <capability.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  </div>
                  <h4 className="text-base md:text-lg font-heading font-semibold text-foreground mb-2 md:mb-3">
                    {capability.title}
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
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
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-gradient-hero text-white p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 md:mb-4">
                Precisa de reparo ou manutenção?
              </h3>
              <p className="text-white/90 mb-4 md:mb-6 text-sm md:text-base">
                Entre em contato conosco e receba um diagnóstico profissional para seu equipamento.
              </p>
              <a
                href="https://wa.me/5581997612976"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-hero px-6 md:px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
              >
                <img 
                  src="/assets/whatsapp-icon.png" 
                  alt="WhatsApp"
                  className="w-4 h-4"
                />
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