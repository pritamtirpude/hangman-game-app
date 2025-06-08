import {
  CategoryAndInstructionHeader,
  InstructionCard,
} from '../../components';
import { instructions } from '../../utils/instructions';

const HowToPlayPage = () => {
  return (
    <div className="relative z-50">
      <div className="modal-bg fixed inset-0 -z-10 size-full" />
      <CategoryAndInstructionHeader headertitle="How to Play" />
      <div className="z-30 mt-20 flex flex-col gap-6 md:mt-24 md:gap-8 lg:mt-16 lg:flex-row lg:items-center lg:max-2xl:flex-col">
        {instructions.map((instruction, index) => (
          <InstructionCard
            instruction={instruction}
            key={instruction.step}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HowToPlayPage;
