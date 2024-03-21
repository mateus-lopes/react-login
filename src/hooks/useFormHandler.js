import React, { useState } from 'react';
import { verifySignIn, verifySignUp } from '../utils';

const useFormHandler = (isToCreate) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        if (isToCreate) {
            const name = e.target.elements.name.value;
            const message = verifySignUp(name, email, password);
            if (message !== true) {
                setError(message);
                setLoading(false);
                return;
            }
        } else {
            const message = verifySignIn(email, password);
    
            if (message !== true) {
                setError(message);
                setLoading(false);
                return;
            }
        }

        setError('');
        setLoading(true);
        console.log('vem luquinhas, vem safadinho, anda, bora vagabunda');
    };

    return { formData, handleInputChange, handleSubmit, error, loading };
};

export default useFormHandler;