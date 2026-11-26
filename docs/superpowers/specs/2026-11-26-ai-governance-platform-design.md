# AI Governance Platform — Design

Status: draft for approval · Date: 2026-11-26

## 1. Intent

Build an AI governance platform with the same job as VerifyWise: give an
organization one place to inventory its AI, assess it against regulations and
standards, manage the risks, collect evidence, and prove compliance to
auditors, customers and regulators.

This is a **clean-room reimplementation**. VerifyWise is source-available under
VCEL 1.1, which forbids commercial use, hosting, rebranding, and "operating a
competing commercial product" using its code or derivatives. So:

- We study **what it does** (features, screens, workflows, entity
  relationships), documented in Appendix A in our own words.
- We write **all code, schemas, copy and framework content ourselves**. No
  files, code snippets, SQL, framework JSON, policy templates or UI assets are
  copied from the VerifyWise repo. Whoever writes code should not have the
  VerifyWise source open while doing so.
- Framework content comes from primary public sources (EU AI Act official text,
  NIST AI RMF 1.0 and Playbook, SDAIA publications, etc.). ISO standards are
  copyrighted: we store clause **numbers and our own short paraphrases**, never
  verbatim ISO text.

## 2. Goals, non-goals, anti-goals

**Goals**
- A working product an organization can self-host or use as SaaS.
- Multi-framework compliance on a **unified control library**: one control,
  one piece of evidence, satisfies requirements in many frameworks.
- Framework content is **data, not code**: adding a framework means adding a
  content pack, not writing new routes and tables.
- Bilingual (English/Arabic, full RTL) from day one. *(My call — see §8.)*

**Non-goals (for v1)**
- LLM evaluation / arena, AI gateway, shadow-AI network detection, code-repo AI
  detection, agent discovery. These are Phase 3.
- Matching VerifyWise's 28 frameworks. v1 ships 5.
- Marketplace of extensions.

**Anti-goals (failure even if it "works")**
- Any copied VerifyWise code or content (legal exposure kills the product).
- One hard-coded module per framework (VerifyWise's ISO 27001 / ISO 42001 /
  NIST routes are separate) — that does not scale and is what we're improving on.
- Tenant data leakage. Isolation is enforced in the database, not only in app code.

## 3. Approaches considered

| | Approach | Trade-off |
|---|---|---|
| **A (picked)** | **TypeScript monolith**: Next.js (App Router) UI + API in one app, PostgreSQL with Row-Level Security, Drizzle ORM, Redis + BullMQ for jobs, S3-compatible file storage. Python service added only in Phase 3 for evals. | One language, one deploy, fastest to a sellable v1; easy Docker self-hosting. Must keep module boundaries disciplined to avoid a tangled monolith. |
| B | **Supabase-based**: Next.js + Supabase (Postgres, Auth, RLS, Storage, Edge Functions). | Fastest start, auth/storage for free. Self-hosting Supabase for on-prem customers is heavy, and business logic spreads across SQL, edge functions and client. |
| C | **Mirror VerifyWise's shape**: React/Vite SPA + Express API + Python eval server from day one. | Proven shape, but three services before there's a product, and it invites copying. |

Picked **A**: on-prem/self-hosted is a core selling point for governance
buyers (regulated sectors, government), and a single-container app with
Postgres is the simplest thing to hand them. *(My call; you can override.)*

## 4. Product modules

Grouped by release phase. Each module = DB tables + API + UI pages.

### Phase 1 — MVP (core governance loop)
1. **Organizations, users, RBAC** — tenants, invitations, roles (Admin,
   Governance Lead, Reviewer, Contributor, Auditor read-only), email+password,
   Google/Microsoft OAuth, SSO (SAML/OIDC) behind a flag.
2. **AI System Registry** (VerifyWise calls these "projects / use cases") —
   each AI system has owner, purpose, business unit, lifecycle stage, deployment
   context, affected people, data categories, and a **risk classification**
   (EU AI Act tier via a guided questionnaire: prohibited / high-risk /
   limited / minimal).
3. **Model Inventory** — models (internal or third-party), provider, version,
   capabilities, license, status (approved / restricted / blocked), linked AI
   systems and datasets.
4. **Vendor Management** — AI vendors, due-diligence questionnaire, vendor
   risks, contract/review dates.
5. **Risk Register** — risks attached to an AI system, model or vendor;
   likelihood × impact scoring, inherent and residual score, treatment,
   owner, due date, linked controls. Seeded **risk library** (our own
   catalogue, informed by the public MIT AI Risk Repository taxonomy).
6. **Framework engine + compliance** — see §5. Frameworks in v1:
   EU AI Act, ISO/IEC 42001, NIST AI RMF, **SDAIA AI Ethics Principles**,
   **Saudi PDPL** *(last two are my proposal — see §8)*.
7. **Assessments** — questionnaires generated from framework requirements,
   answered per AI system; answers have status, owner, evidence links.
8. **Evidence Center** — file store with folders, versioning, expiry dates,
   linking any file to controls / answers / risks.
