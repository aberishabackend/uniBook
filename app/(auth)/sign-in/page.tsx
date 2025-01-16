'use client';

import AuthForm from '@/components/AuthForm';
import { signInSchema } from '@/lib/validations';
import React from 'react';

export default function page() {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{ email: '', password: '' }}
      onSubmit={() => {}}
    />
  );
}
