import React from "react"; 
function Loader() {
  return (
    <div class="flex-col gap-4 w-full flex items-center justify-center">
      <div class="w-6 h-6 border-[6px] text-4xl animate-spin border-white-300 flex items-center justify-center border-t-[#74d1b8] rounded-full"></div>
    </div>
  );
}

export default Loader;
