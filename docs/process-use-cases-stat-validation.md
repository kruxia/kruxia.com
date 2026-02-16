# Process Use Cases: Stat Validation & Implementation Plan

**Date:** 2026-02-16
**File:** `src/components/ProcessUseCasesSection.tsx`
**Goal:** Validate every stat on the page, source manual-side benchmarks, and plan test workflows to validate AI-side claims.

---

## Current Stats Audit

### 1. Invoice Processing

| Stat on Page | Value | Status |
|---|---|---|
| Cost per invoice | $0.18 | Needs workflow validation |
| Saved per invoice | 15 min | Research-supported |
| Auto-approved | 98.5% | **Needs correction** |

### 2. Purchase Order Routing

| Stat on Page | Value | Status |
|---|---|---|
| Approval cycle | 1-2 days | Research-supported |
| Auto-approved | 70% | Research-supported |

### 3. Refund Decisions

| Stat on Page | Value | Status |
|---|---|---|
| Response time | < 30s | Needs workflow validation |
| Cost per decision | $0.12 | Needs workflow validation |

### 4. Client Onboarding

| Stat on Page | Value | Status |
|---|---|---|
| Less manual work | 80% | **Needs qualification** |
| Audit trail | 100% | Feature claim (valid) |

---

## Research Findings: Manual-Side Benchmarks

### Invoice Processing

