# General Santos City Portal - Setup Guide

## Prerequisites

Before running this project, you need to have the following installed on your computer:

### 1. **Node.js** (Required)
- **Download**: https://nodejs.org/
- **Recommended Version**: Node.js 18.x or higher
- **Check if installed**: Open PowerShell or Command Prompt and type:
  ```bash
  node --version
  ```
  You should see something like `v18.x.x` or higher

### 2. **npm** (Comes with Node.js)
- npm is automatically installed with Node.js
- **Check if installed**:
  ```bash
  npm --version
  ```
  You should see something like `9.x.x` or higher

---

## Installation Steps

### Step 1: Open Terminal
1. Open **PowerShell** or **Command Prompt**
2. Navigate to the project directory:
   ```bash
   cd c:\Gensantos\Gensantos-redesign
   ```

### Step 2: Install Dependencies
Run this command to install all required packages:
```bash
npm install
```

This will install:
- React 19.2.3
- React DOM 19.2.3
- Vite (build tool)
- TypeScript
- Lucide React (icons)
- Google GenAI
- And other development dependencies

**Wait for the installation to complete** - this may take a few minutes.

---

## Running the Project

### Start the Development Server
Once installation is complete, run:
```bash
npm run dev
```

You should see output like:
```
VITE v6.2.0  ready in XXX ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h + enter to show help
```

### Access the Application
1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Go to: **http://localhost:3000**
3. You should see the General Santos City Portal website!

---

## Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all project dependencies |
| `npm run dev` | Start development server (with hot reload) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## Troubleshooting

### Problem: "npm is not recognized"
**Solution**: You need to install Node.js first from https://nodejs.org/

### Problem: Port 3000 is already in use
**Solution**: 
- Close any other applications using port 3000
- Or modify `vite.config.ts` to use a different port

### Problem: Blank white screen in browser
**Solution**: 
- Make sure `npm run dev` is running in the terminal
- Check the browser console (F12) for errors
- Try refreshing the page (Ctrl + R or F5)

### Problem: Module not found errors
**Solution**: 
```bash
# Delete node_modules and reinstall
rm -r node_modules
npm install
```

---

## Project Structure

```
Gensantos-redesign/
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Footer.tsx
│   └── ... (other components)
├── services/           # API services
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

---

## Development Workflow

1. **Make changes** to any `.tsx`, `.ts`, or `.css` files
2. **Save the file** (Ctrl + S)
3. **Browser automatically refreshes** with your changes (Hot Module Replacement)
4. No need to restart the server!

---

## Stopping the Server

To stop the development server:
- Press **Ctrl + C** in the terminal where `npm run dev` is running
- Type `Y` when asked to terminate

---

## Need Help?

- Check the terminal for error messages
- Check the browser console (F12 → Console tab)
- Make sure all dependencies are installed (`npm install`)
- Ensure you're in the correct directory

---

## Quick Start Summary

```bash
# 1. Navigate to project
cd c:\Gensantos\Gensantos-redesign

# 2. Install dependencies (first time only)
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:3000
```

That's it! Your General Santos City Portal should now be running! 🎉
