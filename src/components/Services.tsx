import { Code2, Smartphone, Cloud, Database, Zap, Users } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored solutions built from the ground up to meet your unique business requirements and scale with your growth.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud architecture and migration services to modernize your infrastructure and reduce operational costs.'
  },
  {
    icon: Database,
    title: 'Enterprise Systems',
    description: 'Robust enterprise software systems designed to streamline operations and integrate seamlessly with your existing tools.'
  },
  {
    icon: Zap,
    title: 'API Development',
    description: 'Powerful, secure APIs that enable seamless data exchange and integration between different platforms and services.'
  },
  {
    icon: Users,
    title: 'Consulting & Support',
    description: 'Expert technical consultation and ongoing support to ensure your software continues to deliver value.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-[#263D88] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We specialize in creating custom software solutions that transform how businesses operate and serve their customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl border border-gray-200 hover:border-[#263D88] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#263D88] transition-colors">
                <service.icon className="text-[#263D88] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl text-[#263D88] mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
