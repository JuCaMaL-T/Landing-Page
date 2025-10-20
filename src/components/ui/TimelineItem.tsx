import type { FC } from "react"
import { motion } from "framer-motion"
import { Calendar, Image } from "lucide-react"

type Milestone = {
  year: string
  achievement: string
  title: string
  description: string
  image?: string
}

type TimelineItemProps = {
  milestone: Milestone
  index: number
  position?: "left" | "center" | "right"
}

const TimelineItem: FC<TimelineItemProps> = ({ milestone, index, position = "center" }) => {
  const isCenter = position === "center"

  return (
    <motion.div
      className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent hover:from-white/30 hover:via-white/20 hover:to-white/5 transition-all duration-500 h-full"
      whileHover={isCenter ? { y: -5, scale: 1.02 } : {}}
    >
      <div className="bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-lg rounded-2xl overflow-hidden relative h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {milestone.image && (
          <div className="relative h-64 sm:h-72 overflow-hidden">
            <img
              src={milestone.image}
              alt={milestone.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Image className="w-4 h-4 text-white/70" />
              </div>
            </div>
          </div>
        )}

        <div className="p-6 relative z-10">
          <div className="flex items-center gap-2 mb-4 justify-center flex-wrap">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm">{milestone.year}</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-400/30">
              <span className="text-green-400 font-medium text-xs">{milestone.achievement}</span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center group-hover:text-blue-100 transition-colors">
            {milestone.title}
          </h3>

          <p className="text-gray-300 leading-relaxed mb-4 text-center">{milestone.description}</p>

          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: isCenter ? "100%" : "0%" }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TimelineItem