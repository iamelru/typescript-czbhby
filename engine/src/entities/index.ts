import { Rendering, Updating } from "../types/generic";

export interface Entity extends Updating, Rendering {
  x: number;
  y: number;
  id: string;
}
