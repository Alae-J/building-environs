import React from 'react';
import Button from './Button';

interface Platform { name: string; href: string; }
interface ButtonGroupProps { platforms: Platform[]; }

const ButtonGroup: React.FC<ButtonGroupProps> = ({ platforms }) => (
  <div className="flex space-x-2">
    {platforms.map(p => (
      <Button key={p.name} href={p.href} variant="secondary">{p.name}</Button>
    ))}
  </div>
);

export default ButtonGroup;