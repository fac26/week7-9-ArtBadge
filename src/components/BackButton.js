import { useRouter } from 'next/router';

export default function BackButton() {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return <button onClick={handleClick}>Go Back</button>;
}
