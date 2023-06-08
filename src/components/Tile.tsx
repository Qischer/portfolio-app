import { ReactNode } from 'react';

interface Props {
  height: string;
  color: string;
  children: ReactNode;
}

function Tile({ height, color, children }: Props) {
  const base = 'rounded-md transition ease-in m-3';
  const properties = height + ' ' + color + ' ' + base;

  return <div className={properties}>{children}</div>;
}

export default Tile;
