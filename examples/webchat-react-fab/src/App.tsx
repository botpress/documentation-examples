import { Composer, ComposerButton, ComposerInput, Container, Fab, MessageList, WebchatProvider, getClient } from '@botpress/webchat';

import './style.css';
import { theme } from './theme';
import { useState } from 'react';

const clientId = '07657133-e358-45ea-b49e-f1eed1f6c698';

export default function App() {
  const client = getClient({ clientId });

  const [open, setOpen] = useState(false);

  return (
    <WebchatProvider client={client} theme={theme}>
      <Fab onClick={() => setOpen(o => !o)} style={{ position: 'absolute', zIndex: 10, right: 0, margin: '20px' }} />
      {open && (
        <Container style={{ height: '100vh', display: 'flex', justifyContent: 'space-between' }}>
          <MessageList />
          <Composer>
            <ComposerInput />
            <ComposerButton />
          </Composer>
        </Container>
      )}
    </WebchatProvider>
  );
}
