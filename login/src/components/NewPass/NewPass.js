import React, { useState } from "react";
import "./NewPass.css";
import SuccessMessage from "./SuccessMessage";

function NewPass() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({ newPassword: "", confirmPassword: "" });
    const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false); // برای نمایش پیام موفقیت

    const handleSubmit = (event) => {
        event.preventDefault();

        let valid = true;
        const newErrors = { newPassword: "", confirmPassword: "" };

        if (!newPassword) {
            newErrors.newPassword = "این فیلد نباید خالی باشد";
            valid = false;
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = "این فیلد نباید خالی باشد";
            valid = false;
        }

        if (newPassword && confirmPassword && newPassword !== confirmPassword) {
            newErrors.confirmPassword = "تکرار رمز عبور با رمز عبور یکسان نیست";
            valid = false;
            setIsPasswordMismatch(true);
        } else {
            setIsPasswordMismatch(false);
        }

        setErrors(newErrors);

        if (valid) {
            console.log("Sending data...");
            setIsSuccess(true); // نمایش پیام موفقیت
        }
    };

    const handleLoginRedirect = () => {
        console.log("Redirecting to login page...");
    };

    return (
        <div>
            {isSuccess ? (
                <SuccessMessage onRedirect={handleLoginRedirect} />
            ) : (
                <div className="div-frame1">
                    <div className="div-project-title">
                        <p className="para-prj-title">پروژه نگار</p>
                    </div>
                    <div className="div-new-pass-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-title">
                                <p className="para-title">تعریف رمز عبور جدید</p>
                                <p className="para-welcome">رمز عبور جدید شما باید مغایر با رمز عبور قبلی باشد.</p>
                            </div>
                            <div className="div-change-pass">
                                <label
                                    htmlFor="newPassword"
                                    className={`para-username ${isPasswordMismatch ? "error-label" : ""}`}
                                >
                                    رمز عبور جدید
                                </label>
                                <input
                                    id="newPassword"
                                    className={`input-new-pass ${
                                        errors.newPassword || isPasswordMismatch ? "input-error" : ""
                                    }`}
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                {errors.newPassword && <p className="error-message">{errors.newPassword}</p>}

                                <label
                                    htmlFor="confirmPassword"
                                    className={`para-username ${isPasswordMismatch ? "error-label" : ""}`}
                                >
                                    تکرار رمز عبور جدید
                                </label>
                                <input
                                    id="confirmPassword"
                                    className={`input-conf-pass ${
                                        errors.confirmPassword || isPasswordMismatch ? "input-error" : ""
                                    }`}
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {errors.confirmPassword && (
                                    <div className="div-general-error">
                                        <i className="fas fa-exclamation-triangle warning-icon"></i>
                                        <p>{errors.confirmPassword}</p>
                                    </div>
                                )}
                            </div>
                            <button type="submit" className="btn-change">
                                تغییر رمز عبور
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewPass;
