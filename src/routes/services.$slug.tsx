import { createFileRoute } from '@tanstack/react-router';
import { ServiceDetail } from '@/components/kplk/pages';
import { pageHead, defaultServices } from '@/lib/content';
export const Route=createFileRoute('/services/$slug')({head:({params})=>pageHead(defaultServices.find(x=>x.id===params.slug)?.title||'Service Expertise', 'Professional services perspectives from KPLK Consultancy, Pune.'),component:Page});
function Page(){const {slug}=Route.useParams();return <ServiceDetail slug={slug}/>}
