const SparklesAnimation = () => {
  return (
    <div className="sparkles-container">
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 10 + 5; // Random size between 5px and 15px
        const duration = Math.random() * 3 + 4; // Random duration between 2s and 5s
        return (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${size}px`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default SparklesAnimation;
