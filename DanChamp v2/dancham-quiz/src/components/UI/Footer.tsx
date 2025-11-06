import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../../types/quiz.types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="w-full bg-white border-t border-grey-light mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 sm:gap-8"
        >
          {/* Membership Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
            <motion.a
              href="https://dancham.id/membership/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 sm:gap-3 px-6 py-3 bg-gradient-to-r from-[#c41e3a] to-[#a01829] text-white rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-xl sm:text-2xl">💼</span>
              <span>
                {language === 'da' 
                  ? 'Læs mere om vores medlemspriser' 
                  : 'Learn more about our membership prices'}
              </span>
              <span className="text-lg">→</span>
            </motion.a>

            <div className="hidden sm:block w-px h-8 bg-grey-light"></div>

            <motion.a
              href="mailto:admin@dancham.id"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 sm:gap-3 px-6 py-3 bg-white border-2 border-[#c41e3a] text-[#c41e3a] rounded-lg font-semibold text-sm sm:text-base hover:bg-[#c41e3a] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span className="text-xl sm:text-2xl">✉️</span>
              <span>
                {language === 'da' 
                  ? 'Vil du vide mere? Kontakt os' 
                  : 'Want to know more? Contact us'}
              </span>
            </motion.a>
          </div>

          {/* Contact Email - Mobile */}
          <motion.a
            href="mailto:admin@dancham.id"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="sm:hidden flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#c41e3a] text-[#c41e3a] rounded-lg font-semibold text-sm hover:bg-[#c41e3a] hover:text-white transition-all duration-300 shadow-md"
          >
            <span className="text-xl">✉️</span>
            <span>
              {language === 'da' 
                ? 'Vil du vide mere? Kontakt os' 
                : 'Want to know more? Contact us'}
            </span>
          </motion.a>

          {/* Email Address */}
          <div className="flex items-center gap-2 text-grey-text text-xs sm:text-sm">
            <span className="text-base sm:text-lg">📧</span>
            <a
              href="mailto:admin@dancham.id"
              className="text-[#c41e3a] hover:text-[#a01829] font-medium transition-colors duration-200 underline underline-offset-2"
            >
              admin@dancham.id
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};


