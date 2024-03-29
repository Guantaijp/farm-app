import React from "react";
import TeaFarming from "./TeaFarming";


function TeaTable() {
    return (
        <>
        <TeaFarming/>
        {/* Create a table for team farm */}
        <div className="text-center ml-11">
                <h3 className="text-2xl text-center mt-9">
                    Tea Farm Table
                </h3>
        {/* table  */}
        <div class="flex flex-col justify-center mx-9">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 text-center mx-6">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
      <table
          class="min-w-full border text-center text-sm font-light dark:border-neutral-500 ">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
            <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Tea Image
                </th>
                <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Tea Name
                </th>
                <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Tea Location
                </th>
              
                <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Tea Leaves Per Week
                </th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b dark:border-neutral-500">
                <td class="px-6 py-4 dark:border-neutral-500">
                <img
                    class="h-10 w-10 rounded-full"
                    ></img>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Name</span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Type</span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Health</span>
                </td>
               
            </tr>
            <tr class="border-b dark:border-neutral-500">
                <td class="px-6 py-4 dark:border-neutral-500">
                <img
                    class="h-10 w-10 rounded-full"
                    ></img>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Name</span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Type</span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Health</span>
                </td>
                
            </tr>
            <tr class="border-b dark:border-neutral-500">
                <td class="px-6 py-4 dark:border-neutral-500">
                <img
                    class="h-10 w-10 rounded-full"
                    ></img>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Name</span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Type</span>
                </td>
                <td class="px-6 py-4 dark:border-neutral-500">
                <span class="text-center">Tea Health</span>
                </td>
               
            </tr>
            </tbody>
        </table>
     </div>
    </div>
   </div>
   </div>

{/* input kgs per week and man power pay  */}
<div className="text-center">
                <h3 className="text-2xl text-center mt-9">
                    Weekly Input
                </h3>
        {/* input field  */}
        <div class="flex  p-8 justify-center">
    <form class="w-full max-w-lg items-center">
       
       <div >
         <div class="flex flex-row -mx-3 mb-6">
             <div class="w-full px-3 mb-6 md:mb-0">
                 <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                     Tea Farm   
             </label>
                 <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Tea Farm Name"></input>
             </div>
             <div class="w-full  px-3">
                 <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Man Power Pay
                 </label>
                 <input 
                 class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Man Powe Pay"></input>
             </div>
             <div class="w-full  px-3">
                 <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Kgs Per Week
                 </label>
                 <input 
                 class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Kgs"></input>
             </div>
             <div class="w-full  px-3">
                 <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                 Date
                 </label>
                 <input 
                 class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Date"></input>
             </div>
         </div>
        <button class="inline-block rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 mt-2 mx-9">
                     Submit
                 </button>
        </div>
 
         </form>
    </div> 
    
  

</div>

  </div>

     


        </>
    )
}

export default TeaTable