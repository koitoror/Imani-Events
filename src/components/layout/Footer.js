import React from 'react';
import {
  Container,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';

import GridItem from '../CustomGrid/GridItem';
import GridContainer from '../CustomGrid/GridContainer';

const Footer = () => (
  <Segment
    inverted
    vertical
    style={{
      padding: '130px 0px 130px',
    }}
  >
    <Container>
      <GridContainer
        divided
        inverted
        stackable
        columns={4}
      >

        <GridItem>
          <Header inverted as="h1" content="About" className="single_footer_part"/>
          <List link inverted>
            <Header as="h2" inverted>Imani Events</Header>
            <List.Item as="h2"> Event planners and outdoor decor services.</List.Item>
            <List.Item as="h3" inverted="true">
              Contact us on outdoor decor services for any kind of occasion you might have in 
              mind from weddings to parties.
            </List.Item>
          </List>
        </GridItem>
        <GridItem>
          <Header inverted as="h1" content="Contact Info" className="single_footer_part"/>
          <List link inverted>
            <List.Item as="h3"> Website : www.imani.events</List.Item>
            <List.Item as="h3">Phone : +254 7</List.Item>
            <List.Item as="h3">Email : info@imani.events</List.Item>
          </List>
        </GridItem>
        <GridItem>
          <Header inverted as="h1" content="Services" className="single_footer_part"/>
          <List link inverted>
            <List.Item as="h3">API</List.Item>
            <List.Item as="h3">About</List.Item>

          </List>
        </GridItem>
        <GridItem>
          <Header inverted as="h1" content="Imani Events" className="single_footer_part"/>
          <p style={{fontSize: '1.4rem'}}>
            Copyright ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            All rights reserved.

          </p>
        </GridItem>
      </GridContainer>
    </Container>
  </Segment>
);

export default Footer;
