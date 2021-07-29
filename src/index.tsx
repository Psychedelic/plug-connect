import React from 'react';
import { styled } from '@stitches/react';
import plugLight from './assets/plugLight.svg';
import plugDark from './assets/plugDark.svg';

const Button = styled('button', {
  border: 'none',
  background: 'linear-gradient(93.07deg, #FFD719 0.61%, #F754D4 33.98%, #1FD1EC 65.84%, #48FA6B 97.7%)',
  padding: '2px',
  borderRadius: '10px',
  cursor: 'pointer',

  '& > div': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: 'white',
    padding: '5px 12px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 600,
  },

  '& .dark': {
    background: '#111827',
    color: 'white',
  },

  '& img': {
    marginRight: '9px',
  },

  variants: {
    dark: {
      true: {
        '& > div': {
          background: '#111827',
          color: 'white',
        },
      }
    },
  },
});

const ConnectButton = ({
  dark,
  title,
  onConnectCallback,
}: {
  dark: boolean,
  title: string,
  onConnectCallback: (...args : any[]) => any,
}) => {
  const handleConnect = async () => {
    // @ts-ignore
    const connected = await window?.ic?.plug?.requestConnect();
    
    if (!connected) return;

    onConnectCallback(connected);
  }

  return (
    <Button onClick={handleConnect} dark={dark}>
      <div>
        <img
          src={dark ? plugDark : plugLight}
          alt="Plug logo"
        />
        <span>{title}</span>
      </div>
    </Button>
  );
};

export default ConnectButton;

