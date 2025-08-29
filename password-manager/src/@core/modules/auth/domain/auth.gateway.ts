import { TSignUpOutputSchema } from "./sign-up.entity";

export interface IAuthGateway {
        signUp(param: TSignUpOutputSchema): Promise<void>;
}

