# Isha Prajapati – Personal Portfolio Website

A personal portfolio website for **Isha Prajapati**, .NET Software Developer. Built with React, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 One-Click Deployment to Vercel

This repository is pre-configured for Vercel with an optimized `vercel.json`.

### Option A: Via GitHub (Recommended)

1. Push this codebase to your GitHub repository:
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** → **"Project"**.
4. Select your repository `developer-portfolio`.
5. Vercel will automatically detect the settings from `vercel.json`:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **"Deploy"**. Your website will be live in under 60 seconds with a free `.vercel.app` URL and automatic HTTPS!

---

### Option B: Via Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command in this project root:
   ```bash
   vercel
   ```
3. Follow the prompts (press Enter to accept default settings).
4. For production deployment:
   ```bash
   vercel --prod
   ```

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```
