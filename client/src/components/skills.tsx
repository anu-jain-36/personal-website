import { motion } from "framer-motion";

interface Skill {
  name: string;
  proficiency: number;
  icon: string;
  color: string;
}

interface Tool {
  name: string;
  icon: string;
}

const frontendSkills: Skill[] = [
  { name: 'React', proficiency: 90, icon: '⚛️', color: 'bg-blue-50 border-blue-200' },
  { name: 'Vue.js', proficiency: 85, icon: '💚', color: 'bg-green-50 border-green-200' },
  { name: 'JavaScript', proficiency: 95, icon: '🟨', color: 'bg-yellow-50 border-yellow-200' },
  { name: 'TypeScript', proficiency: 80, icon: '🔷', color: 'bg-purple-50 border-purple-200' },
];

const backendSkills: Skill[] = [
  { name: 'Node.js', proficiency: 88, icon: '🟢', color: 'bg-green-50 border-green-200' },
  { name: 'Laravel', proficiency: 75, icon: '🔴', color: 'bg-red-50 border-red-200' },
  { name: 'PostgreSQL', proficiency: 82, icon: '🐘', color: 'bg-blue-50 border-blue-200' },
  { name: 'AWS', proficiency: 70, icon: '☁️', color: 'bg-orange-50 border-orange-200' },
];

const tools: Tool[] = [
  { name: 'Git', icon: '🔀' },
  { name: 'Docker', icon: '🐳' },
  { name: 'GraphQL', icon: '🔗' },
  { name: 'React Native', icon: '📱' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Webpack', icon: '📦' },
];

const stats = [
  { number: '50+', label: 'Projects Completed', color: 'bg-primary/5 text-primary' },
  { number: '25+', label: 'Happy Clients', color: 'bg-accent/5 text-accent' },
  { number: '5+', label: 'Years Experience', color: 'bg-green-50 text-green-600' },
  { number: '20+', label: 'Technologies', color: 'bg-purple-50 text-purple-600' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white" data-testid="skills-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4" data-testid="skills-title">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="skills-subtitle">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-8" data-testid="frontend-title">Frontend Development</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`skill-badge ${skill.color} border p-4 rounded-lg hover:shadow-md transition-all`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`frontend-skill-${skill.name.toLowerCase().replace('.', '')}`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-secondary" data-testid={`skill-name-${skill.name.toLowerCase()}`}>
                        {skill.name}
                      </h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <motion.div 
                          className="bg-current h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          data-testid={`skill-progress-${skill.name.toLowerCase()}`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-8" data-testid="backend-title">Backend Development</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`skill-badge ${skill.color} border p-4 rounded-lg hover:shadow-md transition-all`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`backend-skill-${skill.name.toLowerCase().replace('.', '')}`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-secondary" data-testid={`skill-name-${skill.name.toLowerCase()}`}>
                        {skill.name}
                      </h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <motion.div 
                          className="bg-current h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          data-testid={`skill-progress-${skill.name.toLowerCase()}`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies Grid */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold text-secondary mb-8 text-center" data-testid="tools-title">Tools & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="skill-badge text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                data-testid={`tool-${tool.name.toLowerCase().replace(' ', '-')}`}
              >
                <span className="text-3xl mb-2 block">{tool.icon}</span>
                <p className="text-sm font-medium text-gray-700">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`text-center p-6 ${stat.color} rounded-xl`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-3xl font-bold mb-2" data-testid={`stat-number-${index}`}>{stat.number}</div>
              <p className="text-gray-600" data-testid={`stat-label-${index}`}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
