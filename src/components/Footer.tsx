import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Icon name="Building" className="text-coffee-400" size={32} />
              <span className="text-2xl font-bold">Элеон Лифт</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Профессиональный монтаж, обслуживание и модернизация лифтового
              оборудования. Качество и безопасность в каждом проекте.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Icon name="Phone" className="text-gray-300" size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Icon name="Mail" className="text-gray-300" size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Icon
                  name="MessageCircle"
                  className="text-gray-300"
                  size={20}
                />
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-coffee-400 transition-colors">
                  Пассажирские лифты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coffee-400 transition-colors">
                  Грузовые лифты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coffee-400 transition-colors">
                  Малые грузовые лифты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coffee-400 transition-colors">
                  Техническое обслуживание
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-coffee-400 transition-colors">
                  Ремонт и модернизация
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Контакты</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" className="text-coffee-400" size={18} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" className="text-coffee-400" size={18} />
                <span>info@eleonlift.ru</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon
                  name="MapPin"
                  className="text-coffee-400 mt-1"
                  size={18}
                />
                <span>г. Москва, ул. Промышленная, д. 15</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" className="text-coffee-400" size={18} />
                <span>24/7 аварийная служба</span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Элеон Лифт. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-coffee-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-coffee-400 transition-colors">
                Пользовательское соглашение
              </a>
              <a href="#" className="hover:text-coffee-400 transition-colors">
                Лицензии
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
