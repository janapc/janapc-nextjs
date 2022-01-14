import type { NextPage } from 'next';
import Image from 'next/image';
import { SiLinkedin, SiTwitter, SiGithub } from 'react-icons/si';
import { IoMail } from 'react-icons/io5';

import { Main, ContactContainer } from './styles';

const Contact: NextPage = () => {
  return (
    <Main data-testid="page-contact">
      <h2 data-testid="title-contact">Contato</h2>
      <Image
        src="/images/profile-2.svg"
        alt="Emoji de Janaina Pedrina"
        width="300"
        height="300"
        data-testid="image-contact"
      />
      <ContactContainer data-testid="container-contact">
        <a
          href="https://github.com/janapc"
          target={'_blank'}
          rel="noreferrer"
          data-testid="github-contact"
        >
          <SiGithub size={42} color="#FD3A69" title="Github" />
        </a>
        <a
          href="https://twitter.com/Janapc_"
          target={'_blank'}
          rel="noreferrer"
          data-testid="twitter-contact"
        >
          <SiTwitter size={42} color="#FD3A69" title="Twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/janaina-pedrina/"
          target={'_blank'}
          rel="noreferrer"
          data-testid="linkedin-contact"
        >
          <SiLinkedin size={42} color="#FD3A69" title="Linkedin" />
        </a>
        <a
          href="mailto:jana-costa@outlook.com"
          target={'_blank'}
          rel="noreferrer"
          data-testid="mail-contact"
        >
          <IoMail size={42} color="#FD3A69" title="Mail" />
        </a>
      </ContactContainer>
    </Main>
  );
};

export default Contact;
