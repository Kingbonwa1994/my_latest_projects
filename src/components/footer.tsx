import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import  SocialIconButton  from './contact';
import { FaSquareXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <div className="text-center flex-1 mb-0 absolute sticky bottom-0 sm:gap-4">
    <SocialIconButton icon={<FaWhatsapp/>} link="https://wa.me/+27659505243" />
      <SocialIconButton icon={<FaSquareXTwitter />} link="https://x.com/BonwaMdluli" />
      <SocialIconButton icon={<FaLinkedin />} link="https://linkedin.com/in/mdluli-bonwayinkosi-b1505b217/" />
      <SocialIconButton icon={<FaGithub />} link="https://github.com/Kingbonwa1994" />
    
    </div>
  );
}

export default Footer;
