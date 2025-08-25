"use client";
import { Plus } from "lucide-react";
import { ActionToolTip } from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = () => {

  const {onOpen} = useModal();


  return (
    <div>
      <ActionToolTip side="right" align="center" label="Add a server">
        <button className="group flex items-center" onClick={()=>onOpen("createServer")}>
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 !group-hover:bg-emerald-500">
            <Plus
              size={25}
              className="text-emerald-500 transition !group-hover:text-white"
            />
          </div>
        </button>
      </ActionToolTip>
    </div>
  );
};

export default NavigationAction;
