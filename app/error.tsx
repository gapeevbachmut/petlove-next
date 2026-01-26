'use client';

import Button from '@/components/Button/Button';

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <div>
      <h2>Error while loading</h2>
      <p>{error.message}</p>
      <Button variant="primary" onClick={reset}>
        Try again
      </Button>
    </div>
  );
};

export default Error;
