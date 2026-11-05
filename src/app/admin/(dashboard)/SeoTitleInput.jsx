"use client";

import { useId, useState } from "react";

// The article page renders `${seoTitle} | Suzali Conseil`. Google shows about
// 60 characters, so the admin keeps 42 + 17 = 59 and shows both counts.
export const SEO_TITLE_MAX = 42;
const SUFFIX = " | Suzali Conseil";
const SERP_MAX = 60;

export default function SeoTitleInput({ defaultValue = "", className }) {
  const countId = useId();
  const [value, setValue] = useState(defaultValue);
  const length = value.length;
  const full = length > 0 ? length + SUFFIX.length : 0;

  return (
    <>
      <input
        type="text"
        name="seoTitle"
        maxLength={SEO_TITLE_MAX}
        defaultValue={defaultValue}
        onChange={(e) => setValue(e.target.value)}
        aria-describedby={countId}
        className={className}
      />
      <span
        id={countId}
        aria-live="polite"
        className={`mt-1 block text-[11px] font-normal normal-case tracking-normal ${
          length >= SEO_TITLE_MAX ? "text-amber-700" : "text-gray-400"
        }`}
      >
        {length} / {SEO_TITLE_MAX} caractères
        {length > 0 && ` · titre affiché sur Google : ${full} / ${SERP_MAX} (avec « | Suzali Conseil »)`}
      </span>
    </>
  );
}
