import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Baby, 
  UserCheck, 
  Briefcase, 
  Settings, 
  Globe, 
  HeartHandshake, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Package,
  Phone
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-52 md:pb-40 overflow-hidden bg-gradient-to-br from-slate-50 to-brand-teal/5">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-10">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-sm font-bold tracking-wider uppercase rounded-full">
              Leading Hygiene Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
              Care for Life, <br />
              <span className="text-brand-teal">Everywhere.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg font-medium leading-relaxed">
              Town Town provides premium hygiene products and OEM/ODM services, ensuring health and comfort for families around the globe with our innovative care solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#services"
                className="bg-brand-teal hover:bg-brand-teal-dark text-white text-lg font-bold px-10 py-4 rounded-full transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-teal/20"
              >
                Explore Services
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#contact"
                className="bg-white border-2 border-slate-200 hover:border-brand-teal text-slate-900 text-lg font-bold px-10 py-4 rounded-full transition-all flex items-center justify-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="relative group animate-in fade-in zoom-in duration-1000">
            {/* Abstract visual representation - clean box with items */}
            <div className="aspect-square bg-white rounded-[40px] shadow-2xl overflow-hidden p-12 border border-slate-100 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              
              <div className="relative z-10 w-full h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-20 h-20 bg-brand-teal text-white rounded-3xl flex items-center justify-center shadow-lg">
                    <Baby size={40} />
                  </div>
                  <div className="space-y-2 text-right">
                    <p className="text-sm font-bold text-slate-400">Trusted in</p>
                    <p className="text-4xl font-black text-brand-teal">45+</p>
                    <p className="text-sm font-bold text-slate-800 uppercase tracking-widest">Countries</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <HeartHandshake className="text-brand-orange mb-4" size={32} />
                    <h3 className="font-bold text-slate-900 mb-1">OEM / ODM</h3>
                    <p className="text-sm text-slate-500 font-medium">Fully customizable solutions for your brand.</p>
                  </div>
                  <div className="p-6 bg-slate-900 rounded-3xl text-white shadow-xl shadow-slate-300">
                    <Settings className="text-brand-teal mb-4" size={32} />
                    <h3 className="font-bold mb-1">Advanced Tech</h3>
                    <p className="text-sm text-slate-400 font-medium">State-of-the-art production lines.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">100%</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">Quality Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-video bg-slate-100 rounded-[32px] overflow-hidden relative group shadow-2xl">
                 <div className="absolute inset-0 flex items-center justify-center bg-brand-teal/5">
                    <div className="flex flex-col items-center">
                       <Zap size={64} className="text-brand-teal mb-4" />
                       <span className="text-xl font-bold text-slate-800 tracking-tight">Factory Excellence</span>
                    </div>
                 </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-2xl"></div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h4 className="text-brand-teal font-black uppercase tracking-widest text-sm">Our Story</h4>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter">
                  Decades of Commitment to <span className="text-brand-orange">Professional Care</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  At Town Town, we believe everyone deserves high-quality hygiene care. From our humble beginnings in Quanzhou, we&apos;ve grown into a global leader in hygiene product manufacturing.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our state-of-the-art facilities and dedicated R&D teams work tirelessly to develop innovative, skin-friendly, and environmentally responsible products that set industry standards.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="text-3xl font-black text-slate-900 mb-2">10+</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-slate-900 mb-2">12</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Production Lines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h4 className="text-brand-teal font-black uppercase tracking-widest text-sm">Services & Expertise</h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Comprehensive Care for Your Brand</h2>
            <p className="text-lg text-slate-600 font-medium">We offer end-to-end solutions, from raw material sourcing to final product packaging and logistics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "OEM / ODM Manufacturing",
                desc: "Full-scale private label manufacturing. We bring your vision to life with custom specifications and high-quality production.",
                icon: <Settings className="w-10 h-10" />,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "Global Supply Chain",
                desc: "With a robust network, we ensure reliable delivery of products to over 45 countries with full documentation support.",
                icon: <Globe className="w-10 h-10" />,
                color: "bg-brand-teal/10 text-brand-teal"
              },
              {
                title: "Customized Design",
                desc: "Our creative team helps with packaging design and branding to make your products stand out on the shelves.",
                icon: <Briefcase className="w-10 h-10" />,
                color: "bg-orange-50 text-brand-orange"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className={`${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-8">
                  {service.desc}
                </p>
                <Link href="#" className="flex items-center gap-2 text-brand-teal font-bold hover:gap-4 transition-all">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Products Section */}
      <section id="case-studies" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4 max-w-xl">
              <h4 className="text-brand-teal font-black uppercase tracking-widest text-sm">Product Matrix</h4>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Premium Care Portfolio</h2>
            </div>
            <Link href="#" className="text-slate-900 font-bold border-b-2 border-brand-teal pb-1 hover:text-brand-teal transition-colors">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Baby Diapers", category: "Baby Care", items: "12 Variants", icon: <Baby size={32}/>, image: "/images/diaper.png" },
              { title: "Adult Pull-ups", category: "Adult Care", items: "8 Variants", icon: <UserCheck size={32}/>, image: "/images/adult.png" },
              { title: "Sanitary Napkins", category: "Female Care", items: "24 Variants", icon: <HeartHandshake size={32}/>, image: "/images/female.png" },
              { title: "Hygiene Wet Wipes", category: "Personal Care", items: "15 Variants", icon: <Package size={32}/>, image: "/images/female.png" }, 
              { title: "Nursing Pads", category: "Maternity", items: "5 Variants", icon: <Zap size={32}/>, image: "/images/female.png" },
              { title: "Pet Care Pads", category: "Pet Care", items: "6 Variants", icon: <HeartHandshake size={32}/>, image: "/images/adult.png" }
            ].map((prod, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-[40px] bg-slate-50 border border-slate-100 h-96 flex flex-col justify-between transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                  style={{ backgroundImage: `url('${prod.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-1"></div>

                <div className="relative z-10 p-8 space-y-2">
                   <p className="text-xs font-black uppercase tracking-widest text-brand-teal">
                      {prod.category}
                   </p>
                   <h3 className="text-3xl font-black tracking-tight text-slate-900">{prod.title}</h3>
                </div>
                
                <div className="relative z-10 p-8 flex justify-between items-end">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-teal shadow-lg border border-slate-50">
                      {prod.icon}
                   </div>
                   <span className="text-sm font-bold text-slate-600 group-hover:text-brand-teal transition-colors">{prod.items}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <div className="space-y-6">
                <h4 className="text-brand-teal font-black uppercase tracking-widest text-sm">Contact Us</h4>
                <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tighter">Ready to Start Your Project?</h2>
                <p className="text-slate-400 text-lg max-w-md font-medium">
                  Have questions about our OEM/ODM services or want to request a product sample? Send us a message and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 bg-brand-teal/20 rounded-full flex items-center justify-center text-brand-teal">
                      <Phone size={24} />
                   </div>
                   <div>
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Call Us</p>
                      <p className="text-xl font-black">+86 123 4567 8901</p>
                   </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange">
                      <Globe size={24} />
                   </div>
                   <div>
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Visit Us</p>
                      <p className="text-xl font-black text-slate-300">Quanzhou Industrial Zone, China</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-[40px] text-slate-900 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-teal outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-teal outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Service Required</label>
                  <select className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-teal outline-none transition-all appearance-none">
                    <option>OEM Manufacturing</option>
                    <option>ODM Customization</option>
                    <option>Bulk Product Sourcing</option>
                    <option>Quality Inspection</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Your Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-teal outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-black text-lg py-5 rounded-2xl shadow-xl shadow-brand-orange/20 transition-all flex items-center justify-center gap-3">
                  Send Message
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
