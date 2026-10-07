import { createFileRoute } from '@tanstack/react-router';
import { InsightsPage } from '@/components/kplk/pages';
import { pageHead } from '@/lib/content';
export const Route=createFileRoute('/insights')({head:()=>pageHead('Financial Insights','Practical perspectives on GST, income tax, startup compliance and financial planning.'),component:InsightsPage});
