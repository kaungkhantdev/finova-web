
import type { User } from '@/features/user/type';

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
  setAuthenticatedUser: (user: User) => void;
}
