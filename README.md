# Retro Tic-Tac-Toe Game

This is a simple retro-style Tic-Tac-Toe game built with React. Players can take turns as "X" and "O" on a 3x3 board, and the game determines the winner or if the game ends in a tie. The game also features a retro-style message display that shows the winning player or declares a tie.

## Features

- **Player Turns:**
  - Players alternate between "X" and "O" after each move.
  - The game keeps track of the current player.

- **Winning and Tie Detection:**
  - The game checks for a winning pattern after each move.
  - If no winning pattern is found and the board is full, the game declares a tie.

- **Retro Message Display:**
  - A retro-style message appears when the game finishes, displaying the winner or indicating a tie.
  - The game automatically restarts after 5 seconds.

## Technologies Used

- **React:** For building the user interface and managing state.
- **CSS:** For styling the application with a retro theme.

## File Structure

- `App.js`: Main component where the game logic and board are implemented.
- `Square.js`: Component for each square on the Tic-Tac-Toe board.
- `Patterns.js`: Contains the winning patterns for the game.
- `App.css`: Contains the retro styling for the game.
- `index.js`: Entry point of the React application.
- `package.json`: Contains the dependencies and scripts for the project.

## Getting Started

Follow these steps to get the application up and running on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/retro-tic-tac-toe.git

2. **Navigate to the Project Directory and Install Dependencies:**
   ```bash
   cd retro-tic-tac-toe
    npm install

3. **Start the Development Server:**
   ```bash
    npm start

The application will be available at http://localhost:3000 in your web browser.

## How To Play
- The game starts with player "X" making the first move.
- Click on any empty square to place your marker ("X" or "O").
- The game will check for a winner after each move.
- If all squares are filled without a winner, the game will declare a tie.
- The retro message display will show the result, and the game will automatically restart after 5 seconds.
<img width="1123" alt="Screenshot 2024-08-22 at 3 20 27 PM" src="https://github.com/user-attachments/assets/8314ac89-335a-4229-905e-c715abb7c408">
<img width="1123" alt="Screenshot 2024-08-22 at 3 20 36 PM" src="https://github.com/user-attachments/assets/5ba5d31e-e464-49f9-957c-193d14e175ac">
<img width="1123" alt="Screenshot 2024-08-22 at 3 20 46 PM" src="https://github.com/user-attachments/assets/b6bee8da-ad17-4397-854a-e45b28074d36">
<img width="1123" alt="Screenshot 2024-08-22 at 3 23 33 PM" src="https://github.com/user-attachments/assets/1e100462-0a8e-4d67-b7e0-ffe7ab8276c1">



