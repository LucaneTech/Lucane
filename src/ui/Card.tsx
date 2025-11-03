interface CardProps {
  icon?: React.ReactNode;
  imageUrl?: string;
  color?: string;
  title: string;
  bgColor?: string;
  description?: string;
}



const Card: React.FC<CardProps> = ({
  icon,
  color,
  title,
  bgColor,
  description,
  imageUrl,
}) => {
  return (
    <div
      className={`w-80 h-64 rounded-xl p-0.5 duration-300 hover:shadow-2xl cursor-pointer shadow-lg`}
    >
      <div className="bg-white p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center">
        {icon && (
          <div className={`mb-4 ${color} p-3 rounded-full ${bgColor}`}>
            {icon}
          </div>
        )}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="mb-4 w-20 h-20 object-cover rounded-full"
          />
        )}


        <h2 className={`text-2xl font-bold mb-1 ${color}`}>{title}</h2>
        <p className="text-base font-medium mb-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;
