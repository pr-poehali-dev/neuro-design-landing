import Icon from "@/components/ui/icon";

const FloatingButton = () => {
  return (
    <a
      href="https://t.me/neurodesign"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 animate-scale-in"
    >
      <Icon name="MessageCircle" size={28} />
    </a>
  );
};

export default FloatingButton;
