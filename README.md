# Interactive Real-Time Art Guide

Enhance your museum visit with our voice-interactive guide focused on French heritage artworks and artists.

## Features

- **Voice Interaction**:
  - **VAD**: Speak naturally.
  - **Manual**: Push to Talk.
- **Artwork Recognition**: Point your camera to get details.
- **Real-Time Responses**: Instant info on title, artist, and type.
- **OpenAI Integration**:
  - Realtime API
  - Structured Output
  - Function Calls
  - Image to Text

## Setup

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/nyzss/openai-hackathon
cd openai-hackathon
npm install
```

### Configuration

Create a `.env` file:

```
REACT_APP_LOCAL_RELAY_SERVER_URL=http://localhost:8081
OPENAI_API_KEY=your_openai_api_key
```

### Run

```bash
npm run relay
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Click **Connect**.
2. Point your camera at an artwork.
3. Choose **Manual** or **VAD** mode.
4. Ask questions and receive instant answers!