import Links from '@/components/Links';
import '@/styles/globals.css'
import styled from 'styled-components';

const FullPageDiv = styled.div`
  max-width: 500px;
  margin: auto;
  background: white;
`

export default function RootLayout({
  children,
})
{
  return (
    <html lang="en">
      <body>
        <FullPageDiv>
          {children}
          <Links/>
        </FullPageDiv>
      </body>
    </html>
  );
}
