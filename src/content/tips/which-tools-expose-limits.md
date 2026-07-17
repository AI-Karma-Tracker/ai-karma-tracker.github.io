---
title: Which AI tools expose real usage limits (and which don't)
description: A practical map of what you can actually track today across Claude, ChatGPT, Codex, Grok, Perplexity and Gemini.
date: 2026-07-17
tag: Guide
readMins: 5
---

Not every AI tool tells you how much you have left. Here's the honest state of
play for the major ones.

## Full live limits

- **Claude** - 5-hour + weekly windows, plus per-model buckets. Read as a
  percentage with exact reset times.
- **ChatGPT** - per-feature caps (deep research, image generation, file upload)
  with remaining counts and resets.
- **Codex** - 5-hour and weekly usage windows, as a percentage.
- **Grok** - a per-window request quota (remaining / total).
- **Perplexity** - the Pro-search allowance (remaining).

## Activity only

- **Gemini** - Google exposes **no** usage/limit endpoint on the free tier, so
  the best any tracker can do is confirm you're active and warn about peak
  hours. Anyone claiming a live Gemini free-tier counter is guessing.

## The takeaway

If a tool has a web session, its own app already knows your limit - a tracker
just reads the same numbers. Tools without a web session (CLI agents) need an
API key. And a few, like Gemini free, simply don't publish the data.

AI Karma Tracker sticks to **real numbers where they exist** and is upfront when
they don't.
