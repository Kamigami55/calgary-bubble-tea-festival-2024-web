# Calgary Bubble Tea Festival 2024

Demo site: [https://calgary-bubble-tea-festival.vercel.app/](https://calgary-bubble-tea-festival.vercel.app/)

## Technologies

- Node.js (v20.12.2)
- pnpm (v9.0.6)
- Next.js (v14.2.3 with app router)
- Tailwind CSS (v3.4.1)
- Custom eslint, prettier, husky, lint-staged

## Development

### Installation

Install Node.js v20.12.2 and pnpm v9.0.6. on your machine.

```bash
pnpm install
```

### Development server

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Linting

```bash
pnpm lint:fix # fix linting errors in JS/TS files with eslint & prettier
pnpm format:fix # fix formatting errors in other files (md,json,css) with prettier
```

Husky and lint-staged are also set up to run the above commands automatically on commit.

## Deployment

The project will be deployed to Vercel automatically from the `main` branch.

Demo site: [https://calgary-bubble-tea-festival.vercel.app/](https://calgary-bubble-tea-festival.vercel.app/)

Vercel account owner: `Eason Chang`
