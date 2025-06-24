import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Services = () => {
  const elevatorTypes = [
    {
      icon: "Users",
      title: "Пассажирские лифты",
      description:
        "Современные лифты для жилых и коммерческих зданий с высоким уровнем комфорта и безопасности",
      features: [
        "Грузоподъемность до 2000 кг",
        "Скорость до 2.5 м/с",
        "Энергоэффективность класса A",
      ],
    },
    {
      icon: "Package",
      title: "Грузовые лифты",
      description:
        "Мощные решения для промышленных объектов и складских комплексов",
      features: [
        "Грузоподъемность до 5000 кг",
        "Усиленная конструкция",
        "Система защиты от перегрузки",
      ],
    },
    {
      icon: "ShoppingCart",
      title: "Малые грузовые лифты",
      description:
        "Компактные решения для ресторанов, больниц и небольших предприятий",
      features: [
        "Грузоподъемность до 500 кг",
        "Минимальные габариты",
        "Простота обслуживания",
      ],
    },
  ];

  const installationTypes = [
    {
      icon: "Building2",
      title: "Монтаж в новостройках",
      description:
        "Полный цикл установки лифтового оборудования на этапе строительства",
      advantages: [
        "Оптимальная интеграция",
        "Минимальные сроки",
        "Гарантия качества",
      ],
    },
    {
      icon: "Hammer",
      title: "Реконструкция",
      description:
        "Модернизация существующих лифтовых систем с минимальными неудобствами",
      advantages: [
        "Сохранение архитектуры",
        "Поэтапная замена",
        "Быстрый монтаж",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: "Settings",
      title: "Техническое обслуживание",
      description: "Регулярное ТО для обеспечения бесперебойной работы",
      includes: ["Плановые осмотры", "Смазка механизмов", "Диагностика"],
    },
    {
      icon: "Wrench",
      title: "Ремонт",
      description: "Быстрое устранение неисправностей любой сложности",
      includes: [
        "Экстренный выезд 24/7",
        "Замена компонентов",
        "Восстановление работы",
      ],
    },
    {
      icon: "Zap",
      title: "Модернизация",
      description: "Обновление систем управления и безопасности",
      includes: [
        "Новые технологии",
        "Повышение эффективности",
        "Соответствие стандартам",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг по монтажу, обслуживанию и модернизации
            лифтового оборудования
          </p>
        </div>

        {/* Виды лифтов */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Виды лифтов
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {elevatorTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-coffee-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon
                    name={type.icon as any}
                    className="text-coffee-600"
                    size={32}
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {type.title}
                </h4>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        className="text-green-500 mr-2"
                        size={16}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Особенности монтажа */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Особенности монтажа
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {installationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="bg-smoke-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon
                    name={type.icon as any}
                    className="text-smoke-600"
                    size={32}
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {type.title}
                </h4>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="grid grid-cols-1 gap-2">
                  {type.advantages.map((advantage, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="CheckCircle"
                        className="text-smoke-500 mr-2"
                        size={16}
                      />
                      {advantage}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Дополнительные услуги */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Дополнительные услуги
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="bg-cream-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon
                    name={service.icon as any}
                    className="text-cream-600"
                    size={32}
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.includes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Dot"
                        className="text-cream-500 mr-2"
                        size={16}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-smoke-600 hover:bg-smoke-700 px-8 py-3 text-lg"
          >
            Получить коммерческое предложение
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
