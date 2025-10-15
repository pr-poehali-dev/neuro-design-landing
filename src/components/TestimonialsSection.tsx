import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Алексей Петров",
      position: "CEO, StyleMarket",
      text: "После редизайна конверсия выросла на 28%, а отказы упали на 35%. Neuro Design сделали именно то, о чем мы мечтали — красиво и продающе. Данные не врут: выручка +120% за 3 месяца.",
      result: "+28% конверсия",
    },
    {
      name: "Мария Смирнова",
      position: "CMO, TechCorp Solutions",
      text: "Мы хотели серьезный B2B-сайт, а получили машину по генерации лидов. +42% квалифицированных заявок, пользователи проводят на сайте на 2.3 минуты больше. Клиенты воспринимают нас как премиум-вендора.",
      result: "+42% лидов",
    },
    {
      name: "Дмитрий Карпов",
      position: "Founder, MoneyFlow",
      text: "За 2 недели после запуска нового лендинга регистрации выросли на 67%. Neuro Design сделали не просто красиво, а убедительно и достоверно. MRR вырос до $85K. Это лучшая инвестиция в маркетинг.",
      result: "+67% регистраций",
    },
    {
      name: "Анна Лебедева",
      position: "Product Owner, HealthTrack App",
      text: "После редизайна retention вырос на 53%, рейтинг в App Store поднялся до 4.8 звезд. Пользователи стали писать, что приложение мотивирует и возвращаться к нему каждый день. Это именно то, что нужно для health-продукта.",
      result: "+53% Retention",
    },
  ];

  const clientLogos = ["StyleMarket", "TechCorp", "MoneyFlow", "HealthTrack", "FinanceHub", "CloudTech", "DataVision", "SmartRetail"];

  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Нам Доверяют{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Лидеры Рынка
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex justify-between items-start">
                  <Icon name="Quote" className="text-primary" size={32} />
                  <span className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-sm font-bold rounded-full shadow-lg">
                    {testimonial.result}
                  </span>
                </div>
                <p className="text-lg leading-relaxed">{testimonial.text}</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-center text-muted-foreground mb-8 text-lg">Нам доверяют более 50+ компаний</p>
          <div className="flex flex-wrap gap-8 justify-center items-center opacity-50 hover:opacity-80 transition-opacity">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="text-xl font-bold px-4 py-2 border border-border/30 rounded-lg">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;