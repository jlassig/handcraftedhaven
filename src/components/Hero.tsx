interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (

      <h1 className="bg-blue text-gold font-sans text-2xl">{title}</h1>

  );
};

export default Hero;