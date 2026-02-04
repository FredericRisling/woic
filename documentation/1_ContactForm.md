# Feature: Contact Form Integration on Contact Page

## Overview
Add a contact form to `/de/contact/` and `/en/contact/` using a **third-party form solution** that works with static sites.

## Goals
- Form collects name, email, message
- No own backend required
- Must work on both `de` and `en` pages

## Options (review)
1. Hosted form service (e.g., Jotform) :contentReference[oaicite:2]{index=2}
2. Simple static embedding via FormSubmit or similar
3. Dedicated static form service (KontaktForm, FormSpark, Web3Forms) :contentReference[oaicite:3]{index=3}

## Example Integration
- Embed code snippet provided by the service
- Style to site CSS
- Ensure GDPR compliance

## Acceptance Criteria
- Form visible and usable on contact page
- Sends submissions to defined email
- Shows confirmation message
- Works responsively

## Technical Notes
- No server required
- Probably requires embed `<iframe>` or `<form action="…">`
- Must handle spam (captcha or honeypot)

## Decisions Needed
- Which provider to use (free plan, submission limits)
- Email destination and privacy policy text
