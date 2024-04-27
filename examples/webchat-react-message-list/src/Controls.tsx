import './controls.css';

import { WebchatClient } from '@botpress/webchat';

export const Controls = ({ client }: { client: WebchatClient }) => {
  const newConversation = async () => {
    await client.newConversation();
  };

  const sendMessage = async () => {
    await client.sendMessage('Tell me a joke!');
  };

  return (
    <div className="controls">
      <button className="controls-btn" onClick={newConversation}>
        Restart
      </button>
      <button className="controls-btn" onClick={sendMessage}>
        More Jokes
      </button>
    </div>
  );
};
