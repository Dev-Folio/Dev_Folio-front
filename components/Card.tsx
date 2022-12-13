import { CardDto } from '../dto';

interface CardProps {
  data: CardDto;
}

export default function Card({ data }: CardProps) {
  return <div>card!!</div>;
}
