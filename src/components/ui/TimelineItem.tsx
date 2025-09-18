import type { FC } from "react";
import { motion } from "framer-motion";
import { Calendar, TrendingUp } from "lucide-react";

type Milestone = {
  year: string;
  achievement: string;
  title: string;
  description: string;
};

type TimelineItemProps = {
  milestone: Milestone;
  index: number;
};

const TimelineItem: FC<TimelineItemProps> = ({ milestone, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: isEven ? -60 : 60 },
        show: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col lg:flex-row items-center gap-8 ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      <div
        className={`flex-1 ${
          isEven ? "lg:text-right" : "lg:text-left"
        } text-center lg:text-left`}
      >
        <motion.div
          className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent hover:from-white/30 hover:via-white/20 hover:to-white/5 transition-all duration-500"
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <div className="bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-lg rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm">
                    {milestone.year}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-400/30">
                  <span className="text-green-400 font-medium text-xs">
                    {milestone.achievement}
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                {milestone.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                {milestone.description}
              </p>

              <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hidden lg:flex items-center justify-center relative">
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center relative z-10"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.1, rotate: 15 }}
        >
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-blue-400" />
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ scale: 1.5 }}
        />
        <motion.div
          className="absolute inset-0 border border-blue-400/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ scale: 1.8 }}
        />
      </div>

      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
};

export default TimelineItem;