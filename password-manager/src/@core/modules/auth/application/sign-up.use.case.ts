import { IAuthGateway } from "../domain/auth.gateway";
import { TSignUpInputSchema, TSignUpOutputSchema } from "../domain/sign-up.entity";
import { signUpSchema } from "../schema/sign-up.schema";

class SignUpUseCase{
    constructor(private readonly gateway: IAuthGateway){}

    execute(param: TSignUpInputSchema): Promise<void>{
        const parsed: TSignUpOutputSchema = signUpSchema.parse(param);
        return this.gateway.signUp(param);
    }
}