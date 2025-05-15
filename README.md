# Turborepo Svelte starter

This Turborepo starter is maintained by the Turborepo core team.

## Setup


### External

1. Create a Resend account for email capabilities
    - Grab the Resend API key

2. Create a Vercel project for www (main site) to be deployed globally
    - Let Vercel auto-detect the turbo-repo configuration, but select just the www app.
    - Enable Fluid Compute in the settings menu for you website, specify a nearby region US-WEST-2

### Source

Create the following ENV files with the correct variables in the correct folders:

> Check the example files for details.

- apps/www/.env
- packages/email/.env

## Steps to run locally

1. Install relevant packages with PNPM:

> If you do not have `pnpm` use `npm i -g pnpm`

```sh
pnpm i
```

2. Generate cloudflare types with turbo

```sh
turbo typegen
```

3. Generate temps and start dev servers with turbo

```sh
turbo dev
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `www`: a [svelte-kit](https://kit.svelte.dev/) app

- `design`: a stub Svelte design package to be used in multiple applications, built with [shadcn-svelte]()
- `email`: a stub Svelte email package to be used in multiple applications, built with [Resend]()
- `typescript-config`: Typescript configurations for Svelte (includes `biome` in monorepo top-level)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you, along with some nice libraries:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for code formatting and type checking
- [shadcn-svelte](https://next.shadcn-svelte.com/) for UI and UX components
- [Resend](https://resend.com/home)
- [Neon](https://neon.tech/home)
- [Drizzle](https://orm.drizzle.team/docs/overview)
- [Animejs](https://animejs.com/)
- [cobe](https://cobe.vercel.app/)
- [Turbo](https://turborepo.com/)
- [Zod](https://zod.dev/)
- [Tailwind](https://tailwindcss.com/)
- [Superforms](https://superforms.rocks/)
- [Vite](https://vite.dev/guide/)
- [Svelte](https://svelte.dev/docs/svelte/overview)
- [UnpluginIcons](https://unplugin.unjs.io/showcase/unplugin-icons.html)

## Extending

This monorepo setup is ridiculously easy to extend.

### Apps

To create a new app (frontend):

1. Clone the current `www` app
2. Rename the new app (`xyz`) to something distinct, including its name in the `package.json`
3. `(optional)` Rename the old `www` app to something more specific, including the name in the `package.json`
4. Ensure all dependencies are installed, run `pnpm i` at the top-level of the monorepo, or just in the new app directory
5. Add any ENV variables not present
6. Happy coding!

### Packages

Packages are much more difficult to build correctly, so its ok if it takes time to get working

- Decide which archetype of package you want, pure Typescript and assets (mail) or hybrid with Svelte (design)

#### Building a pure package
1. Clone the `email` package, be sure to rename the relevant files
2. Ensure any code you want to be available to a consumer (app) is exported
3. Happy coding!

#### Building a hybrid
1. Clone the `design` package, be sure to rename the relevant files
    - Alternatively, use `sv`, SvelteKit's CLI, to start a new package
2. Ensure all the relevant code you want available to a consumer is exported
3. Edit the `package.json` file in the `exports` object. There you MUST specify the EXACT way to access the file from a consumer. This is a file-glob pattern (not exactly but similiar in scope to regex)
4. Happy coding

> It may prove critically useful to become familiar with both SvelteKit app development and library development to effecively build hybrid packages