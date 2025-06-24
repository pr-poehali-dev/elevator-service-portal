import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Building" className="text-purple-600" size={32} />
            <span className="text-2xl font-bold text-gray-900">Элеон Лифт</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("advantages")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Преимущества
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Виды работ
            </button>
            <button
              onClick={() => scrollToSection("contact-form")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Заявка
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Контакты
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Icon name="Phone" className="text-purple-600" size={20} />
              <span className="font-semibold text-gray-900">
                +7 (495) 123-45-67
              </span>
            </div>
            <Button
              onClick={() => scrollToSection("contact-form")}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
