# 💖 Happy Birthday Sanskriti - Best Friend Surprise Website 🎁

A custom, interactive, pastel scrapbook-themed birthday website handcrafted specifically for your best friend **Sanskriti**.

---

## 🚀 How to Upload to GitHub & Deploy on Vercel

The project has already been initialized with a clean Git repository, standard `.gitignore`, and `vercel.json` routing configuration.

### Step 1: Upload to GitHub

1. Open your browser and go to **[GitHub](https://github.com)** (sign in if needed).
2. Click the **`+`** icon in the top right corner and choose **`New repository`**.
3. Name your repository (e.g., `sanskriti-birthday-surprise`).
4. Keep it **Public** or **Private** (both work with Vercel).
5. **Do NOT** check "Add a README file" or ".gitignore" (these already exist in your project).
6. Click **Create repository**.
7. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/sanskriti-birthday-surprise.git`).
8. Open your terminal in this project folder and run:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/sanskriti-birthday-surprise.git
   git push -u origin main
   ```

---

### Step 2: Deploy on Vercel (Free & Instant)

1. Open **[Vercel](https://vercel.com)** and log in (you can log in using your GitHub account).
2. Click **Add New...** → **Project**.
3. Select your GitHub repository (`sanskriti-birthday-surprise`) and click **Import**.
4. In the Project Configuration:
   - **Framework Preset**: Vite (automatically detected)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `dist` (default)
5. Click **Deploy**.
6. Within a minute, your website will be live with a free, secure link (e.g. `https://sanskriti-birthday-surprise.vercel.app`) that you can send directly to Sanskriti! 🎉

---

## 💻 Running Locally

### Start Development Server:
```bash
npm run dev
```
Visit `http://localhost:3000/`.

Or double-click `START_WEBSITE.bat` in Windows Explorer!

### Build for Production:
```bash
npm run build
```
