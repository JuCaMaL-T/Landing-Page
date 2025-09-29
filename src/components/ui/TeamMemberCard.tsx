import type { FC } from "react";
import { motion } from "framer-motion";
import { Star, Award, Code } from "lucide-react";

export type TeamMember = {
  name: string;
  role: string;
  speciality: string;
  image: string;
  bio: string;
  skills: string[];
  experience: string;
  projects: string;
  gradient: string;
};

type TeamMemberCardProps = {
  member: TeamMember;
  index: number;
};

const TeamMemberCard: FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative"
    >
      <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-white/20 via-white/10 to-transparent hover:from-white/30 hover:via-white/20 hover:to-white/10 transition-all duration-500">
        <div className="bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-lg rounded-3xl p-8 h-full relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${member.gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          <div className="relative z-10">
            <div className="relative mb-6 flex justify-center">
              <div className="relative">
                <motion.div
                  className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.gradient} p-1`}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Star className="w-4 h-4 text-white" />
                </motion.div>

                <motion.div
                  className="absolute inset-0 border-2 border-purple-400/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ scale: 1.4 }}
                />
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-blue-400 bg-clip-text mb-1">
                {member.role}
              </p>
              <p className="text-gray-400 text-xs">{member.speciality}</p>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
              {member.bio}
            </p>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-gray-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Award className="w-3 h-3 text-blue-400" />
                  <span className="text-blue-400 font-bold text-sm">
                    {member.experience}
                  </span>
                </div>
                <p className="text-gray-400 text-xs">Experiencia</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Code className="w-3 h-3 text-purple-400" />
                  <span className="text-purple-400 font-bold text-sm">
                    {member.projects}
                  </span>
                </div>
                <p className="text-gray-400 text-xs">Proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
      />
    </motion.div>
  );
};

export default TeamMemberCard;