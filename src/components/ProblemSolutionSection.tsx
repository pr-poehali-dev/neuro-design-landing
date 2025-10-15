import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProblemSolutionSection = () => {
  return (
    <section id="problem" className="py-32 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Устали от дизайна, который{" "}
              <span className="text-destructive">выглядит хорошо, но не приносит денег?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 group hover:translate-x-2 transition-transform">
                <Icon name="TrendingDown" className="text-destructive flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-xl mb-2">Низкая конверсия</h3>
                  <p className="text-muted-foreground text-lg">Сайт или магазин привлекают посетителей, но не превращают их в покупателей</p>
                </div>
              </div>
              <div className="flex gap-4 group hover:translate-x-2 transition-transform">
                <Icon name="UserX" className="text-destructive flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-xl mb-2">Высокие отказы</h3>
                  <p className="text-muted-foreground text-lg">Пользователи покидают сайт через 5-10 секунд — дизайн не удерживает внимание</p>
                </div>
              </div>
              <div className="flex gap-4 group hover:translate-x-2 transition-transform">
                <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-xl mb-2">«Дизайн ради дизайна»</h3>
                  <p className="text-muted-foreground text-lg">Красиво, но не учитывает психологию целевой аудитории и бизнес-цели</p>
                </div>
              </div>
              <div className="flex gap-4 group hover:translate-x-2 transition-transform">
                <Icon name="DollarSign" className="text-destructive flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-xl mb-2">Деньги на ветер</h3>
                  <p className="text-muted-foreground text-lg">Вложили в дизайн, но ROI не вырос — инвестиции не окупаются</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Neuro Design:
              </span>{" "}
              Сочетание Эстетики, Психологии и Архитектуры Бизнеса
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 group hover:translate-x-2 transition-transform">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <Icon name="Brain" className="text-background" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-secondary">1. Нейромаркетинг в основе</h3>
                  <p className="text-muted-foreground text-lg">Каждое решение основано на психологии восприятия: цвет, форма, свет, пространство</p>
                </div>
              </div>
              <div className="flex gap-4 group hover:translate-x-2 transition-transform">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sparkles" className="text-background" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-primary">2. Премиальная эстетика</h3>
                  <p className="text-muted-foreground text-lg">Создаем пространства, которые вызывают доверие и желание остаться</p>
                </div>
              </div>
              <div className="flex gap-4 group hover:translate-x-2 transition-transform">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-background" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-secondary">3. Фокус на ROI</h3>
                  <p className="text-muted-foreground text-lg">Измеряем результат: конверсия, удержание, продуктивность, средний чек</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 font-bold text-lg px-8 py-6 shadow-lg shadow-secondary/30">
              Узнать, как работает наш нейро-метод
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;