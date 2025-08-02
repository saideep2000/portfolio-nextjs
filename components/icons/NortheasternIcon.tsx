import React from 'react';
import Image from 'next/image';

const NortheasternIcon = () => (
  <div className="w-24 h-24 relative rounded-full overflow-hidden">
    <Image
      src="./logos/NEU.png"
      alt="northeastern logo"
      layout="fill"
      objectFit="cover"
    />
  </div>
);

export default NortheasternIcon;
