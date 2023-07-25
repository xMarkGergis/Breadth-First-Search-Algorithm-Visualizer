# Breadth-First Search Algorithm Visualization
[Here is the website](https://www.visualizebfs.com/)

## Description
This project provides an interactive visualization of the BFS algorithm on a hexagonal grid. It was created using JavaScript, React, HTML, and CSS to deliver a user-friendly interface for exploring the BFS algorithm in action. The application allows you to set a starting point, place obstacles, and witness how the BFS algorithm efficiently finds the shortest path to all reachable cells from the starting point.

## Visuals
![ex1](https://github.com/Markgergis100/Chess-Engine/assets/121286835/c86f3842-d0b3-4bc8-a9ff-c13c90e6b2eb)
![ex2](https://github.com/Markgergis100/Chess-Engine/assets/121286835/038f9a3a-8fe5-461d-997c-288e9fc84176)

## Features
- Hexagonal grid visualization
- Interactivity with the grid to set the starting point and observe the BFS process
- Placing obstacles on the grid to create obstacles that cannot be traversed
- Dynamic updates of the grid as the BFS algorithm explores
- Visualization of the shortest path found by the algorithm

## How It Works
The visualization is based on a hexagonal grid, where each cell is represented as a cube coordinate (q, r, s). The BFS algorithm explores neighboring cells in a breadth-first manner to find the shortest path from the starting point to all reachable cells.

The algorithm maintains a "frontier" of cells to explore and a "cameFrom" object that tracks the path from each cell to its previous cell in the BFS traversal. As the algorithm explores the grid, it marks each visited cell and updates the "cameFrom" object accordingly. This information is then used to visualize the BFS process and the shortest path.

The Hexagonal Grids from Red Blob Games website were used as a reference to implement concepts like linear interpolation to draw lines and calculate hexagonal coordinates.

Please do report any issues and/or provide feedback so that I may perhaps enhance this application to better serve its user further!
