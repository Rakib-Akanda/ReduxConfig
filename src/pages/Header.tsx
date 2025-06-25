import { useAppSelector } from "../redux/hook";

export default function Header() {
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div className="p-4 bg-slate-300 text-xl">Global Redux Count: {count}</div>
  );
}
