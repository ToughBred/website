import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/7317742bf3cee5a07a5c97bf122d0d0f2733264c.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="ToughBred" className="h-8 md:h-10" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#263D88] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('saas')} className="text-gray-700 hover:text-[#263D88] transition-colors">
              Our Product
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#263D88] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-[#263D88] text-white px-6 py-2 rounded-lg hover:bg-[#1e2f6b] transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-[#263D88] transition-colors py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('saas')} className="block w-full text-left text-gray-700 hover:text-[#263D88] transition-colors py-2">
              Our Product
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-[#263D88] transition-colors py-2">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-[#263D88] text-white px-6 py-2 rounded-lg hover:bg-[#1e2f6b] transition-colors w-full">
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
