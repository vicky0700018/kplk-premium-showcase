import { createFileRoute } from '@tanstack/react-router';
import { AdminLogin } from '@/components/kplk/admin';
import { pageHead } from '@/lib/content';
export const Route=createFileRoute('/admin/login')({head:()=>pageHead('Demo Admin Login','Frontend-only KPLK Consultancy demo content studio login.'),component:AdminLogin});
