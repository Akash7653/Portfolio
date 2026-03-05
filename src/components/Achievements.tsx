import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Code2, Trophy, Star } from 'lucide-react';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Code2,
      title: 'Coding Practice',
      description: 'Solved 500+ problems across multiple platforms',
      stats: '500+ Problems',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Trophy,
      title: 'Full-Stack Projects',
      description: 'Built 15+ production-ready applications',
      stats: '15+ Projects',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'AI Experiments',
      description: 'Implemented multiple ML models and AI solutions',
      stats: '10+ AI Models',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      title: 'Open Source',
      description: 'Active contributor to open-source community',
      stats: '100+ Contributions',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies Mastered', value: '20+' },
    { label: 'Code Commits', value: '1000+' }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              Achievements & Milestones
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl mb-4 flex items-center justify-center shadow-lg`}>
                    <achievement.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                    {achievement.description}
                  </p>
                  <p className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.stats}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-10">
              Journey in Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-purple-100 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Every line of code is a step forward in my journey to become a better developer and create meaningful impact through technology
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
