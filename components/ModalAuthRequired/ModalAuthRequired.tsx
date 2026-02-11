'use client';

import Link from 'next/link';
import Button from '../Button/Button';

export default function ModalAuthRequired() {
  return (
    <div>
      <h2>Attention</h2>
      <p>You must be logged in to view detailed information.</p>

      <div style={{ display: 'flex', gap: '12px' }}>
        <Link href="/auth/register">
          <Button variant="primary">Register</Button>
        </Link>

        <Link href="/auth/login">
          <Button variant="secondary">Login</Button>
        </Link>
      </div>
    </div>
  );
}
