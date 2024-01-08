import React from 'react';
import './index.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PagesLayout = ({ children, className }: Props) => <div className={`${className} pages_layout`}>{children}</div>;

export default PagesLayout;
