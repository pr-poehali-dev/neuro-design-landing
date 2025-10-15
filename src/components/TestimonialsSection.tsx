import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Александр Петров",
      position: "CEO, TechStore",
      text: "После редизайна конверсия выросла на 42%. Но главное — команда Neuro Design не просто сделала красиво, они создали систему, которая работает на продажи. Каждый элемент обоснован.",
      result: "+42% конверсии",
    },
    {
      name: "Мария Соколова",
      position: "CMO, MoneyFlow",
      text: "Мы попробовали 3 агентства до Neuro Design. Только здесь подошли к задаче с точки зрения нейромаркетинга. Результат: +65% регистраций и удвоение retention.",
      result: "+65% регистраций",
    },
    {
      name: "Дмитрий Волков",
      position: "Founder, CloudSync",
      text: "Снизили стоимость лида на 45% за счет правильной архитектуры лендинга. Прозрачный процесс, объяснение каждого решения. Рекомендую всем, кто хочет результат, а не просто картинку.",
      result: "-45% стоимость лида",
    },
    {
      name: "Елена Краснова",
      position: "Director, LuxuryHub",
      text: "Работали над премиум-маркетплейсом. Neuro Design смогли создать ощущение люкса через дизайн и при этом поднять средний чек на 55%. Это настоящая архитектура продаж.",
      result: "+55% средний чек",
    },
  ];

  const clientLogos = ["TechStore", "MoneyFlow", "CloudSync", "LuxuryHub", "DataVerse", "SmartHub"];

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
                  <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full">
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

        <div className="flex flex-wrap gap-8 justify-center items-center opacity-60">
          {clientLogos.map((logo, idx) => (
            <div key={idx} className="text-2xl font-bold">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
