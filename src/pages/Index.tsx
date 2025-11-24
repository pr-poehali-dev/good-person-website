import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isInstalling, setIsInstalling] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPoop, setShowPoop] = useState(false);
  const [installStep, setInstallStep] = useState("");

  const installSteps = [
    "Взламываем Пентагон... 🔓",
    "Воруем пароли NASA... 🚀",
    "Загружаем вирусы... 🦠",
    "Устанавливаем майнер биткоинов... ₿",
    "Отправляем данные в ФСБ... 🕵️",
    "Ломаем компьютер... 💻",
    "Вызываем полицию... 🚔",
    "ПОЯВЛЯЕТСЯ КАКАШКА! 💩💩💩"
  ];

  const startInstall = () => {
    setIsInstalling(true);
    setProgress(0);
    setShowPoop(false);
    
    let currentStep = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 12.5;
        
        if (currentStep < installSteps.length) {
          setInstallStep(installSteps[currentStep]);
          currentStep++;
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowPoop(true);
            setIsInstalling(false);
          }, 500);
        }
        
        return newProgress;
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bTAgNDBjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <Card className="relative z-10 max-w-2xl w-full bg-card/90 backdrop-blur-xl border-4 border-primary p-8 shadow-2xl animate-scale-in">
        <div className="text-center mb-8">
          <div className="inline-block mb-4 p-4 bg-primary/20 rounded-full animate-pulse">
            <Icon name="Download" size={64} className="text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-4">
            MAXX INSTALLER
          </h1>
          
          <p className="text-xl text-foreground/80 font-semibold mb-2">
            🔥 Самый лучший софт в мире! 🔥
          </p>
          
          <p className="text-sm text-foreground/60">
            (100% безопасно, проверено хакерами)
          </p>
        </div>

        {!isInstalling && !showPoop && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-primary/10 p-4 rounded-lg border-2 border-primary/30">
                <div className="font-bold text-primary mb-1">Размер</div>
                <div className="text-foreground/80">999 GB</div>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg border-2 border-secondary/30">
                <div className="font-bold text-secondary mb-1">Версия</div>
                <div className="text-foreground/80">69.420.1337</div>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg border-2 border-accent/30">
                <div className="font-bold text-accent mb-1">Вирусов</div>
                <div className="text-foreground/80">Только 3-4</div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg border-2 border-primary/30">
                <div className="font-bold text-primary mb-1">Рейтинг</div>
                <div className="text-foreground/80">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            
            <Button 
              onClick={startInstall}
              size="lg"
              className="w-full text-2xl font-black py-8 bg-gradient-to-r from-primary via-secondary to-accent hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <Icon name="Download" className="mr-3" size={32} />
              СКАЧАТЬ ПРЯМО СЕЙЧАС!
            </Button>
            
            <p className="text-xs text-center text-foreground/50">
              * При установке могут появиться сюрпризы 💩
            </p>
          </div>
        )}

        {isInstalling && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <div className="inline-block animate-spin mb-4">
                <Icon name="Loader2" size={48} className="text-primary" />
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Установка MAXX...
              </h2>
              
              <Progress value={progress} className="h-4 mb-4" />
              
              <p className="text-lg font-semibold text-primary animate-pulse">
                {installStep}
              </p>
              
              <p className="text-sm text-foreground/60 mt-2">
                {Math.round(progress)}% завершено
              </p>
            </div>
          </div>
        )}

        {showPoop && (
          <div className="text-center space-y-6 animate-scale-in">
            <div className="text-9xl animate-bounce">
              💩
            </div>
            
            <h2 className="text-4xl font-black text-primary">
              СЮРПРИЗ!
            </h2>
            
            <p className="text-xl text-foreground/80">
              Ты только что установил какашку! 💩💩💩
            </p>
            
            <div className="flex gap-3 justify-center flex-wrap">
              <Button
                onClick={() => {
                  setShowPoop(false);
                  setProgress(0);
                  setInstallStep("");
                }}
                className="bg-accent hover:bg-accent/90"
              >
                Скачать еще раз! 😂
              </Button>
              
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10"
              >
                Поделиться с другом 🤡
              </Button>
            </div>
            
            <p className="text-sm text-foreground/50 italic">
              Развод на все 100%! Спасибо что установил! 🎉
            </p>
          </div>
        )}
      </Card>

      {showPoop && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-6xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              💩
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