| Benchmark | Value | Source |
|---|---|---|
| Manual cost per invoice | $12.88 avg | [Ardent Partners, AP Metrics That Matter 2024](https://tradeshift.com/wp-content/uploads/2024/05/Ardent-Partners-AP-Metrics-that-Matter-in-2024-Tradeshift.pdf) |
| Manual cost range | $10-$15 | [Levvel Research / Stampli](https://www.stampli.com/blog/accounts-payable/procure-to-pay-kpis/) |
| Hands-on time per invoice | 12-15 min | [IOFM](https://www.iofm.com/ask-the-expert/average-time-to-process-an-invoice) |
| Best-in-class STP rate | up to 95% | [Hackett Group](https://www.thehackettgroup.com/eprocurement-hackett/) |
| Measured best-in-class avg STP | 67.2% | [Ardent Partners, State of ePayables 2020](https://www.medius.com/resources/guides-reports/ardent-partners-2023-state-of-epayables/) |
| Vendor-claimed STP (Basware) | 89% | [Basware / Ardent Partners 2024](https://www.basware.com/en/resources/ardent-partners-accounts-payable-metrics-that-matter-in-2024) |

**Original source of $12.50 / $0.18 / 15 min:** Demo implementation plan (line 59, 365, 373). The $12.50 is a rounded industry figure consistent with Ardent Partners ($12.88). The $0.18 is an estimated AI cost for a single invoice workflow ($0.15-$0.22 range per demo plan line 365). The 15 min is consistent with IOFM data.

**Issue: 98.5% auto-approved.** No external benchmark supports this. The highest independent figure is Hackett's "up to 95%." The demo plan's seed runner uses ~88% match rate (12% discrepancy rate, line 527-528). This stat appears to have been aspirational.

### Purchase Order Routing

| Benchmark | Value | Source |
|---|---|---|
| Manual PO cycle time | ~35 hours (~1.5 days) | [Hackett Group](https://www.thehackettgroup.com/sourcing-procurement-strategy/sourcing-procurement-benchmarking/) |
| Bottom performers | 2+ business days | [Procurify](https://www.procurify.com/blog/improve-purchase-order-cycle-time/) |
| Median electronic approval rate | 80% | [APQC](https://www.apqc.org/resources/benchmarking/open-standards-benchmarking/measures/percentage-purchase-orders-approved) |

**Verdict:** Both stats are well-supported. 1-2 days aligns with Hackett (35 hrs). 70% auto-approved is conservative relative to APQC's 80% electronic approval median.

### Refund Decisions

| Benchmark | Value | Source |
|---|---|---|
| Manual cost per interaction (voice) | $5-$12 | [ContactBabel, US Contact Center DMG 2025](https://www.norango.ai/blog/industry-insights-16/cost-per-call-contact-centre-kpi-352) |
| Manual cost (email ticket) | $2-$5 | [ContactBabel / MaestroQA](https://www.maestroqa.com/blog/call-center-cost-per-call) |
| Manual email response time | ~8 hours | [Freshworks Benchmark 2025](https://company-assets.freshworks.com/marketing/freshdesk/Customer-Service-Benchmark-Report-2025.pdf) |

**Verdict:** $0.12/decision is plausible at current LLM pricing (1-2K input tokens + 200-500 output tokens). <30s is plausible for a well-prompted LLM. Both need workflow validation.

### Client Onboarding

| Benchmark | Value | Source |
|---|---|---|
| McKinsey automation efficiency gain | 20% | [McKinsey](https://www.mckinsey.com/industries/financial-services/our-insights/winning-corporate-clients-with-great-onboarding) |
| McKinsey time reduction | 30% | [McKinsey](https://www.mckinsey.com/industries/financial-services/our-insights/winning-corporate-clients-with-great-onboarding) |
| Fenergo "smooth" before automation | 6.2% | [Fenergo](https://resources.fenergo.com/newsroom/research-study-on-time-cost-and-challenges-of-client-onboarding) |
| Fenergo "smooth" after automation | 67.5% | [Fenergo](https://resources.fenergo.com/newsroom/research-study-on-time-cost-and-challenges-of-client-onboarding) |

**Issue: "80% less manual work"** is above McKinsey's documented 20-30% gains. It's plausible for specific subtasks (document extraction, data entry) but not for the entire onboarding process. Needs qualification.

---

## Implementation Plan

### Phase 1: Landing Page Stat Corrections (no workflow needed)

- [x] **1.1** Research manual-side benchmarks for all four processes
- [x] **1.2** Identify which stats lack credible sources
- [x] **1.3** Update invoice auto-approval rate: change 98.5% to 90%
  - Between the demo seed runner (88%) and vendor claims (89-90%); reads as a round, honest number
- [x] **1.4** Qualify client onboarding "80% less manual work" → "80% less paperwork"
  - Scopes the claim to document-handling subtasks where the reduction is defensible
- [x] **1.5** Add before/after comparison framing to each card
  - Stats with a `before` field render as: red strikethrough manual value → green Kruxia value
  - Stats without `before` (e.g., "90% Auto-approved") render as plain foreground text
  - Before values sourced from research: $12.50 (Ardent Partners), 15 min (IOFM), 1-3 weeks (Hackett/APQC), ~8 hrs (Freshworks), $5-$12 (ContactBabel)

### Phase 2: Add Source Attribution (after Phase 3 validation)

- [ ] **2.1** Add source footnote links to each process card, matching the Industries section pattern
- [ ] **2.2** Add a `manualBenchmark` field to each process card data (value + source + URL)
- [ ] **2.3** Sources will combine industry benchmarks (manual side) with validated workflow data (AI side)

### Phase 3: Build & Run Validation Workflows

These require Kruxia Flow test workflows to validate the AI-side cost and timing claims.

**Prerequisite:** A running Kruxia Flow instance with LLM provider access.

- [ ] **3.1** Invoice Processing validation workflow
  - Build: PDF extraction → PO lookup → validation → decision gate
  - Run against 10+ sample invoices of varying formats
  - Measure: actual LLM cost per invoice, end-to-end time, match rate
  - Expected: $0.15-$0.22 cost range (per demo plan), <10s processing time
  - **Validates:** $0.18 cost per invoice, 15 min saved (vs manual baseline)
  - **Also validates for hero section:** The invoice card showing $12.50 → $0.18

- [ ] **3.2** PO Routing validation workflow
  - Build: PO intake → policy check → AI analysis → approval/escalation gate
  - Run against 20+ sample POs (mix of routine and exceptional)
  - Measure: auto-approval rate, processing time, cost per PO
  - Expected: 60-80% auto-approval rate, <15s processing, <$0.10 cost
  - **Validates:** 70% auto-approved

- [ ] **3.3** Refund Decision validation workflow
  - Build: Request intake → order history lookup → policy eval → AI decision → confidence gate
  - Run against 20+ sample refund requests
  - Measure: cost per decision, response time, accuracy vs manual decisions
  - Expected: $0.05-$0.15 cost, <30s response
  - **Validates:** $0.12 cost per decision, <30s response time

- [ ] **3.4** Client Onboarding validation workflow
  - Build: Document collection → extraction → compliance verification → account setup
  - Run against 5+ sample onboarding packages
  - Measure: manual steps eliminated, time per onboarding, document processing accuracy
  - Expected: significant reduction in document-handling tasks
  - **Validates:** "80% less paperwork" claim

### Phase 4: Update Landing Page with Validated Data

- [ ] **4.1** Replace estimated stats with measured values from Phase 3
- [ ] **4.2** Add manual baselines with source links
- [ ] **4.3** Update the hero section invoice card if measured cost differs from $0.18
- [ ] **4.4** Update the SolutionSection descriptions to reflect validated numbers
- [ ] **4.5** Cross-check demo implementation plan numbers against validated data; update demo plan if needed

---

## Relationship to Demo Implementation Plan

The demo plan (`kruxiaflow-internal/planning/kruxia-flow-demo-implementation-plan.md`) defines two core demo workflows:

1. **Invoice-to-PO Reconciliation** (Section 5.1) — maps directly to Phase 3.1 above
2. **Contract Review Pipeline** (Section 5.2) — maps to the SolutionSection stats, not ProcessUseCasesSection

The demo plan's **seed runner** (Section 6.3) is designed to execute 350-500 real workflows and generate genuine cost/timing data. This seed runner, once built, would also serve as the validation mechanism for Phase 3 — the same workflows that seed the demo database would produce the validated stats for the landing page.

**Key insight:** Phase 3 of this plan and the demo seed runner are the same work. Building the demo workflows (demo plan P0) inherently validates the landing page claims. The implementation order should be:

1. Fix the landing page stats that are clearly wrong now (Phase 1) — **no dependency on demo build**
2. Build the demo workflows (demo plan Sections 5.1-5.2) — **already planned**
3. Run validation batches and capture actual cost/timing data (Phase 3)
4. Update landing page with measured values (Phase 4)

---

## Notes on the Claude Chat Origin

The demo implementation plan references market research throughout (e.g., "73% of accounts-payable teams struggle with PO-to-invoice matching," "$12.50/unit manual cost," "3.2 hours per contract review from LegalOn survey"). These figures were assembled during the Claude chat that produced the plan. The specific stats in the landing page's ProcessUseCasesSection appear to have been derived from a combination of:

- Industry benchmarks cited in the demo plan (invoice cost, contract review time)
- Estimated AI costs from the demo workflow design ($0.15-$0.22 per invoice)
- Aspirational targets not yet validated by running workflows (98.5% STP, 80% less manual work)

The PO routing and refund decision stats do not appear in the demo plan at all — they were likely generated for the landing page without being traced back to specific sources or workflow tests.
