import Header from "../components/header/header";
import Section from "../components/section/Section";
export default function MainPage() {
  return (
    <div className="bg-[linear-gradient(to_right,var(--primary-color),var(--secondary-color))] min-h-screen min-w-screen flex justify-center">
      <div className="max-w-[1280px] w-full  flex flex-col gap-20">
        <Header />
        <Section />
      </div>
    </div>
  );
}
