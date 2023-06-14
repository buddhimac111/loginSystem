import React, { ReactNode } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: "Buddhima Wijesooriya",
  description: "Discover and share AI Prompts",
};

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang={"en"}>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
