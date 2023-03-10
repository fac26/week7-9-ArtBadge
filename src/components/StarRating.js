import { Icon } from '@iconify/react';
// import style from '../styles/StarRating.module.css';

const Star = ({ filled }) =>
  filled ? (
    <Icon color="#FFD700" icon="ic:round-star" />
  ) : (
    <Icon color="#8d939e" icon="ic:round-star-outline" />
  );

const HalfStar = () => <Icon color="#FFD700" icon="tabler:star-half-filled" />;

export default function StarRating({ value }) {
  const filledStars = Math.floor(value);
  const halfFilledStar = value - filledStars <= 0.5;
  const emptyStars = 5 - filledStars - (halfFilledStar ? 1 : 0);

  return (
    <div>
      {[...Array(filledStars)].map((n, i) => (
        <Star key={i} filled />
      ))}
      {halfFilledStar && <HalfStar />}
      {[...Array(emptyStars)].map((n, i) => (
        <Star key={i} filled={false} />
      ))}
    </div>
  );
}
