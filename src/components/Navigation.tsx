import { Button } from "@/components/ui/button";

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation = ({ isScrolled }: NavigationProps) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          NEURO DESIGN ARCHITECTURE
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
            Портфолио
          </a>
          <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">
            Процесс
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Отзывы
          </a>
          <a href="#contact">
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 font-semibold shadow-lg shadow-primary/30">
              Получить аудит
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;