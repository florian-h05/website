---
layout: BlogPost
category: blog
title: openHAB 5.1 Release
author: Florian Hotze and others
date: "2025-12-21T20:00:00+01:00"
previewimage: /uploads/2025-12-21-openhab-5-1-release/header.webp
tags:
  - news
excerpt: >-
  
---

# Activity

# Highlights

As you might have already noticed in the activity statistics, there was much development on openHAB - too much to list everything.
Please refer to the [**release notes**](https://github.com/openhab/openhab-distro/releases/tag/5.1.0) to check out what's new and noteworthy (e.g. breaking changes).

In the following sections, our maintainers and contributors are introducing some new features you don't want to miss!

## Event Source Tracking

@ccutrer

## Core Runtime Enhancements

## Main UI Enhancements

_Florian Hotze ([@florian-h05](https://github.com/florian-h05)), openHAB Maintainer_

The openHAB 5.1 release is a very special release for Main UI.
There may not be as many new features and visual changes as usual, but we've been very busy working "under the hood", future-proofing our codebase.

### Vue 3 Upgrade

Main UI has been introduced five years ago with the openHAB 3.0 relase.
Especially in the fast-paced world of web development, a codebase can quickly get stuck in a "legacy" state in that time.
We therefore are even more thrilled to announce that we have completed a massive undertaking:

Upgrading from Vue 2 to Vue 3, Framework7 5 to Framework7 7, Vuex to Pinia, and introducing TypeScript into Main UI's codebase.

The first steps on that long path were taken in May this year, resulting in the submission of a gigantic PR at the begin of September, touching about 10,000 lines of code.
After two months of testing, fixing bugs, and reviewing the changes, that PR was merged end of October.
Since then, we've commited another 150 changes fixing the remaining bugs, refactoring our codebase to TypeScript, and implementing new features.

Thousand thanks to Jeff James ([@jsjames](https://github.com/jsjames)) for initially starting that effort, and the great team work in the last months - and welcome to the Main UI maintainer team!

### Thing & Item Code Tabs

_Jimmy Tanagra ([@jimtng](https://github.com/jimtng)), openHAB Maintainer_

openHAB 5.1 includes a set of improvements to the **Code** tabs for Thing and Item details page in Main UI.
While the Code tab has existed for a long time, it previously showed a UI‑internal YAML structure that didn't correspond to any of openHAB's real file‑based formats.
This made it useful for debugging the UI's internal data, but not for users who work with openHAB's textual configuration.

In this release, the Code tab now displays **proper, file‑compatible syntax**:

- **YAML output now matches the official [file‑based YAML format](/docs/configuration/yaml.html)**, including headers and structure
- **A new DSL view** shows the equivalent textual DSL representation
- Users can **switch between YAML and DSL** directly within the tab
- Code creation and parsing are handled through new APIs exposed by **openHAB Core**, using the same code that handles the configuration files

These refinements make the Code tab more practical for anyone who mixes UI and file‑based configuration, or who simply wants to understand how their UI‑defined Things and Items translate into openHAB's standard textual formats.

Many thanks to Laurent Garnier ([@lolodomo](https://github.com/lolodom)) for implementing the core part of this feature!

### oh-video Widget

@digitaldan: https://github.com/openhab/openhab-webui/pull/3368

### Visualize semantic model tree for Items

@mherwerge: https://github.com/openhab/openhab-webui/pull/3227

### Developer Sidebar

_Jimmy Tanagra ([@jimtng](https://github.com/jimtng)), openHAB Maintainer_

openHAB 5.1 introduces a set of small improvements to the [Developer Sidebar](/docs/tutorial/tips-and-tricks.html#developer-sidebar).

#### Search Improvement

The sidebar lets you search across Items, Things, Rules, Scripts, Scenes, Pages, Widgets, Transformations, and Persistence configurations, displaying matching results so you can quickly inspect objects and jump directly to their editors.
In this release, the search feature has been enhanced.

The search field now supports an extended search syntax, allowing more expressive and precise queries:

- **Logical OR** queries (e.g., `front | back`)
- **Logical AND** queries (e.g., `front camera`)
- **Exact Phrase** queries (e.g., `"front camera"` will match `show front camera` but not `front side camera`)
- **Anchored** queries for matching at the start or end of a word (e.g., `^fan` matches `Fan_Switch`, while `fan$` matches `Ceiling_Fan`)

This makes it much easier to quickly locate the exact entity and perform more targeted debugging.
The Developer Sidebar itself remains unchanged, but its search is now far more flexible for anyone building or troubleshooting UI components.
For more information on the supported search syntax, have a look at the [Fuse.js documentation](https://www.fusejs.io/examples.html#extended-search).

#### Saved Pins

Previously, pinned objects were lost whenever the page was refreshed or the sidebar was closed, making it difficult to switch between different tasks or "workspaces".
openHAB 5.1 addresses that limitation by introducing **Saved Pins**, allowing to **save and restore sets of pinned objects**.

You can now save the current set of pinned objects under a custom name and reload that set at any time.
Saved collections are stored locally in the browser, so they persist across page reloads and browser restarts.
This makes it much easier to work on multiple projects, revisit previous debugging sessions, or maintain different pin sets for different parts of your setup, all without losing your place.

### Things, Items & Rules Filtering

_Jimmy Tanagra ([@jimtng](https://github.com/jimtng)), openHAB Maintainer_

openHAB 5.1 introduces new filtering options across the **Things**, **Items**, and **Rules** pages,
making it much easier to narrow down large lists based on meaningful properties rather than relying solely on text search.

#### Things Filtering

You can now filter Things by:

- **Editability** (editable / non‑editable)
- **Thing status** (e.g. ONLINE, OFFLINE)

#### Items Filtering

Items can now be filtered by:

- **Editability** (editable / non‑editable)
- **Item type** (e.g. Switch, Number, String, Group, etc.)

#### Rules Filtering

Rules now support filtering by:

- **Editability** (editable / non‑editable)
- **Rule kind** (marketplace, template‑based, or user‑defined)
- **Tags** (existing tag filter retained)

## Blockly Enhancements

Blockly has also received a major upgrade, including several plugins updates, which fixes a number of issues with our new Vue 3 Main UI.
Additionally, a new logic block allows to link multiple AND or OR statements comfortably without the clutter of deep nesting.

## Basic UI Enhancements

## Add-on Enhancements

openHAB 5.1 brings xx new add-ons, adding support for new devices:

- [HomeKit Binding](/addons/bindings/homekit/): Allows pairing with HomeKit accessories and **imports** them into openHAB.
  Do not confuse this with the [HomeKit System Integration](/addons/integrations/homekit/) which **exports** openHAB Items to a HomeKit controller.
- [Modus.FoxInverter Binding](/addons/bindings/modbus.foxinverter/): Integrates FoxEss solar inverters and derivatives like the Solakon ONE into openHAB.

But not only were new bindings added, some existing bindings also received massive improvements:

> TBD (in format):
> - The [Amber Electric Binding](/addons/bindings/amberelectric/) adds support for energy price forecasts.

## openHABian Enhancements

# Enjoy and Get in Touch!

We are excited to see what you will do with the new features and improvements in openHAB 5.1 — your feedback is always welcome!
As always, our [community forum](https://community.openhab.org/) is there for questions, comments, and discussions.
Do not hesitate to get in touch, join our community, receive help, and share your experiences and use cases.
