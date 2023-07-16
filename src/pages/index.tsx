import MainScreen from "@/components/MainScreen/MainScreen";
import PageHead from "@/components/Head";
import Aside from "@/components/Aside";

function Home() {
  return (
    <>
      <PageHead title="Home page" />
      <Aside />
      <main className="float-right w-4/5 h-screen bg-emerald-100"></main>
    </>
  );
}

export default Home;
