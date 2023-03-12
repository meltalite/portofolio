import * as React from 'react';
import { About } from './about';
import Copyright from './copyright';
import TopMenu from './top-menu';
import Experiences from './experiences';
import ContactMe from './contact-me';

export default function PageStructure() {
  return <>
    <TopMenu />
    <About />
    <Experiences />
    <ContactMe />
    <Copyright />
  </>
}