9. **Policy Manager** — rich-text policies with versions, approval, review
   dates, and our own starter templates (AI acceptable use, AI risk
   management, data governance for AI, human oversight).
10. **Tasks** — assignable tasks on any entity, due dates, list + timeline view.
11. **Incident Management** — AI incidents with severity, affected system,
    timeline, root cause, corrective actions, regulator-notification flag.
12. **Dashboard** — executive view (compliance % per framework, risk heatmap,
    high-risk systems, overdue items) and operator view (my tasks, pending reviews).
13. **Audit log & change history** — append-only log of every create/update/
    delete with before/after diff, shown per entity as "activity".
14. **Reports** — PDF and DOCX export: framework compliance report, AI system
    profile, risk register, Statement of Applicability (ISO 42001).

### Phase 2 — Trust & automation
15. **Trust Center** — public, branded page per org: published policies,
    framework status, sub-processors, contact.
16. **AI Assist** — LLM-drafted answers to assessment questions from the org's
    own evidence and policies (RAG over uploaded documents), always as a draft
    a human accepts. Plus a governance chat advisor.
17. **Approval workflows** — configurable multi-step approvals (e.g. new AI
    system → Legal → Security → Governance board).
18. **Automations** — "when X changes, do Y" (notify, create task, webhook),
    scheduled report emails.
19. **AI literacy / training registry** — trainings, attendance, completion
    (EU AI Act Art. 4).
20. **Dataset registry**, **FRIA** (fundamental-rights impact assessment),
    **post-market monitoring** plans, **intake forms** (public form to propose a
    new AI use case).
21. **Integrations** — Slack/Teams notifications, Jira, webhook API, public REST API + API keys.

### Phase 3 — Technical AI assurance
22. LLM evaluations (bias, toxicity, hallucination test suites), Python service.
23. Shadow-AI detection, AI agent discovery, code-repo AI detection.
24. AI gateway / usage observability, MLflow & cloud-AI-platform model sync.

## 5. Framework engine (the core design)

Content model, all tenant-independent "catalog" data shipped as versioned packs:

```
Framework (id, code, name, version, jurisdiction, locale texts)
 └─ Section            (e.g. "Chapter III", "Clause 6", "GOVERN")
     └─ Requirement    (e.g. "Art. 9(2)", "6.1.2", "GOVERN 1.1")
           text (our paraphrase or public official text), guidance

Control (unified library: id, code "AIG-RM-01", title, description, type)
ControlRequirementMap (control_id, requirement_id, coverage: full|partial)
Question (requirement_id, prompt, answer_type, help)
RiskTemplate (library risks, mapped to controls)
```

Tenant data on top:

```
FrameworkAdoption (org, framework, scope: org-wide | AI system)
ControlImplementation (org, control, status, owner, implementation notes,
                       applicability + justification  → feeds SoA)
EvidenceLink (evidence_file ↔ control_impl | answer | risk | incident)
Answer (org, ai_system, question, response, status, reviewer)
```

Compliance % for a framework = requirements whose mapped controls are all
"implemented" and evidenced ÷ applicable requirements. Because controls are
shared, implementing `AIG-RM-01` once advances EU AI Act Art. 9, ISO 42001
6.1, and NIST MAP/MANAGE together — the cross-framework view is a headline feature.

**Scoping and scoring rules** *(my calls, settled after builder review)*:

- **Two levels.** A `ControlImplementation` exists at org level and may be
  **overridden per AI system** (`ai_system_id` nullable). The system-level row
  wins if present. Compliance % is shown **per AI system and rolled up per org**.
- **Applicability rules in packs.** Each requirement carries an `applies_when`
  expression over AI-system attributes: EU AI Act risk tier, operator role
  (provider / deployer / importer / distributor), GPAI flag, sector. Classifying
  a system evaluates these rules, and that produces its checklist.
- **Scoring.** Each applicable requirement scores 1, 0.5 or 0:
  - 1 when every mapped control is `implemented` and has at least one
    *approved, unexpired* evidence item.
  - 0.5 when the only mappings are `partial`, or some mapped controls are still in progress.
  - 0 otherwise.

  Controls marked `not_applicable`, with a justification, take their
  requirements out of the total. Assessment answers feed the score only for
  requirements that have no mapped control.
- **Evidence** needs a reviewer to approve it. Expired evidence stops counting
  and triggers a reminder 30 days before expiry.
- **Users and orgs.** One user can belong to many orgs, for consultancies and
  group companies. The active org is picked per session and set as
  `app.org_id` for RLS. Roles apply across the whole org. On top of that, each
  AI system has an owner and members, and Contributors can edit only systems
  they belong to.
- **Audit capture** happens in the service layer, in the same transaction as
  the change (not DB triggers), and writes to the hash-chained `audit_events` table.

Packs are JSON/YAML files in `content/frameworks/<code>/<version>/`, validated
by a schema and loaded by a seeder; new framework versions are added
side-by-side and orgs migrate explicitly.

