'use client';

import AuthForm from '@/components/AuthForm';
import { signUpSchema } from '@/lib/validations';
import React from 'react';

export default function page() {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: '',
        password: '',
        fullName: '',
        universityId: 0,
        universityCard: '',
      }}
      onSubmit={() => {}}
    />
  );
}
