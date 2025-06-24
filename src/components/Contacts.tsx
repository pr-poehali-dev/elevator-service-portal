import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Контактная информация */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Наши контакты
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Icon name="Phone" className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Телефон
                    </h4>
                    <p className="text-lg text-purple-600 font-semibold">
                      +7 (495) 123-45-67
                    </p>
                    <p className="text-sm text-gray-500">Круглосуточно</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon name="Mail" className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-lg text-blue-600">info@eleonlift.ru</p>
                    <p className="text-sm text-gray-500">
                      Ответим в течение часа
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Icon name="MapPin" className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Адрес офиса
                    </h4>
                    <p className="text-gray-700">
                      г. Москва, ул. Промышленная, д. 15
                    </p>
                    <p className="text-sm text-gray-500">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Icon name="Clock" className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Режим работы
                    </h4>
                    <p className="text-gray-700">Пн-Пт: 9:00-18:00</p>
                    <p className="text-gray-700">Сб-Вс: 10:00-16:00</p>
                    <p className="text-sm text-purple-600 font-semibold">
                      Аварийная служба: 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Социальные сети */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                Мы в социальных сетях
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Icon
                    name="MessageCircle"
                    className="text-blue-600"
                    size={24}
                  />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Icon name="Phone" className="text-gray-600" size={24} />
                </a>
                <a
                  href="#"
                  className="bg-red-100 p-3 rounded-lg hover:bg-red-200 transition-colors"
                >
                  <Icon name="Youtube" className="text-red-600" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Карта */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <Icon
                  name="MapPin"
                  className="text-gray-500 mx-auto mb-4"
                  size={48}
                />
                <p className="text-gray-600 font-semibold">
                  Интерактивная карта
                </p>
                <p className="text-sm text-gray-500">
                  г. Москва, ул. Промышленная, д. 15
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon
                name="Truck"
                className="text-purple-600 mx-auto mb-4"
                size={32}
              />
              <h4 className="font-semibold text-gray-900 mb-2">
                Выезд по Москве и МО
              </h4>
              <p className="text-gray-600 text-sm">
                Бесплатный выезд инженера для оценки объекта
              </p>
            </div>
            <div>
              <Icon
                name="Shield"
                className="text-green-600 mx-auto mb-4"
                size={32}
              />
              <h4 className="font-semibold text-gray-900 mb-2">
                Лицензии и сертификаты
              </h4>
              <p className="text-gray-600 text-sm">
                Все необходимые разрешения для работы
              </p>
            </div>
            <div>
              <Icon
                name="Users"
                className="text-blue-600 mx-auto mb-4"
                size={32}
              />
              <h4 className="font-semibold text-gray-900 mb-2">
                Команда профессионалов
              </h4>
              <p className="text-gray-600 text-sm">
                Опытные инженеры и монтажники
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
