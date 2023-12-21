---
layout: BlogPost
category: blog
title: openHAB 4.1 Release
author: Florian Hotze and others
date: '2023-12-22T18:00:00+02:00'
previewimage: /uploads/2023-12-22-openhab-4-1-release/header.jpg
tags:
  - news
excerpt: >-
  As usual before christmas, we are happy to announce a new release of openHAB, that brings many additions, improvements and fixes!
---
The first minor release of openHAB 4 has arrived! openHAB 4.1 brings several improvements and bugfixes as well as some nice additions!

TODO: Write intro

With that being said, we again want to share some statistics that show the activity in numbers.

# Activity

As you'd expect from any new openHAB release, we have had a high activity across all our GitHub repositories since our [summer release](/blog/2023-07-23-openhab-4-0-release.html).
We therefore want to share a few statistics about our three main repositories: Core, add-ons and UI.

[openHAB core](https://github.com/openhab/openhab-core) has received TODO pull requests, TODO bug fixes and TODO enhancements with TODO lines of code added.
The number of pull requests has TODO compared to our [summer release](/blog/2023-07-23-openhab-4-0-release.html).

TODO new add-ons were introduced, and with TODO pull requests, TODO bug fixes and TODO enhancements resulted in TODO lines of add-on code added to [openHAB add-ons](https://github.com/openhab/openhab-addons).

Our [openHAB web UIs](https://github.com/openhab/openhab-webui) have also received many contributions: TODO pull requests, TODO bug fixes and TODO enhancements resulted in TODO lines of code added.
TODO the number of pull requests compared to our [winter release](/blog/2023-07-23-openhab-4-0-release.html).

It is worth to mention, that [our other repositories](https://github.com/openhab) have also received numerous contributions (e.g. documentation), but listing them all would probably be too much here.
Thank you to all our contributors for driving openHAB forward!

Finally, it is time to shout out to our top code contributors per repository (having done the most commits) for this new release:

- Wouter ([@wborn](https://github.com/wborn)) for openHAB core
- Jan ([@J-N-K](https://github.com/J-N-K)) for openHAB core
- Jacob ([@jlaur](https://github.com/jlaur)) for openHAB add-ons
- Leo ([@lsiepel](https://github.com/lsiepel)) for openHAB add-ons
- Florian ([@florian-h05](https://github.com/florian-h05)) for the openHAB MainUI
- Laurent ([@lolodomo](https://github.com/lolodomo)) for the openHAB BasicUI

Most of them are also maintainers, which means besides of contributing code, they review pull requests and participate in discussions on GitHub issues.
At present, we are TODO maintainers across all our repositories.
Thank you to my colleagues for making openHAB 4.1 a christmas present to our community!

# Highlights

TODO: Write short summary

Therefore, please have a look at the [**release notes**](https://github.com/openhab/openhab-distro/releases/tag/4.1.0) and check out the following highlights.

## Core Runtime Enhancements

### Extending the ontology with your semantic tags

You can now easily extend the default ontology with your own semantic tags and then use them to build your semantic model.
This can be used for example to add a location or equipment that does not yet exist by default.
You can achieve that by providing a new very simple configuration file (YAML format) containing the description of all your specific semantic tags.
You can find a [tutorial on the community forum](https://community.openhab.org/t/oh-4-1-tutorial-to-manage-custom-semantic-tags/148135).

## UI Enhancements

## Add-on Enhancements

# Enjoy and Get in Touch!

We hope that you like the new release as much as we do - as always our [community forums](https://community.openhab.org/) are there for questions, comments and discussions.
Do not hesitate to get in touch, join our community, receive help and share your experiences and use cases.
