/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import * as React from "react";

 import Container from "react-bootstrap/Container";
 import Row from "react-bootstrap/Row";
 import Col from "react-bootstrap/Col";
 import Translate from "@docusaurus/Translate";
 import Layout from "@theme/Layout";
 import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
 
 import AXIALunarCanary from "@site/static/img/axialunar_canary_white.svg";
 
 function HomeNav() {
   const NavContainer = ({ children }) => (
     <section className="homeNavContainer">
       <Container className="h-100">
         <Row className="h-100 d-flex align-items-center">{children}</Row>
       </Container>
     </section>
   );
 
   const NavItem = ({ href, aosDelay, children }) => (
     <Col xs={12} md={12} lg={6} className="homeNavItem rounded-lg">
       <a
         href={href}
         className="h-100 d-flex align-items-center"
         data-aos="fade-up"
         data-aos-delay={aosDelay}
       >
         <div className="mx-auto">{children}</div>
       </a>
     </Col>
   );
 
   const NavItemTitle = ({ children }) => (
     <h2 className="display-4 mt-0 text-dark font-weight-bold text-center">
       {children}
     </h2>
   );
 
   const NavItemContent = ({ children }) => (
     <p className="small text-secondary px-4">{children}</p>
   );
 
   return (
     <NavContainer>
       <NavItem href={useDocUrl("learn-architecture")} aosDelay="0">
         <h3>For</h3>
         <NavItemTitle>
           <Translate
             id="homePage.navContainer.learn.title"
             description="Title of Learn Navigator in Home page"
           >
              Everyone
           </Translate>
         </NavItemTitle>
         <NavItemContent>
           <Translate
             id="homePage.navContainer.learn.content"
             description="Content of Learn Navigator in Home page"
           >
             AXIA is a sharded protocol that enables blockchain networks to
             operate together seamlessly.
           </Translate>
         </NavItemContent>
         
        </NavItem>
       <NavItem href={useDocUrl("build-index")} aosDelay="200">
       <h3>For</h3>
         <NavItemTitle>
           <Translate
             id="homePage.navContainer.build.title"
             description="Title of Build Navigator in Home page"
           >
             Developers
           </Translate>
         </NavItemTitle>
         <NavItemContent>
           <Translate
             id="homePage.navContainer.build.content"
             description="Content of Build Navigator in Home page"
           >
             Most up-to-date information on the status of the development tools
             in the AXIA ecosystem.
           </Translate>
         </NavItemContent>
       </NavItem>
     </NavContainer>
   );
 }
 
 function HomeFooter() {
   const FooterContainer = ({ children }) => (
     <section>
     </section>
   );
 
 
   const ImproveWiki = () => (
     <Col>
     </Col>
   );
 
   return (
     <FooterContainer>
       <ImproveWiki />
     </FooterContainer>
   );
 }
 
 export default function Index() {
   const { siteConfig } = useDocusaurusContext();
 
   return (
     <Layout title={siteConfig.tagline}>
       <div className="homeContainer">
         <HomeNav />
         <HomeFooter />
       </div>
     </Layout>
   );
 }
 
 function useDocUrl(url) {
   const { siteConfig } = useDocusaurusContext();
   const { baseUrl } = siteConfig;
   const docsPart = "docs/";
   return `${baseUrl}${docsPart}${url}`;
 }
