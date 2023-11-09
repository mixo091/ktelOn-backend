import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { trips } from "./data/trips";

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


router.get("/trips" , (req:Request , res:Response) => {
    res.status(200).json(trips);
})