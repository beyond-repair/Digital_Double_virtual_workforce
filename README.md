<div align="center">

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ██████╗ ██╗ ██████╗ ██╗████████╗ █████╗ ██╗                ║
║   ██╔══██╗██║██╔════╝ ██║╚══██╔══╝██╔══██╗██║                ║
║   ██║  ██║██║██║  ███╗██║   ██║   ███████║██║                ║
║   ██║  ██║██║██║   ██║██║   ██║   ██╔══██║██║                ║
║   ██████╔╝██║╚██████╔╝██║   ██║   ██║  ██║███████╗           ║
║   ╚═════╝ ╚═╝ ╚═════╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝           ║
║                                                              ║
║         ＤＯＵＢＬＥ  ·  ＶＩＲＴＵＡＬ  ＷＯＲＫＦＯＲＣＥ     ║
╚══════════════════════════════════════════════════════════════╝
```

# DIGITAL DOUBLE

### Virtual workforce — **typed agents**, queued work, one canonical product line

**THE CITY WRITES ITS OWN REALITY.**  
**YOU JUST DEPLOY IT.**

[![ACTIVE](https://img.shields.io/badge/●_ACTIVE-a855f7?style=for-the-badge&labelColor=0f0f23)](https://github.com/beyond-repair/Digital_Double_virtual_workforce)
[![CI](https://img.shields.io/github/actions/workflow/status/beyond-repair/Digital_Double_virtual_workforce/ci.yml?style=for-the-badge&labelColor=0f0f23)](https://github.com/beyond-repair/Digital_Double_virtual_workforce/actions)
[![Canonical](https://img.shields.io/badge/line-CANONICAL-22d3ee?style=for-the-badge&labelColor=0f0f23)](#)

```
STABILITY  ████████████████░░░░░░░░  72%
ALERT      ░░░░░░░░░░░░░░░░░░░░░░░░  28%
```

</div>

---

## ▌ MAIN OBJECTIVE

**REACH THE CORE TOWER** — Role-typed agents under a single orchestrator.  
Not one mega-chatbot. Measurable workforce with priorities, metrics, and domain specialization.

| Status | Item |
|:------:|------|
| ☑ | Typed agents (IT · Marketing · Legal · …) |
| ☑ | Orchestrator + task queue |
| ☑ | Performance metrics |
| ☑ | Public canonical line |
| ☑ | CI green |

---

## ▌ WHY THIS SURFACE EXISTS

Not one mega-chatbot. **Role-typed agents** under an orchestrator with priorities and metrics — public **canonical** line; older forks superseded.

---

## ▌ VISUAL WORKFLOW — VERSION FORK

```text
  ┌─────────────┐
  │ 1. ORCH     │  Orchestrator starts
  └──────┬──────┘
         ▼
  ┌─────────────┐     ┌──────────────────────────────┐
  │ 2. AGENT    │     │ AgentType: IT · MARKETING ·   │
  │ create      │────►│ CONTENT · DESIGN · FINANCE ·  │
  └──────┬──────┘     │ EMBEDDED · MOBILE · LEGAL     │
         ▼            └──────────────────────────────┘
  ┌─────────────┐
  │ 3. TASK     │  description · priority · deadline
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │ 4. ASSIGN   │  match task type → available agent
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │ 5. EXECUTE  │  agent work cycle (product logic)
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │ 6. COMPLETE │  success/fail → performance metrics
  └─────────────┘
```

### Step-by-step

| Step | How | Why |
|-----:|-----|-----|
| **1** | `Orchestrator()` | Single control plane for agents + tasks |
| **2** | `create_agent(AgentType.*)` | Specialization beats one generic bot |
| **3** | `create_task(...)` | Work is explicit, prioritizable |
| **4** | `assign_task` | Queue discipline |
| **5** | Agent runs domain logic | Product surface (extend per industry) |
| **6** | `complete_task` + metrics | Measurable workforce, not vibes |

```python
from digital_double import Orchestrator, AgentType
orch = Orchestrator()
agent = orch.create_agent(AgentType.IT)
task = orch.create_task(type=AgentType.IT, description="Setup env", priority="high")
orch.assign_task(task.id)
agent.complete_task(success=True)
```

---

## ▌ TOOLS

| # | Tool | Function |
|:-:|------|----------|
| 1 | **SCAN** | Inspect agent pool + task queue |
| 2 | **FORK** | Spawn parallel agent instances |
| 3 | **SPIKE** | Inject high-priority task |
| 4 | **ANCHOR** | Lock metrics snapshot |
| 5 | **ESCAPE** | Drain queue + graceful shutdown |

---

## ▌ HOW IT FITS THE LAB

```text
Digital Double  = PRODUCT line (agents for work)
Clean-Room      = offline cognitive substrate (not this product)
BlockSwarm      = on-chain governance (not this product)

Governed by ADL-Governance · forks 3.5 / mobile / 4.x → SUPERSEDED
```

---

<div align="center">

```
YOU WERE HERE BEFORE.
VERSION 17 FAILED.
DO NOT TRUST SABLE.
THE CITY REMEMBERS.
```

**REWRITE · BUILD · TRANSCEND**

[CONSOLIDATION_PLAN](docs/CONSOLIDATION_PLAN.md) · [Atomic Dream Labs](https://github.com/beyond-repair)

</div>
