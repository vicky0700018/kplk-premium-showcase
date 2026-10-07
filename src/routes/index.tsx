import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/kplk/pages';
import { pageHead } from '@/lib/content';
export const Route = createFileRoute('/')({head:()=>pageHead('Tax, Accounting & Business Advisory','KPLK Consultancy, Pune. Strategic financial solutions, taxation, audit, accounting and compliance for business growth.'),component:HomePage});
