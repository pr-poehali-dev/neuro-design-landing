import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Частный дом в стиле минимализм",
      client: "Семья Ивановых",
      result: "450 м²",
      metric: "Москва",
      description: "Проект дома с открытой планировкой, панорамными окнами и интеграцией природы в интерьер",
    },
    {
      title: "Офис IT-компании",
      client: "TechVision",
      result: "+40% продуктивности",
      metric: "800 м²",
      description: "Пространство с зонами для концентрации, коллабораций и отдыха на основе нейропсихологии",
    },
    {
      title: "Флагманский магазин",
      client: "LuxuryHub",
      result: "+55% средний чек",
      metric: "300 м²",
      description: "Премиальный бутик с продуманной архитектурой движения покупателей и эмоциональными зонами",
    },
    {
      title: "Ресторан концептуальной кухни",
      client: "Fusion Space",
      result: "+65% повторные визиты",
      metric: "250 м²",
      description: "Атмосферное пространство, где освещение, акустика и форма влияют на восприятие вкуса",
    },
  ];

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Наши Проекты:{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Пространства, Которые Работают
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Дома, офисы, магазины и рестораны — каждый проект создан с учетом психологии человека
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 overflow-hidden bg-card/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="h-64 bg-gradient-to-br from-secondary/30 to-primary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/90 text-xs font-bold rounded-full">
                      {project.result}
                    </span>
                    <span className="px-3 py-1 bg-secondary/90 text-xs font-bold rounded-full">
                      {project.metric}
                    </span>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Клиент: {project.client}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  Подробнее о кейсе
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Смотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;