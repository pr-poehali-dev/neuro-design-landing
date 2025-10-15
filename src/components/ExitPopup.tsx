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
  );
};

export default ExitPopup;
