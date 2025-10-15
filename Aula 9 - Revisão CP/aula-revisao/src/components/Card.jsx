export default function Card ({full_name, id, node_id}){
    return (
        <div className="py-5 flex flex-col items-center justify-center bg-gray-200 text-black rounded-xl h-40">
            <h2 className="text-xl font-mono">ID: {id}</h2>
            <h2 className="text-xl font-mono">node: {node_id}</h2>
            <h2 className="text-xl font-mono">fullName: {full_name}</h2>
        </div>

                
        
    )
}