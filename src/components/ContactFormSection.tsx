import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactFormSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Готовы создать{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              пространство мечты?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Получите бесплатную консультацию. Обсудим вашу задачу и предложим решения на основе нейроархитектуры.
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
                  placeholder="Опишите ваш проект: дом, офис, магазин, ресторан. Укажите площадь, локацию и пожелания..."
                  rows={5}
                  className="bg-background/50"
                />
              </div>
              <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6 h-auto">
                Получить консультацию и расчет стоимости
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
  );
};

export default ContactFormSection;