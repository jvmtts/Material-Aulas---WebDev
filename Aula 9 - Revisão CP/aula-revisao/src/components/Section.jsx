export default function Section({children, titulo}){
    return (
        <div className="m-7 flex flex-col items-center justify-center">
            <h2 className="text-lg text-gray-100 text-center">{titulo}</h2>
            <div className="w-full grid grid-cols-3 gap-10">
                {children}
            </div>
        </div>
    )
}