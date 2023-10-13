export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
}

export const myTheme: Theme = {
  primaryColor: '#FF8901',
  secondaryColor: '#093121',
  backgroundColor: '#FFFFFF',
  textColor: '#333333',
  accentColor: '#FFD700',
};

export const darkTheme: Theme = {
  primaryColor: '#61dafb',
  secondaryColor: '#6C757D',
  backgroundColor: '#007F56',
  textColor: '#FFFFFF',
  accentColor: '#FFD700',
};