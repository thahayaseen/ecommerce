import { HttpResponse, HttpStatus } from "@/constants";
import { IAuthServices } from "@/services/interface/Iauth.services";
import { createHttpError, HttpError } from "@/utils/httpError.utill";
import { generateAccessToken, verifyAccessToken } from "@/utils/jwt.util";
import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

export class Authcontroller {
  constructor(private authServices: IAuthServices) {}
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      await this.authServices.createUser(data);
      res.status(HttpStatus.CREATED).json({
        success: true,
        message: "Created success",
      });
    } catch (error) {
      next(error);
    }
  }
  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      console.log(email, password, "emadn pass is ");

      const data = await this.authServices.sigInUser(email, password);
      res.cookie("refresh", data.refreshToken, {
        httpOnly: true,
        secure: false,
      });
      res.status(HttpStatus.CREATED).json({
        success: true,
        message: HttpResponse.USER_CREATION_SUCCESS,
        accessToken: data.accessToken,
      });
    } catch (error) {
      next(error);
    }
  }
  async refreshVarify(req: Request, res: Response, next: NextFunction) {
    try {
      const refreshTocken = req.cookies.refresh;

      if (!refreshTocken) {
        res.status(401).json({ message: "Refresh token missing" });
        return;
      }
      const decode = verifyAccessToken(refreshTocken);
      if (!decode) {
        res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ message: HttpResponse.INVALID_REFRESH });
        return;
      }

      const newAccesTocken = generateAccessToken(decode as JwtPayload);
      res.status(HttpStatus.OK).json({
        success: true,
        message: "accessTocken generated",
        newAccesTocken,
      });
    } catch (error) {
      next(error);
    }
  }
}
