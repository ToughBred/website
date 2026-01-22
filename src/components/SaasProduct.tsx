import { Check, ArrowRight } from "lucide-react";

const features = [
  "Supports multiple gym locations, staff roles, and permissions",
  "Manage members, membership, and check-ins in one place.",
  "Platform access plans that scales with your gym",
  "QR-based and staff-assisted check-ins",
  "24/7 customer support",
];

export function SaasProduct() {
  return (
    <section
      id="saas"
      className="py-20 px-6 bg-gradient-to-br from-[#263D88] to-[#1e2f6b] text-white"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
              Our SaaS Product
            </div>
            <h2 className="text-3xl md:text-5xl mb-6">Gympass</h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Gympass is a modern gym management platform designed to simplify
              daily gym operations from member onboarding, payments, members,
              check-ins - all from one powerful dashboard.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} />
                  </div>
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#263D88] px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group">
                Learn More
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                Request Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src="src/assets/gympass-dashboard.jpg"
                alt="Gympass Dashboard"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-[#263D88] px-6 py-4 rounded-lg shadow-xl hidden md:block">
                <div className="text-sm text-gray-600">Starting from</div>
                <div className="text-3xl">
                  $0<span className="text-lg text-gray-600">/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
