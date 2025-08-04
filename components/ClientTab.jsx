'use client';

import Tab from 'react-bootstrap/Tab';

export default function ClientTab({ eventKey, title, children }) {
  return (
    <Tab eventKey={eventKey} title={title}>
      {children}
    </Tab>
  );
}