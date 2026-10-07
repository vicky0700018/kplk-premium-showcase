import { createFileRoute } from '@tanstack/react-router';
import { ServicesPage } from '@/components/kplk/pages';
import { pageHead } from '@/lib/content';
export const Route=createFileRoute('/services')({head:()=>pageHead('Financial & Business Services','Explore taxation, GST, accounting, audit, company registration, financing and Virtual CFO services.'),component:ServicesPage});
