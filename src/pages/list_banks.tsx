import { BankContext } from 'BloC/contexts';
import { Bank } from 'Models';
import { Card, Spinner } from 'components';
import { ReactElement, useContext } from 'react';

export default function ListBank(): ReactElement {
  const { data, isLoading, isError } = useContext(BankContext);

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <div className="container px-4 mx-auto">
        <h1
          id="wrong-title"
          className="m-20 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Something wrong
        </h1>
      </div>
    );

  return (
    <div className="container px-4 mx-auto">
      {data?.length != null && data?.length !== 0 ? (
        <h1
          id="title"
          className="m-20 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Bank list
        </h1>
      ) : (
        <h1
          id="no-banks"
          className="m-20 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          There is no banks at this moment
        </h1>
      )}

      <div className="grid-cols-1 md:grid-cols-2 gap-4 grid">
        {data?.map((bank: Bank, i: number) => (
          <Card {...bank} key={bank.bankName} />
        ))}
      </div>
    </div>
  );
}
