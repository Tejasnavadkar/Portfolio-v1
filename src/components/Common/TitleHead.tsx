
const TitleHead = ({title}:{title:string}) => {
  return (
    <div className="flex items-center gap-4">
            <h3 className="text-white text-2xl font-bold">{title}</h3>
            <div className="w-[25%] border border-gray-500 "></div>
          </div>
  )
}

export default TitleHead
