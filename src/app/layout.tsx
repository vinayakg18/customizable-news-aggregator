import { ReactNode } from 'react';
import '../app/globals.css';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Customizable News Aggregator</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;
