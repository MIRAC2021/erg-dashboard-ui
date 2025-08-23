import Link from "next/link";

/**
 * Returns a user card component for displaying ergonomic data.
 *
 * @param {any} data - the react prop containing the the tpye and value of the 
 * ergonomic data.
 * @param {string} data.type - type of data to be represented in the card. 
 * Expected values include "RULA", "REBA", and "Risk."
 * @param {string | number} data.value - the value of the data represented in
 * the card.
 * @returns {UserCard} display for ergonomic data.
 */
const UserCard = ({type, value}:{type:string, value: string | number}) => {
  return (
    <div className='rounded-2xl odd:bg-primary even:bg-secondary p-4 flex
       items-center gap-4 flex-1'>
      <div className='flex justify-between items-center w-full'>
        <h1 className='text-2xl font-bold my-4'>{type}</h1>
        <h2 className='text-lg font-semibold my-4'>{value}</h2>
      </div>
    </div>
  );
};

export default UserCard;
