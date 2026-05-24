import { MessageSquare } from 'lucide-react';

const FloatingWhatsApp = () => {
  const message =
    "Hello VirtualPro team, I am reaching out from your website.";

  // Use country code without + or spaces
  const phoneNumber = "+923132537173";

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare size={28} />
    </a>
  );
};

export default FloatingWhatsApp;