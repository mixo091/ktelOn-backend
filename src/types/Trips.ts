import { Station } from "./Station";

export interface Trip {
  fromId: number;
  toId: number;
  startTimes: Time[];
}

export interface Distance {
  space: number;
  time: number;
  stations: number;
}

export interface Time {
  isForCurrentStation: boolean;
  targetStationId: number;
  value: string;
  distance ?: Distance;
}

export interface Line {
    id:number;
    stations: Station[];
}
