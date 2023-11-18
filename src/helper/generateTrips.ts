/*
import { stations } from "../data/stations";
import { timesOptions } from "../data/trips";
import { Trip } from "../types/Trips";

export const generateTrips = () => {
  const trips: Trip[] = [];

  for (let i = 0; i < stations.length - 3; i++) {
    const from = stations[i];
    for (let k = 1; k < 3; k++) {
      const to = stations[i + k];
      const times: string[] = [];
      for (
        let j = i + Math.round(Math.random() * times.length);
        j < timesOptions.length;
        j++
      ) {
        times.push(timesOptions[j]);
      }
      const trip: Trip = {
        fromId: from.id,
        toId: to.id,
        availableStartTimes: times.map((time) => ({
          isForCurrentStation: true,
          targetStationId: from.id,
          value: time,
        })),
      };
      trips.push(trip);
    }
  }
  return trips;
};
*/
