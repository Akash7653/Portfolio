import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Cloud, Cpu, Zap } from 'lucide-react';

export default function FloatingIcons() {
  const icons = [
    { Icon: Code2, color: 'text-blue-500', position: { top: '20%', left: '10%' }, delay: 0 },
    { Icon: Database, color: 'text-green-500', position: { top: '60%', left: '15%' }, delay: 1 },
    { Icon: Smartphone, color: 'text-purple-500', position: { top: '40%', right: '10%' }, delay: 0.5 },
    { Icon: Cloud, color: 'text-cyan-500', position: { top: '70%', right: '20%' }, delay: 1.5 },
    { Icon: Cpu, color: 'text-orange-500', position: { top: '25%', right: '25%' }, delay: 0.75 },
    { Icon: Zap, color: 'text-yellow-500', position: { top: '80%', left: '25%' }, delay: 1.25 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color} opacity-10 dark:opacity-5`}
          style={item.position}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <item.Icon size={64} />
        </motion.div>
      ))}
    </div>
  );
}
