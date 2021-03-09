import Header from "../components/Header";

function HomePage() {
  return (
    <Header
      title="KoolBlock"
      sections={[{ title: "Our Work", url: "/about_us" }]}
    />
  );
}

export default HomePage;
