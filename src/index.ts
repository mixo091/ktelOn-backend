import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { paros_lines } from "./data/paros_schedule";
//import { trips } from "./data/trips";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const router = express.Router();

app.use("/", router);

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello ktelon");
});

/*
router.get("/trips" , (req:Request , res:Response) => {
    res.status(200).json(trips);
})
*/

router.get("/:island/lines", (req: Request, res: Response) => {
  const island = req.params.island;
  if (island === "paros") {
    res.status(200).json(paros_lines);
  } else {
    res.status(404).send("Island not found");
  }
});

router.get("/:island/lines/:id", (req: Request, res: Response) => {
  const island = req.params.island;
  const id = parseInt(req.params.id);
  const line = paros_lines.find((line) => line.id === id);
  if (line) {
    res.status(200).json(line);
  } else {
    res.status(404).send("Line not found");
  }
});

// get all to stations from a specific station
router.get(
  "/:island/lines/:id/from/:station_id",
  (req: Request, res: Response) => {
    const island = req.params.island;
    const id = parseInt(req.params.id);
    const station_id = parseInt(req.params.station_id);
    const line = paros_lines.find((line) => line.id === id);
    if (line) {
      // get stations after specific station depending on order array
      const toStations = line.stations.filter((station) => {
        return line.order.indexOf(station.id) > line.order.indexOf(station_id);
      });
      res.status(200).json(toStations);
    } else {
      res.status(404).send("Line not found");
    }
  }
);
