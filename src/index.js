import "./index.css";
import Grid from "./modules/grid/grid";
import { centerScroll } from "./modules/grid/scaling";
import createSidebar from "./modules/sidebar/sidebar.js";

const grid = new Grid();
document.body.append(grid.gridElement);
centerScroll.bind(grid)();

createSidebar.bind(grid)(grid);
