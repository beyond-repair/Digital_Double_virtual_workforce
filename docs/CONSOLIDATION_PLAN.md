# Digital Double Consolidation Plan

**Canonical (public):** `beyond-repair/Digital_Double_virtual_workforce`  
**Private successor (merge source):** `Digital_Double_Virtual_Workforce_4.2`

## Family map

| Repository | Disposition |
|------------|-------------|
| Digital_Double_virtual_workforce | **CANONICAL** |
| Digital_Double_Virtual_Workforce_4.2 | MERGE SOURCE (private) |
| DigitalDoubleVirtualWorkforce3.5 | SUPERSEDED |
| Digital_Double_Virtual_Workforce_4. | Empty/private stub → archive |
| digital-double-mobile / Digital-Double_Mobile | Satellite or SUPERSEDED |

## Build tracks in canonical repo

1. **Python core** (`digital_double/`) — agent/task/orchestrator (CI smoke exists)
2. **React UI** (`src/`, Vite) — front-end; secondary until core is solid

## Merge checklist (4.2 → canonical)

- [ ] Inventory `agents/`, `selfheal/`, `models/`, `ui-react/` from 4.2
- [ ] Port tests under `tests/`
- [ ] Single README run path
- [ ] Mark 4.2 SUPERSEDED after merge
- [ ] Archive 3.5 / mobile forks when no unique assets remain

## Success criteria (release candidate)

- One public repo
- One documented run path
- CI green
- No parallel “source of truth” forks
