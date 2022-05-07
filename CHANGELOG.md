# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Types of changes:

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

## [Unreleased](https://github.com/ben-clem/portfolio-blog/compare/v1.0.0...HEAD)

### To add

- package.json license field
- posts
  - projects
    - portfolio/blog (when published and good enough)
  - blog
    - ? Gary Boodhoo's Image Garden workshop (https://deepdreamvisionquest.atlassian.net/wiki/spaces/imagegarden/overview, https://drive.google.com/drive/u/0/folders/1EeArG2maO-3IMfkNs33fels769O_p4Ly)
    - ? GoodSync review and config
    - ? BetterTouchTool review and config
    - ? Road trips (Baja California, US West Coast)
    - ? Book reviews (GM charrette)
    - ? Product reviews (Huel)
- Filter by tags toggle (sm:minimize-button open-button)
- sitemap and robots.txt: https://tuomokankaanpaa.com/blog/nextjs-seo-how-to-add-sitemap-and-robots-txt
- auto-publishing to Medium & Dev.to => not sure that can work with MDX

### To change

- get access to Next.js static images inside .mdx files to prevent having to load them from GitHub
- refactor

### To fix

- responsive: subtitle on main page goes over in FR
- translation: going to a post gets you back to default language

## [1.0.0](https://github.com/ben-clem/portfolio-blog/compare/v0.0.5...v1.0.0) - 2022-05-07

### Added

- Deployed with Vercel

## [0.0.5](https://github.com/ben-clem/portfolio-blog/compare/v0.0.4...v0.0.5) - 2022-05-06

### Added

- diplaying tags in posts
- auto adding tags from posts

### Changed

- kbar actions

### Fixed

- responsive
  - navbar & logo
  - profile pic
  - contact
  - tags
  - projects
  - blog
  - about
  - post header
- hamburger menu urls broken when inside post
- blog page not scrolling to top when accessed
- blog page not displaying scroll to top button
- light mode
  - WIP links
  - tag lists
  - download resume button color in light
  - links in posts

## [0.0.4](https://github.com/ben-clem/portfolio-blog/compare/v0.0.3...v0.0.4) - 2022-05-06

### Added

- posts
  - blog
    - Breakthrough SF
- French translation
  - translated common.json
  - Filter by tag
  - about.mdx
  - Download my resume

## [0.0.3](https://github.com/ben-clem/portfolio-blog/compare/v0.0.2...v0.0.3) - 2022-05-05

### Added

- repo link, warning WIP, report issue
- posts
  - projects
    - JEECE tech test
    - node-messenger

### Changed

- README
- updated 404 page
- highlight / loading bar color

## [0.0.2](https://github.com/ben-clem/portfolio-blog/compare/v0.0.1...v0.0.2) - 2022-05-04

### Added

- projects page
- About page
- About page links and emphasis
- Medium & Dev.to links in Blog page

### Changed

- linked projects overview to projects data
- about page content
- made base text color more visible
- icon.png
- revamped projects page
- revamped blog page

### Removed

- other translations
- AMA, Uses & Stats page
- footer

## [0.0.1](https://github.com/ben-clem/portfolio-blog/releases/tag/v0.0.1) - 2022-04-30

### Added

- nav title
- phone link
- projects overview section

### Changed

- photo, banner, meta tags
- socials
- main title color
- spacing
- transformed newsletter card into contact card

### Removed

- footer
