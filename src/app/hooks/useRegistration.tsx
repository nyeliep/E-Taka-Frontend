import { useState } from 'react';
import { registerUser, UserData } from '../utilities/utils';
import { useRouter } from 'next/navigation';

export const initialFormData: UserData = {
  name: '',
  username: '',
  phone_number: '',
  email: '',
  password: '',
  confirm_password: '',
};

const useRegister = (initialFormData: UserData) => {
  const router = useRouter();
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [user, setUser] = useState<string | object>();
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
  const [formData, setFormData] = useState(initialFormData);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      const response = await registerUser(formData);

      if (response.message == 'Successfully registered') {
        setErrors(response.message)

        setRegisterSuccess(true);
        setTimeout(() => {
          router.push('/login');
        }, 3000);

      } else {

        setErrors(response.message)


      }
    } catch (error) {

      console.error(error);
    }
  };



  return { user, errors,setErrors,formData,setFormData, handleSubmit };
};

export default useRegister;


































