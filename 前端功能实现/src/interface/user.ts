interface User {
  name: string;
  age: number;
  isActive: boolean;
}

interface User2 {
  id: number;
  username: string;
  password: string;
  age: number;
  weight: number;
  balance: number;
  active: boolean;
  birthDate: Date;
  roles: string[];
  attributes: Record<string, string>;
}
