import { useQuery } from '@tanstack/react-query';
import { Bank } from 'Models';
import { ReactElement, ReactNode } from 'react';

import { BankContext } from '../contexts';

interface Props {
  children: ReactNode;
}

export default function UseApi({ children }: Props): ReactElement {
  const getBanks = async (): Promise<Bank[]> =>
    await fetch(`${process.env.REACT_APP_API_URL}`).then(
      async (data) => await data.json()
    );

  const { isLoading, data, isError } = useQuery(['get_banks'], getBanks);

  return (
    <BankContext.Provider value={{ isLoading, data, isError }}>
      {children}
    </BankContext.Provider>
  );
}
