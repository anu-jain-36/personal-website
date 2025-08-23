import { Code, Lightbulb, Users, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4" data-testid="about-title">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="about-subtitle">
            Passionate about crafting digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed" data-testid="about-description-1">
              With over 5 years of experience in software development, I specialize in building scalable web applications and creating seamless user experiences. My journey began with a Computer Science degree and has evolved through various challenging projects across different industries.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed" data-testid="about-description-2">
              I'm passionate about clean code, modern development practices, and continuous learning. When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring the latest technologies.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg" data-testid="feature-clean-code">
                <div className="text-3xl text-primary mb-2">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-secondary mb-2">Clean Code</h3>
                <p className="text-gray-600 text-sm">Writing maintainable, readable code following best practices</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg" data-testid="feature-innovation">
                <div className="text-3xl text-primary mb-2">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-secondary mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Always exploring new technologies and creative solutions</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg" data-testid="feature-collaboration">
                <div className="text-3xl text-primary mb-2">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-secondary mb-2">Collaboration</h3>
                <p className="text-gray-600 text-sm">Working effectively in agile teams and mentoring developers</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg" data-testid="feature-performance">
                <div className="text-3xl text-primary mb-2">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-secondary mb-2">Performance</h3>
                <p className="text-gray-600 text-sm">Optimizing applications for speed and scalability</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Modern office workspace with dual monitor setup" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="about-workspace-image"
            />
            
            <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl text-white" data-testid="quick-facts">
              <h3 className="font-semibold text-lg mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center" data-testid="fact-location">
                  <span className="mr-3">📍</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center" data-testid="fact-experience">
                  <span className="mr-3">📅</span>
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center" data-testid="fact-education">
                  <span className="mr-3">🎓</span>
                  <span>BS Computer Science</span>
                </div>
                <div className="flex items-center" data-testid="fact-availability">
                  <span className="mr-3">☕</span>
                  <span>Available for new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
