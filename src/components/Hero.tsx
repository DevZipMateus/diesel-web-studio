import { ArrowRight, CheckCircle, Wrench, Gauge, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-28 md:pt-32 pb-16 md:pb-20 hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 md:mb-6 leading-tight">
            Jpdiesel Comércio de Peças e Serviço de Veículos
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/90 font-medium max-w-4xl mx-auto">
            Especializada em injeção eletrônica diesel com qualidade, transparência e inovação
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Nosso principal objetivo é oferecer um serviço de qualidade para manter a saúde e desempenho do seu motor a diesel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
            <a
              href="https://wa.me/5581997612976"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg inline-flex items-center justify-center gap-2"
            >
              <img 
                src="/assets/whatsapp-icon.png" 
                alt="WhatsApp"
                className="w-4 md:w-5 h-4 md:h-5"
              />
              Solicitar Orçamento
            </a>
            <button 
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline-hero px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg"
            >
              Nossos Serviços
            </button>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 md:p-4 rounded-full mb-3 md:mb-4">
                <Wrench className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2">Diagnóstico Preciso</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Identificação rápida e precisa de problemas no sistema de injeção
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 md:p-4 rounded-full mb-3 md:mb-4">
                <Gauge className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Serviços com garantia e peças de qualidade superior
              </p>
            </div>
            <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
              <div className="bg-white/10 p-3 md:p-4 rounded-full mb-3 md:mb-4">
                <Zap className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2">Atendimento Rápido</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Soluções ágeis para minimizar o tempo parado do seu veículo
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-4 md:left-10 w-16 md:w-20 h-16 md:h-20 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-4 md:right-10 w-24 md:w-32 h-24 md:h-32 bg-accent/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;