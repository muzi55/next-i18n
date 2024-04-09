'use client';
import { useRouter } from 'next/navigation';
interface IButtonProps {
  language: string;
  children: React.ReactNode;
}
function Button({ children, language }: IButtonProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${language}`);
  };
  return (
    <button className="border py-2 px-3 rounded bg-amber-400 text-white font-bold" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
