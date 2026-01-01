# Deploying to Vercel

Your project is built with Next.js, which makes it perfect for deployment on Vercel (the creators of Next.js).

## Prerequisites

1.  **Verified Build**: I have already run `npm run build` and confirmed your project compiles successfully! ✅
2.  **Git**: Ensure all your latest changes are committed.

---

## Option 1: Quick Deployment via CLI (Recommended)

You can deploy directly from your terminal.

1.  **Login to Vercel**:
    ```bash
    npx vercel login
    ```
    (Follow the instructions to log in via browser).

2.  **Deploy**:
    Run the following command in the `web` directory:
    ```bash
    npx vercel
    ```
    - Set up and deploy? **Yes**
    - Which scope? **(Select your account)**
    - Link to existing project? **No**
    - Project Name? **nomanqadri-portfolio** (or your choice)
    - In which directory? **./** (default)
    - Want to modify default settings? **No** (Next.js is auto-detected)

3.  **Environment Variables**:
    Since you have a `.env.local` file with secrets (like MongoDB URI, Authentication secrets), you **MUST** add them to Vercel.
    - Go to your Vercel Project Dashboard > Settings > Environment Variables.
    - Copy the contents of your `.env.local` file and paste them there.
    - **OR**, during the `npx vercel` command, it might ask properly. If not, use the dashboard.

4.  **Production Deployment**:
    The first deploy is a "Preview". To deploy to production:
    ```bash
    npx vercel --prod
    ```

---

## Option 2: Deploy via GitHub

1.  Push your code to a GitHub repository.
2.  Go to [Vercel.com](https://vercel.com) and click **"Add New..."** > **"Project"**.
3.  Import your GitHub repository.
4.  Adding Environment Variables:
    - Expand the **"Environment Variables"** section.
    - Copy your secrets from `.env.local` into the fields.
5.  Click **Deploy**.

## Troubleshooting

- **Database Connection**: Ensure your MongoDB (Atlas) allows connections from "Anywhere" (0.0.0.0/0) since Vercel IPs change dynamicially.
- **Build Errors**: If the build fails on Vercel but works locally, check if you missed adding a specific Environment Variable in the Vercel dashboard.
