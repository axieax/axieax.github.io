import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Unknown: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://youtu.be/dQw4w9WgXcQ");
  }, []);
  return <></>;
};

export default Unknown;
