import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: '2023 - Present',
      title: 'Full Stack Development Journey',
      company: 'Self-Driven Learning',
      location: 'Hyderabad, India',
      description: 'Building full-stack applications, exploring AI/ML technologies, and contributing to open-source projects while continuously expanding technical expertise.',
      highlights: [
        'Developed multiple full-stack applications using React, Node.js, and databases',
        'Implemented AI-powered features using Python and TensorFlow',
        'Mastered modern development tools and best practices',
        'Built responsive and accessible web applications'
      ]
    },
    {
      period: '2022 - 2023',
      title: 'Learning Core Technologies',
      company: 'Academic & Personal Projects',
      location: 'Hyderabad, India',
      description: 'Focused on mastering fundamental programming concepts, data structures, algorithms, and web development technologies.',
      highlights: [
        'Gained proficiency in Java, Python, and JavaScript',
        'Developed strong foundation in data structures and algorithms',
        'Created multiple academic and personal projects',
        'Participated in coding challenges and hackathons'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              Experience & Journey
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
            />
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="relative mb-12 md:ml-20"
              >
                <div className="absolute -left-20 top-6 hidden md:block">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                    <Briefcase className="text-white" size={28} />
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-102">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold">
                      <Calendar size={18} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin size={18} />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-purple-600 dark:text-purple-400 mb-4">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
