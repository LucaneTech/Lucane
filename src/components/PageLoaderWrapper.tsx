
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../ui/Loader";
const PageLoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    setLoading(true);

  
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) return <Loader />;

  return <>{children}</>;
};

export default PageLoaderWrapper;