import React, { useState } from 'react';
import './NewPass.css';

function NewPass() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ newPassword: '', confirmPassword: '' });
    const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        let valid = true;
        const newErrors = { newPassword: '', confirmPassword: '' };

        if (!newPassword) {
            newErrors.newPassword = 'این فیلد نباید خالی باشد';
            valid = false;
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = 'این فیلد نباید خالی باشد';
            valid = false;
        }

        if (newPassword && confirmPassword && newPassword !== confirmPassword) {
            newErrors.confirmPassword = 'تکرار رمز عبور با رمز عبور یکسان نیست';
            valid = false;
            setIsPasswordMismatch(true);
        } else {
            setIsPasswordMismatch(false);
        }

        setErrors(newErrors);

        if (valid) {
            console.log('Sending data...');
            window.location.href = '/path/to/SuccessPass.html'; // مسیر فایل SuccessPass.html
        }
    };

    return (
        <div className="div-frame1">
            <form onSubmit={handleSubmit}>
                <div className="div-change-pass">
                    <label htmlFor="newPassword">رمز عبور جدید</label>
                    <input
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {errors.newPassword && <p>{errors.newPassword}</p>}

                    <label htmlFor="confirmPassword">تکرار رمز عبور جدید</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>

                <button type="submit">تغییر رمز عبور</button>
            </form>
        </div>
    );
}

export default NewPass;
