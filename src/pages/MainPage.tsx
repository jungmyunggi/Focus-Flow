import Header from "../components/header/header";
import ControlPanel from "../components/section/control/ControlPanel";
export default function MainPage() {
  return (
    <div className="bg-[linear-gradient(to_right,var(--primary-color),var(--secondary-color))] min-h-screen min-w-screen">
      <Header />

      <ControlPanel />
    </div>
  );
}
