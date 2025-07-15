# 📖 Rock-Paper-Scissors: Theoretical Overview
🎮 What is Rock-Paper-Scissors?
Rock-Paper-Scissors is a classic hand game usually played between two people. Each player simultaneously forms one of three shapes with an outstretched hand:

✊ Rock

✋ Paper

✌️ Scissors

🧠 Game Logic
Rock crushes Scissors → Rock wins

Scissors cuts Paper → Scissors wins

Paper covers Rock → Paper wins

If both players choose the same, the result is a draw

🧱 Web-Based Implementation (HTML, CSS, JS)
1. HTML (Structure)
The HTML provides the basic structure of the webpage.

Elements include:

Buttons or icons for Rock, Paper, and Scissors

A display area for the user and computer choices

A result section to show who won

Scoreboard for tracking points

2. CSS (Styling)
CSS is used to style the buttons, layout, colors, and animations.

Ensures the game is visually appealing and responsive across devices.

Transitions, hover effects, and visual feedback enhance user interaction.

3. JavaScript (Functionality)
JavaScript adds interactivity and controls game logic:

Listens for player’s choice (via click events)

Generates a random choice for the computer

Compares choices and determines the winner

Updates scores and displays the result dynamically

Optionally adds delays, animations, or sound

🔄 Flow of the Game in Code
Player clicks a choice (e.g., Rock).

JavaScript captures the selection.

Computer randomly selects one option.

JS compares both selections using if/else or switch statements.

DOM is updated to show:

Computer’s choice

Result of the round

Updated score

🎯 Learning Outcomes
Learn DOM manipulation using JavaScript

Practice conditional logic and event handling

Understand randomness (Math.random)

Structure small web apps with clean HTML, CSS, and JS

Create interactive browser-based games

