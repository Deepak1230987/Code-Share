import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useMutation } from "convex/react";
import React, { useState } from "react";
import { api } from "../../../../convex/_generated/api";

import { X } from "lucide-react";
import toast from "react-hot-toast";


const ShareSnippetDialog = ({ onClose }: { onClose: () => void }) => {
  const [title, setTitle] =useState("");
  const [isSharing, setIsSharing] = React.useState(false);
  const { language, getCode } = useCodeEditorStore();

  const createSnippet = useMutation(api.snippets.createSnippet);

  const handleShare = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSharing(true);

    try{
        const code=getCode();
        await createSnippet({
            title,
            code,
            language,
        });
        onClose();
        setTitle("");
        toast.success("Snippet shared successfully");
    }catch(err){
        console.log("error sharing snippet",err);
        toast.error("Failed to share snippet");
    } finally{
        setIsSharing(false);
    }
    }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50">
      <div className="bg-[#1e1e2e] rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Share Snippet</h2>
          <button>
            <X className="size-5 cursor-pointer" onClick={onClose}  
            />
          </button>
        </div>

        <form onSubmit={handleShare}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-[#181825] text-white border border-[#313244] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter snippet title"
              required
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 cursor-pointer text-gray-400 hover:text-gray-300 bg-[#1e1e2e] rounded-lg ring-1 ring-gray-800/50 hover:ring-gray-700/50 transition-all"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSharing}
              className="px-4 cursor-pointer py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ring-1 ring-blue-500 hover:ring-blue-300 transition-all disabled:opacity-50 disabled:bg-blue-500
            disabled:ring-blue-500"
            >
              {isSharing ? "Sharing..." : "Share"}
            
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default ShareSnippetDialog;
