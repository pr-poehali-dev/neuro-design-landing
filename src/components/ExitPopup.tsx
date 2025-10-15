import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ExitPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ExitPopup = ({ open, onOpenChange }: ExitPopupProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-md border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Свяжитесь с нами!
            </span>
          </DialogTitle>
          <DialogDescription className="text-base">
            Мы проконсультируем вас по вашему проекту и ответим на все вопросы
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <Input placeholder="Ваше имя" type="text" className="bg-background/50" />
          <Input placeholder="Ваш телефон" type="tel" className="bg-background/50" />
          <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Получить консультацию
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Наш специалист свяжется с вами в течение 24 часов
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitPopup;