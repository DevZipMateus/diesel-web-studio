import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 md:mb-6">
              <img 
                src="/logo.png" 
                alt="Jpdiesel logo" 
                className="h-12 md:h-16 w-auto mb-3 md:mb-4"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Especializada em injeção eletrônica diesel com mais de 5 anos de experiência. 
              Qualidade, transparência e inovação em cada serviço.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/jpdieseloficial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 md:p-3 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram da Jpdiesel"
              >
                <Instagram className="w-4 md:w-5 h-4 md:h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-heading font-semibold mb-4 md:mb-6">Contato</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 md:w-5 h-4 md:h-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+5581997612976"
                  className="text-primary-foreground/80 hover:text-white transition-colors text-sm md:text-base"
                >
                  (81) 99761-2976
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 md:w-5 h-4 md:h-5 text-accent flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:jpdiesel.loppes@gmail.com"
                  className="text-primary-foreground/80 hover:text-white transition-colors text-sm md:text-base break-all"
                >
                  jpdiesel.loppes@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 md:w-5 h-4 md:h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  <p>Rua Projetada A Lot. Vicente Pinzon, 365A</p>
                  <p>Bairro Garapu</p>
                  <p>Cabo de Santo Agostinho - PE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-heading font-semibold mb-4 md:mb-6">Serviços</h3>
            <ul className="space-y-2 md:space-y-3 text-primary-foreground/80 text-sm md:text-base">
              <li>Diagnóstico eletrônico</li>
              <li>Reparo de bombas injetoras</li>
              <li>Manutenção de bicos injetores</li>
              <li>Sistemas eletrônicos</li>
              <li>Teste de performance</li>
              <li>Garantia de qualidade</li>
            </ul>
            <div className="mt-4 md:mt-6">
              <a
                href="https://wa.me/5581997612976"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
              >
                <img 
                  src="/assets/whatsapp-icon.png" 
                  alt="WhatsApp"
                  className="w-4 h-4"
                />
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Jpdiesel Comércio de Peças e Serviço de Veículos EIRELI. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-xs md:text-sm">
              CNPJ: 32.198.678/0001-17
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;