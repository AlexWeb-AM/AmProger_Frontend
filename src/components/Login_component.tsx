import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../slices/authSlice";
import { RootState, AppDispatch } from "../store/store";
import { toast } from "react-toastify";

export const LoginComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      const response = await dispatch(loginUser({ email, password })).unwrap();
      toast.success("Login successful");
      localStorage.setItem("userEmail", email);
      localStorage.setItem("routeId",response.user.routeId)
      navigate(`/user/${response.user.routeId}/posts`);
    } catch (err: any) {
      toast.error(err?.message || "Login failed");
    }
  };

  

  return (
    <div className="login_div">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={isLoading}>
          Login
        </button>
      </form>
      <h4>
      Don't have an account yet? <Link to="/signup">Sign up</Link>
      </h4>
    </div>
  );
};
