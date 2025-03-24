import { Hono } from 'hono';
import { signUpWithUsernameAndPassword } from '../authentication';

const hono = new Hono();

export { hono };

hono.get("/authentication/sign-up", async (context)=>{
    const {username , password } = await context.req.json();

    try{
        const result =  await signUpWithUsernameAndPassword({
            username,
            password,
        });

        return context.json(
            {
                data: result,
            },
            201
        )
    } catch (e) {
        // handle error
    }
});


