# UFC Rankings Web Application

This is a simple web application that displays UFC rankings, including champions and top fighters in each division. The project uses HTML, CSS, and JavaScript to create an interactive experience for users to explore various weight classes and their respective rankings.

## Features

- **Responsive Design**: The page is styled to adjust across different screen sizes, ensuring a great user experience on both desktop and mobile devices.
- **Division Cards**: Each division is represented as a card that can be expanded to view the champion and top 15 ranked fighters.
- **Hover Effects**: Interactive elements like division cards and champion details have hover effects for a more engaging interface.

## Project Structure

- `index.html`: Main HTML file that sets up the layout and references the external CSS and JS files.
- `styles/style.css`: Contains all the styles used to create the grid layout, card designs, and responsive elements.
- `scripts/divisions.js`: JavaScript file that dynamically generates the content (divisions, champions, and fighters) and inserts it into the page.
- `images/`: Contains the images of champions and the UFC logo.

## How to Use

1. Clone the repository.
2. Open the `index.html` file in any modern web browser.
3. The homepage will display the UFC logo and rankings for each division.
4. Click on any division to expand the card and view the champion and top fighters.
   
## File Overview

- **HTML (main.html)**: The HTML file defines the structure, including the grid for divisions and a template for each division card.
- **CSS (styles/style.css)**: This file defines the overall look and feel of the application, including layout, colors, fonts, and responsive behavior.
- **JavaScript (scripts/divisions.js)**: The script dynamically populates each division card with fighter information (champion and top 15 ranked fighters).

## How It Works

- The division data (champions, fighters, images) is stored in a JavaScript array.
- For each division, a template defined in `main.html` is cloned and filled with the respective data.
- The template contains a summary of the division with the champion's photo and name, followed by a table of ranked fighters.
- Clicking on a division reveals the champion and the list of fighters.

## Future Improvements

- Add more interactivity (e.g., searching for fighters, filtering by ranking).
- Fetch live data using an API to keep rankings up-to-date.
- Implement additional pages with fighter details and profiles.

## Credits

- UFC rankings and images are property of the UFC and used for educational purposes.
  
---

