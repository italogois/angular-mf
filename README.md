# Angular Multi-Repo Webpack Module Federation Example (Micro Frontends)

## The Weather App

This repository is part of an Angular mlti-repo Webpack Module Federation example, explained [here](https://github.com/pirminrehm/ng-mf-shell#readme).

### Provide the Weather App

To provide the app, run:

- `npm i`
- `npm start`

The Micro Frontend has it's own development shell, available under http://localhost:5100.

### Explanation for Example

This Micro Frontend provides a weather widget, where users can search for the weather at a specific location.
In order to set an alert for this location, some connection to the notification domain is required.
Therefore, a button component to set this notification is lazy loaded via module federation from the notification domain.
This add notification button component requires the location searched for as context, this is passed by as component input property.
While during development we may not have the other domains running, a dummy component is rendered if the actual one is not available.
