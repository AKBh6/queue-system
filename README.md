Overview

The Food Stall Queue Management System is a simple web-based application designed to simulate a token-based queue system for food stalls. It allows users to generate tokens, serve customers in order, and track the number of waiting customers.

This project demonstrates basic front-end development concepts using HTML, CSS, and JavaScript.

Features

Generate new tokens sequentially

Serve tokens in FIFO (First-In, First-Out) order

Display current token being served

Show total number of customers waiting

Reset the entire queue

Clean and responsive UI

Technologies Used

HTML5

CSS3

Vanilla JavaScript

Git & GitHub

GitHub Pages (for deployment)

Project Structure
queue-system/
│
├── index.html      # Main structure of the application
├── style.css       # Styling and layout
├── script.js       # Queue logic and interactivity
└── README.md       # Project documentation
How It Works

A queue array stores all generated tokens.

Each click on "Generate Token" increments a counter and adds it to the queue.

"Serve Next" removes the first token from the queue using FIFO logic.

The UI updates dynamically using JavaScript DOM manipulation.

Author

ARKESH BHATTACHARYA
Engineering Student
