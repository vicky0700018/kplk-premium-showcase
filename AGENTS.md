<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Preserve the platform's TanStack routing and Vite bootstrap; all requested interactions are client-side React with no backend integrations.
- Use a custom native React design-system Button and CSS tokens, not external UI frameworks, to keep the requested bespoke presentation.
- Store demo content in a shared React context backed by localStorage after hydration; public pages and the frontend CMS consume the same content.
- Keep service, industry, blog, pricing, profile and gallery records in one typed mock-content module so demo edits propagate consistently.
