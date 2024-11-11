function Ventes (){
    return(
        <>
            <h1 className="text-4xl font-bold text-pink-300 my-4 text-center" >liste des ventes</h1>
            <table className=" min-w-full rounded-xl">
                <thead>
                    <tr className="bg-gray-50">
                        <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">ghjk</th>
                        <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">ghjk</th>
                        <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">ghjk</th>
                        <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">ghjk</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 ">
                    <tr  className="bg-white transition-all duration-500 hover:bg-gray-50">
                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "></td>
                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "></td>
                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "></td>
                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Ventes