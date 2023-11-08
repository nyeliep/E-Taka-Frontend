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







