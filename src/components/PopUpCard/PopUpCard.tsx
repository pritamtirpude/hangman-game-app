import { motion } from 'motion/react';
import type React from 'react';
import { useLocation } from 'react-router-dom';

type PopUpCardProps = {
  title?: string;
  body: React.ReactNode;
};

const PopUpCard = ({ title = 'Demo', body }: PopUpCardProps) => {
  const { pathname } = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: '-100%' }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.75,
        ease: 'easeInOut',
        type: 'spring',
        bounce: 0.5,
      }}
      exit={{
        opacity: 0,
        y: '-100%',
      }}
      className="pop-up-card relative flex h-[481px] w-[324px] flex-col items-center justify-center rounded-[72px] p-8 md:h-[500px] md:w-[592px] md:p-16"
    >
      {pathname === '/hangmangame' ? (
        <motion.img
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0, rotate: [0, 360] }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
            type: 'spring',
            bounce: 0.4,
            delay: 0.1,
          }}
          className="absolute -top-12 h-[130px] w-[263px] md:-top-28 md:h-[185px] md:w-[373px]"
          src="/images/logo.svg"
          alt="logo"
        />
      ) : (
        <div className="relative ml-auto md:mx-auto md:max-w-[600px]">
          <h2 className="lg:text-heading-xl absolute -top-30 right-4 z-30 w-max -translate-y-1/2 bg-linear-to-b from-[#67b6ff] to-white bg-clip-text text-8xl text-transparent md:-top-35 md:left-1/2 md:-translate-x-1/2">
            {title}
          </h2>

          <h2 className="header-title lg:text-heading-xl absolute -top-30 right-4 w-max -translate-y-1/2 text-8xl md:-top-35 md:left-1/2 md:-translate-x-1/2">
            {title}
          </h2>
        </div>
      )}
      {body}
    </motion.div>
  );
};

export default PopUpCard;
