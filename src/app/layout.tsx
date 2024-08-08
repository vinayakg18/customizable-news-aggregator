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
        <title>NewsFlex</title>
      </head>
      <body>
        <div className="scalable-container">
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;
