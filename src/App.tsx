import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { useHero } from "./hooks/useHero";
import "./App.css";
import Header from "./components/header";
import PageIntro from "./components/page_intro";
import PageMainContent from "./components/page_main_content";

function App() {
  const [nav, setNav] = useState<string[]>([]);
  const { data, isLoading, error } = useFetch();
  const { heroics, waitAMo, fail } = useHero();

  useEffect(() => {
    setNav(() => {
      return ["trending", "your orders", "community"];
    });
  }, [data, heroics]);

  return (
    <>
      <Header nav={nav} />
      <PageIntro waitAMo={waitAMo} heroics={heroics} />
      <PageMainContent isLoading={isLoading} data={data} />
    </>
  );
}

export default App;
