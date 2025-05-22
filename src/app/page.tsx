"use client";
import { authClient } from "@/lib/auth-client";

const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

function Home() {
  return (
    <div>
      <h2>Hi</h2>

      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}

export default Home;
