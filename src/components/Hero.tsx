import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer & AI Enthusiast';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 dark:from-gray-950 dark:via-purple-950/30 dark:to-gray-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image with Animated Background */}
            <motion.div
              className="mb-8 flex justify-center mt-12"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            >
              <div className="relative w-56 h-56 md:w-72 md:h-72">
                {/* Animated gradient background circles */}
                <motion.div
                  className="absolute inset-0 -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full blur-2xl opacity-60"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div
                  className="absolute inset-0 -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full blur-xl opacity-40"
                  animate={{ 
                    rotate: -360,
                    scale: [1.1, 1, 1.1]
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                {/* Profile Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
                  <img 
                    src="/Profile.jpeg" 
                    alt="Akash Babu Koravena" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mb-4 inline-block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium backdrop-blur-sm">
                Available for opportunities
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Akash Babu Koravena
            </h1>

            <div className="h-20 mb-6">
              <h2 className="text-2xl md:text-3xl text-purple-300 font-semibold min-h-[2.5rem]">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Dedicated developer passionate about building innovative tech solutions and solving real-world problems through code
            </p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </button>
              <button className="px-8 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </motion.div>

            <motion.div
              className="flex gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://github.com/Akash7653"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <Github size={24} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-babu-koravena/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <Linkedin size={24} className="text-white" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="text-white/50" size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
