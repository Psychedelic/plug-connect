import React from 'react';
import { styled } from '@stitches/react';
import { Provider, WalletConnectRPC } from '@psychedelic/plug-inpage-provider';
import { isMobile } from '@walletconnect/browser-utils';

import plugLight from './assets/plugLight.svg';
import plugDark from './assets/plugDark.svg';

const Button = styled('button', {
  border: 'none',
  background:
    'linear-gradient(93.07deg, #FFD719 0.61%, #F754D4 33.98%, #1FD1EC 65.84%, #48FA6B 97.7%)',
  padding: '2px',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'transform 0.3s',

  '&:hover': {
    transform: 'scale(1.03)',
  },

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
      },
    },
  },
});

export const DefaultButtonText = 'Connect to Plug';

const PlugConnect = ({
  dark = false,
  title = DefaultButtonText,
  whitelist = [],
  timeout = 120000,
  host,
  onConnectCallback,
  debug = true,
}: {
  dark?: boolean;
  title?: string;
  host?: string;
  whitelist?: string[];
  timeout?: number;
  onConnectCallback: (...args: any[]) => any;
  debug?: boolean;
}) => {
  const handleConnect = async () => {
    if (!(window as any).ic?.plug) {
      if (!isMobile()) {
        window.open('https://plugwallet.ooo/', '_blank');
        return;
      }
      const clientRPC = new WalletConnectRPC({ window, debug });

      const plugProvider = new Provider(clientRPC);

      const ic = (window as any).ic || {};
      (window as any).ic = {
        ...ic,
        plug: plugProvider,
      };
    }
    // @ts-ignore
    const connected = await (window as any)?.ic?.plug?.requestConnect({
      whitelist,
      host,
      timeout,
    });

    if (!connected) return;

    onConnectCallback(connected);
  };

  return (
    <Button onClick={handleConnect} dark={dark}>
      <div>
        <img src={dark ? plugDark : plugLight} alt="Plug logo" />
        <span>{title}</span>
      </div>
    </Button>
  );
};

export default PlugConnect;
