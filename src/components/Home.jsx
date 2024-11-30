import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [TestData, setTestData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/users/test").then((response) => {
      setTestData({ ...TestData, TestData: response.data });
    });
  }, [TestData]);

  return (
    <>
      <h1>Home</h1>
    </>
  );
}

export default Home;
