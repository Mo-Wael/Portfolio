interface IProps {
    type: string;
}

const TypeBubble = ({type} : IProps) => {
    return (
        <div className="text-gray-600 bg-slate-100 px-3 py-1 rounded-lg ">
            {type}
        </div>
   )
}

export default TypeBubble