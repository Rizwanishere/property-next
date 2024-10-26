import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on  successful signin
    async signin({ profile }) {
      // 1. Connect to the databse
      // 2. Check if user exists
      // 3. If not, create user
      // 4. Return true to allow sign in
    },
    // Session callback funtion that modifies the seesion object
    async session({ session }) {
      // 1. Get user from session
      // 2. Assign user id from database to session
      // 3. Return session
    },
  },
};
