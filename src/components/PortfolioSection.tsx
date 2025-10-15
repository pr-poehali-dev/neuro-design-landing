import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce платформа",
      client: "StyleMarket",
      result: "+28% конверсия",
      metric: "-35% отказов",
      description: "Редизайн интернет-магазина: нейро-архитектура карточек, цветовые акценты и психология CTA",
      image: "https://cdn.poehali.dev/projects/22d2baf0-f63f-4747-bb4b-3c5c43aa4373/files/6cb9c2e2-f730-4bd8-b287-8a85d280c1ea.jpg",
    },
    {
      title: "Корпоративный сайт",
      client: "TechCorp Solutions",
      result: "+42% лидов",
      metric: "+2.3мин на сайте",
      description: "Премиум-сайт для B2B: продуманная архитектура контента, продающие визуалы и доверие",
      image: "https://cdn.poehali.dev/projects/22d2baf0-f63f-4747-bb4b-3c5c43aa4373/files/57441f88-370a-46c1-82b6-cd25d7e0db26.jpg",
    },
    {
      title: "Лендинг финтех-стартапа",
      client: "MoneyFlow",
      result: "+67% регистраций",
      metric: "$85K MRR",
      description: "Высококонверсионный лендинг: нейромаркетинг + продающий копирайтинг + доверие",
      image: "https://cdn.poehali.dev/projects/22d2baf0-f63f-4747-bb4b-3c5c43aa4373/files/0a8b6e79-f408-4d7e-a768-b770a5e8cec3.jpg",
    },
    {
      title: "Мобильное приложение",
      client: "HealthTrack App",
      result: "+53% Retention",
      metric: "4.8★ рейтинг",
      description: "UX/UI для здоровья: простота, мотивация, привычка — всё на нейронауке",
      image: "https://cdn.poehali.dev/projects/22d2baf0-f63f-4747-bb4b-3c5c43aa4373/files/6d5d4de0-ab3a-4251-9770-8b74b4df88dd.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Наши Работы:{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Дизайн, Доказавший свою Эффективность
            </span>
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-medium">
            Каждый проект — это архитектура, которая принесла клиентам реальную прибыль
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
                    <span className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-sm font-bold rounded-full shadow-lg">
                      {project.result}
                    </span>
                    <span className="px-4 py-2 bg-background/90 backdrop-blur-sm border border-primary/50 text-sm font-bold rounded-full">
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
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-background group-hover:border-transparent transition-all font-semibold">
                  Смотреть кейс и ROI
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-10 py-7 font-bold shadow-xl shadow-primary/30">
            Смотреть все кейсы и ROI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;