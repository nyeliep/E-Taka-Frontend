import React from "react";

interface ConfirmDeleteModalProps {
  onRequestConfirm: () => void;
  onRequestCancel: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  onRequestConfirm,
  onRequestCancel,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-6 m-6">
      <div className="bg-white p-4 rounded-lg shadow-md w-[50vw] h-[30vh] text-center">
        <p className="pb-4  mt-10">Are you sure you want to decline this request?</p>
        <div className="flex flex-box  justify-center ">
          <button
            className="text-white border border-green-400 bg-green-500 hover:border-green-700 border-solid-[1px] px-2 py-1 rounded w-40 h-10 mt-2 mr-6"
            onClick={onRequestConfirm}
          >
            Confirm
          </button>
          <button
            className="text-red-500 border border-red-400 hover:border-red-700 border-solid-[1px] px-2 py-1 rounded w-40 h-10 mt-2"
            onClick={onRequestCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
