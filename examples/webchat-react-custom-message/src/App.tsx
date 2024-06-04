import { MessageList, Container, WebchatProvider, useClient, renderers } from '@botpress/webchat';

import './style.css';
import { theme } from './theme';

const clientId = '07657133-e358-45ea-b49e-f1eed1f6c698';

export default function App() {
  const client = useClient({ clientId });

  return (
    <WebchatProvider client={client} theme={theme} renderers={renderers}>
      <Container>
        <MessageList  />
        <h2 style={{ display: 'flex', justifyContent: 'center', fontSize: '40px', fontWeight: 'bold', color: '#666' }}>Coming Soon</h2>
      </Container>
    </WebchatProvider>
  );
}
