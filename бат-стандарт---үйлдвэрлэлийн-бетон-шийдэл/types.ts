
export interface Product {
  id: string;
  category: 'foundation' | 'tray' | 'pole' | 'accessory';
  name: string;
  assemblyMark: string; // Угсралтын марк
  technicalMark: string; // Хийцлэлийн марк
  description: string;
  image: string;
  specs: string[];
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}
