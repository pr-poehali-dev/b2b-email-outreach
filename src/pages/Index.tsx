import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-slate-900">ColdReach</h2>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Тарифы</a>
            </nav>
            <Button>Начать</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Холодные продажи<br />
              <span className="text-blue-600">через email</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Автоматизируем ваш B2B аутрич. Находим клиентов, создаем персонализированные кампании и увеличиваем конверсию в 5 раз.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg">
                Посмотреть кейсы
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">250+</div>
                <div className="text-slate-600">Успешных кампаний</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">85%</div>
                <div className="text-slate-600">Открываемость</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">15%</div>
                <div className="text-slate-600">Средний отклик</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">3.2x</div>
                <div className="text-slate-600">Рост продаж</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600">Комплексный подход к холодному email маркетингу</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Email кампании</CardTitle>
                <CardDescription>
                  Создаем персонализированные email последовательности с высокой конверсией
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Поиск лидов</CardTitle>
                <CardDescription>
                  Находим и верифицируем контакты вашей целевой аудитории в LinkedIn и базах
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Аналитика</CardTitle>
                <CardDescription>
                  Отслеживаем результаты, A/B тестируем и оптимизируем кампании в реальном времени
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Автоматизация</CardTitle>
                <CardDescription>
                  Настраиваем email sequences, follow-ups и интеграции с CRM системами
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Стратегия</CardTitle>
                <CardDescription>
                  Разрабатываем персональную стратегию аутрича под ваши цели и нишу
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Deliverability</CardTitle>
                <CardDescription>
                  Гарантируем попадание в inbox через warming и technical setup
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Тарифы</h2>
            <p className="text-xl text-slate-600">Выберите подходящий план для вашего бизнеса</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Для небольших компаний</CardDescription>
                <div className="text-4xl font-bold text-slate-900 mt-4">
                  $299<span className="text-lg text-slate-600">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>До 1,000 контактов</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>2 email кампании</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Базовая аналитика</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Email поддержка</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Выбрать план</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-blue-600 text-white border-blue-600 relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl text-white">Pro</CardTitle>
                <CardDescription className="text-blue-100">Для растущих компаний</CardDescription>
                <div className="text-4xl font-bold text-white mt-4">
                  $599<span className="text-lg text-blue-100">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-400 mr-3" size={16} />
                    <span>До 5,000 контактов</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-400 mr-3" size={16} />
                    <span>Неограниченные кампании</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-400 mr-3" size={16} />
                    <span>Продвинутая аналитика</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-400 mr-3" size={16} />
                    <span>A/B тестирование</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-400 mr-3" size={16} />
                    <span>Приоритетная поддержка</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-blue-600 hover:bg-slate-100">Выбрать план</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>Для крупных компаний</CardDescription>
                <div className="text-4xl font-bold text-slate-900 mt-4">
                  $1,199<span className="text-lg text-slate-600">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Неограниченные контакты</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Персональный менеджер</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Custom интеграции</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>Белый label</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-3" size={16} />
                    <span>24/7 поддержка</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Связаться с нами</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Готовы увеличить продажи?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Получите бесплатную консультацию и персональную стратегию для вашего бизнеса
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
            Заказать консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ColdReach</h3>
              <p className="text-slate-400">
                Профессиональный B2B аутрич для роста вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Email кампании</li>
                <li>Поиск лидов</li>
                <li>Автоматизация</li>
                <li>Аналитика</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-slate-400">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Блог</li>
                <li>Карьера</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-slate-400">
                <li>hello@coldreach.com</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ColdReach. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;