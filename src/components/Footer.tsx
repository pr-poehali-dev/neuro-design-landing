import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            NEURO DESIGN ARCHITECTURE
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-muted-foreground">
          © 2024 Neuro Design Architecture. Premium Design Solutions
        </div>
      </div>
    </footer>
  );
};

export default Footer;
