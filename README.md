<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Smart To-Do List - README</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f3f6fa; color: #222; padding: 2em; }
    h1 { color: #007bff; }
    a { color: #007bff; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .section { margin-bottom: 2em; }
    ul, ol { margin-left: 2em; }
    pre {background: #23272f; color: #eee; padding: 1em; border-radius: 7px;}
    code {background: #f4f6f8; padding: 2px 6px; border-radius: 4px;}
    .structure {background: #f5f5fa; border: 1px solid #eee; border-radius: 5px; padding: 1em;}
  </style>
</head>
<body>

<h1>Smart To-Do List</h1>
<p>
A modern, responsive, and feature-packed To-Do List app.<br>
Experience light/dark mode, persistent browser-based storage, live task filtering, and a beautiful UI—now live at:<br>
👉 <a href="https://avi007-debug.github.io/To-Do-List/" target="_blank">https://avi007-debug.github.io/To-Do-List/</a>
</p>

<div class="section">
  <h2>🚀 Features</h2>
  <ul>
    <li>Add, edit, and delete tasks</li>
    <li>Mark complete/incomplete with a tap</li>
    <li>Bulk clear completed tasks</li>
    <li>Filter: All, Active, Completed—with real-time button highlight</li>
    <li>Persistent storage: Your to-dos stay saved per device/browser</li>
    <li>Dark/Light mode: One-click toggle, remembers your preference</li>
    <li>Responsive: Looks and works great on desktops and mobile</li>
    <li>Feedback: Toast notifications for actions</li>
  </ul>
</div>

<div class="section">
  <h2>🌐 Live Demo</h2>
  <p>
    Try it now: <br>
    <a href="https://avi007-debug.github.io/To-Do-List/" target="_blank">
      https://avi007-debug.github.io/To-Do-List/
    </a>
  </p>
</div>

<div class="section">
  <h2>🖥️ How to Use</h2>
  <ul>
    <li><strong>Add Task:</strong> Type and press "Add" or Enter.</li>
    <li><strong>Complete:</strong> Click/tap task text.</li>
    <li><strong>Edit:</strong> Click the pencil icon.</li>
    <li><strong>Delete:</strong> Click the trash icon.</li>
    <li><strong>Clear Completed:</strong> Use the "Clear Completed" button.</li>
    <li><strong>Filter:</strong> Use the filter buttons (All, Active, Completed).</li>
    <li><strong>Switch Theme:</strong> Toggle moon/sun button—preference is remembered.</li>
  </ul>
</div>

<div class="section">
  <h2>✨ Persistent Tasks—How It Works</h2>
  <ul>
    <li>Your tasks are saved in your browser (<code>localStorage</code>) and will remain even after closing or refreshing the page.</li>
    <li><strong>Note:</strong> Tasks stay only in the current browser on your device (not synced between devices).</li>
    <li><strong>On Android:</strong> Use your default browser (not incognito/private mode) for persistence.</li>
    <li><strong>Not working?</strong> Open the app using the link above, not as a file (<code>file://</code>), and avoid strict/private modes.</li>
  </ul>
</div>

<div class="section">
  <h2>🏗️ Development (Optional)</h2>
  <p>Want to run or develop locally?</p>
  <ol>
    <li>
      <strong>Clone this repository:</strong>
      <pre>git clone https://github.com/avi007-debug/To-Do-List.git</pre>
    </li>
    <li>
      <strong>Open <code>index.html</code> in a modern browser</strong><br>
      Or use a local server for best results—on mobile/Android, always prefer HTTP over <code>file://</code>:
      <pre>
# Example (Python 3)
python -m http.server 8000
# Visit http://localhost:8000
      </pre>
    </li>
  </ol>
</div>

<div class="section">
  <h2>📁 Structure</h2>
  <div class="structure">
    <pre>
.
├── index.html
├── style.css
└── script.js
    </pre>
  </div>
</div>

<div class="section">
  <h2>⚡ Tech Stack</h2>
  <ul>
    <li>HTML5 + CSS3</li>
    <li>JavaScript (no frameworks)</li>
    <li>Font Awesome icons</li>
    <li>Hosted on GitHub Pages</li>
  </ul>
</div>

<div class="section">
  <h2>📱 Mobile Support</h2>
  <ul>
    <li>Fully responsive</li>
    <li>Works on Chrome, Safari, Edge, Firefox, Android browsers</li>
  </ul>
</div>

<div class="section">
  <h2>🗂️ License</h2>
  <p>
    MIT License — free for personal and commercial use.<br><br>
    <strong>Happy tasking!</strong>
    <br>
    <em>
      This is a front-end, open-source productivity app. Your tasks and preferences are private to your browser—they never leave your device.
    </em>
  </p>
</div>

</body>
</html>
