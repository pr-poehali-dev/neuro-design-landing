import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShownPopup]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            NEURO DESIGN
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="text-sm hover:text-primary transition-colors">
              Портфолио
            </a>
            <a href="#process" className="text-sm hover:text-primary transition-colors">
              Процесс
            </a>
            <a href="#testimonials" className="text-sm hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="#contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Связаться
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/20 animate-gradient-shift bg-[length:200%_200%]" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              Мы не просто делаем{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                дизайн
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Мы создаем архитектуру, которая продает: <span className="text-primary font-bold">+25% к конверсии</span> вашего бизнеса
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Neuro Design Architecture – когда эстетика и нейронауки работают на вашу прибыль. Премиальный дизайн, обоснованный данными.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto">
                Получить бесплатный нейро-аудит
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8 py-6 h-auto">
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="py-32 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-black">
                Устали от дизайна, который выглядит хорошо, но{" "}
                <span className="text-primary">не приносит денег?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Низкая конверсия</h3>
                    <p className="text-muted-foreground">Красивый сайт, но пользователи уходят, не совершив покупку</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Высокие отказы</h3>
                    <p className="text-muted-foreground">Посетители не понимают, что делать дальше и покидают сайт</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="XCircle" className="text-destructive flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Дизайн ради дизайна</h3>
                    <p className="text-muted-foreground">Эффектно выглядит, но не работает на бизнес-цели</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-black">
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Neuro Design:
                </span>{" "}
                Эстетика + Психология + Бизнес
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Icon name="Brain" className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Нейромаркетинг в основе</h3>
                    <p className="text-muted-foreground">Используем принципы психологии восприятия для управления вниманием</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Sparkles" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Премиальная эстетика</h3>
                    <p className="text-muted-foreground">Дизайн, который вызывает доверие и повышает ценность бренда</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="TrendingUp" className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Фокус на ROI</h3>
                    <p className="text-muted-foreground">Каждое решение измеряется метриками и влияет на прибыль</p>
                  </div>
                </div>
              </div>
              <Button className="bg-secondary hover:bg-secondary/90">
                Узнать о нейро-методе
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Наши Работы:{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Дизайн с Доказательствами
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Каждый проект — это архитектура, которая принесла клиентам измеримую прибыль
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce платформа",
                client: "TechStore",
                result: "+42% конверсии",
                metric: "-28% отказов",
                description: "Редизайн интернет-магазина с фокусом на путь пользователя",
              },
              {
                title: "Финтех приложение",
                client: "MoneyFlow",
                result: "+65% регистраций",
                metric: "+120% удержание",
                description: "Упрощение онбординга и создание доверия через дизайн",
              },
              {
                title: "SaaS лендинг",
                client: "CloudSync",
                result: "+38% лидов",
                metric: "-45% стоимость лида",
                description: "Архитектура продающей страницы на основе нейро-триггеров",
              },
              {
                title: "Премиум маркетплейс",
                client: "LuxuryHub",
                result: "+55% средний чек",
                metric: "+32% повторные покупки",
                description: "Создание премиального опыта через визуальную иерархию",
              },
            ].map((project, idx) => (
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
              Смотреть все кейсы и ROI
            </Button>
          </div>
        </div>
      </section>

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
              От Нейро-Аудита до Запуска Продающей Архитектуры
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Брифинг и нейро-анализ",
                description: "Глубокое погружение в бизнес, аудиторию и текущие метрики. Анализ поведенческих паттернов пользователей.",
                icon: "Search",
              },
              {
                step: "02",
                title: "Стратегия и концепт",
                description: "Разработка архитектуры взаимодействия на основе нейропсихологии. Создание визуальной концепции.",
                icon: "Lightbulb",
              },
              {
                step: "03",
                title: "Дизайн и прототипирование",
                description: "Создание hi-fi прототипов с применением принципов когнитивной психологии и визуальной иерархии.",
                icon: "Palette",
              },
              {
                step: "04",
                title: "Тестирование гипотез",
                description: "A/B тесты, heatmaps, user testing. Валидация решений на реальных пользователях.",
                icon: "FlaskConical",
              },
              {
                step: "05",
                title: "Запуск и оптимизация",
                description: "Внедрение финального дизайна, настройка аналитики и continuous optimization на основе данных.",
                icon: "Rocket",
              },
            ].map((item, idx) => (
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
            {[
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
            ].map((testimonial, idx) => (
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
            <div className="text-2xl font-bold">TechStore</div>
            <div className="text-2xl font-bold">MoneyFlow</div>
            <div className="text-2xl font-bold">CloudSync</div>
            <div className="text-2xl font-bold">LuxuryHub</div>
            <div className="text-2xl font-bold">DataVerse</div>
            <div className="text-2xl font-bold">SmartHub</div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Готовы сделать ваш бизнес{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                архитектурным шедевром?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Начните с бесплатного нейро-аудита, который покажет точки роста вашей конверсии. Без обязательств.
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50 animate-scale-in">
            <CardContent className="pt-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input placeholder="Иван Иванов" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="ivan@company.com" className="bg-background/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Расскажите о вашем проекте</label>
                  <Textarea
                    placeholder="Опишите кратко вашу задачу, текущую ситуацию и желаемый результат..."
                    rows={5}
                    className="bg-background/50"
                  />
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6 h-auto">
                  Получить бесплатный аудит и расчет стоимости
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Ответим в течение 2 часов в рабочее время
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-16 text-center space-y-4">
            <p className="text-muted-foreground">Или свяжитесь с нами напрямую:</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="mailto:hello@neurodesign.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
                hello@neurodesign.ru
              </a>
              <a href="tel:+79991234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
                +7 (999) 123-45-67
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NEURO DESIGN ARCHITECTURE
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2024 Neuro Design Architecture. Premium Design Solutions
          </div>
        </div>
      </footer>

      <a
        href="https://t.me/neurodesign"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 animate-scale-in"
      >
        <Icon name="MessageCircle" size={28} />
      </a>

      <Dialog open={showExitPopup} onOpenChange={setShowExitPopup}>
        <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-md border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Подождите!
              </span>
            </DialogTitle>
            <DialogDescription className="text-base">
              Получите бесплатный PDF-гайд "5 Нейро-принципов продающего дизайна"
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Input placeholder="Ваш email" type="email" className="bg-background/50" />
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Скачать гайд бесплатно
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Никакого спама. Только полезные материалы по дизайну и нейромаркетингу.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
