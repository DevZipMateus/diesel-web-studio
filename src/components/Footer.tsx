import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="Jpdiesel logo" 
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Especializada em injeção eletrônica diesel com mais de 5 anos de experiência. 
              Qualidade, transparência e inovação em cada serviço.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/jpdieseloficial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram da Jpdiesel"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a 
                  href="tel:+5581997612976"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  (81) 99761-2976
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a 
                  href="mailto:jpdiesel.loppes@gmail.com"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  jpdiesel.loppes@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div className="text-primary-foreground/80">
                  <p>Rua Projetada A Lot. Vicente Pinzon, 365A</p>
                  <p>Bairro Garapu</p>
                  <p>Cabo de Santo Agostinho - PE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Diagnóstico eletrônico</li>
              <li>Reparo de bombas injetoras</li>
              <li>Manutenção de bicos injetores</li>
              <li>Sistemas eletrônicos</li>
              <li>Teste de performance</li>
              <li>Garantia de qualidade</li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/5581997612976"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-block"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Jpdiesel Comércio de Peças e Serviço de Veículos EIRELI. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-4 md:mt-0">
              CNPJ: 32.198.678/0001-17
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;