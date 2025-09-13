import React from 'react';
import { useTheme } from "@/shared/lib/hooks/useTheme";

const MainPage = () => {

  const { toggleTheme } = useTheme();

  return (
    <div>
      MAIN PAGE

      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
};

export default MainPage;