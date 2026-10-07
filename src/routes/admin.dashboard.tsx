import { createFileRoute } from '@tanstack/react-router';
import { AdminDashboard } from '@/components/kplk/admin';
import { pageHead } from '@/lib/content';
export const Route=createFileRoute('/admin/dashboard')({head:()=>pageHead('Demo Content Studio','Manage the KPLK Consultancy frontend demo content in your browser.'),component:AdminDashboard});
