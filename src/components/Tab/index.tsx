import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useState, MouseEventHandler } from 'react';
import {
  IoHomeOutline,
  IoPersonOutline,
  IoBriefcaseOutline,
  IoSchoolOutline,
  IoFolderOutline,
  IoMailOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoSunnyOutline,
  IoMoonOutline,
} from 'react-icons/io5';
import { useAppContext } from '../../contexts/AppContext';

import { Nav, TitleTab, LinkPage, Menu, ThemeContainer } from './styles';

interface Props {
  url: string;
  click?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
}

const Tab: NextPage = () => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  const { toggleTheme, hasLight } = useAppContext();

  function Item(props: Props) {
    return (
      <li>
        <Link href={props.url} passHref>
          <LinkPage
            pathName={router.pathname}
            onClick={props.click}
            data-testid={`link-${props.url.replace('/', '')}`}
          >
            {props.children}
          </LinkPage>
        </Link>
      </li>
    );
  }

  return (
    <div data-testid="menu">
      {!toggleMenu ? (
        <Nav data-testid="desktop-menu">
          <button
            aria-label="Open Menu"
            data-testid="btn-menu"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <IoMenuOutline size={48} color="#F43B86" />
          </button>
          <TitleTab data-testid="title-menu">JP</TitleTab>
          <ul data-testid="list-menu">
            <Item url="/">
              <IoHomeOutline size={28} title="Inicio" />
            </Item>
            <Item url="/about">
              <IoPersonOutline size={28} title="Sobre Mim" />
            </Item>
            <Item url="/jobs">
              <IoBriefcaseOutline size={28} title="Empregos" />
            </Item>
            <Item url="/skill">
              <IoSchoolOutline size={28} title="Habilidades" />
            </Item>
            <Item url="/projects">
              <IoFolderOutline size={28} title="Projetos" />
            </Item>
            <Item url="/contact">
              <IoMailOutline size={28} title="Contato" />
            </Item>
          </ul>
          <ThemeContainer onClick={toggleTheme} data-testid="btn-change-theme">
            {hasLight ? (
              <div
                style={{ marginLeft: '20%', justifyContent: 'flex-end' }}
                data-testid="theme-dark"
              >
                <IoMoonOutline size={28} color="#C1C1C1" title="dark" />
              </div>
            ) : (
              <div data-testid="theme-light">
                <IoSunnyOutline size={28} color="#C1C1C1" title="light" />
              </div>
            )}
          </ThemeContainer>
        </Nav>
      ) : (
        <Menu
          style={{ display: toggleMenu ? 'block' : 'none' }}
          data-testid="mobile-menu"
        >
          <button
            aria-label="Close Menu"
            onClick={() => setToggleMenu(false)}
            data-testid="btn-close-mobile-menu"
          >
            <IoCloseOutline size={42} color="#F43B86" />
          </button>
          <ul data-testid="list-mobile-menu">
            <Item url="/" click={() => setToggleMenu(false)}>
              Inicio
            </Item>
            <Item url="/about" click={() => setToggleMenu(false)}>
              Sobre Mim
            </Item>
            <Item url="/jobs" click={() => setToggleMenu(false)}>
              Empregos
            </Item>
            <Item url="/skill" click={() => setToggleMenu(false)}>
              Habilidades
            </Item>
            <Item url="/projects" click={() => setToggleMenu(false)}>
              Projetos
            </Item>
            <Item url="/contact" click={() => setToggleMenu(false)}>
              Contato
            </Item>
          </ul>
        </Menu>
      )}
    </div>
  );
};

export default Tab;
