import { useState } from "react";
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error("passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDoc = await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log(`create auth user error: ${error}`);
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user: email already in use");
      }
    }
  };

  const handleChange = (event) => {
    // console.log(event);
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          name="displayName"
          onChange={handleChange}
          value={displayName}
          type="text"
          required
        />

        <label>Email</label>
        <input
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
          required
        />

        <label>Password</label>
        <input
          name="password"
          value={password}
          onChange={handleChange}
          type="password"
          required
        />

        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          type="password"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
