import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/kplk/pages';
import { pageHead } from '@/lib/content';
export const Route=createFileRoute('/about')({head:()=>pageHead('About Us','Discover KPLK’s professional approach to taxation, compliance and financial advisory in Pune.'),component:AboutPage});
