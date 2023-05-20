# Fruit Basket

**Drag and Drop Experiment**

## Quickstart

```sh
# install exact dependencies and set up git hooks
npm ci

# start watchers for file changes and run buildless development server
npm run dev
```

## Updating Dependencies

Regularly updating dependencies and dev dependencies is very beneficial for long lasting codebases.

-   Run `npm outdated` to list dependencies in need of review.
-   Review release notes and/or change logs for list of dependencies with new updates.
    -   Is there new functionality this codebase can use?
    -   Do changes need to be made to upgrade?
    -   Are any problematic issues associated with these changes?
-   Run `npx browserslist-lint` to update `caniuse-lite` database.
