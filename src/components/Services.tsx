import { Wrench, Zap, Settings, Gauge, FileSearch, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileSearch,
      title: "Diagnóstico eletrônico",
      description: "Identificação precisa de falhas através de equipamentos modernos e tecnologia avançada.",
      features: ["Leitura de códigos de erro", "Análise de parâmetros", "Testes de funcionamento"]
    },
    {
      icon: Wrench,
      title: "Reparo de bombas injetoras",
      description: "Manutenção e reparo especializado em bombas injetoras de alta e baixa pressão.",
      features: ["Recondicionamento completo", "Troca de componentes", "Testes de pressão"]
    },
    {
      icon: Settings,
      title: "Manutenção de bicos injetores",
      description: "Limpeza, teste e calibração de bicos injetores para máxima eficiência.",
      features: ["Limpeza ultrassônica", "Teste de vazão", "Calibração precisa"]
    },
    {
      icon: Zap,
      title: "Sistemas eletrônicos",
      description: "Reparo e manutenção de unidades de controle eletrônico (ECUs) e sensores.",
      features: ["Reprogramação de ECUs", "Troca de sensores", "Atualização de software"]
    },
    {
      icon: Gauge,
      title: "Teste de performance",
      description: "Avaliação completa do desempenho do motor após os serviços realizados.",
      features: ["Medição de potência", "Análise de consumo", "Verificação de emissões"]
    },
    {
      icon: Shield,
      title: "Garantia de qualidade",
      description: "Todos os serviços acompanham garantia e suporte técnico especializado.",
      features: ["Garantia estendida", "Suporte técnico", "Revisões gratuitas"]
    }
  ];

  return (
    <section id="servicos" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 md:mb-6">
              Nossos serviços
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções completas em injeção eletrônica diesel com tecnologia avançada e profissionais especializados.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card p-6 md:p-8 rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 group"
              >
                <div className="bg-gradient-accent w-12 md:w-16 h-12 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-xs md:text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-hero text-white p-8 md:p-12 rounded-lg text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-3 md:mb-4">
              Precisa de um orçamento?
            </h3>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto">
              Entre em contato conosco e receba um orçamento personalizado para as necessidades do seu veículo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5581997612976"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-hero px-6 md:px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                <img 
                  src="/assets/whatsapp-icon.png" 
                  alt="WhatsApp"
                  className="w-4 h-4"
                />
                WhatsApp
              </a>
              <a
                href="tel:+5581997612976"
                className="btn-outline-hero px-6 md:px-8 py-3 rounded-lg font-semibold"
              >
                Ligar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;