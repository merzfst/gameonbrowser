import "./index.css";
import Grid from "./modules/grid.js";
import createSidebar from "./modules/sidebar.js";

const grid = new Grid();
document.body.append(grid.gridElement);
grid.centerScroll();

createSidebar(grid);
