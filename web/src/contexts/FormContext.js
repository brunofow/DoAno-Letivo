import { createContext, useState, useEffect } from 'react';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

export const FormContext = createContext({});

export function FormProvider({ children }) {
  const [ isRegisterModalOpen, setIsRegisterModalOpen ] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [ actualKit, setActualKit ] = useState(null);
  const [ actualEmail, setActualEmail ] = useState('');
  const [ donor, setDonor ] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if(isRegisterModalOpen) {
      body.classList.add("modalNoScroll");
    } else if(isLoginModalOpen) {
      body.classList.add("modalNoScroll");
    } else {
      body.classList.remove("modalNoScroll");
    }
  }, [isRegisterModalOpen, isLoginModalOpen])


  return (
    <FormContext.Provider value={{
      setIsRegisterModalOpen,
      setIsLoginModalOpen,
      setDonor,
      actualKit,
      setActualKit,
      actualEmail,
      setActualEmail
    }}>
      {children}
      { isRegisterModalOpen && <RegisterModal donor={donor} /> }
      { isLoginModalOpen && <LoginModal donor={donor} />}
    </FormContext.Provider>
  )
}