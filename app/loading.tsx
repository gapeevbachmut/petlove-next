'use client';

import { TailSpin } from 'react-loader-spinner';

const Loading = () => {
  return (
    <>
      <TailSpin
        visible={true}
        height="180"
        width="180"
        color="#f6b83d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};

export default Loading;
