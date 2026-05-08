# Conversion Funnel Intelligence Hub

Editorial-style React + TypeScript workspace for conversion leakage, channel-by-channel drop-off, funnel diagnostics, and GTM action prioritization.

## Recruiter Takeaway

This project is designed to look and think less like a standard dashboard and more like a premium executive analysis surface. It demonstrates stronger visual direction, better hierarchy, and more narrative charting than a typical internal reporting tool.

## Tech Stack

[![React](https://img.shields.io/badge/React-19-111827?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=111827&color=0F172A)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-111827?style=for-the-badge&logo=vite&logoColor=FFD84D&labelColor=111827&color=6D28D9)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.X-111827?style=for-the-badge&logo=typescript&logoColor=E5F0FF&labelColor=111827&color=2563EB)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/CSS-Editorial%20Analytics%20UI-111827?style=for-the-badge&logo=css&logoColor=F8FAFC&labelColor=111827&color=14B8A6)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vitest](https://img.shields.io/badge/Vitest-Tested-111827?style=for-the-badge&logo=vitest&logoColor=ffffff&labelColor=111827&color=A855F7)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-111827?style=for-the-badge&logo=github&logoColor=ffffff&labelColor=111827&color=84CC16)](https://opensource.org/license/mit)

## Overview

| Area | What it covers |
| --- | --- |
| Funnel map | Progressive conversion from session quality to opportunity creation |
| Diagnostics | Abandonment, routing pressure, calendar friction, attribution confidence |
| Segment stories | Different conversion realities by acquisition surface |
| Experiment layer | What is changing the funnel right now |
| Action queue | The GTM and growth interventions that matter next |

## Business Problem

Most funnel reporting compresses everything into one conversion rate and leaves operators guessing where the revenue risk actually sits.

This project reframes funnel intelligence as a decision surface:

- expose where conversion breaks are concentrated
- distinguish healthy segments from structurally weak ones
- connect experiment work to real funnel movement
- give GTM operators a clearer action queue

## Architecture

```mermaid
flowchart LR
    A["Qualified traffic"] --> B["Product interest"]
    B --> C["Lead capture"]
    C --> D["Sales accepted"]
    D --> E["Demo booked"]
    E --> F["Opportunity created"]
    F --> G["Revenue forecast influence"]
```

## What This Demonstrates

- Stronger frontend composition than a repeated panel grid
- Editorial layout choices for more persuasive data storytelling
- Visual funnel design instead of default chart-library dependence
- Conversion analysis framed as operational decision support

## Screenshots

### Hero Capture

![Hero capture](./screenshots/01-hero.svg)

### Funnel Map

![Funnel map](./screenshots/02-funnel.svg)

### Segment Stories

![Segment stories](./screenshots/03-segments.svg)

### Action Queue

![Action queue](./screenshots/04-queue.svg)

## Local Run

```powershell
Set-Location "C:\Users\chaus\dev\repos\conversion-funnel-intelligence-hub"
npm install
npm test
npm run build
npm run dev
```

## Portfolio Links

- [Kinetic Gain](https://kineticgain.com/)
- [Skills / Portfolio](https://mizcausevic.com/skills/)
- [LinkedIn](https://www.linkedin.com/in/mirzacausevic)
- [Medium](https://medium.com/@mizcausevic)
- [GitHub](https://github.com/mizcausevic-dev)
