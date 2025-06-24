import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Отправка формы:", formData);
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contact-form"
      className="py-20 bg-gradient-to-br from-smoke-600 to-coffee-600"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Оставить заявку
            </h2>
            <p className="text-xl text-cream-100">
              Получите персональное коммерческое предложение в течение 24 часов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Форма */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Интересующая услуга
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      handleInputChange("service", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="passenger">
                        Пассажирские лифты
                      </SelectItem>
                      <SelectItem value="cargo">Грузовые лифты</SelectItem>
                      <SelectItem value="small-cargo">
                        Малые грузовые лифты
                      </SelectItem>
                      <SelectItem value="new-building">
                        Монтаж в новостройке
                      </SelectItem>
                      <SelectItem value="reconstruction">
                        Реконструкция
                      </SelectItem>
                      <SelectItem value="maintenance">
                        Техническое обслуживание
                      </SelectItem>
                      <SelectItem value="repair">Ремонт</SelectItem>
                      <SelectItem value="modernization">
                        Модернизация
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Комментарий
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Расскажите подробнее о вашем проекте..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-smoke-600 hover:bg-smoke-700 text-lg py-3"
                >
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </form>
            </div>

            {/* Информация */}
            <div className="text-white space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Что вы получите:</h3>
                <div className="space-y-4">
                  {[
                    "Бесплатную консультацию специалиста",
                    "Выезд инженера на объект",
                    "Подробное коммерческое предложение",
                    "Гарантию лучшей цены в регионе",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Icon
                        name="CheckCircle"
                        className="text-green-400 mr-3"
                        size={20}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-4">Экстренная связь</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon
                      name="Phone"
                      className="text-cream-200 mr-3"
                      size={20}
                    />
                    <span className="text-lg font-semibold">
                      +7 (495) 123-45-67
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Clock"
                      className="text-cream-200 mr-3"
                      size={20}
                    />
                    <span>Круглосуточно без выходных</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-cream-200 text-lg">
                  Среднее время ответа:{" "}
                  <span className="font-bold">15 минут</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
