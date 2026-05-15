import { useState } from 'react';

interface Props {
  email: string;
}

export default function CopyEmail({ email }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors text-left"
    >
      <span>{email}</span>
      <span className="text-[11px] font-mono text-[var(--color-ink-dim)]">
        {copied ? '✓ copied' : '⌘ copy'}
      </span>
    </button>
  );
}
