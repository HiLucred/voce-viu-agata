import Image from 'next/image'
import { Container, GameDownloadBox, Menu, MenuLink } from './styles'
import { Link, animateScroll as scroll, scroller } from 'react-scroll'
import itchioLogo from '../../assets/itchio-logo-textless-black.png'
import { Title } from '../Typography'

export function NavBar() {
  return (
    <Container>
      <Menu>
        <Link to='home' smooth={true} duration={800} offset={-500}>
          <MenuLink>INÍCIO</MenuLink>
        </Link>

        <Link to='pitch' smooth={true} duration={800} offset={10}>
          <MenuLink>SOBRE</MenuLink>
        </Link>

        <Link to='features' smooth={true} duration={800}>
          <MenuLink>FEATURES</MenuLink>
        </Link>

        <Link to='screenshots' smooth={true} duration={800} offset={-50}>
          <MenuLink>SCREENSHOTS</MenuLink>
        </Link>

        <Link to='faq' smooth={true} duration={800}>
          <MenuLink>FAQ</MenuLink>
        </Link>

        <Link to='join-us' smooth={true} duration={800}>
          <MenuLink>JUNTE-SE</MenuLink>
        </Link>

        <Link to='contact' smooth={true} duration={800}>
          <MenuLink>CONTATO</MenuLink>
        </Link>
      </Menu>

      <GameDownloadBox
        href={'https://lucvang.itch.io/onde-est-gata'}
        target='_blank'
      >
        <Title>BAIXE AGORA</Title>
        <Image src={itchioLogo} alt='Logo itch.io' width={24} height={24} />
      </GameDownloadBox>
    </Container>
  )
}
