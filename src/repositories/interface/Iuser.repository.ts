import { IUser } from 'shared/types';


export interface IUserRepository {
  updatePassword(
    userid: string,
    hashedPassword: string
  ): Promise<IUser | null>;
}
