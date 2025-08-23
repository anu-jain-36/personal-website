import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-blue-50" data-testid="hero-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight" data-testid="hero-title">
                Hi, I'm <span className="text-primary">John Smith</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed" data-testid="hero-subtitle">
                Full-Stack Software Developer passionate about creating innovative solutions and beautiful user experiences.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                data-testid="button-contact"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="inline-flex items-center px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                data-testid="button-work"
              >
                View My Work
              </button>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" data-testid="link-github">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" data-testid="link-linkedin">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" data-testid="link-twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Developer workspace with multiple monitors showing code" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
