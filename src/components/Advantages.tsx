import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Shield",
      title: "Гарантия качества",
      description:
        "Все работы выполняются с гарантией до 3 лет. Используем только сертифицированные компоненты от ведущих производителей.",
      color: "bg-cream-100 text-cream-600",
    },
    {
      icon: "Clock",
      title: "Соблюдение сроков",
      description:
        "Четкое планирование и профессиональная команда позволяют завершать проекты точно в срок без потери качества.",
      color: "bg-coffee-100 text-coffee-600",
    },
    {
      icon: "Users",
      title: "Опытная команда",
      description:
        "Наши специалисты имеют опыт работы более 15 лет и регулярно проходят повышение квалификации.",
      color: "bg-smoke-100 text-smoke-600",
    },
    {
      icon: "Award",
      title: "Сертификация",
      description:
        "Все работы выполняются в соответствии с ГОСТами и международными стандартами безопасности.",
      color: "bg-cream-200 text-cream-700",
    },
    {
      icon: "Headphones",
      title: "Техподдержка 24/7",
      description:
        "Круглосуточная служба технической поддержки готова оперативно решить любые возникшие вопросы.",
      color: "bg-coffee-200 text-coffee-700",
    },
    {
      icon: "TrendingUp",
      title: "Современные решения",
      description:
        "Используем новейшие технологии: энергоэффективные приводы, умные системы управления и диагностики.",
      color: "bg-smoke-200 text-smoke-700",
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наши преимущества
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Почему более 500 клиентов выбрали Элеон Лифт для своих проектов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-gray-100 hover:border-coffee-200 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-lg ${advantage.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={advantage.icon as any} size={32} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-gradient-to-r from-smoke-600 to-coffee-600 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-cream-100">лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-cream-100">успешных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-cream-100">довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-cream-100">техническая поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
