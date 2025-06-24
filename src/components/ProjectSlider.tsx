import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProjectSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      title: 'ЖК "Современник"',
      description: "Установка 12 пассажирских лифтов в новом жилом комплексе",
      specs: ["Грузоподъемность 630 кг", "Скорость 1.75 м/с", "18 этажей"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&h=600&fit=crop",
      title: 'Бизнес-центр "Альфа"',
      description: "Модернизация лифтового оборудования в офисном здании",
      specs: ["4 пассажирских лифта", "Система вызова", "25 этажей"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&h=600&fit=crop",
      title: "Складской комплекс",
      description: "Установка грузового лифта для логистического центра",
      specs: [
        "Грузоподъемность 3000 кг",
        "Промышленное исполнение",
        "6 этажей",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop",
      title: "Медицинский центр",
      description: "Специализированный лифт для транспортировки пациентов",
      specs: [
        "Увеличенная кабина",
        "Медицинское оборудование",
        "Система экстренной связи",
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Реализованные проекты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Примеры наших успешных установок в различных типах зданий
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 bg-white">
                    <div className="h-96 md:h-auto">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-8">
                        {project.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {project.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center">
                            <Icon
                              name="CheckCircle"
                              className="text-green-500 mr-3"
                              size={20}
                            />
                            <span className="text-gray-700">{spec}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="bg-smoke-600 hover:bg-smoke-700 w-fit">
                        Подробнее о проекте
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
          >
            <Icon name="ChevronLeft" size={24} className="text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
          >
            <Icon name="ChevronRight" size={24} className="text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-smoke-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
