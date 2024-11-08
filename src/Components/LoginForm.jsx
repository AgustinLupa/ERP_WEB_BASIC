import { useState } from 'react';
import Alert from './Alert';
import InputField from './InputField';

const LoginForm = ({ onLoginSuccess }) => {
  // Un único hook useState para manejar el estado del formulario y los errores
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    error: ''
  });


  // Función para manejar cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    console.log(name);
    console.log(value);
  };

  // Función para manejar el envío del formulario
  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formState;

    // Validar credenciales (aquí puedes agregar tu lógica de autenticación)
    if (email === 'admin@example.com' && password === 'password123') {
      onLoginSuccess();
    } else {
      setFormState({ ...formState, error: 'Invalid email or password' });
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <form
        className="p-5 bg-white rounded shadow"
        style={{ width: '400px' }}
        onSubmit={handleLogin}
      >
        <h2 className="text-center text-primary mb-4">Welcome Back</h2>

        {formState.error && <Alert message={formState.error} />}

        {/* Campo de Email */}
        <InputField
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          value={formState.email}
          onChange={handleChange}
        />

        {/* Campo de Contraseña */}
        <InputField
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          value={formState.password}
          onChange={handleChange}
        />

        {/* Botón de inicio de sesión */}
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Log In
        </button>

        <div className="text-center">
          <a href="#" className="text-secondary">Forgot password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;