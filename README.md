# thinkr Landing Page

[![thinkr Logo](https://www.thinkr.pro/thinkr_black_leftlogo.png)](https://www.thinkr.pro)

A landing page built to showcase and advertise thinkr—a solution designed to automate e-commerce and Shopify operations using advanced AI agents. This page highlights key features of thinkr, advertising how it empowers Shopify store owners to streamline daily processes and boost productivity.

## About thinkr

thinkr is dedicated to transforming the way you manage your online store. By leveraging AI agents, thinkr automates routine tasks such as inventory tracking, order processing, customer retention, and data analytics. 

### Mission

> thinkr wants to empower entrepreneurs to focus on their passion by automating e-commerce operations with intelligent AI agents that deliver insights, drive decisions, and do the heavy lifting—while keeping humans firmly in control.


## Key Features

- **Automated Shopify Operations:** Automate routine tasks such as inventory tracking, order processing, customer retention, and data analytics.
- **Inventory Management:** Track stock levels, receive low-stock alerts, and optimize reorder schedules.
- **Order Processing & Updates:** Seamlessly manage and update orders across multiple channels.
- **Actionable Insights:** Gain valuable analytics to monitor store performance and market trends.
- **Customer Retention:** Utilize AI-driven recommendations to enhance customer engagement and loyalty.
- **Promotional Campaigns:** Easily create and optimize targeted marketing campaigns.
- **Seamless Shopify Integration:** Designed specifically to integrate with Shopify operations.

## Built With

- **Next.js** (App Router)
- **Tailwind CSS**

## Getting Started

To run the thinkr landing page locally from scratch, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org) v18.17 or newer (matches `engines` in `package.json`)
- [npm](https://www.npmjs.com) v10 or newer (or Yarn, pnpm, or Bun if preferred)
- [Git](https://git-scm.com)
- Optional: [nvm](https://github.com/nvm-sh/nvm) to manage Node versions

### Installation

1. Clone the repository

   ```bash
   git clone <your-repo-url>
   # or with GitHub CLI
   # gh repo clone <owner>/<repo>
   ```

2. Enter the project directory

   ```bash
   cd thinkr-landing
   ```

3. Ensure the correct Node/npm versions (recommended if you use nvm)

   ```bash
   nvm install 18
   nvm use 18
   ```

4. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 in your browser to view the landing page.

### Environment Variables (optional)

This site runs without environment variables. If you want to enable analytics or webinar form submissions, create a `.env.local` file in the project root and add any of the following:

```bash
# Google Tag Manager (used in `src/app/layout.tsx`)
NEXT_PUBLIC_GTM_ID=G-XXXXXXXXXX

# Meta/Facebook Pixel (used in `src/app/layout.tsx`)
NEXT_PUBLIC_FB_PIXEL_ID=1234567890

# Google Sheets webhook for webinar registrations (used in `src/lib/googleSheets.ts`)
# Only required if you plan to submit the webinar form locally
NEXT_PUBLIC_GS_WEBHOOK=https://script.google.com/macros/s/XXXXXXXX/exec
```

Tip: After changing env vars, restart the dev server.

### Available Scripts

- `npm run dev`: Start the local dev server
- `npm run build`: Create an optimized production build
- `npm run start`: Start the production server (after `build`)
- `npm run lint`: Run ESLint

### Troubleshooting

- Node version mismatch: ensure `node -v` is >= 18.17. If using nvm, run `nvm use 18`.
- Port already in use (3000): stop the other process or start on another port with `PORT=3001 npm run dev`.

## Deployment

The thinkr landing page can be deployed using services like [Vercel](https://vercel.com). Simply connect your repository to Vercel and follow the provided deployment instructions for a seamless launch.

## Contact

For any inquiries, support, or further information, please visit [thinkr](https://www.thinkr.pro) or contact us via email at [edu@thinkr.pro](mailto:edu@thinkr.pro).

---

