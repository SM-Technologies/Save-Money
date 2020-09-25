import React from 'react';
import { useRouter } from 'next/router';

export default function ProductItem() {
  const {
    query: { id },
  } = useRouter();
  return (
    <div>
      <h1>hello World {id}</h1>
    </div>
  );
}
