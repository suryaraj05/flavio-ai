import { useState, useCallback } from 'react';
import PhoneAppChrome from './PhoneAppChrome';
import MoodMixSection from './MoodMixSection';
import InsightFilters from './InsightFilters';
import TodayInsightPanel from './TodayInsightPanel';
import RoleInsightCards from './RoleInsightCards';
import DateAccordion from './DateAccordion';
import OverallAnalysis from './OverallAnalysis';
import SurveyQuestionCard from './SurveyQuestionCard';
import { SURVEY_QUESTIONS } from '@/data/insightsDemo';

export default function InsightsPhoneDemo() {
  const [activeNav, setActiveNav] = useState('insights');
  const [activeFilter, setActiveFilter] = useState('All');
  const [tableSearch, setTableSearch] = useState('');
  const [todayExpanded, setTodayExpanded] = useState(true);
  const [expandedDateId, setExpandedDateId] = useState<string | null>(null);

  const handleDateToggle = useCallback((id: string) => {
    setExpandedDateId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <PhoneAppChrome activeNav={activeNav} onNavChange={setActiveNav}>
      <MoodMixSection />
      <InsightFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        tableSearch={tableSearch}
        onTableSearchChange={setTableSearch}
      />
      <TodayInsightPanel
        expanded={todayExpanded}
        onToggle={() => setTodayExpanded((v) => !v)}
      />
      <RoleInsightCards />
      <DateAccordion expandedId={expandedDateId} onToggle={handleDateToggle} />
      <OverallAnalysis />
      {SURVEY_QUESTIONS.map((question) => (
        <SurveyQuestionCard key={question.id} question={question} />
      ))}
      <div className="h-2" />
    </PhoneAppChrome>
  );
}
