<div align="center">

# Digital Double

### Virtual workforce · Multi-industry agents · Task orchestration

[![Status](https://img.shields.io/badge/status-ACTIVE-22c55e?style=for-the-badge)](https://github.com/beyond-repair/Digital_Double_virtual_workforce)
[![Canonical](https://img.shields.io/badge/canonical-public-0ea5e9?style=for-the-badge)](CANONICAL.md)
[![CI](https://img.shields.io/github/actions/workflow/status/beyond-repair/Digital_Double_virtual_workforce/ci.yml?style=for-the-badge&label=CI)](https://github.com/beyond-repair/Digital_Double_virtual_workforce/actions)
[![Governance](https://img.shields.io/badge/ADL--Governance-7c3aed?style=for-the-badge)](https://github.com/beyond-repair/ADL-Governance)

**Public product line** for Atomic Dream Labs · other Digital Double forks are superseded

</div>

---

## What it does

Spin up specialized agents, queue work by priority, assign, complete, and track performance — across domains like IT, marketing, content, design, finance, embedded, mobile, and legal ops.

| Capability | Detail |
|------------|--------|
| **Agents** | Typed roles (`AgentType.*`) with status & metrics |
| **Tasks** | Priority queue, assignment, deadlines |
| **Orchestrator** | Create · assign · monitor |
| **UI track** | Vite / React front-end (secondary to Python core) |

---

## Quick start (Python core)

```bash
git clone https://github.com/beyond-repair/Digital_Double_virtual_workforce.git
cd Digital_Double_virtual_workforce
python tests/test_orchestrator_smoke.py
```

```python
from digital_double import Orchestrator, AgentType

orch = Orchestrator()
agent = orch.create_agent(AgentType.IT)
task = orch.create_task(
    type=AgentType.IT,
    description="Setup development environment",
    priority="high",
)
orch.assign_task(task.id)
agent.complete_task(success=True)
```

---

## Agent types

```text
IT · MARKETING · CONTENT · DESIGN · FINANCE · EMBEDDED · MOBILE · LEGAL
```

---

## Consolidation

| Repo | Role |
|------|------|
| **This repo** | Public **canonical** |
| `Digital_Double_Virtual_Workforce_4.2` | Private merge source |
| 3.5 / mobile forks | **SUPERSEDED** |

See [docs/CONSOLIDATION_PLAN.md](docs/CONSOLIDATION_PLAN.md) · [docs/MIGRATION.md](docs/MIGRATION.md)

---

<div align="center">

**[Atomic Dream Labs](https://github.com/beyond-repair)** · [ADL-Governance](https://github.com/beyond-repair/ADL-Governance)

<sub>One product surface. No parallel “source of truth” forks.</sub>

</div>
