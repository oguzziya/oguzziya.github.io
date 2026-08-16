import Links from '@/components/Links';
import '@/styles/globals.css'
import styled from 'styled-components';

const FullPageDiv = styled.div`
  max-width: 800px;
  margin: auto;
  background: white;
`

export default function RootLayout({
  children,
})
{
  return (
    <html lang="en">
      <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin"></link>
      <body>
        <FullPageDiv>
          {children}
          <Links/>
        </FullPageDiv>
      </body>
    </html>
  );
}
