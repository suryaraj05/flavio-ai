import type { FC } from 'react';
import { motion } from 'motion/react';
import AnimatedBar from './charts/AnimatedBar';
import type { SurveyQuestion } from '@/data/insightsDemo';

type SurveyQuestionCardProps = {
  question: SurveyQuestion;
};

const CARD_SPRING = { type: 'spring' as const, stiffness: 380, damping: 26 };

const SurveyQuestionCard: FC<SurveyQuestionCardProps> = ({ question }) => {
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: '0 6px 18px rgba(37,99,235,0.07)' }}
      transition={CARD_SPRING}
      className="mx-2.5 mb-2 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm"
    >
      <div className="mb-2 flex items-start justify-between gap-1">
        <p className="text-[8px] leading-snug text-[#1E3A5F]">
          <span style={{ color: question.color }} className="font-bold">
            Q{question.number}
          </span>{' '}
          {question.question}
        </p>
        <span className="shrink-0 rounded-full bg-slate-100 px-1.5 py-0.5 text-[7px] text-slate-500">
          {question.totalResponses}
        </span>
      </div>
      <div className="space-y-1.5">
        {question.options.map((option) => (
          <div key={option.label}>
            <div className="mb-0.5 flex items-center justify-between">
              <span className="text-[7px] text-slate-600">{option.label}</span>
              <div className="flex items-center gap-1 text-[6px] text-slate-400">
                <span className="font-semibold text-slate-600">{option.count}</span>
                <span>{option.percent}%</span>
              </div>
            </div>
            <AnimatedBar percent={option.percent} color={question.barColor} height={5} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SurveyQuestionCard;
