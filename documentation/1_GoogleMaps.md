# Feature: Google Maps Integration on Contact Page

## Overview
Enhance the contact page (`/de/contact/` and `/en/contact/`) with:
1. Updated transit information (nearby public transport) 7 min walking from U8 Franz-Neumann-Platz and 15 min walking from S Schönholz (S1 and S25)
2. An embedded Google Map showing the church location

## Goals
- Display transit walking times:
  - U8 Franz-Neumann-Platz → ~7 min walk
  - S1 & S25 Schönholz → ~15 min walk
- Embed an interactive Google Map centered on the church address
- Maintain support on both German and English pages

## User Stories
- As a visitor, I want to see how to reach the church via public transport.
- As a visitor, I want to see a map of the location without leaving the site.
- As a visitor, I want to have a button, which opens the location in google maps or apple maps, so that i can plan my trip (default should be google maps). 

## Acceptance Criteria
- Transit info is shown in the contact card
- An interactive Google Map is embedded where placeholder text currently exists
- Map works responsively on mobile and desktop
- Content reflects language context (`de` and `en`)

## Technical Notes
- Use Google Maps Embed API or OpenStreetMap alternatives
- Ensure map load does not slow initial page too much
- Provide fallback if Map API quota/external fail

## Dependencies
- API key (if using Google Maps)
- Updated content in `content/contact/*.md`
