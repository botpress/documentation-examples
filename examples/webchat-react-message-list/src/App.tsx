import { Container, MessageList, WebchatProvider, getClient } from '@botpress/webchat';

import './style.css';
import { theme } from './theme';
import { Controls } from './Controls';

const clientId = '07657133-e358-45ea-b49e-f1eed1f6c698';

export default function App() {
  const client = getClient({ clientId });

  return (
    <WebchatProvider client={client} theme={theme}>
      <Container>
        <MessageList />
      </Container>
      <Controls client={client} />
    </WebchatProvider>
  );
}
