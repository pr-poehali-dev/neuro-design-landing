import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/20 animate-gradient-shift bg-[length:200%_200%]" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            Мы не просто делаем дизайн.{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Мы создаем архитектуру, которая продает
            </span>
          </h1>
          <div className="inline-block px-8 py-3 bg-primary/10 border border-primary/30 rounded-full">
            <p className="text-2xl md:text-3xl font-bold text-primary">
              +25% к конверсии вашего бизнеса
            </p>
          </div>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium">
            Neuro Design Architecture — когда эстетика и нейронауки работают на вашу прибыль. Премиальный дизайн, обоснованный данными.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-10 py-7 h-auto font-bold shadow-xl shadow-primary/30">
              Получить бесплатный нейро-аудит вашего сайта
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/50 text-foreground hover:bg-primary/10 text-lg px-10 py-7 h-auto font-semibold">
              Смотреть портфолио
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;