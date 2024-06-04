import { Container, MessageList, Composer, ComposerInput, ComposerButton, WebchatProvider, useClient } from '@botpress/webchat';

import './style.css';
import { theme } from './theme';

const clientId = '07657133-e358-45ea-b49e-f1eed1f6c698';

export default function App() {
  const client = useClient({ clientId });

  return (
    <WebchatProvider client={client} theme={theme}>
      <Container style={{ height: '100vh', display: 'flex', justifyContent: 'space-between' }}>
        <MessageList />
        <Composer>
          <ComposerInput />
          <ComposerButton />
        </Composer>
      </Container>
    </WebchatProvider>
  );
}
