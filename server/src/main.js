import { runServer } from "./server";

const port = parseInt(process.env.PORT || 3000);
const mongoUri = process.env.MONGODB_URI;
runServer(port, mongoUri).catch(console.error);
