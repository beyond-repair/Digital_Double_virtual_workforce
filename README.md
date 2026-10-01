<div align="center">

[![Lifecycle](https://img.shields.io/badge/●_ACTIVE-22c55e?style=for-the-badge&labelColor=0f0f23)](https://github.com/beyond-repair/ADL-Governance)
[![Claim](https://img.shields.io/badge/Claim_software-22c55e?style=for-the-badge&labelColor=0f0f23)](https://github.com/beyond-repair/ADL-Governance/blob/main/docs/CLAIM_VALIDATION.md)
[![Governance](https://img.shields.io/badge/ADL--Governance-7c3aed?style=for-the-badge&labelColor=0f0f23)](https://github.com/beyond-repair/ADL-Governance)

```
LIFECYCLE   ACTIVE
CLAIM       software
NOT CLAIMED claim level raised by this README
```

</div>

---

# DIGITAL DOUBLE

### Typed agents. Queued work. Canonical line.

Role-typed virtual workforce agents under one orchestrator, plus an optional React/Vite dashboard.

**Primary product path:** Python package `digital_double` (Agent / Task / Orchestrator).  
**Secondary:** browser UI (`npm run dev` / `npm run build`) — local Zustand store, not wired to the Python core.

Canonical note: [CANONICAL.md](CANONICAL.md). Consolidation: [docs/CONSOLIDATION_PLAN.md](docs/CONSOLIDATION_PLAN.md).

---

## Requirements

- Python 3.9+
- Node.js 18+ (optional, for the UI)

---

## Install (Python core)

```bash
git clone https://github.com/beyond-repair/Digital_Double_virtual_workforce.git
cd Digital_Double_virtual_workforce
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -e ".[dev]"     # or: pip install -e . && pip install pytest
```

Poetry users can also `poetry install`.

---

## Quick start (Python)

```python
from digital_double import Orchestrator, AgentType

orch = Orchestrator()
agent = orch.create_agent(AgentType.IT)
task = orch.create_task(
    type=AgentType.IT,
    description="Setup new development environment",
    priority="high",
)
orch.assign_task(task.id)
agent.complete_task(success=True)
print(agent.performance)
print(agent.get_model_name())
```

Runnable example:

```bash
python examples/basic_usage.py
```

---

## Tests

```bash
pytest
# CI-compatible smoke (no pytest required):
python tests/test_orchestrator_smoke.py
```

---

## UI (optional)

```bash
npm install
npm run build    # production bundle → dist/
npm run dev      # Vite dev server
```

---

## Agent types

| Enum | Role |
|------|------|
| `AgentType.IT` | IT Support |
| `AgentType.MARKETING` | Digital Marketing |
| `AgentType.CONTENT` | Content Writing |
| `AgentType.DESIGN` | Graphic/Web Design |
| `AgentType.FINANCE` | Finance |
| `AgentType.EMBEDDED` | Embedded Systems |
| `AgentType.MOBILE` | Mobile Development |
| `AgentType.LEGAL` | Legal Process |

---

## Layout

| Path | Role |
|------|------|
| `digital_double/core/` | Canonical Python core (used by root package) |
| `digital_double/digital_double/` | Legacy nested copy (prompts/services); prefer root package |
| `tests/` | Canonical pytest suite |
| `src/` | React/Vite dashboard |
| `examples/` | Python usage scripts |

---

<div align="center">

**REWRITE · BUILD · TRANSCEND**

[Atomic Dream Labs](https://github.com/beyond-repair)

</div>
