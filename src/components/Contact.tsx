import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Entre em contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender você. Entre em contato conosco através dos canais abaixo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">
                Informações de contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <a 
                      href="tel:+5581997612976"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      (81) 99761-2976
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <a 
                      href="mailto:jpdiesel.loppes@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      jpdiesel.loppes@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Instagram className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Instagram</h4>
                    <a 
                      href="https://instagram.com/jpdieseloficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      @jpdieseloficial
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua Projetada A Lot. Vicente Pinzon, 365A<br />
                      Bairro Garapu<br />
                      Cabo de Santo Agostinho - PE
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário de funcionamento</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda a quinta: 08:00 às 18:00</p>
                      <p>Sexta-feira: 08:00 às 17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/5581997612976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
                >
                  <img 
                    src="/assets/whatsapp-icon.png" 
                    alt="WhatsApp"
                    className="w-4 h-4"
                  />
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">
                Localização
              </h3>
              <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Rua%20Projetada%20A%20Lot.%20Vicente%20Pinzon,%20365A,%20Garapu,%20Cabo%20de%20Santo%20Agostinho,%20PE&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Jpdiesel"
                ></iframe>
              </div>
              <div className="mt-4">
                <a
                  href="https://maps.app.goo.gl/zeQcC2LNTX1hSoVE8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors font-medium inline-flex items-center space-x-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;