import { createFileRoute } from '@tanstack/react-router';
import { BlogDetail } from '@/components/kplk/pages';
import { pageHead, defaultBlogs } from '@/lib/content';
export const Route=createFileRoute('/insights/$slug')({head:({params})=>pageHead(defaultBlogs.find(x=>x.id===params.slug)?.title||'Insight & Perspective', 'Professional insights perspectives from KPLK Consultancy, Pune.'),component:Page});
function Page(){const {slug}=Route.useParams();return <BlogDetail slug={slug}/>}
