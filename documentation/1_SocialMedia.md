# Feature: Social Media Links in Contact and Footer

## Overview
Add links to configured social media accounts from:
- Contact page
- Footer navigation

Links come from the global config (`global/de.yaml`, `global/en.yaml`).

## Social Platforms to Include
- YouTube
- Facebook
- Instagram

## Goals
- Show icons/links on Contact page
- Show icons/links in footer on all pages

## Acceptance Criteria
- Social links use the values from config files
- Icons are localized (accessible aria labels)
- Layout aligns with overall design
- Works on `de` and `en`

## Technical Notes
- Use consistent icon set (SVG, FontAwesome, etc.)
- Links open in new tab with `rel="noopener noreferrer"`
- Provide fallback if some links are missing
