import { Bank } from 'Models';
import { ReactElement } from 'react';

export default function Card({
  age,
  bankName,
  description,
  url
}: Bank): ReactElement {
  return (
    <span
      id={bankName}
      className="flex flex-col items-center bg-white border rounded-lg shadow-md md:h-56 md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full h-full rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
        src={url}
        alt={bankName}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {bankName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          age: {age}
        </p>
      </div>
    </span>
  );
}
