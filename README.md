# Healthy — Assignment 6

Healthy is a demonstration frontend for exploring fitness activities, sample plans and locations in Astana. No real booking, registration, message or payment is processed; all prices and locations are illustrative.

## Launch
Unzip the archive and open `index.html` in a browser, or serve the folder with `python -m http.server 8000` and visit `http://localhost:8000`. jQuery 3.7.1 and Bootstrap CSS are included locally, so the interactions do not require a CDN.

## Project structure
- `index.html`, `sports.html`, `services.html`, `locations.html`, `contact.html`, `register.html`: website pages
- `css/`: styles and responsive rules
- `js/`: page interactions and validation
- `images/`: website images
- `vendor/`: jQuery and Bootstrap CSS

## jQuery features
- Home: welcome message (`js/welcome.js`); all pages: theme toggle (`js/theme.js`).
- Locations: sliding FAQs (`js/faq.js`).
- Sports: combined text and category filters (`js/search.js`).
- Prices: favourites with delegated remove handler (`js/favourites.js`).
- Contact: field validation and animated confirmation (`js/contact.js`).
- Registration retains its previous JavaScript validation and is a simulation.

## Team and publication
Team members and groups: to be completed by the team. Contributions and repository history: to be supplied by the team. Public URL and repository URL: not yet available. After publication, confirm that the archive and hosted site match, then test in two browsers.
