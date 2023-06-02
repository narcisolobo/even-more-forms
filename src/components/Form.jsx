import React, { useState } from 'react';
import { checkLength, checkEmail, checkPasswords } from '../utils/form-helpers';

const blank = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Form() {
  const [form, setForm] = useState(blank);
  const [errors, setErrors] = useState(blank);

  /**
   * This function updates the state of a form by setting the value
   * of a specific input field based on the user's input.
   * @param {React.FormEvent<HTMLInputElement>} e The onChange event.
   * @returns {void}
   */
  const handleChange = (e) => {
    setForm((previousForm) => ({
      ...previousForm,
      [e.target.name]: e.target.value,
    }));
  };

  /**
   * This function handles onBlur events for form input fields and
   * checks for errors based on the input field's name.
   * @param {React.FormEvent<HTMLInputElement>} e The onBlur event.
   * @returns {void}
   */
  const handleBlur = (e) => {
    switch (e.target.name) {
      case 'firstName':
        setErrors((previousErrors) => ({
          ...previousErrors,
          firstName: checkLength('First name', form.firstName, 2),
        }));
        break;
      case 'lastName':
        setErrors((previousErrors) => ({
          ...previousErrors,
          lastName: checkLength('Last name', form.lastName, 2),
        }));
        break;
      case 'email':
        setErrors((previousErrors) => ({
          ...previousErrors,
          email: checkEmail(form.email),
        }));
        break;
      case 'password':
        setErrors((previousErrors) => ({
          ...previousErrors,
          password: checkLength('Password', form.password, 8),
        }));
        break;
      case 'confirmPassword':
        setErrors((previousErrors) => ({
          ...previousErrors,
          confirmPassword: checkPasswords(form.password, form.confirmPassword),
        }));
        break;
      default:
        break;
    }
  };

  return (
    <article>
      <form>
        <label htmlFor="firstname">
          First Name:
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={form.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && (
            <small className="error">{errors.firstName}</small>
          )}
        </label>
        <label htmlFor="lastname">
          Last Name:
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={form.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && (
            <small className="error">{errors.lastName}</small>
          )}
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="text"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && (
            <small className="error">{errors.password}</small>
          )}
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && (
            <small className="error">{errors.confirmPassword}</small>
          )}
        </label>
      </form>
    </article>
  );
}

export default Form;
