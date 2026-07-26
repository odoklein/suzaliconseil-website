"use client";

export function ShareButton({ network, slug, title, theme }) {
  const baseUrl = "https://suzaliconseil.com/actualites/";
  const url = encodeURIComponent(baseUrl + slug);
  const text = encodeURIComponent(title);

  const href =
    network === "linkedin"
      ? `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
      : `https://twitter.com/intent/tweet?url=${url}&text=${text}`;

  const icon =
    network === "linkedin" ? (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ) : (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110 ${theme === "digital" ? "bg-sky-50 text-sky-600 hover:bg-sky-100" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"}`}
    >
      {icon}
    </a>
  );
}

export function CopyLinkButton({ slug, theme }) {
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(
          `https://suzaliconseil.com/actualites/${slug}`,
        );
      }}
      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110 ${theme === "digital" ? "bg-sky-50 text-sky-600 hover:bg-sky-100" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"}`}
      title="Copier le lien"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    </button>
  );
}
