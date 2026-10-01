# NEX-INT Workforce Boundary

**Branch:** `nex-int-workforce-evidence`
**Updated:** 2026-09-07

## Ownership

| Concern | Owner |
|---------|-------|
| Agent / Task lifecycle | Digital Workforce |
| Execution evidence journal | Digital Workforce |
| WorkRequest identity | Nexus |
| Governance / Security decisions | Nexus |
| Recovery decision (reconcile vs fail-closed) | Nexus |

## Permanent rule

No automatic re-drive. If handler_started is true and terminal is false after restart, Nexus marks FAILED/INDETERMINATE. Replay requires an explicit Workforce recovery token proving the original handler never started.

## Evidence shape

```
ExecutionEvidence
  request_id
  handler_started
  terminal
  status
  task_id
  agent_id
  output
  error
```

Nexus consumes this only through `adapter.evidence(request_id)`.
