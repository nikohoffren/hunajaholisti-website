import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";

const Spinner = () => (
  <div className="flex items-center justify-center h-full">
    <RefreshIcon className="animate-spin h-8 w-8 text-gray-500" />
  </div>
);

export default Spinner;
