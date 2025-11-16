export default function Registro() {
  return (
    <div className="auth-container">
      <h2>Registrar</h2>

      <form className="auth-form">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <input type="password" placeholder="Crie uma senha" required />

        <button>Criar Conta</button>
      </form>
    </div>
  );
}
