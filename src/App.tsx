import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { UseApi } from 'BloC/hooks';
import 'flowbite';
import ListBank from 'pages/list_banks';
import { ReactElement } from 'react';

import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24 // 24 hours
    }
  }
});

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage
});

persistQueryClient({
  queryClient,
  persister: localStoragePersister
});

function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <UseApi>
        <ListBank />
      </UseApi>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