## 6. Architecture

```
Browser (Next.js React UI, shadcn/ui, en/ar RTL via next-intl)
   │
Next.js app  ── route handlers /api/v1/*  (Zod-validated, OpenAPI generated)
   │   modules/: auth, org, aiSystems, models, vendors, risks, frameworks,
   │             assessments, evidence, policies, tasks, incidents,
   │             reports, audit, notifications
   │
   ├─ PostgreSQL 16  (Drizzle; every tenant table has org_id + RLS policy
   │                  using SET app.org_id per request/transaction)
   ├─ Redis + BullMQ worker (same image, different entrypoint):
   │     report generation, emails, reminders, automations, AI jobs
   ├─ S3-compatible storage (MinIO for on-prem) for evidence files
   └─ LLM provider adapter (Phase 2; Anthropic/OpenAI/Azure, per-org key option)
```

- **Multi-tenancy**: shared DB, `org_id` on every tenant row, Postgres RLS as
  the enforcement layer; one deployment can be single-tenant (on-prem) or
  multi-tenant (SaaS) via config.
- **Audit**: change capture in the service layer (same transaction) writing to an
  append-only `audit_events` table (hash-chained for tamper evidence).
- **Reports**: HTML templates → PDF (Playwright/Chromium) and `docx` library for Word.
- **Deploy**: Docker Compose (app, worker, postgres, redis, minio) for
  self-host; Helm chart later.
- **Testing**: Vitest unit tests on services, Playwright E2E on core flows,
  RLS isolation tests that try cross-tenant reads.

## 7. Key user flows (v1)

1. Admin signs up org → invites team → adopts EU AI Act + ISO 42001.
2. Contributor registers an AI system → answers classification questionnaire →
   system tagged "high-risk" → platform generates its required assessment and
   control checklist.
3. Owner implements controls, uploads evidence, links risks; reviewer approves answers.
4. Governance lead watches dashboard, exports ISO 42001 SoA and EU AI Act report for audit.
5. Incident logged → linked to system and risk → corrective task assigned.

## 8. Calls I made (please check)

- **Clean-room only** (§1) — not optional given VCEL 1.1.
- **Stack A** (Next.js + Postgres/RLS + BullMQ), TypeScript end to end.
- **Arabic/RTL + Saudi frameworks (SDAIA AI Ethics, PDPL) in v1** — VerifyWise
  covers Gulf PDPLs only as checklists; a bilingual, Gulf-first product is a
  clear differentiator. Drop if your market is elsewhere.
- **v1 = Phase 1 only** (14 modules, 5 frameworks).
- **Working name**: none chosen; repo is `miras`, which could be the product name.
- Roles list in module 1 and the control code scheme (`AIG-XX-nn`).

## 9. Left to the builder

UI layout and visual design, exact table columns beyond the fields named,
library choices within the stack (e.g. rich-text editor), report styling,
pagination/search details, and the wording of our own framework paraphrases
(must be reviewed by someone with compliance expertise before launch).

---

## Appendix A — VerifyWise functional teardown (observed, described in our words)

Sources: public README, product docs, and the repo's directory/route/model
names (inspected for structure only, nothing copied).

- **Stack**: React (Vite) SPA, Node/Express API, PostgreSQL, Redis/BullMQ,
  Python EvalServer, Python AI gateway, Docker/K8s, optional multi-tenant mode
  via env flag.
- **Entities**: organization, user, role, project (AI use case), project
  members, project frameworks/scope, framework → topic/subtopic/question
  (assessments) and control category → control → subcontrol (compliance),
  risks + risk history, model inventory + model risks, vendors + vendor risks,
  policies (+ folders, linked objects), tasks + assignees, incidents, files /
  virtual folders / evidence hub, datasets, training register, trust centre,
  approval workflows + requests, automations (trigger → action, execution
  log), intake forms, FRIA, post-market monitoring, CE marking, share links,
  notes, subscriptions/tiers, SSO config, API tokens, extensions, change
  history for most entities.
- **Feature list** (README): EU AI Act, ISO 42001, NIST AI RMF, ISO 27001 plus
  24 more frameworks (SOC 2, GDPR, HIPAA, DORA, Saudi/UAE/Qatar/Bahrain PDPL,
  etc.); executive & operating dashboards; vendors; use cases & risks; tasks
  with timeline; LLM evals & arena; evidence center; public trust center; AI
  literacy register; AI advisor chat; AI-generated code detection; shadow AI;
  agent discovery; activity history; MIT & IBM risk repository import; model
  inventory; policy manager with templates; risk/control mappings; CE marking;
  datasets; desktop notifications; approvals; PDF/DOCX reports; audit event
  logs; incidents; extensions (Slack, MLflow, Azure AI Foundry, Jira Assets,
  Excel import); automations & webhooks; Google OAuth / Entra ID.
- **Observed weakness we design around**: per-framework code paths (separate
  ISO 27001 / ISO 42001 / NIST routes) rather than one data-driven engine.
