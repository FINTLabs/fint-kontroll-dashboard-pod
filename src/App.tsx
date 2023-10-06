import React, {useEffect, useState} from 'react';
import './App.css';
import { MessageBus } from '@podium/browser';


function App() {
    const [username, setUsername] = useState<string>('');
    const messageBus = new MessageBus();

    useEffect(() => {
        messageBus.subscribe(
            'testChannel',
            'testTopic',
            (event) => {
                console.log("inside message subscribe", event.payload);
                const user = event.payload;
                setUsername(user as string);
            }
        );

    }, []);

    return (
    <div className="App">
      <header className="App-header">
        <p>
          Really cool Dashboard coming soon!
        </p>
          <p>
              {username}
          </p>
      </header>
    </div>
  );
}

export default App;
