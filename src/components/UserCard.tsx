import Link from "next/link";

const UserCard = ({type, value, link}:{type:string, value: string |number, link:string}) => {
  return (
    <div className='rounded-2xl odd:bg-primary even:bg-secondary p-4 flex items-center gap-4 flex-1'>
      <div className='flex justify-between items-center w-full'>
        {/* <span className="text-[10px] bg-white px-2 py-1 rounded-full "> 2024/25</span> */}
        <h1 className='text-2xl font-bold my-4'>{type}</h1>
        <h2 className='text-2xl my-4'>{value}</h2>
        <Link 
            href={link}
            className="flex items-center justify-center lg:justify-start gap-2"
          >
            <span className="block text-center">View Details</span>
          </Link>
      </div>
    </div>
  );
};

export default UserCard;
