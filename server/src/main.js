import { runServer } from "./server";

const port = parseInt(process.env.PORT || 3000);
runServer(port).catch(console.error);