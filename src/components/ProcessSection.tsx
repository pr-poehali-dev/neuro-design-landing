import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      title: "Брифинг и анализ пространства",
      description: "Изучаем задачи, целевую аудиторию, функциональные требования. Анализируем особенности участка или помещения.",
      icon: "Search",
    },
    {
      step: "02",
      title: "Концепция и стратегия",
      description: "Разрабатываем архитектурную концепцию на основе нейропсихологии восприятия пространства. Создаем визуальные образы.",
      icon: "Lightbulb",
    },
    {
      step: "03",
      title: "Проектирование",
      description: "Разрабатываем планировки, 3D-визуализации, подбираем материалы и освещение с учетом влияния на человека.",
      icon: "Palette",
    },
    {
      step: "04",
      title: "Рабочая документация",
      description: "Создаем полный комплект чертежей, спецификаций и смет для строителей и подрядчиков.",
      icon: "FileText",
    },
    {
      step: "05",
      title: "Авторский надзор",
      description: "Контролируем реализацию проекта, консультируем на всех этапах строительства до финального результата.",
      icon: "Shield",
    },
  ];

  return (
    <section id="process" className="py-32 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Прозрачный{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Процесс
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            От Идеи до Реализации: Как Мы Создаем Ваше Пространство
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
          <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
            Запросить план работы над моим проектом
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;