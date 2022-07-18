import { BiCube, BiGift, BiLaugh } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';

interface TrackIconProps {
  id: string;
}

function TrackIcon({ id }: TrackIconProps) {
  if (id === 'at_pickup') {
    return <BiCube size="2rem" />;
  }

  if (id === 'in_transit') {
    return <BiGift size="2rem" />;
  }

  if (id === 'out_for_delivery') {
    return <TbTruckDelivery size="2rem" />;
  }

  return <BiLaugh size="2rem" />;
}

export default TrackIcon;
