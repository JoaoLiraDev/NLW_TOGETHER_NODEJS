import express, { request, response, Router } from "express";
import { CreateUsersController } from "./src/controllers/CreateUsersController";

const router = Router();

const createUsersController = new CreateUsersController();

router.post("/users", createUsersController.handle)

export { router };