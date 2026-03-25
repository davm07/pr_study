import { LoginSvg } from "../../components/decorative/SVGs";

export default function Login() {
  return (
    <main className="flex bg-athens-gray-50 h-screen p-4 gap-24">
      <div className="flex justify-center pl-16 flex-col flex-1 gap-32">
        <h1 className="font-heading text-4xl text-athens-gray-950">Login</h1>

        <form className="flex flex-col w-[500px] gap-4">
          <label htmlFor="username">
            Username
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="block w-full"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="block w-full"
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="w-full h-full bg-roman-400 flex flex-col items-center justify-center p-10 flex-1 rounded-2xl gap-8">
        <LoginSvg className="h-5/6 w-full" />
        <div>
          <p className="text-athens-gray-950 text-2xl font-bold font-heading tracking-wider">
            Upload your study materials.
          </p>
          <p className="text-athens-gray-950">
            Get AI-powered summaries and a personalized study plan based on your
            exam dates.
          </p>
        </div>
      </div>
    </main>
  );
}
