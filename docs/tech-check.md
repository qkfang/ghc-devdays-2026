---
sidebar_position: 2
title: ✅ Tech Check
---

# ✅ Tech Check

Before diving into the labs, make sure you have GitHub Copilot activated and a Codespace ready to go. This page walks you through both steps.

---

## 1. Sign Up for GitHub Copilot

GitHub Copilot offers a **free tier** that gives you everything you need to follow along with today's labs.

### Steps

1. **Go to the sign-up page**
   Visit [https://aka.ms/get-github-copilot-devdays](https://aka.ms/get-github-copilot-devdays) or navigate to [github.com/features/copilot](https://github.com/features/copilot) and click **Start for free**.

2. **Sign in to GitHub**
   If you don't have a GitHub account, create one at [github.com/join](https://github.com/join). It's free and takes less than a minute.

3. **Choose the Free plan**
   On the plan selection screen, select **Copilot Free**. No credit card is required.

4. **Complete the setup**
   Follow the on-screen prompts to finish activating Copilot on your account.

5. **Verify activation**
   Go to [github.com/settings/copilot](https://github.com/settings/copilot) and confirm that your Copilot subscription shows as **Active**.

:::tip Already have Copilot?
If you have a paid Copilot Individual, Business, or Enterprise plan, you're all set — no changes needed.
:::

---

## 2. Launch a GitHub Codespace

GitHub Codespaces gives you a fully configured cloud development environment in your browser — no local installation required.

### Steps

1. **Open the lab repository**
   Each lab page includes a **"Open in Codespace"** button or a direct link to the repository. Click it to navigate to the repo on GitHub.

2. **Create a new Codespace**
   On the repository page, click the green **`<> Code`** button, then select the **Codespaces** tab, and click **Create codespace on main** (or the relevant branch).

   ![Create Codespace](https://docs.github.com/assets/cb-138303/mw-1440/images/help/codespaces/new-codespace-button.webp)

3. **Wait for the environment to build**
   The first launch may take 1–2 minutes while the container image is pulled and dependencies are installed. You'll see a progress indicator in the terminal.

4. **Start coding!**
   Once the Codespace opens, VS Code in the browser will be ready with all tools, extensions, and dependencies pre-installed for the lab.

### Useful Codespaces shortcuts

| Action | Shortcut / Command |
|--------|--------------------|
| Open Command Palette | `F1` or `Ctrl+Shift+P` / `Cmd+Shift+P` |
| Open integrated terminal | `Ctrl+`` ` ` or **Terminal → New Terminal** |
| Stop a Codespace | [github.com/codespaces](https://github.com/codespaces) → ⋯ → **Stop codespace** |
| Resume a stopped Codespace | [github.com/codespaces](https://github.com/codespaces) → click the Codespace name |

:::info Codespace limits on the Free plan
The GitHub Free plan includes **120 core-hours** and **15 GB-months** of storage per month. A 2-core Codespace (the default) gives you ~60 hours of active use per month — more than enough for today's event.
:::

---

## 3. Quick Verification

Once your Codespace is running, confirm everything is working:

1. Open the integrated terminal (`Ctrl+`` ` ``).
2. Look for the GitHub Copilot icon (the Copilot logo) in the VS Code status bar at the bottom. It should be visible and **not** show a warning.
3. Open any source file and start typing — you should see grey inline suggestions from Copilot appear.

If Copilot suggestions don't appear, try:
- Running **GitHub Copilot: Sign In** from the Command Palette (`F1`)
- Ensuring your Copilot subscription is active at [github.com/settings/copilot](https://github.com/settings/copilot)

---

You're all set! 🎉 Head back to the [Welcome page](./intro) and choose a lab to get started.
