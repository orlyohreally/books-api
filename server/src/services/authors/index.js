import { AuthorsDao } from "./AuthorsDao";
import { AuthorsRouter } from "./AuthorsRouter";
import { AuthorsService } from "./AuthorsService";

export const authorsService = new AuthorsService({
  dao: new AuthorsDao(),
});

export const authorsRouter = new AuthorsRouter({
  service: authorsService,
}).router;
