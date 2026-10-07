import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/kplk/pages';
import { pageHead } from '@/lib/content';
export const Route=createFileRoute('/contact')({head:()=>pageHead('Contact & Free Consultation','Contact KPLK Consultancy in Kharadi, Pune for taxation, audit, accounting and business advisory.'),component:ContactPage});
