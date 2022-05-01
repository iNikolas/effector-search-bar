This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About

Search bar with embedded Mock analytics powered by Effector (event-driven multistore state manager). Open console to view logs:

1. `search_form_shown` after 3 sec of mounting (_analytics initialization time_).
2. `search_changed` after each individual character input into the form.
3. `search_button_clicked` after Search Button click.
4. `Filter_activated` or `Filter_deactivated` after checking or unchecking filter checkboxes.
5. `filtered_flight_count` after search result changes according to search input or applied filters.

All analytics events are persisted and deferred before initialization time.

## Main Effector benefits

I can emphasize main effector benefits that it can bring to the table:

1. You can completely separate business logic from React components. Without Effector, the same analytics Events will be scattered across UI component logic inside _useEffects_ and _onHandelers_. With Effector you can put your analytics logic solely into one file.
2. Event driven approach with lessen boilerplate code comparatively to _Redux_.
3. Alleviated _TDD_ approach due to few Effector helpers like _fork_, _allSettled_ and _createDomain_ Effector functions. Check `analytics.test.ts` file for more details of usage.

## Getting started

0. Install dependencies:

```sh
yarn
```

1. Run the project:

```sh
yarn start
```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
