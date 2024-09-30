import { useRef, useState } from 'react';
import Hello, { MyHandler } from './components/Hello';
import My from './components/My';
import { SessionProvider } from './hooks/session-context';
import { useDebounce, useInterval } from './hooks/timer-hooks';
import Button from './components/atoms/Button';
import useToggle from './hooks/toggle';

function App() {
  const { clear, reset } = useInterval(() => setFriend((pre) => pre + 1), 2000);
  const [friend, setFriend] = useState(10);
  const myHandleRef = useRef<MyHandler>(null);
  const friendRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const [, toggleReRender] = useToggle();
  useDebounce(
    () => {
      setFriend(+(friendRef.current?.value || 0));
    },
    1000,
    [friendRef.current?.value]
  );
  return (
    <div className='flex flex-col items-center'>
      <SessionProvider>
        <div className='mt-3 w-64'>
          <input
            type='number'
            defaultValue={friend}
            onChange={toggleReRender}
            ref={friendRef}
            placeholder='friend id...'
            className='inp'
          />
        </div>
        <div className='m-1 gap-1 p-1'>
          <Button onClick={reset} className='m-1 p-1'>
            Reset
          </Button>
          <Button onClick={clear} className='m-1 p-1'>
            Clear
          </Button>
        </div>

        <Hello friend={friend} ref={myHandleRef} />
        <hr />
        <My search={search} setSearch={setSearch} searchRef={searchRef} />
      </SessionProvider>
    </div>
  );
}

export default App;
