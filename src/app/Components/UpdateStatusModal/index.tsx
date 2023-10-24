import React, { useState } from "react";

interface UpdateStatusModalProps {
  currentStatus: string;
  onUpdateStatus: (newStatus: string) => void;
  onClose: () => void;
}

const UpdateStatusModal: React.FC<UpdateStatusModalProps> = ({
  currentStatus,
  onUpdateStatus,
  onClose,
}) => {
  const [newStatus, setNewStatus] = useState(currentStatus);

  const handleUpdate = () => {
    onUpdateStatus(newStatus);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-6 m-6">
      <div className="bg-white p-4 rounded-lg shadow-md w-[50vw] h-[30vh] text-center flex flex-col justify-center">
        <p className="pb-4">Update the status for this request:</p>
        <select
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        >
          <option value="processing">Processing</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
        <div className="flex flex-row justify-center mt-4">
          <button
            className="text-white border border-green-400 bg-green-500 hover:border-green-700 border-solid-[1px] px-2 py-1 rounded w-40 h-10 mt-2 mr-6"
            onClick={handleUpdate}
          >
            Save
          </button>
          <button
            className="text-red-500 border border-red-400 hover:border-red-700 border-solid-[1px] px-2 py-1 rounded w-40 h-10 mt-2"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatusModal;
