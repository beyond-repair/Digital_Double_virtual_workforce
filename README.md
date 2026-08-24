<div align="center">

# Digital Double

### Virtual workforce — **typed agents**, queued work, one canonical product line

[![ACTIVE](https://img.shields.io/badge/status-ACTIVE-22c55e?style=for-the-badge)](https://github.com/beyond-repair/Digital_Double_virtual_workforce)
[![CI](https://img.shields.io/github/actions/workflow/status/beyond-repair/Digital_Double_virtual_workforce/ci.yml?style=for-the-badge)](https://github.com/beyond-repair/Digital_Double_virtual_workforce/actions)

</div>

---

## Why it is unique

Not one mega-chatbot. **Role-typed agents** (IT, marketing, legal, …) under an orchestrator with priorities and metrics — public **canonical** line; older forks superseded.

---

## Visual workflow

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

### Step-by-step — how & why

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

## How it works with the lab

```text
Digital Double  = PRODUCT line (agents for work)
Clean-Room      = offline cognitive substrate (not this product)
BlockSwarm      = on-chain governance (not this product)

Governed by ADL-Governance · forks 3.5 / mobile / 4.x → SUPERSEDED
```

---

<div align="center">

[CONSOLIDATION_PLAN](docs/CONSOLIDATION_PLAN.md) · [Atomic Dream Labs](https://github.com/beyond-repair)

</div>
