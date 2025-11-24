import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#00FF00] flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF00] via-[#00DD00] to-[#00BB00]"></div>
      
      <div className="relative z-10 max-w-5xl w-full animate-fade-in">
        <div className="text-center mb-8">
          <Badge className="mb-4 text-lg px-6 py-2 bg-primary hover:bg-primary/90 text-white font-bold">
            🎮 ЛЕГЕНДА
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
            old202992
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-primary/90">
            Полный идиот и неудачник
          </p>
          <p className="text-xl md:text-2xl font-bold text-primary mt-2">
            💩 Страдает хроническим поносом 💩
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card/95 backdrop-blur-sm border-4 border-primary p-6 hover:scale-105 transition-transform duration-300 animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/files/bd861787-cdb0-4300-9d88-f89b4a581a89.jpg"
              alt="old202992 персонаж 1"
              className="w-full h-auto rounded-lg mb-4 border-2 border-primary/30"
            />
            <div className="flex items-center justify-center gap-2 text-primary">
              <Icon name="Skull" className="text-red-500" size={24} />
              <span className="font-bold text-lg">Полное убожество</span>
            </div>
          </Card>

          <Card className="bg-card/95 backdrop-blur-sm border-4 border-primary p-6 hover:scale-105 transition-transform duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <img 
              src="https://cdn.poehali.dev/files/2e0329f5-9e16-49d0-809d-af8bcaa2e765.jpg"
              alt="old202992 персонаж 2"
              className="w-full h-auto rounded-lg mb-4 border-2 border-primary/30"
            />
            <div className="flex items-center justify-center gap-2 text-primary">
              <Icon name="ThumbsDown" className="text-red-500" size={24} />
              <span className="font-bold text-lg">Провал и позор</span>
            </div>
          </Card>
        </div>

        <Card className="bg-card/95 backdrop-blur-sm border-4 border-accent p-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Gamepad2" className="text-accent" size={40} />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Эпический провал
              </h2>
              <Icon name="Sparkles" className="text-yellow-400" size={40} />
            </div>
            
            <div className="bg-primary/20 rounded-xl p-6 mb-4">
              <p className="text-6xl md:text-7xl font-black text-white mb-2 animate-pulse">
                0
              </p>
              <p className="text-2xl md:text-3xl font-bold text-accent">
                НОЧЕЙ В 99 НОЧЕЙ
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Badge className="text-lg px-4 py-2 bg-accent hover:bg-accent/90">
                <Icon name="Zap" size={18} className="mr-2" />
                Невероятно
              </Badge>
              <Badge className="text-lg px-4 py-2 bg-secondary hover:bg-secondary/90">
                <Icon name="Award" size={18} className="mr-2" />
                Легенда
              </Badge>
              <Badge className="text-lg px-4 py-2 bg-primary hover:bg-primary/90">
                <Icon name="Crown" size={18} className="mr-2" />
                Чемпион
              </Badge>
            </div>

            <p className="text-white/90 text-lg mt-6 font-semibold">
              Позор на всю жизнь! Вечно бегает в туалет! 🚽💩
            </p>
          </div>
        </Card>

        <div className="text-center mt-8">
          <p className="text-primary font-bold text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            💩 old202992 - главный неудачник с вечным поносом 💩
          </p>
          <p className="text-primary font-bold text-lg mt-2">
            Тупой, жалкий и бесполезный
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;