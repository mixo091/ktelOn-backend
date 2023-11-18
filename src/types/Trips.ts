import { Station } from "./Station";

export interface Trip {
  fromId: number;
  toId: number;
  availableStartTimes: Schedule[];
  tripDistance: TripDistance;
}

export interface TripDistance {
  space: number;
  time: number;
  stations: number;
}

export interface Schedule {
  isForCurrentStation: boolean;
  targetStationId: number;
  times: string[];
  days: string[];
}

export interface Line {
  id: number;
  stations: Station[];
  order: number[];
  schedules: Schedule[];
}
