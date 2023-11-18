import { Station } from "../types/Station";
import { Line, Schedule } from "../types/Trips";

const parosStations: Station[] = [
  { id: 1, coordinates: [37.0833, 25.1489], name: "Parikia" },
  { id: 2, coordinates: [37.0833, 25.215], name: "Marathi" },
  { id: 3, coordinates: [37.0167, 25.1667], name: "Kostos" },
  { id: 4, coordinates: [37.0167, 25.1333], name: "Lefkes" },
  { id: 5, coordinates: [37.0333, 25.2], name: "Prodromos" },
  { id: 6, coordinates: [37.05, 25.25], name: "Marmara" },
  { id: 7, coordinates: [37.05, 25.0833], name: "Marpissa" },
  { id: 8, coordinates: [37.05, 25.15], name: "Piso Livadi" },
  { id: 9, coordinates: [37.0167, 25.15], name: "Logaras" },
  { id: 10, coordinates: [37.0167, 25.2], name: "Punda Beach" },
  { id: 11, coordinates: [37.0, 25.1667], name: "Golden Beach" },
  { id: 12, coordinates: [37.0167, 25.2167], name: "Drios" },
  //rest of Paros stations
];

const order1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const schedules: Schedule[] = [
  {
    isForCurrentStation: true,
    targetStationId: 12,
    times: ["07:30", "10:40", "12:10", "14:15", "16:10", "18:00"],
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  {
    isForCurrentStation: true,
    targetStationId: 12,
    times: ["07:30", "10:40", "12:10", "14:15", "16:10"],
    days: ["Saturday", "Sunday"],
  },
];

// our line
const parosLine1: Line = {
  id: 1,
  stations: parosStations,
  order: order1,
  schedules: schedules,
};

// line 2
const order2: number[] = order1.slice().reverse();

const schedules2: Schedule[] = [
  {
    isForCurrentStation: true,
    targetStationId: 1,
    times: ["07:25", "08:55", "13:05", "15:10", "17:10"],
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  {
    isForCurrentStation: true,
    targetStationId: 1,
    times: ["07:25", "08:55", "13:05", "15:10", "17:10"],
    days: ["Saturday", "Sunday"],
  },
];

const parosLine2: Line = {
  id: 2,
  stations: parosStations,
  order: order2,
  schedules: schedules2,
};

export const paros_lines: Line[] = [parosLine1, parosLine2];
