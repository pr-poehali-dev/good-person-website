import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заказ! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-orange-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={32} className="text-orange-500" />
            <span className="text-2xl font-black text-white">TITAN X</span>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700">
            Заказать сейчас
          </Button>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/50">
                <span className="text-orange-400 font-semibold">🔥 Военная защита MIL-STD-810G</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                НЕРАЗРУШАЕМЫЙ<br />
                <span className="text-orange-500">TITAN X</span>
              </h1>
              
              <p className="text-xl text-slate-300">
                Телефон, который выдержит всё! Падения, удары, вода, пыль - ему всё нипочём. 
                Настоящий танк в мире смартфонов.
              </p>
              
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6">
                  <Icon name="ShoppingCart" className="mr-2" />
                  Купить за 29 990 ₽
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10 text-lg px-8 py-6">
                  Смотреть тесты
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/20 blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/bb3b1c0a-33f5-43ba-9215-7025a1c369a2/files/3187b124-9386-45bb-a2ed-6033f9a10989.jpg"
                alt="TITAN X Phone"
                className="relative z-10 w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            ВИДЕО: ИСПЫТАНИЯ НА ПРОЧНОСТЬ
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500/30">
              <video 
                controls 
                className="w-full aspect-video bg-slate-900"
                poster="https://cdn.poehali.dev/projects/bb3b1c0a-33f5-43ba-9215-7025a1c369a2/files/40d98d9d-31a2-42c1-ad53-290c138589ab.jpg"
              >
                <source src="phone-test.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео
              </video>
              
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-all cursor-pointer">
                <div className="bg-orange-600 rounded-full p-6 hover:scale-110 transition-transform">
                  <Icon name="Play" size={48} className="text-white ml-1" />
                </div>
              </div>
            </div>
            
            <p className="text-center text-slate-400 mt-4">
              Смотрите, как TITAN X выживает после падения с 10 метров, погружения под воду и наезда автомобиля!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            ЭКСТРЕМАЛЬНАЯ ЗАЩИТА
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-orange-500/50 transition-all">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Icon name="ShieldCheck" size={32} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Военный стандарт</h3>
              <p className="text-slate-400">MIL-STD-810G сертификация. Выдерживает падения с 2 метров.</p>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-orange-500/50 transition-all">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Icon name="Droplet" size={32} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Полная водозащита</h3>
              <p className="text-slate-400">IP68 стандарт. Погружение до 1.5 метров на 30 минут.</p>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-orange-500/50 transition-all">
              <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Icon name="Flame" size={32} className="text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Экстремальные температуры</h3>
              <p className="text-slate-400">Работает от -40°C до +70°C. Для любых условий.</p>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-orange-500/50 transition-all">
              <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Icon name="Battery" size={32} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Мощная батарея</h3>
              <p className="text-slate-400">6000 mAh. До 5 дней автономной работы.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            ИСПЫТАНИЯ В ДЕЙСТВИИ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/bb3b1c0a-33f5-43ba-9215-7025a1c369a2/files/40d98d9d-31a2-42c1-ad53-290c138589ab.jpg"
                alt="Drop Test"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Тест на падение</h3>
                  <p className="text-slate-300">С высоты 10 метров</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/bb3b1c0a-33f5-43ba-9215-7025a1c369a2/files/7f28b9b6-7975-4548-97db-b98f91e2df15.jpg"
                alt="Water Test"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Водный тест</h3>
                  <p className="text-slate-300">Погружение под воду</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <div className="text-center mb-8">
                <Icon name="Phone" size={48} className="text-orange-500 mx-auto mb-4" />
                <h2 className="text-3xl font-black text-white mb-2">
                  ЗАКАЖИТЕ TITAN X СЕЙЧАС
                </h2>
                <p className="text-slate-400">
                  Заполните форму и получите телефон с доставкой по всей России
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-white font-semibold mb-2 block">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-slate-900 border-slate-700 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-white font-semibold mb-2 block">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-slate-900 border-slate-700 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-white font-semibold mb-2 block">Email</label>
                  <Input 
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-slate-900 border-slate-700 text-white"
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6">
                  <Icon name="ShoppingCart" className="mr-2" />
                  Оформить заказ за 29 990 ₽
                </Button>
                
                <p className="text-xs text-slate-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center text-slate-500">
          <p>© 2024 TITAN X. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
