export default function Login() {
  return (
    <div className="auth-container">
      <h2>Entrar</h2>

      <form className="auth-form">
        <input type="email" placeholder="Seu email" required />
        <input type="password" placeholder="Sua senha" required />

        <button>Login</button>
      </form>
    </div>
  );
}
