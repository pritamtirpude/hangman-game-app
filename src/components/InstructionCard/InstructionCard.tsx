import { motion } from 'motion/react';

type InstructionProps = {
  instruction: {
    step: string;
    title: string;
    description: string;
  };
  index: number;
};

const InstructionCard = ({ instruction, index }: InstructionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: index * 0.1,
      }}
      className="flex items-center overflow-hidden rounded-[40px] bg-white p-8 md:flex-row md:gap-10 md:p-10 lg:h-[550px] lg:w-[384px] lg:flex-col lg:gap-10 lg:p-12 lg:max-2xl:size-full lg:max-2xl:flex-row"
    >
      <motion.span
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          type: 'spring',
          bounce: 0,
          delay: 0.2,
        }}
        className="md:text-heading-l text-hang-blue hidden overflow-hidden p-0 text-2xl md:block"
      >
        {instruction.step}
      </motion.span>
      <div className="flex flex-col gap-4 overflow-hidden lg:items-center lg:justify-center lg:gap-10 lg:max-2xl:items-start lg:max-2xl:gap-4">
        <div className="flex items-center gap-x-4">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              type: 'spring',
              bounce: 0,
              delay: 0.2,
            }}
            className="md:text-heading-l text-hang-blue overflow-hidden text-2xl md:hidden"
          >
            {instruction.step}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              type: 'spring',
              bounce: 0,
              delay: 0.3,
            }}
            className="md:text-heading-m text-hang-body overflow-hidden text-violet-950 uppercase"
          >
            {instruction.title}
          </motion.span>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            type: 'spring',
            bounce: 0,
            delay: 0.4,
          }}
          className="text-hang-body overflow-hidden text-[#887DC0] lg:w-[250px] lg:text-center lg:max-2xl:w-auto lg:max-2xl:text-left"
        >
          {instruction.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default InstructionCard;
