import Link from "next/link";
// ({type, value, link}:{type:string, value: string |number, link:string})
const UserCard = ({type, value}:{type:string, value: string |number}) => {
  return (
    <div className='rounded-2xl odd:bg-primary even:bg-secondary p-4 flex items-center gap-4 flex-1'>
      <div className='flex justify-between items-center w-full'>
        {/* <span className="text-[10px] bg-white px-2 py-1 rounded-full "> 2024/25</span> */}
        <h1 className='text-2xl font-bold my-4'>
          {/* <Link href={link}> */}
            {type}
          {/* </Link> */}
        </h1>
        <h2 className='text-lg font-semibold my-4'>{value}</h2>

        {/* <Link 
            href={link}
            className="flex lg:justify-start gap-2"
          >
            {/* <span className="text-right">View Details</span> */}
            {/* <span className="text-xs bottom-1 text-right text-gray-500">View Details</span> */}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default UserCard;
