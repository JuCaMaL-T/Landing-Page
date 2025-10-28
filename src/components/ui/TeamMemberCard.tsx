import type { FC } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export type TeamMember = {
  name: string;
  role: string;
  speciality: string;
  image: string;
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
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                <motion.div
                  className={`w-32 h-32 rounded-full bg-gradient-to-r ${member.gradient} p-1`}
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

            <div className="text-center space-y-3">
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors">
                {member.name}
              </h3>
              
              <div className="space-y-2">
                <p className="text-base font-semibold text-blue-400">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm font-medium bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10">
                  {member.speciality}
                </p>
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