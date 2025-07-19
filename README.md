Smart To-Do List
A feature-rich, modern, and responsive To-Do List web application for desktop and mobile.
Includes persistent storage (tasks saved across refreshes), light/dark mode, live filtering, and a clean UI.

✅ Features
Add, edit, and delete tasks

Mark tasks as completed (toggle)

Persistent: Tasks are saved in your browser (localStorage) and remain after refreshing or closing the app

Bulk clear completed tasks

Three filter views: All, Active, Completed (with live highlight)

Dark/Light mode with one-click toggle and automatic preference saving

Responsive layout: Looks great on desktop and mobile

Live feedback: Toast notifications for actions

🚀 Getting Started
Prerequisites
Modern web browser (Chrome, Firefox, Edge, Safari, Android browser)

Running Locally
Download or clone this repository

bash
git clone <your-repo-url>
Or simply download the ZIP and extract it.

Open index.html in your browser
(Double-click it, or right-click → “Open with” your preferred browser)

(Recommended for mobile testing):
Run a local HTTP server (optional but best for Android)

bash
# Using Python 3
python -m http.server 8000
# Then visit http://localhost:8000 in your mobile/desktop browser
Directory Structure
text
.
├── index.html
├── style.css
└── script.js
🖥️ Usage
Add Task: Use the input box and "Add" button or Enter key.

Complete Task: Click the task text.

Edit Task: Click the pencil/edit icon.

Delete Task: Click the trash icon.

Clear Completed: Click the "Clear Completed" button.

Filter: Switch views between All, Active, and Completed tasks with the filter buttons.

Dark/Light Mode: Toggle using the moon/sun button in the header.

⚡ Tech Stack
HTML5

CSS3 (with CSS variables for theming)

JavaScript (no dependencies)

FontAwesome for icons

📱 Mobile Support
Fully responsive

Persistent storage works on most modern mobile browsers.
Note: Incognito/private mode or opening file:// on Android may prevent task saving; use a local web server for best results.

🗂️ License
MIT License — free for personal and commercial use.

Enjoy your productivity!

This is a frontend-only project. Tasks are stored on your browser device and are not visible or synced across different browsers or devices.
