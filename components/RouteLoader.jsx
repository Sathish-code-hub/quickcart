// components/RouteLoader.jsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./Loading"; // your existing spinner

const RouteLoader = ({ children }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeout;

    const handleStart = () => {
      timeout = setTimeout(() => setLoading(true), 100); // prevent flicker
    };

    const handleComplete = () => {
      clearTimeout(timeout);
      setLoading(false);
    };

    handleStart();
    handleComplete();

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);

  if (loading) return <Loading />;
  return children;
};

export default RouteLoader;
