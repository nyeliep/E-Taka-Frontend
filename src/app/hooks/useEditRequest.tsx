import { editRequests } from "../utilities/utils";


const useEditRequests = () => {

    const editRequest = async (id: number, updatedStatus: any) => {
      try {
        const editedRequest = await editRequests(id, updatedStatus);

        return editedRequest;
      } catch (error:any){
        throw new Error(error);
      }
    };

    return { editRequest };
  };

 export default useEditRequests;





 /* <button
type="button"
onClick={() => handleAccept(request.id)}
className={`text-white border bg-green-500 rounded w-40 h-10 mr-[10px]  text-center ${
  requestStatus[request.id] === "Processing"
    ? "opacity-50 cursor-not-allowed"
    : ""
}`}
disabled={requestStatus[request.id] === "Processing"}
>
{requestStatus[request.id] === "Processing"
  ? "Processing"
  : "Accept"}
</button>

<button
type="button
onClick={() => handleDecline(request.id)}
className={`text-red-500 border border-red-400 hover:border-red-700 border-solid-[1px] px-2 py-1 rounded w-40 h-10 ${
  requestStatus[request.id] === "Cancelled"
    ? "opacity-50 cursor-not-allowed"
    : ""
}`}
disabled={requestStatus[request.id] === "Cancelled"}
>
{requestStatus[request.id] === "Cancelled"
  ? "Cancelled"
  : "Decline"}
</button> */
