import { Typography } from '@material-ui/core';
import Image from 'next/image';

function UnderConstruction() {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col opacity-25'>
      <Typography variant='caption' className='mb-5'>
        Under Construction
      </Typography>
      <Image
        alt='under construction'
        src='/images/underConstruction.svg'
        height={100}
        width={100}
      />
    </div>
  );
}

export default UnderConstruction;
