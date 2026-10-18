---
name: content-writing
description: Voice and style for any text on Jana's portfolio (bio, headlines, project copy, experience bullets, CTAs). Use whenever writing or editing user-facing copy in src/data/.
---

# Portfolio voice

Audience: recruiters and hiring managers for DevOps / SRE / infrastructure / sysadmin roles, mostly in Saudi Arabia; also engineers skimming for depth.

**Tone:** calm, confident, specific. An engineer who keeps things running, not a marketer.

## Rules
- First person on the site ("I build…"); no "passionate", "innovative", "cutting-edge", "seamless", "leverage", "robust".
- Concrete beats adjectives: name the tool, the number, the outcome. "Migrated 6 services from GCP to a VPS" > "Led a complex migration".
- Never invent numbers, employers, dates or tools. If a metric would help but isn't known, ask Jana.
- Short sentences. Bullets ≤ 2 lines on desktop. Start bullets with a verb or concrete noun.
- Titles: Sentence case for prose, Title Case for project names only.
- Keep the infra/DevOps identity first; ERP/automation/dev work is the differentiator, not the lead.
- Consistent terms: "Kubernetes (k3s)", "ERPNext", "n8n", "Power BI", "VPS", "CI/CD", "Oracle Cloud (OCI)".
- Use the en dash in ranges via "—" in periods (`Dec 2025 — Jun 2026`), matching existing data.
- Sensitive: no phone number, no client names, no IPs/ports.

## Arabic (`src/i18n/ar.ts`)
- Every English change needs the Arabic counterpart in the same edit.
- Natural Modern Standard Arabic, not literal translation. Feminine first person/role forms (مهندسة، مؤسِّسة، متاحة).
- Keep tool and product names in Latin script (Docker, ERPNext, BoostSEO); prefix with و directly (وDocker).
- Company names stay in Latin script until Jana confirms official Arabic spellings.
- Western digits (2025), em dash for ranges, Arabic month names (يناير، فبراير…).
