import "./styles/main.css";
import { createGameGrid, createPreviewGrid } from "./grid.js";
import { spawnNewTetromino } from "./game-logic.js";
import "./controls.js";
import "./leaderboard.js";

createGameGrid();
createPreviewGrid();
spawnNewTetromino();
