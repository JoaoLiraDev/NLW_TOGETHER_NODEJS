import express, { request, response, Router } from "express";
import { CreateUsersController } from "./src/controllers/CreateUsersController";
import { CreateTagController } from "./src/controllers/CreateTagController";
import { ensureAdmin } from "./src/middlewares/ensureAdmin";
const router = Router();

const createUsersController = new CreateUsersController();
const createTagController = new CreateTagController();

router.post("/users", createUsersController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };