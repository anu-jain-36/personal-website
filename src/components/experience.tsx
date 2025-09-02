import React, { useState, useEffect, useRef } from 'react';
 interface Experience {
  id: number;
  title: string;
  organization: string;
  year: string;
  side: 'left' | 'right';
  points: string[];
}
export default function Experience() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
   const experiences = [
    {
      id: 1,
      title: "Data Science Capstone Project",
      organization: "Houston Education Research Consortium, Kinder Institute for Urban Research",
      year: "2024",
      points: [
        "Consolidated six years of data for 1200 public school districts from the Texas Education Agency and used Autoencoders to identify similar school districts.",
        "Conducted SHAP analysis to explain the key factors driving the similarity, helping districts identify peers and foster collaborations."
      ],
      side: "right"
    },
    {
      id: 2,
      title: "Teaching Assistant",
      organization: "Rice University",
      year: "2024",
      points: [
        "Design and Analysis of Algorithms: Supported students in writing optimised algorithms, proofs and dry runs of said algorithms.",
        "Web Development and Design: Assisted students in debugging their SPA MERN stack web apps, focusing on increasing code coverage."
      ],
      side: "left"
    },
    {
      id: 3,
      title: "Software Intern",
      organization: "Rice University",
      year: "2024",
      points: [
        "Modernized 'Owltest,' a ten-year-old automated Python grading tool used in various courses at Rice University.",
        "Integrated Canvas with Owltest, by implementing Learning Tools Interoperability (LTI) protocols for seamless assignment submissions and grade reflection."
      ],
      side: "right"
    },
    {
      id: 4,
      title: "Software Engineer",
      organization: "Tata Consultancy Services",
      year: "2020 - 2023",
      points: [
        "Designed and developed multiple features for a Learning Management System (LMS), contributing to over 100 production patches and four major software releases.",
        "Built an Infrastructure-as-Code (IaC) framework using AWS and Azure SDKs to automate LMS - cloud integration and provision pre-configured Linux/Windows VMs, streamlining infrastructure management for 500+ training and hackathon users.",
        "Developed a scalable code editor supporting 17 programming languages provided with real-time code execution and test case evaluation, used by 50,000 concurrent users during nationwide coding interviews."
      ],
      side: "left"
    },
    {
      id: 5,
      title: "Machine Learning Intern",
      organization: "Centre for Development of Advanced Computing",
      year: "2019",
      points: [
        "Built a code-switching Automatic Speech Recognition(ASR) system for Hindi and English using the Kaldi ASR toolkit",
        "Statistical analysis of the ASR system's acoustic model built with Hidden Markov and Gaussian Mixture Models. The word error rate fell to 9.15 as we increased the Gaussian states to 50,000."
      ],
      side: "right"
    }
  ];
  // Set ref for each card
  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const cardId = parseInt(target.dataset.cardId || '0');
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set(Array.from(prev).concat(cardId)));
          } else {
            setVisibleCards(prev => {
              const newSet = new Set(prev);
              newSet.delete(cardId);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    // Attach observer to each card
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
  return (
      <section id='experience' className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Professional <span className="text-[#00D4FF]">Experience</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#00D4FF] h-full"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className="relative flex items-center"
                ref={setCardRef(index)}
                data-card-id={exp.id}
              >
                
                {/* Timeline Dot - Made Bigger */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00D4FF] rounded-full border-4 border-white shadow-lg z-10 transition-all duration-500 ${
                  visibleCards.has(exp.id) ? 'scale-100' : 'scale-75 opacity-50'
                }`}></div>
                
                {/* Experience Card */}
                <div className={`w-1/2 ${exp.side === 'left' ? 'pr-8' : 'pl-8'} ${exp.side === 'right' ? 'ml-auto' : ''}`}>
                  <div className={`bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-700 transform hover:-translate-y-1 ${
                    visibleCards.has(exp.id) 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : `opacity-0 ${exp.side === 'left' ? '-translate-x-8' : 'translate-x-8'} scale-95`
                  }`}>
                    
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2">{exp.title}</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-[#00D4FF]">{exp.organization}</p>
                        <span className="bg-[#00D4FF] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {exp.year}
                        </span>
                      </div>
                    </div>
                    
                    {/* Bullet Points */}
                    <ul className="space-y-3">
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-2 h-2 bg-[#00D4FF] rounded-full mt-2 mr-3"></div>
                          <p className="text-gray-700 leading-relaxed">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
