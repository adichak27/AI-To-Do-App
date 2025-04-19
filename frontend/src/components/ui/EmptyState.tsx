import { ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center text-[#5F6580]"
    >
      <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-[rgba(84,104,255,0.1)] p-6">
        <ClipboardList className="h-full w-full text-[#5468FF]" />
      </div>
      <h3 className="text-xl font-semibold text-[#1A1D2F] mb-2">
        Your todo list is empty
      </h3>
      <p className="text-[#5F6580] max-w-[280px] mx-auto">
        Add your first todo to get started with organizing your tasks!
      </p>
    </motion.div>
  );
}
