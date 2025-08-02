import React from 'react';
import Image from 'next/image';

const IntuitIcon = () => (
  <div className="flex items-center justify-center w-24 h-24 relative rounded-full overflow-hidden filter grayscale">
      <Image
        src="./logos/intuit-logo-black-transparent.png"
        alt="intuit logo"
        width={80}
        height={80}
        objectFit="cover"
      />
    </div>
);

export default IntuitIcon;
