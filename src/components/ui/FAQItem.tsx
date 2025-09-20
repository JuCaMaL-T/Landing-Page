import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItemProps {
  faq: { question: string; answer: string };
  index: number;
  openIndex: number | null;
  toggleFAQ: (index: number) => void;
}

const FAQItem: FC<FAQItemProps> = ({ faq, index, openIndex, toggleFAQ }) => {
  const isOpen = openIndex === index;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative"
    >
      <div
        className={`relative p-[1px] rounded-2xl bg-gradient-to-br transition-all duration-500 ${
          isOpen
            ? "from-purple-500/30 via-blue-500/30 to-cyan-500/30"
            : "from-white/10 via-white/5 to-transparent hover:from-white/20 hover:via-white/10 hover:to-white/5"
        }`}
      >
        <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-lg rounded-2xl relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="relative z-10">
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-6 flex items-center justify-between group/button"
              whileHover={{ scale: isOpen ? 1 : 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4 flex-1">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-r transition-all duration-300 ${
                    isOpen
                      ? "from-purple-500 to-blue-500"
                      : "from-gray-700 to-gray-800 group-hover/button:from-purple-500/50 group-hover/button:to-blue-500/50"
                  }`}
                >
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <h3
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    isOpen
                      ? "text-white"
                      : "text-gray-200 group-hover/button:text-white"
                  }`}
                >
                  {faq.question}
                </h3>
              </div>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 ml-4 transition-colors duration-300 ${
                  isOpen ? "text-purple-400" : "text-gray-400"
                }`}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="pl-16">
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-4"
                      >
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20 -z-10" />
      )}
    </motion.div>
  );
};

export default FAQItem;