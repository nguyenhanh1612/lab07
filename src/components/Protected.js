import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

export default function Protected({ children }) {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast.error("You need to login first!");
      navigate("/signin");
    }
  }, [user, navigate]);

  return children;
}
