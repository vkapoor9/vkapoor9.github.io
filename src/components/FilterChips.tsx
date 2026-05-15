import { useEffect, useState } from 'react';

interface Props {
  categories: string[];
}

export default function FilterChips({ categories }: Props) {
  const [active, setActive] = useState<string>('All');

  useEffect(() => {
    apply(active);
  }, [active]);

  function apply(cat: string) {
    const cards = document.querySelectorAll<HTMLElement>('[data-project-card]');
    cards.forEach((card) => {
      const cardCat = card.getAttribute('data-category');
      const show = cat === 'All' || cardCat === cat;
      card.style.display = show ? '' : 'none';
    });
  }

  const all = ['All', ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {all.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`px-3 py-1.5 rounded-full text-[13px] border transition-colors ${
              isActive
                ? 'border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)] text-[var(--color-accent)]'
                : 'border-[var(--color-line)] text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] hover:border-[var(--color-ink-dim)]'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
