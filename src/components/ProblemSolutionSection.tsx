import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProblemSolutionSection = () => {
  return (
    <section id="problem" className="py-32 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black">
              Устали от дизайна, который выглядит хорошо, но{" "}
              <span className="text-primary">не приносит денег?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Низкая конверсия</h3>
                  <p className="text-muted-foreground">Красивый сайт, но пользователи уходят, не совершив покупку</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Высокие отказы</h3>
                  <p className="text-muted-foreground">Посетители не понимают, что делать дальше и покидают сайт</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Дизайн ради дизайна</h3>
                  <p className="text-muted-foreground">Эффектно выглядит, но не работает на бизнес-цели</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Neuro Design:
              </span>{" "}
              Эстетика + Психология + Бизнес
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="Brain" className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Нейромаркетинг в основе</h3>
                  <p className="text-muted-foreground">Используем принципы психологии восприятия для управления вниманием</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Sparkles" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Премиальная эстетика</h3>
                  <p className="text-muted-foreground">Дизайн, который вызывает доверие и повышает ценность бренда</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="TrendingUp" className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Фокус на ROI</h3>
                  <p className="text-muted-foreground">Каждое решение измеряется метриками и влияет на прибыль</p>
                </div>
              </div>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">
              Узнать о нейро-методе
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
