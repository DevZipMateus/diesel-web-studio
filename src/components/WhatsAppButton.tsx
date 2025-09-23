const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5581997612976"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <img 
        src="/assets/whatsapp-icon.png" 
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default WhatsAppButton;