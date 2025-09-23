import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5581997612976"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;