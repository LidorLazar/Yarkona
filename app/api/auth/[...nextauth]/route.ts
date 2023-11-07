import NextAuth from "next-auth"
import Auth0Provider from 'next-auth/providers/auth0';
import {db} from "@/lib/db";
import {PrismaAdapter} from "@next-auth/prisma-adapter";



const handler = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID!,
            clientSecret: process.env.AUTH0_CLIENT_SECRET!,
            issuer: process.env.AUTH0_ISSUER,


        })],
    callbacks: {
        async session({session, user}) {
            session.user.role = user.role
            return session
        }
    }

})


export {handler as GET, handler as POST}