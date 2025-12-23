import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const attractions = [
    {
      name: 'Маттерхорн',
      location: 'Церматт',
      description: 'Одна из самых узнаваемых горных вершин в мире высотой 4,478 м',
      coordinates: { lat: 45.9763, lng: 7.6586 }
    },
    {
      name: 'Юнгфрауйох',
      location: 'Бернские Альпы',
      description: 'Самая высокая железнодорожная станция Европы на высоте 3,454 м',
      coordinates: { lat: 46.5472, lng: 7.9851 }
    },
    {
      name: 'Шильонский замок',
      location: 'Монтрё',
      description: 'Средневековый замок на берегу Женевского озера',
      coordinates: { lat: 46.4144, lng: 6.9272 }
    },
    {
      name: 'Старый город Берна',
      location: 'Берн',
      description: 'Объект Всемирного наследия ЮНЕСКО с средневековой архитектурой',
      coordinates: { lat: 46.9480, lng: 7.4474 }
    },
    {
      name: 'Рейнский водопад',
      location: 'Шaffхаузен',
      description: 'Самый большой водопад в Европе шириной 150 м',
      coordinates: { lat: 47.6773, lng: 8.6150 }
    },
    {
      name: 'Люцернское озеро',
      location: 'Люцерн',
      description: 'Живописное озеро в окружении горных вершин',
      coordinates: { lat: 47.0502, lng: 8.3093 }
    }
  ];

  const minerals = [
    { name: 'Соль', amount: '~300,000 тонн/год', icon: 'Hexagon' },
    { name: 'Известняк', amount: '~7 млн тонн/год', icon: 'Mountain' },
    { name: 'Гравий', amount: '~50 млн тонн/год', icon: 'Blocks' },
    { name: 'Кварц', amount: 'Ограниченно', icon: 'Gem' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl">🇨🇭</span>
              </div>
              <h1 className="text-2xl font-bold text-primary">Швейцария</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['Особенности', 'Достопримечательности', 'История', 'Культура', 'Факты', 'Статистика'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-white">Швейцарская Конфедерация</Badge>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Сердце <span className="text-primary">Европы</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Страна величественных Альп, чистейших озёр, инновационных технологий 
                и знаменитого швейцарского качества. Откройте для себя нейтральную страну 
                с богатейшей историей и четырьмя национальными языками.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  <span className="font-medium">Столица: Берн</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={20} />
                  <span className="font-medium">8.7 млн человек</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Languages" className="text-primary" size={20} />
                  <span className="font-medium">4 языка</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/40a4e1d6-4d92-4510-b54b-9a8dd6139847/files/00f7f94c-16e8-4a46-b405-7ab626ac2874.jpg"
                alt="Швейцарские Альпы"
                className="rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="особенности" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Особенности Швейцарии</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shield',
                title: 'Нейтралитет',
                description: 'Швейцария не участвует в военных конфликтах с 1815 года и является символом мира'
              },
              {
                icon: 'Landmark',
                title: 'Прямая демократия',
                description: 'Граждане регулярно голосуют на референдумах по важнейшим вопросам страны'
              },
              {
                icon: 'Banknote',
                title: 'Финансовый центр',
                description: 'Цюрих и Женева — крупнейшие банковские центры мира с вековыми традициями'
              },
              {
                icon: 'Award',
                title: 'Качество жизни',
                description: 'Один из самых высоких уровней жизни в мире с отличной инфраструктурой'
              },
              {
                icon: 'Lightbulb',
                title: 'Инновации',
                description: 'Лидер по количеству патентов на душу населения и научным разработкам'
              },
              {
                icon: 'Watch',
                title: 'Часовое дело',
                description: 'Родина легендарных часовых брендов: Rolex, Patek Philippe, Omega'
              }
            ].map((feature, index) => (
              <Card key={index} className="hover-scale border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="достопримечательности" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Достопримечательности</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Интерактивная карта знаменитых мест Швейцарии
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-secondary/5 rounded-2xl p-8 border-2 border-secondary/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Map" className="text-secondary" size={28} />
                Карта достопримечательностей
              </h3>
              <div className="space-y-4">
                {attractions.map((attraction, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer hover-scale"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{attraction.name}</h4>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <Icon name="MapPin" size={14} />
                          {attraction.location}
                        </p>
                        <p className="text-sm mt-2">{attraction.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src="https://cdn.poehali.dev/projects/40a4e1d6-4d92-4510-b54b-9a8dd6139847/files/c9b15f4b-668d-4df3-afae-6fca504a61f6.jpg"
                alt="Старый город Берна"
                className="rounded-2xl shadow-xl hover-scale"
              />
              <img 
                src="https://cdn.poehali.dev/projects/40a4e1d6-4d92-4510-b54b-9a8dd6139847/files/73b5cad7-18f5-49fb-9cc4-567281e802f0.jpg"
                alt="Швейцарская деревня"
                className="rounded-2xl shadow-xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="история" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">История Швейцарии</h2>
          
          <div className="space-y-8">
            {[
              {
                year: '1291',
                title: 'Основание Конфедерации',
                description: 'Три кантона (Ури, Швиц и Унтервальден) подписали союзный договор, положивший начало Швейцарии. День 1 августа стал национальным праздником.'
              },
              {
                year: '1499',
                title: 'Независимость от Империи',
                description: 'Швейцария де-факто получила независимость от Священной Римской империи после Швабской войны.'
              },
              {
                year: '1648',
                title: 'Признание суверенитета',
                description: 'Вестфальский мир официально признал независимость и нейтралитет Швейцарии.'
              },
              {
                year: '1815',
                title: 'Вечный нейтралитет',
                description: 'На Венском конгрессе был признан вечный нейтралитет Швейцарии. С тех пор страна не участвует в войнах.'
              },
              {
                year: '1848',
                title: 'Федеральная Конституция',
                description: 'Принятие Конституции превратило Швейцарию в единое федеративное государство с сильными кантонами.'
              },
              {
                year: '2002',
                title: 'Вступление в ООН',
                description: 'Швейцария стала членом ООН, сохранив при этом свой нейтралитет и особый международный статус.'
              }
            ].map((event, index) => (
              <div key={index} className="flex gap-6 animate-fade-in">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {event.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="культура" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Культура и обычаи</h2>
          
          <Tabs defaultValue="languages" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="languages">Языки</TabsTrigger>
              <TabsTrigger value="cuisine">Кухня</TabsTrigger>
              <TabsTrigger value="traditions">Традиции</TabsTrigger>
              <TabsTrigger value="festivals">Праздники</TabsTrigger>
            </TabsList>
            
            <TabsContent value="languages" className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">Многоязычная страна</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">🇩🇪 Немецкий (63%)</h4>
                      <p className="text-sm text-muted-foreground">Основной язык в северной и восточной Швейцарии. Используется швейцарский вариант немецкого.</p>
                    </div>
                    <div className="p-4 bg-secondary/5 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">🇫🇷 Французский (23%)</h4>
                      <p className="text-sm text-muted-foreground">Западная Швейцария (Женева, Лозанна, Фрибур) говорит по-французски.</p>
                    </div>
                    <div className="p-4 bg-accent/5 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">🇮🇹 Итальянский (8%)</h4>
                      <p className="text-sm text-muted-foreground">Южный кантон Тичино и части Граубюндена используют итальянский.</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-bold text-lg mb-2">🏔️ Ретороманский (0.5%)</h4>
                      <p className="text-sm text-muted-foreground">Древний язык, сохранившийся в горных долинах Граубюндена.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="cuisine" className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">Швейцарская кухня</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { name: 'Фондю', icon: '🫕', desc: 'Расплавленный сыр с хлебом' },
                      { name: 'Раклет', icon: '🧀', desc: 'Плавленый сыр с картофелем' },
                      { name: 'Рёшти', icon: '🥔', desc: 'Картофельные оладьи' },
                      { name: 'Шоколад', icon: '🍫', desc: 'Знаменитый швейцарский шоколад' },
                      { name: 'Мюсли', icon: '🥣', desc: 'Изобретено в Швейцарии' },
                      { name: 'Альпийский сыр', icon: '🧀', desc: 'Более 450 сортов сыра' }
                    ].map((dish, index) => (
                      <div key={index} className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg hover-scale">
                        <div className="text-4xl mb-2">{dish.icon}</div>
                        <h4 className="font-bold mb-1">{dish.name}</h4>
                        <p className="text-sm text-muted-foreground">{dish.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="traditions" className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">Традиции и обычаи</h3>
                  <div className="space-y-4">
                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded">
                      <h4 className="font-bold mb-2">🎺 Альпхорн</h4>
                      <p className="text-muted-foreground">Традиционный деревянный духовой инструмент длиной до 4 метров, звуки которого разносятся по горным долинам.</p>
                    </div>
                    <div className="p-4 border-l-4 border-secondary bg-secondary/5 rounded">
                      <h4 className="font-bold mb-2">⚔️ Швинген</h4>
                      <p className="text-muted-foreground">Национальная борьба, где участники в специальных штанах борются на опилках.</p>
                    </div>
                    <div className="p-4 border-l-4 border-accent bg-accent/5 rounded">
                      <h4 className="font-bold mb-2">🔔 Перегон скота</h4>
                      <p className="text-muted-foreground">Осенний праздник, когда украшенных цветами коров спускают с альпийских пастбищ в долины.</p>
                    </div>
                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded">
                      <h4 className="font-bold mb-2">⏰ Пунктуальность</h4>
                      <p className="text-muted-foreground">Швейцарцы известны своей точностью. Опоздание считается неуважением.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="festivals" className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">Национальные праздники</h3>
                  <div className="space-y-3">
                    {[
                      { date: '1 января', name: 'Новый год', desc: 'Общенациональный праздник' },
                      { date: '1 августа', name: 'Национальный день', desc: 'День основания Конфедерации, фейерверки по всей стране' },
                      { date: 'Февраль', name: 'Базельский карнавал', desc: 'Крупнейший карнавал Швейцарии с масками и костюмами' },
                      { date: 'Декабрь', name: 'Эскаляд', desc: 'Женевский праздник в честь победы над савойцами в 1602 году' },
                      { date: 'Июль-Август', name: 'Фестиваль в Монтрё', desc: 'Знаменитый джазовый фестиваль на берегу Женевского озера' },
                      { date: 'Круглый год', name: 'Йодль-фестивали', desc: 'Праздники традиционного альпийского пения' }
                    ].map((festival, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg hover-scale">
                        <div className="flex-shrink-0 w-24 font-bold text-primary">{festival.date}</div>
                        <div>
                          <h4 className="font-bold">{festival.name}</h4>
                          <p className="text-sm text-muted-foreground">{festival.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="факты" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Интересные факты</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: '🏔️',
                title: 'Больше всего туннелей',
                fact: 'В Швейцарии самая плотная сеть туннелей в мире. Готардский базисный туннель — самый длинный железнодорожный туннель (57 км).'
              },
              {
                icon: '💰',
                title: 'Самая дорогая страна',
                fact: 'Швейцария — одна из самых дорогих стран для жизни. Чашка кофе может стоить 5-7 франков (≈500-700 рублей).'
              },
              {
                icon: '🚂',
                title: 'Идеальные поезда',
                fact: 'Швейцарские поезда известны пунктуальностью — 89% прибывают вовремя. Средняя задержка всего 0.3 минуты!'
              },
              {
                icon: '🗳️',
                title: 'Много референдумов',
                fact: 'Швейцарцы голосуют 4 раза в год на референдумах. С 1848 года проведено более 600 общенациональных голосований.'
              },
              {
                icon: '🪖',
                title: 'Всеобщая воинская',
                fact: 'Все мужчины обязаны служить в армии и хранят оружие дома. В Швейцарии одна из самых вооружённых наций.'
              },
              {
                icon: '🧀',
                title: 'Родина молочных продуктов',
                fact: 'Швейцарцы потребляют 22 кг сыра на человека в год. В стране производится более 450 сортов сыра.'
              },
              {
                icon: '🏦',
                title: 'Треть золотого запаса',
                fact: 'В швейцарских банках хранится около 25% всех мировых зарубежных активов и частных состояний.'
              },
              {
                icon: '⚗️',
                title: 'Нобелевские лауреаты',
                fact: 'Швейцария имеет наибольшее число Нобелевских лауреатов на душу населения в мире.'
              },
              {
                icon: '🏔️',
                title: 'Страна гор',
                fact: '48 вершин выше 4000 метров! Швейцария на 60% состоит из Альп. Самая высокая точка — пик Дюфур (4634 м).'
              },
              {
                icon: '🔒',
                title: 'Бункеры для всех',
                fact: 'В Швейцарии есть бомбоубежища на 114% населения — больше мест, чем жителей!'
              },
              {
                icon: '♻️',
                title: 'Экологичность',
                fact: 'Швейцария перерабатывает 94% стеклянных бутылок и 81% пластика. Одна из самых чистых стран мира.'
              },
              {
                icon: '🎿',
                title: 'Родина лыжного спорта',
                fact: 'Первый горнолыжный подъёмник появился в Швейцарии в 1934 году. Сейчас в стране более 200 горнолыжных курортов.'
              }
            ].map((fact, index) => (
              <Card key={index} className="hover-scale border-none shadow-lg bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6 space-y-3">
                  <div className="text-5xl">{fact.icon}</div>
                  <h3 className="text-xl font-bold">{fact.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{fact.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="статистика" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Статистика и ресурсы</h2>
          <p className="text-center text-muted-foreground mb-12">
            Полезные ископаемые и экономические показатели
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="Pickaxe" className="text-primary" size={28} />
                  Полезные ископаемые
                </h3>
                <div className="space-y-4">
                  {minerals.map((mineral, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={mineral.icon} className="text-primary" size={20} />
                        </div>
                        <span className="font-bold">{mineral.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{mineral.amount}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>Примечание:</strong> Швейцария не богата полезными ископаемыми. 
                    Основа экономики — финансы, фармацевтика, высокоточное машиностроение и туризм.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-secondary" size={28} />
                  Экономические показатели
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'ВВП на душу населения', value: '$92,101', icon: 'DollarSign' },
                    { label: 'Уровень безработицы', value: '2.1%', icon: 'Briefcase' },
                    { label: 'Средняя зарплата', value: '~7000 CHF', icon: 'Wallet' },
                    { label: 'Индекс счастья', value: '3-е место', icon: 'Heart' },
                    { label: 'Продолжительность жизни', value: '83.8 лет', icon: 'HeartPulse' }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <Icon name={stat.icon} className="text-secondary" size={20} />
                        </div>
                        <span className="font-medium">{stat.label}</span>
                      </div>
                      <span className="text-lg font-bold text-secondary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Ключевые отрасли экономики</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { icon: 'Building2', name: 'Банковское дело', desc: '11% ВВП' },
                  { icon: 'Pill', name: 'Фармацевтика', desc: 'Novartis, Roche' },
                  { icon: 'Watch', name: 'Часы', desc: '50% мирового экспорта' },
                  { icon: 'Plane', name: 'Туризм', desc: '~140 млн ночей/год' }
                ].map((industry, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover-scale">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name={industry.icon} className="text-primary" size={28} />
                    </div>
                    <h4 className="font-bold mb-1">{industry.name}</h4>
                    <p className="text-sm text-muted-foreground">{industry.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🇨🇭</span>
            <h3 className="text-2xl font-bold">Швейцария</h3>
          </div>
          <p className="text-gray-400 mb-6">
            Информационный портал о Швейцарской Конфедерации
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <span>© 2024</span>
            <span>•</span>
            <span>Территория: 41,285 км²</span>
            <span>•</span>
            <span>Население: 8.7 млн</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
