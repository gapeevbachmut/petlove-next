'use client';

import Button from '@/components/Button/Button';

type Props = {
  message: string;
  onRetry?: () => void;
};

const ErrorMessage = ({ message, onRetry }: Props) => {
  return (
    <div>
      <h2>Error while loading</h2>
      <p>{message}</p>
      <p>Whoops, something went wrong! Please try again!</p>

      <Button variant="primary" onClick={onRetry}>
        Try again
      </Button>
    </div>
  );
};

export default ErrorMessage;
