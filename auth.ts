import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { AUTHOR_BY_GOOGLE_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({
      user: { name, email, image },
      profile,user
    }) {
      const id=profile?.sub
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GOOGLE_ID_QUERY, {
          id,
        });
     
      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id ,
          name:profile?.family_name,
          email,
          image,
          username:name,
          bio: "test",
        });
      }
       console.log(user)
      return true;
    },
    async jwt({ token, account, user }) {
      if (account && user) {
        const users = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GOOGLE_ID_QUERY, {
            id: user?.id,
          });

        token.id = users?.id;
      }

      return token;
    },
    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});