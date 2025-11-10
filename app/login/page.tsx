import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-2">
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <br />
        <button formAction={login}>Log in</button>
        <br />
        <button formAction={signup}>Sign up</button>
      </form>
    </main>
  )
}
