import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/20 animate-gradient-shift bg-[length:200%_200%]" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            Создаем{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              пространства
            </span>
            {" "}которые вдохновляют
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Архитектурный дизайн домов, офисов и коммерческих пространств на основе нейропсихологии и <span className="text-primary font-bold">принципов восприятия</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Neuro Design Architecture – когда архитектура влияет на эмоции, повышает продуктивность и создает атмосферу успеха.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto">
              Получить бесплатную консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8 py-6 h-auto">
              Смотреть портфолио
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;