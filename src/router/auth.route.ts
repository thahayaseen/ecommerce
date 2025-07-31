import { Authcontroller } from "@/controller/auth.controller";
import { AuthServices } from "@/services/implementation/AuthServices.services";
import { Router } from "express";
import { validate } from "@/middleware/validate.middleware";
import { signUpSchema } from "@/schema/signup.schema";
import { signIn } from "@/schema/sigin.schema";

const router = Router();
const authServices = new AuthServices();
const authcontroller = new Authcontroller(authServices);
router.post(
  "/",
  validate(signUpSchema),
  authcontroller.signUp.bind(authcontroller)
);
router.post(
  "/login",
  validate(signIn),

  authcontroller.signIn.bind(authcontroller)
);
router.get('/refresh',authcontroller.refreshVarify.bind(authcontroller))

export default router;
