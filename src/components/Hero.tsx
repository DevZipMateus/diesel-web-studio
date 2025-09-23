import { ArrowRight, CheckCircle, Wrench, Gauge, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            Jpdiesel Comércio de Peças e Serviço de Veículos
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
            Especializada em injeção eletrônica diesel com qualidade, transparência e inovação
          </h2>
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto">
            Nosso principal objetivo é oferecer um serviço de qualidade para manter a saúde e desempenho do seu motor a diesel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/5581997612976"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </a>
            <button 
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline-hero px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Nossos Serviços
            </button>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Diagnóstico Preciso</h3>
              <p className="text-white/80 text-sm">
                Identificação rápida e precisa de problemas no sistema de injeção
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-white/80 text-sm">
                Serviços com garantia e peças de qualidade superior
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Atendimento Rápido</h3>
              <p className="text-white/80 text-sm">
                Soluções ágeis para minimizar o tempo parado do seu veículo
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;