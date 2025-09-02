import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <section id="hero"className="pt-8 min-h-screen flex items-center relative overflow-hidden" data-testid="hero-section">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="bg video short.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-0 items-center h-full">
          <div className="space-y-10 lg:pr-8">
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg" data-testid="hero-title">
                Hi, I'm <span className="text-[#00D4FF]">Anu Jain</span>
              </h1>
              <p className="text-2xl sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}} data-testid="hero-subtitle">
                <b>Software & Applied ML Engineer</b>
              </p>
              <p className="text-xl sm:text-lg lg:text-xl text-white leading-relaxed max-w-2xl drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}} data-testid="hero-subtitle">
                <b>Writing robust, modular and secure code for distributed software systems.</b>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-10 py-4 border border-[#00D4FF] text-[#00D4FF] font-semibold rounded-lg hover:bg-[#00D4FF] hover:text-white transition-colors text-lg drop-shadow-md"
                data-testid="button-contact"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="inline-flex items-center px-10 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-lg drop-shadow-md"
                data-testid="button-work"
              >
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-start lg:pl-8">
            <img 
              src="My final picture.png"
              alt="Developer workspace with multiple monitors showing code" 
              className="rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
