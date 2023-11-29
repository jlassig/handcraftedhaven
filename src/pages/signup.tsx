import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Signup from '../components/Signup';

const SignupPage: React.FC = () => {
  return (
    <Layout>
      <Hero title="Sign up" />
      <Signup />
    </Layout>
  );
};

export default SignupPage;