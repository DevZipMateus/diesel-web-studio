import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Sobre a Jpdiesel
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fundada em 2018 por Josué Oliveira Lopes da Silva, a Jpdiesel nasceu do sonho de um jovem empreendedor comprometido com a excelência.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Nossa história
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A empresa Jpdiesel Comércio de Peças e Serviço de Veículos EIRELI teve início em 06 de dezembro de 2018, 
                fundada por Josué Oliveira Lopes da Silva, um jovem sonhador que iniciou sua carreira profissional muito cedo.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Iniciando seu sonho aos 26 anos com a abertura da Jpdiesel, tendo como objetivos primordiais a qualidade, 
                atendimento, transparência, pontualidade e inovação.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Atuamos em diversos segmentos na injeção a diesel: diagnóstico, reparo e manutenção de componentes, 
                como bombas injetoras e de alta pressão, bicos e unidades injetoras e sistemas eletrônicos.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-elegant text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">5+</h4>
                <p className="text-muted-foreground text-sm">
                  Anos de experiência
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-elegant text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">100%</h4>
                <p className="text-muted-foreground text-sm">
                  Clientes satisfeitos
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-elegant text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">Premium</h4>
                <p className="text-muted-foreground text-sm">
                  Qualidade garantida
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-elegant text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">Foco</h4>
                <p className="text-muted-foreground text-sm">
                  Injeção diesel
                </p>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
              <div className="bg-gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Nossa missão
              </h3>
              <p className="text-muted-foreground">
                Oferecer serviços de qualidade superior em injeção eletrônica diesel, 
                mantendo a saúde e performance dos motores dos nossos clientes.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
              <div className="bg-gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Nossos valores
              </h3>
              <p className="text-muted-foreground">
                Qualidade, atendimento personalizado, transparência, pontualidade e 
                inovação constante em todos os nossos processos.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
              <div className="bg-gradient-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Nossa visão
              </h3>
              <p className="text-muted-foreground">
                Ser referência em serviços de injeção eletrônica diesel na região, 
                reconhecida pela excelência e confiabilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;