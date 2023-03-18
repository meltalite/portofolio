import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { project } = useParams();
  return <div>Add something here! Talks about {project}</div>
}