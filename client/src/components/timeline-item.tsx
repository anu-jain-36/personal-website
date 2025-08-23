import { motion } from "framer-motion";

interface ExperienceData {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  image: string;
  side: 'left' | 'right';
}

interface TimelineItemProps {
  experience: ExperienceData;
  index: number;
}

const techColors: Record<string, string> = {
  'React': 'bg-blue-100 text-blue-800',
  'Node.js': 'bg-green-100 text-green-800',
  'AWS': 'bg-yellow-100 text-yellow-800',
  'TypeScript': 'bg-purple-100 text-purple-800',
  'Vue.js': 'bg-green-100 text-green-800',
  'Laravel': 'bg-red-100 text-red-800',
  'PostgreSQL': 'bg-indigo-100 text-indigo-800',
  'Docker': 'bg-gray-100 text-gray-800',
  'HTML/CSS': 'bg-orange-100 text-orange-800',
  'JavaScript': 'bg-yellow-100 text-yellow-800',
  'SASS': 'bg-pink-100 text-pink-800',
  'Git': 'bg-green-100 text-green-800',
};

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className="timeline-item relative mb-16 md:mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      data-testid={`timeline-item-${experience.id}`}
    >
      <div className="md:grid md:grid-cols-2 md:gap-8">
        {/* Content side - alternates between left and right */}
        <div className={isEven ? "md:text-right md:pr-8" : "md:pl-8 md:order-2"}>
          {/* Timeline dot */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10" data-testid={`timeline-dot-${experience.id}`}></div>
          
          <motion.div 
            className="ml-12 md:ml-0 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -4 }}
            data-testid={`experience-card-${experience.id}`}
          >
            <div className="text-sm text-accent font-semibold mb-2" data-testid={`experience-date-${experience.id}`}>
              {experience.date}
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2" data-testid={`experience-title-${experience.id}`}>
              {experience.title}
            </h3>
            <h4 className="text-primary font-semibold mb-4" data-testid={`experience-company-${experience.id}`}>
              {experience.company}
            </h4>
            <p className="text-gray-600 mb-4" data-testid={`experience-description-${experience.id}`}>
              {experience.description}
            </p>
            <div className="flex flex-wrap gap-2" data-testid={`experience-technologies-${experience.id}`}>
              {experience.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className={`px-3 py-1 text-sm rounded-full ${techColors[tech] || 'bg-gray-100 text-gray-800'}`}
                  data-testid={`tech-${tech.toLowerCase().replace(/[/.]/g, '-')}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Image side - alternates between right and left */}
        <div className={`hidden md:block ${isEven ? "md:order-2" : ""}`}>
          <img 
            src={experience.image} 
            alt={`${experience.title} workspace`} 
            className="rounded-xl shadow-lg w-full h-full object-cover"
            data-testid={`experience-image-${experience.id}`}
          />
        </div>
      </div>
    </motion.div>
  );
}
