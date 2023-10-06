import React, {useState} from 'react';
import './App.css';
import { MessageBus } from '@podium/browser';

function App() {
    const messageBus = new MessageBus();
    const [username, setUsername] = useState<string>('');

    messageBus.subscribe(
        'testChannel',
        'testTopic',
        (event) => {
            const user = event.payload;
            setUsername(user as string);
        }
    )

    return (
    <div className="App">
      <header className="App-header">
        <p>
          Really cool Dashboard coming soon!
        </p>
          <p>
              Test: {username}
          </p>
      </header>
    </div>
  );
}

export default App;
