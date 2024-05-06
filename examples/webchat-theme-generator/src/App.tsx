import { Webchat, WebchatProvider, getClient } from '@botpress/webchat';
import { buildTheme } from '@botpress/webchat-generator';

const clientId = '07657133-e358-45ea-b49e-f1eed1f6c698';

const themeConfig = buildTheme({
  themeName: 'prism',
  themeColor: '#634433',
})

export default function App() {
  const client = getClient({ clientId });

  return (
    <WebchatProvider client={client} theme={themeConfig.theme}>
      <style>{themeConfig.style}</style>
      <Webchat />
    </WebchatProvider>
  );
}
