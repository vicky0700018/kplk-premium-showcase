import { createFileRoute } from '@tanstack/react-router';
import { PricingPage } from '@/components/kplk/pages';
import { pageHead } from '@/lib/content';
export const Route=createFileRoute('/pricing')({head:()=>pageHead('Illustrative Service Packages','Explore sample KPLK service packages. All pricing is illustrative demo pricing, not official fees.'),component:PricingPage});
