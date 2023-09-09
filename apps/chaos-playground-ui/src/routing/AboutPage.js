import React from 'react';

import { Typography, Container } from '@mui/material';
function AboutPage() {
    return (
      <Container>
        <Typography variant="h5" component="h1" gutterBottom>
          What is Chaos Playground?
        </Typography>
        <Typography variant="body1">
            Chaos Playground helps builders accelerate their understanding of chaos engineering and how cloud and software architectures, software patterns and infrastructure
            contribute to the overall resiliency of an application. This playground comes with pre-baked applications of various use cases and modern architectures and frameworks.
        </Typography>
      </Container>
    );
  }

export default AboutPage;