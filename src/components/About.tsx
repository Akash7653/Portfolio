import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, Target } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: 'Dedicated Worker',
      description: 'Committed to delivering high-quality solutions with attention to detail and excellence'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learner',
      description: 'Always curious about emerging technologies and best practices in software development'
    },
    {
      icon: Rocket,
      title: 'Problem Solver',
      description: 'Passionate about tackling real-world challenges through innovative technology solutions'
    },
    {
      icon: Code2,
      title: 'Full Stack Expertise',
      description: 'Proficient in both frontend and backend development with a focus on modern tech stacks'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
              About Me
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Hi, I'm Akash! 👋
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    I'm a passionate Full Stack Developer based in Hyderabad, India, with a deep interest in Artificial Intelligence and emerging technologies. My journey in software development is driven by an insatiable curiosity and a commitment to excellence.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    As a workaholic and dedicated learner, I thrive on challenges and constantly seek opportunities to expand my skill set. I believe in the power of technology to solve real-world problems and create meaningful impact.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105"
                >
                  <feature.icon className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">My Mission</h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              To leverage cutting-edge technologies and innovative thinking to build scalable, efficient, and impactful solutions that make a difference in people's lives and contribute to the advancement of the tech industry.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
