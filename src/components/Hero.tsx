interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className="hero-container">
      <h1 className="bg-blue text-gold font-sans text-2xl">{title}</h1>
    </div>
  );
};

export default Hero;