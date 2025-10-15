import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      title: "Брифинг и нейро-анализ",
      description: "Глубокое погружение в ваш бизнес: цели, аудитория, конкуренты. Анализируем текущие метрики и точки роста.",
      icon: "Search",
    },
    {
      step: "02",
      title: "Концепт на нейромаркетинге",
      description: "Создаем концепцию, основанную на психологии восприятия: цвета, формы, пространство, которые влияют на решения.",
      icon: "Brain",
    },
    {
      step: "03",
      title: "Разработка и дизайн",
      description: "Воплощаем концепцию в жизнь: проработка каждого элемента, UX/UI, визуалы, анимации. Премиально и продуманно.",
      icon: "Palette",
    },
    {
      step: "04",
      title: "Тестирование",
      description: "Проверяем гипотезы: A/B-тесты, тепловые карты, аналитика. Дорабатываем до идеальных показателей.",
      icon: "Target",
    },
    {
      step: "05",
      title: "Запуск и масштабирование",
      description: "Запускаем продукт и отслеживаем метрики. Предоставляем отчет по ROI и поддержку после запуска.",
      icon: "Rocket",
    },
  ];

  return (
    <section id="process" className="py-32 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Прозрачный Процесс:
            </span>{" "}
            От Нейро-Аудита до Запуска Продающей Архитектуры
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-medium">
            5 простых шагов до результата, который приносит прибыль
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-8 items-start group hover:translate-x-4 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-black text-2xl">
                  {item.step}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-3">
                  <Icon name={item.icon} className="text-secondary flex-shrink-0 mt-1" size={28} />
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground pl-12">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-lg px-10 py-7 font-bold shadow-xl shadow-secondary/30">
            Запросить подробный план работы над моим проектом
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;