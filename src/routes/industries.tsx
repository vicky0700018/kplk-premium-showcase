import { createFileRoute } from '@tanstack/react-router';
import { IndustriesPage } from '@/components/kplk/pages';
import { pageHead } from '@/lib/content';
export const Route=createFileRoute('/industries')({head:()=>pageHead('Industries We Serve','Financial and compliance expertise for startups, SMEs, manufacturers, real estate and corporate businesses.'),component:IndustriesPage});
