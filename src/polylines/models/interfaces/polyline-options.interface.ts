import { LatLngLiteral } from "@polylines/models/interfaces";

export interface PolylineOptions {
  path: LatLngLiteral[];
  strokeColor: string;
  strokeWeight: number;
}