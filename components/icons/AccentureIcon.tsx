import React from 'react';
import Image from 'next/image';

const IntuitIcon = () => (
  <div className="flex items-center justify-center w-24 h-24 relative rounded-full overflow-hidden filter grayscale">
      <Image
        src="./logos/accenture.png"
        alt="intuit logo"
        width={150}
        height={150}
        objectFit="cover"
      />
    </div>
);

export default IntuitIcon;
