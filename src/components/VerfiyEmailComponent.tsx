import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyEmail } from "../slices/authSlice";
import { RootState, AppDispatch } from "../store/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const VerifyEmailComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus(); 
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }

      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const otpCode = otp.join("");
    console.log("OTP being sent:", otpCode); 
  
    if (otpCode.length !== 6) {
      toast.error("Խնդրում ենք մուտքագրել բոլոր 6 թվանշանները");
      return;
    }
  
    const email = localStorage.getItem("emailForVerification");
    if (!email) {
      toast.error("Էլ․ փոստը չի գտնվել");
      return;
    }
  
    try {
      const response = await dispatch(verifyEmail({ email, otp: otpCode })).unwrap();
      console.log("Response from verifyOtp:", response); 
  
      toast.success("Էլ․ փոստը հաջողությամբ հաստատված է");
      localStorage.removeItem("emailForVerification");
      navigate("/login");
      
    } catch (err: any) {
      console.error("Error in handleSubmit:", err); 
      toast.error(err?.message || "Սխալ կոդ");
    }
  };
  
  return (
    <div className="verify_div">
      <form onSubmit={handleSubmit}>
        <h1>Վերիֆիկացում</h1>
        <h3>Մուտքագրեք ձեր էլ փոստին եկած հատուկ կոդը</h3>
        <div className="otp_inputs_div">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="otp_input"
              disabled={isLoading}
            />
          ))}
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Բեռնում..." : "Հաստատել"}
        </button>
      </form>
    </div>
  );
};
