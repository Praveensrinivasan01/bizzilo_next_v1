'use client';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function ClientTabs({ defaultActiveKey, id, className, children }) {
  return (
    <Tabs 
      defaultActiveKey={defaultActiveKey} 
      id={id} 
      className={className}
    >
      {children}
    </Tabs>
  );
}