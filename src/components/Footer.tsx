import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Akash.dev
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer & AI Enthusiast passionate about building innovative solutions
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Connect</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Akash7653"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/akash-babu-koravena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:akash.koravena@example.com"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Akash Babu Koravena. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                Made with <Heart size={16} className="text-red-500" fill="currentColor" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
