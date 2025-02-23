# AI_code_reviewer

CodeReview is a web-based code review tool that leverages Google's Gemini 2.0 Flash (LLM) to analyze submitted code and provide feedback on potential bugs, errors, and enhancements. The project is built using ReactJS for the frontend and ExpressJS + NodeJS for the backend.

## Features

- **Code Review & Bug Detection:** The system sends the provided code to **Gemini 2.0 Flash**, which has been instructed to act as a seasoned programmer with 10+ years of experience.
- **Enhancement Suggestions:** The AI model suggests improvements to optimize and refine the code.
- **Code Syntax Highlighting:** Utilizes **PrismJS** to highlight syntax for better readability in the frontend.
- **Seamless Frontend-Backend Communication:** Efficient handling of API calls between ReactJS and ExpressJS.

## Tech Stack

- **Frontend:** ReactJS, PrismJS
- **Backend:** ExpressJS, NodeJS
- **AI Model:** Gemini 2.0 Flash (Google LLM)

## Installation & Setup

### Prerequisites
Ensure you have **Node.js** and **npm** installed on your system.

### Clone the Repository
```sh
git clone https://github.com/Viveknagare/AI_code_reviewer.git
cd codereview
```

### Backend Setup
```sh
cd Backend
npm install
npm start
```

### Frontend Setup
```sh
cd Frontend
npm install
npm start
```

## Usage
1. Enter your code in the text editor on the frontend.
2. Click the **Review Code** button.
3. The system sends your code to **Gemini 2.0 Flash** for analysis.
4. Receive suggestions for **bug fixes** and **enhancements**.

## API Endpoints
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| POST   | `/review`    | Sends code to the AI model and returns feedback |

## Future Enhancements
- Support for multiple programming languages.
- Enhanced UI with a better editor experience.

## Author
Developed by **Vivek Bharat Nagare**.

Feel free to contribute or report any issues!

