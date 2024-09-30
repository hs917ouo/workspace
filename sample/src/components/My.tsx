import { FaPlus } from 'react-icons/fa6';
import Login from './Login.tsx';
import Profile from './Profile.tsx';
import Button from './atoms/Button.tsx';
import { useLayoutEffect, useMemo, useRef } from 'react';
import { useSession } from '../hooks/session-context.tsx';
import Item from './Item.tsx';
import useToggle from '../hooks/toggle.ts';
import { useDebounce, useTimeout } from '../hooks/timer-hooks.ts';

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchRef: React.RefObject<HTMLInputElement>;
};

export default function My({ search, setSearch, searchRef }: Props) {
  const { session, toggleReloadSession } = useSession();
  const logoutButtonRef = useRef<HTMLButtonElement>(null);

  // };
  const [isAdding, toggleAdding] = useToggle();
  const [, toggleReRender] = useToggle();

  const totalPrice = useMemo(
    () => session.cart.reduce((acc, item) => acc + item.price, 0),
    [session.cart]
  );

  const dcPrice = useMemo(() => totalPrice * 0.1, [totalPrice]);

  useDebounce(
    () => {
      setSearch(searchRef.current?.value || '');
    },
    1000,
    [searchRef.current?.value]
  );

  useLayoutEffect(() => {
    console.log('$$$', totalPrice);
  }, [totalPrice]);

  let xxx = 0;
  useTimeout(() => {
    xxx++;
  }, 1000);

  return (
    <>
      {session.loginUser ? (
        <div className='flex gap-5'>
          <Profile ref={logoutButtonRef} xxx={xxx} />
          <Button onClick={() => logoutButtonRef.current?.focus()}>
            MySignOut
          </Button>
        </div>
      ) : (
        <Login />
      )}

      <div className='mt-3 w-64'>
        <input
          type='text'
          defaultValue={search}
          onChange={toggleReRender}
          ref={searchRef}
          placeholder='search...'
          className='inp'
        />
      </div>

      <ul className='my-3 w-2/3 border p-3'>
        {session.cart?.length ? (
          session.cart
            .filter(({ name }) => name.includes(search))
            .map((item) => (
              <li key={item.id}>
                <Item item={item} />
              </li>
            ))
        ) : (
          <li className='text-slate-500'>There is no items.</li>
        )}
        <li className='mt-3 text-center'>
          {isAdding ? (
            <Item
              item={{ id: 0, name: '', price: 0 }}
              toggleAdding={() => toggleAdding()}
            />
          ) : (
            <Button onClick={toggleAdding}>
              <FaPlus /> Add Item
            </Button>
          )}
        </li>
      </ul>
      <div className='mb-3 flex gap-5'>
        <span>*총액: {totalPrice.toLocaleString()}원</span>
        <span>*할인: {dcPrice.toLocaleString()}원</span>
      </div>
      <Button onClick={toggleReloadSession}>Reload Session</Button>
    </>
  );
}
