import { Typography } from '@material-ui/core';
import Image from 'next/image';

function UnderConstruction() {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col'>
      <Typography variant='h5' className='mb-5'>
        Under Construction
      </Typography>
      <Image src='/images/underConstruction.svg' height={250} width={250} />
    </div>
  );
}

export default UnderConstruction;
