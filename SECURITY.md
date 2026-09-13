# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

Report security issues privately via GitHub Security Advisories or by contacting the maintainer through the repository owner profile.

Do not open public issues for vulnerabilities.

## Security Model

- **Core runtime**: Pure Python orchestrator, agent, and task objects. No network listeners, no external process execution, no credential storage in the public core.
- **Dependencies**: Minimal (pydantic). Pin and review updates via Dependabot.
- **Frontend / nested packages**: TypeScript UI and nested `digital_double/` tree are experimental presentation layers. Treat as non-production until CI coverage expands beyond the Python smoke test.
- **Secrets**: Never commit `.env`, API keys, or private keys. Rotate any credentials that may have been exposed in historical forks or mobile variants.
- **Supply chain**: Prefer lockfiles; review Dependabot PRs before merge. Open Dependabot groups remain operator-reviewed.

## Historical Notes

- Related Digital Double lines (3.5, 4.x, mobile) may contain larger dependency surfaces or committed artifacts; those are SUPERSEDED and should not be used as production sources.
- No known CVEs in the current public core as of the last audit.

## Policy Updates

This file is maintained under ADL-Governance lifecycle rules for ACTIVE repositories.
