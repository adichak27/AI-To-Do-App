import { motion } from 'framer-motion';
import { TodoList } from '@/components/todos/TodoList';

// Animation variants
const titleAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const taglineAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      <div className="p-4">
        <div className="mx-auto max-w-[650px] pt-12">
          <div className="text-center mb-8">
            <motion.h1 
              variants={titleAnimation}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#5468FF] to-[#7B86FF] 
                       bg-clip-text text-transparent"
            >
              SparkTask
            </motion.h1>
            <motion.p
              variants={taglineAnimation}
              initial="initial"
              animate="animate"
              className="text-[#5F6580] text-lg"
            >
              AI-powered todos that think ahead
            </motion.p>
          </div>
          <TodoList />
        </div>
      </div>
    </main>
  );
}
