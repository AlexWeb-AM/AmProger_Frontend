import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/authSlice";
import { RootState, AppDispatch } from "../store/store";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUpComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.auth); 
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const validateForm = (): boolean => {
    let isValid = true;

    if (!name) {
      toast.error("Անունը պարտադիր է");
      isValid = false;
    }

    if (!email) {
      toast.error("Էլ․ փոստը պարտադիր է");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Էլ․ փոստը վավեր չէ");
      isValid = false;
    } else if (email.slice(-10) !== "@gmail.com") {
      isValid = false;
      toast.error("Էլ․ փոստը վավեր չէ");
    }

    if (!password) {
      toast.error("Գաղտնաբառը պարտադիր է");
      isValid = false;
    } else if (password.length < 6) {
      toast.error("Գաղտնաբառը պետք է պարունակի առնվազն 6 նիշ");
      isValid = false;
    } else if (!/[0-9]/.test(password)) {
      toast.error("Գաղտնաբառը պետք է պարունակի թվանշան");
      isValid = false;
    }

    if (!confirmPassword) {
      toast.error("Կրկնել գաղտնաբառը պարտադիր է");
      isValid = false;
    } else if (confirmPassword !== password) {
      toast.error("Գաղտնաբառերը չեն համընկնում");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await dispatch(registerUser({ name, email, password })).unwrap();
      toast.success("Successfully Signed");

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      localStorage.setItem("emailForVerification", email);

      navigate("/verify-email");
    } catch (err: any) {
      if (err?.response?.status === 400) {
        toast.error("That e-mail mail is already registered");
      } else {
        toast.error(err?.message || "Սխալ");
      }
    }
  };

  return (
    <div className="sign_up_div">
      <h2>Գրանցվել</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Retry Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          Sign Up
        </button>
      </form>
      <h4>
      Already registered? <Link to="/login">Login</Link>
      </h4>
    </div>
  );
};
