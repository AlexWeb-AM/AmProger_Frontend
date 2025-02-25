import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../slices/authSlice";
import { RootState, AppDispatch } from "../store/store";
import { toast } from "react-toastify";

export const LoginComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);
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
      navigate(`/user/${response.user.routeId}/posts`);
    } catch (err: any) {
      toast.error(err?.message || "Login failed");
    }
  };

  return (
    <div className="login_div">
      <h2>Մուտք</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="Էլ․Հասցե"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Գաղտնաբառ"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          Մոտք
        </button>
      </form>
      <h4>
        Դեռ չունեք հաշիվ? <Link to="/signup">Sign up</Link>
      </h4>
    </div>
  );
};
