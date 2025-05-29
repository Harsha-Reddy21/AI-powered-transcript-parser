# Natural Task Scribe

An AI-powered transcript parser that automatically extracts tasks from meeting transcripts and organizes them in a beautiful task board.

## Features

- 📝 Paste meeting transcripts and automatically extract tasks
- 👥 Automatically identifies task assignees
- ⏰ Detects and parses deadlines
- 🎯 Priority levels: P1 (High), P2 (Medium), P3 (Low)
- ✨ Modern, responsive UI with task cards
- 🎨 Color-coded priorities and completion status
- 🔄 Prevents duplicate task creation for same transcript


### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Harsha-Reddy21/AI-powered-transcript-parser.git
cd AI-powered-transcript-parser
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## Usage

1. Navigate to the web app
2. Paste your meeting transcript in the text area
3. Click "Extract Tasks"
4. View and manage your tasks in the task board below


## Example Transcript

```
Harsha call client at 5pm. Sunny give presentation tomorrow which is high priority. Digvesh complete assignement by friday.
```

### Output Screenshot

- Web
  ![Web Output](public/web.png)

- Mobile
  ![Mobile Output](public/Mobile.png)

### LLM Response
```
✅ Final task data parsedData: {
  "tasks": [
    {
      "title": "Call client",
      "assignee": "Harsha",
      "date": "5pm",
      "priority": "P3"
    },
    {
      "title": "Give presentation",
      "assignee": "Sunny",
      "date": "tomorrow",
      "priority": "P1"
    },
    {
      "title": "Complete assignment",
      "assignee": "Digvesh",
      "date": "Friday",
      "priority": "P3"
    }
  ]
}
```

