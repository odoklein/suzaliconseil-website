# SEO changelog

## Phase 1: Repo audit (2026-10-16), branch `seo/phase-1`

- Added `SEO_PLAN_CLAUDE_CODE.md` (the plan) and `SEO_AUDIT.md` (findings). **No site code changed.**
- Done by hand earlier (outside the plan): Google Search Console verification file `public/google2f092a151e9f95b5.html`, live on production.

**Left for the team to do by hand**
- Optional: check/pin the Cloudflare `www` to non-`www` redirect rule. It works today (single 301, path and query preserved, re-tested 2026-10-22); the "possible loop" reported in the first version of the audit was a false alarm from a faulty test.
- Answer the decisions in `SEO_AUDIT.md` section 10 before Phase 2.
