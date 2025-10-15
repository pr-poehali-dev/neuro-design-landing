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
      image: "https://cdn.poehali.dev/projects/22d2baf0-f63f-4747-bb4b-3c5c43aa4373/files/6cb9c2e2-f730-4bd8-b287-8a85d280c1ea.jpg",
    },
    {
      title: "Офис IT-компании",
      client: "TechVision",
      result: "+40% продуктивности",
      metric: "800 м²",
      description: "Пространство с зонами для концентрации, коллабораций и отдыха на основе нейропсихологии",
      image: "https://cdn.poehali.dev/projects/22d2baf0-f63f-4747-bb4b-3c5c43aa4373/files/57441f88-370a-46c1-82b6-cd25d7e0db26.jpg",
    },
    {
      title: "Флагманский магазин",
      client: "LuxuryHub",
      result: "+55% средний чек",
      metric: "300 м²",
      description: "Премиальный бутик с продуманной архитектурой движения покупателей и эмоциональными зонами",
      image: "https://cdn.poehali.dev/projects/22d2baf0-f63f-4747-bb4b-3c5c43aa4373/files/0a8b6e79-f408-4d7e-a768-b770a5e8cec3.jpg",
    },
    {
      title: "Ресторан концептуальной кухни",
      client: "Fusion Space",
      result: "+65% повторные визиты",
      metric: "250 м²",
      description: "Атмосферное пространство, где освещение, акустика и форма влияют на восприятие вкуса",
      image: "https://cdn.poehali.dev/projects/22d2baf0-f63f-4747-bb4b-3c5c43aa4373/files/6d5d4de0-ab3a-4251-9770-8b74b4df88dd.jpg",
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
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
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