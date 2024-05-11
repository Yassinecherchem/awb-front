import { AppShell, Burger, Card, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { NavbarMinimalColored } from './NavbarMinimalColored';
import awbPic from '../images/image.png';
import { Grids } from './Grids';
import  Cards  from './Cards.Tsx';

export function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <img src={awbPic} style={{height:'80%', width:'auto'}} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar style={{width:'5%'}} >
        <NavbarMinimalColored/>
      </AppShell.Navbar>
      <AppShell.Main>
        <Grids/>
      </AppShell.Main>
    </AppShell>
  );
}