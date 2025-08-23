import TimelineItem from "./timeline-item";

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

const experiences: ExperienceData[] = [
  {
    id: '1',
    date: 'March 2022 - Present',
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    description: 'Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices for code quality and performance optimization.',
    technologies: ['React', 'Node.js', 'AWS', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    side: 'right'
  },
  {
    id: '2',
    date: 'June 2020 - February 2022',
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    description: 'Developed and maintained multiple client projects using modern JavaScript frameworks. Collaborated with designers and product managers to deliver pixel-perfect, responsive web applications.',
    technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    side: 'left'
  },
  {
    id: '3',
    date: 'August 2019 - May 2020',
    title: 'Junior Developer',
    company: 'WebDev Agency',
    description: 'Started my professional journey building responsive websites and learning modern development practices. Gained experience in version control, testing, and agile methodologies.',
    technologies: ['HTML/CSS', 'JavaScript', 'SASS', 'Git'],
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
    side: 'right'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background-gradient" data-testid="experience-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4" data-testid="experience-title">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="experience-subtitle">
            A journey through my professional growth and key achievements
          </p>
        </div>

        <div className="relative timeline-line">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              data-testid={`timeline-item-${experience.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
