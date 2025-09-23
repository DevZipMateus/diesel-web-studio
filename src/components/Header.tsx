import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(81) 99761-2976</span>
              <span className="sm:hidden">(81) 9.9761-2976</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>jpdiesel.loppes@gmail.com</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Cabo de Santo Agostinho - PE</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="py-3 md:py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Jpdiesel logo - Especialista em injeção eletrônica diesel" 
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5581997612976"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero px-4 xl:px-6 py-2 rounded-lg font-medium inline-flex items-center gap-2 text-sm xl:text-base"
            >
              <img 
                src="/assets/whatsapp-icon.png" 
                alt="WhatsApp"
                className="w-4 h-4"
              />
              Orçamento
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border bg-white/95 backdrop-blur-sm rounded-b-lg">
            <div className="flex flex-col space-y-4 pt-4 px-2">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-accent transition-colors font-medium py-2 px-3 rounded hover:bg-muted/50"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-foreground hover:text-accent transition-colors font-medium py-2 px-3 rounded hover:bg-muted/50"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-foreground hover:text-accent transition-colors font-medium py-2 px-3 rounded hover:bg-muted/50"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-accent transition-colors font-medium py-2 px-3 rounded hover:bg-muted/50"
              >
                Contato
              </button>
              <a
                href="https://wa.me/5581997612976"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero px-6 py-3 rounded-lg font-medium text-center inline-flex items-center justify-center gap-2 mx-3"
              >
                <img 
                  src="/assets/whatsapp-icon.png" 
                  alt="WhatsApp"
                  className="w-4 h-4"
                />
                Orçamento
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;