import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Александр и Анна Ивановы",
      position: "Владельцы дома",
      text: "Neuro Design Architecture создали для нас не просто дом, а пространство, где каждая комната наполнена светом и гармонией. Мы чувствуем себя умиротворенно и вдохновленно каждый день.",
      result: "Частный дом 450 м²",
    },
    {
      name: "Дмитрий Соколов",
      position: "CEO, TechVision",
      text: "После переезда в новый офис продуктивность команды выросла на 40%. Пространство действительно влияет на настроение и эффективность. Сотрудники стали реже болеть и больше времени проводят в офисе добровольно.",
      result: "+40% продуктивности",
    },
    {
      name: "Елена Краснова",
      position: "Владелица бутика LuxuryHub",
      text: "Архитектура магазина работает на продажи. Покупатели проводят больше времени, средний чек вырос на 55%. Команда учла психологию восприятия люкса — это видно в каждой детали.",
      result: "+55% средний чек",
    },
    {
      name: "Игорь Волков",
      position: "Владелец ресторана Fusion Space",
      text: "Neuro Design создали атмосферу, которая усиливает впечатление от нашей кухни. Гости возвращаются не только за едой, но и за ощущениями. Повторные визиты выросли на 65%.",
      result: "+65% повторных визитов",
    },
  ];

  const clientLogos = ["Семья Ивановых", "TechVision", "LuxuryHub", "Fusion Space", "Crystal Tower", "Green Valley"];

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