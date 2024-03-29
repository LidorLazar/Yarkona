import {DefaultSession} from "next-auth";


declare module "next-auth" {

    interface Session extends DefaultSession {
        user: {
            id: string;
            role: 'USER' | 'ADMIN'
            // ...other properties
            // role: UserRole;
        } & DefaultSession["user"];
    }

    interface User {
        role: 'USER' | 'ADMIN',


        // ...other properties
        // role: UserRole;
    }
}