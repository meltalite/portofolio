import React from 'react';
import { useParams } from 'react-router-dom';

export function ProjectDetail() {
  const { name } = useParams();
  return <div>Add something here later! Talks about {name}</div>
}
