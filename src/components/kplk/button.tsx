import type { ButtonHTMLAttributes } from 'react';
export function Button({variant='primary',className='',...props}:ButtonHTMLAttributes<HTMLButtonElement>&{variant?:'primary'|'gold'|'outline'|'ghost'|'danger'|'icon'}){return <button className={`button button-${variant} ${className}`} {...props}/>}
