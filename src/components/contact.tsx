import React from 'react';

interface SocialIconButtonProps {
  icon: React.ReactElement;
  link: string;
}

const SocialIconButton: React.FC<SocialIconButtonProps> = ({ icon, link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <button onClick={handleClick} className="social-icon-button">
      {icon}
    </button>
  );
};

export default SocialIconButton;

