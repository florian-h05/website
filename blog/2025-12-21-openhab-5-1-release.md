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
After two months of testing, fixing bugs and reviewing the changes, that PR was merged end of October.
Since then, we've commited another 150 changes fixing the remaining bugs, refactoring our codebase to TypeScript and implementing new features.

Thousand thanks to Jeff James ([@jsjames](https://github.com/jsjames)) for initially starting that effort, and the great team work in the last months - and welcome to the Main UI maintainer team!




## Blockly Enhancements

## Basic UI Enhancements

## Add-on Enhancements

openHAB 5.1 brings xx new add-ons, adding support for new devices:

> TBD: New add-ons in format:
> - [AirParif Binding](/addons/bindings/airparif/): Integrates [AirParif](https://airparif.fr/) air quality and pollen data for the Paris area into openHAB.

But not only were new bindings added, some existing bindings also received massive improvements:

> TBD (in format):
> - The [Amber Electric Binding](/addons/bindings/amberelectric/) adds support for energy price forecasts.

## openHABian Enhancements

# Enjoy and Get in Touch!

We are excited to see what you will do with the new features and improvements in openHAB 5.1 — your feedback is always welcome!
As always, our [community forum](https://community.openhab.org/) is there for questions, comments and discussions.
Do not hesitate to get in touch, join our community, receive help and share your experiences and use cases.
