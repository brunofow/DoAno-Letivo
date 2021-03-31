import { createContext, useState, useEffect } from 'react';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

export const FormContext = createContext({});

export function FormProvider({ children }) {
  const [ isRegisterModalOpen, setIsRegisterModalOpen ] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [ donor, setDonor ] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    isRegisterModalOpen ? body.classList.add("modalNoScroll") : body.classList.remove("modalNoScroll");
  }, [isRegisterModalOpen])

  useEffect(() => {
    const body = document.querySelector('body');
    isLoginModalOpen ? body.classList.add("modalNoScroll") : body.classList.remove("modalNoScroll");
  }, [isLoginModalOpen])

  return (
    <FormContext.Provider value={{
      setIsRegisterModalOpen,
      setIsLoginModalOpen,
      setDonor
    }}>
      {children}
      { isRegisterModalOpen && <RegisterModal donor={donor} /> }
      { isLoginModalOpen && <LoginModal donor={donor} />}
    </FormContext.Provider>
  )
}