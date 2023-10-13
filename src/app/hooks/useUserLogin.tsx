import {useState} from 'react';
import { useRouter } from 'next/navigation';
import { loginUsers, LoginUser } from '../utilities/utils';
import cookie from 'cookiejs';


export const initialFormData: LoginUser = {
  email: '',
  password: '',
};


const useLogin = (initialFormData: LoginUser) => {
  const router = useRouter();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [user, setUser] = useState<string | object>();
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
  const [formData, setFormData] = useState(initialFormData);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginUsers(formData);

      if (response.error == 'Successfully logged in.') {

        setErrors(response.error)

        cookie.set('sessionToken', response);

        setLoginSuccess(true);
        setTimeout(() => {
          router.push('/dashboard');
        }, 3000);

      } else {

        setErrors(response.error)

      }
    } catch (error) {

      console.error(error);
    }
  };
  return { user, errors,setErrors,formData,setFormData,cookie, handleSubmit };
}

export default useLogin;



