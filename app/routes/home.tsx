import Link from '~/components/Links/Link';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <Typography variant="h1" sx={{ mb: 4 }}>
        Welcome to <strong>Crypto</strong>
      </Typography>
      <Typography>A simple cryptography web app built with React, TypeScript, and Material-UI.</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h2">Ciphers</Typography>
            <Typography>
              <ul className="flex gap-2 flex-col mt-4">
                <li>
                  <Link href="/caesar-cipher" className="underline underline-offset-2">
                    Caesar Cipher
                  </Link>
                </li>
                <li>
                  <Link href="/emoji-cipher" className="underline underline-offset-2">
                    Emoji Cipher
                  </Link>
                </li>
                <li>
                  <Link href="/vigenere-cipher" className="underline underline-offset-2">
                    Vigenère Cipher
                  </Link>
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
