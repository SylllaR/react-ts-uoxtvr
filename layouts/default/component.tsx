import * as React from 'react';
import { Header } from '../../components';
import './styles.scss';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div>
      <div className="bkg" />
      <Header />
      {children}
    </div>
  );
};
