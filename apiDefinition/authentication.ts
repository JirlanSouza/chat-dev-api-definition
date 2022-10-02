// Registrar usuário

interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

interface RegisterUserResponse {
  error: boolean;
  message: string;
}

// Logar usuário

interface Authentication {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

interface AuthenticationResponse {
  error: boolean;
  message: string;
  user?: User;
  token?: string;
}
