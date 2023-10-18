import { useState, useEffect } from "react";

const useDataLoading = (initialDelay = 2000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, initialDelay);

    return () => clearTimeout(loadingTimeout);
  }, [initialDelay]);

  return isLoading;
};

export default useDataLoading;
