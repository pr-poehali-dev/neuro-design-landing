import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProblemSolutionSection = () => {
  return (
    <section id="problem" className="py-32 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black">
              Пространство не работает{" "}
              <span className="text-primary">на ваш бизнес?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Сотрудники не мотивированы</h3>
                  <p className="text-muted-foreground">Офис выглядит красиво, но не повышает продуктивность и не удерживает таланты</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Клиенты не возвращаются</h3>
                  <p className="text-muted-foreground">Магазин или ресторан не создает нужную атмосферу и не удерживает посетителей</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Дизайн без смысла</h3>
                  <p className="text-muted-foreground">Красиво, но не учитывает психологию людей и не работает на бизнес-цели</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Neuro Design Architecture:
              </span>{" "}
              Архитектура + Психология + Бизнес
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="Brain" className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Нейропсихология пространства</h3>
                  <p className="text-muted-foreground">Используем знания о восприятии человека: свет, формы, цвета, пропорции</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Home" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Премиальная архитектура</h3>
                  <p className="text-muted-foreground">Дома, офисы, магазины — пространства, которые повышают качество жизни и работы</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="TrendingUp" className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Результат для бизнеса</h3>
                  <p className="text-muted-foreground">Пространство повышает продуктивность, привлекает клиентов и удерживает таланты</p>
                </div>
              </div>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">
              Узнать о нашем подходе
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;