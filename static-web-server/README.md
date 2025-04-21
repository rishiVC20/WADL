# Static Web Server

A simple Node.js static web server that serves files from the current directory.

## Features

- Lists all files in the current directory
- Serves files with proper MIME types
- Prevents directory traversal attacks
- Handles 404 errors for missing files
- Supports various file types (HTML, CSS, JS, images, etc.)

## Requirements

- Node.js (v12 or higher)

## Installation

1. Clone this repository or download the files
2. Navigate to the project directory
3. Run `npm install` (if you have any dependencies)

## Usage

1. Start the server:
   ```bash
   node server.js
   ```

2. Open your browser and visit:
   ```
   http://localhost:1800
   ```

3. You'll see a list of all files in the current directory
4. Click on any file to view its contents

## Security Features

- Sanitizes file paths to prevent directory traversal
- Only serves files from the current directory
- Sets proper MIME types for different file types
- Handles errors gracefully

## File Types Supported

- HTML (.html)
- CSS (.css)
- JavaScript (.js)
- Images (.png, .jpg, .svg, .ico)
- Audio (.wav, .mp3)
- Documents (.pdf, .doc)
- Fonts (.ttf, .eot)
- JSON (.json)
- Plain text (default) 