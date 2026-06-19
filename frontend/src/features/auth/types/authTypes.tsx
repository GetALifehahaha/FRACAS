import type {AxiosError} from 'axios'

export interface Login {
    phone: string,
    password: string,
}

export interface AuthContextType {
    isAuthenticated: boolean,
    isInitializing: boolean,
    error: AxiosError | null,
    login: (credentials: Login) => Promise<void>,
    logout: () => Promise<void>
}