---
title: How Claude's 5-hour limit actually works
description: Claude Pro throttles on a rolling 5-hour window and a weekly cap. Here's how to read them and plan your day around resets.
date: 2026-07-17
tag: Tips
readMins: 4
---

Claude doesn't give you a fixed "messages per day" number. Instead it runs a
**rolling 5-hour usage window** plus a **weekly cap**, and both are expressed as
a percentage of your allowance - not a simple message count.

## The two windows

- **5-hour session** - resets 5 hours after your first message in the window.
  This is the one that stops you mid-session.
- **Weekly** - a slower cap that resets on a fixed weekly schedule. On Pro it
  rarely bites unless you have very heavy days.

There's also a **per-model** slice (for example a separate weekly bucket for
newer models), so a single heavy model can throttle before your overall window
does.

## How to plan around it

1. **Front-load exploration, back-load execution.** Your window starts on the
   first message - burn the cheap thinking early.
2. **Watch the percentage, not the clock.** At ~80% used, wrap up the current
   task rather than starting a big one.
3. **Know your reset time.** If you're at 90% with 40 minutes to reset, it's
   often faster to wait than to fight the throttle.

AI Karma Tracker reads these windows straight from your Claude session and shows
the exact percentage and reset time - so you never guess.
