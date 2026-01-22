import { Target, Lightbulb, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl text-[#263D88] mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ToughBred is a team of passionate developers, designers, and strategists dedicated to building software that makes a difference. With over 15 years of experience, we've helped startups scale and enterprises innovate.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We don't just write code—we partner with our clients to understand their challenges and create solutions that drive real business value. Our expertise spans modern technologies and industry best practices, ensuring your project is built on a solid foundation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From custom software development for clients to building and maintaining our own SaaS product, we bring the same level of excellence and attention to detail to every project we undertake.
            </p>
          </div>
          
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjkwNTgzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-[#263D88]" size={28} />
            </div>
            <h3 className="text-xl text-[#263D88] mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with innovative software solutions that drive growth, efficiency, and competitive advantage in the digital age.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="text-[#263D88]" size={28} />
            </div>
            <h3 className="text-xl text-[#263D88] mb-3">Our Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              We combine agile methodologies with deep technical expertise to deliver solutions that are scalable, maintainable, and aligned with your business goals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <Award className="text-[#263D88]" size={28} />
            </div>
            <h3 className="text-xl text-[#263D88] mb-3">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Excellence, transparency, and collaboration are at the core of everything we do. We treat your success as our own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
