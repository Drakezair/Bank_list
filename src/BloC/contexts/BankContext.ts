import { Bank } from 'Models';
import { createContext } from 'react';

interface queryObject {
  isLoading: boolean;
  isError: boolean;
  data: Bank[] | undefined;
}

const BankContext = createContext<queryObject>({
  isLoading: false,
  isError: false,
  data: []
});
export default BankContext;
