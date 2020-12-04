import { Typography } from '@material-ui/core';
import Image from 'next/image';

function UnderConstruction() {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col opacity-50'>
      <Image src='/images/underConstruction.svg' height={100} width={100} />
      <Typography variant='body1' className='uppercase text-xs mt-2'>
        Under Construction
      </Typography>
    </div>
  );
}

export default UnderConstruction;
