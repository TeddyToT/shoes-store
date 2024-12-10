import React from "react";

function InfoBox({ icon:Icon, title, content }) {
  return (
    <div className="w-1/4 flex items-center p-4 border rounded-lg shadow-sm bg-white max-w-sm">
      <div className="mr-4 text-orange-500">
        
      {Icon && <Icon className="w-8 h-8" />}
      </div>
      <div>
        
        <h3 className="text-orange-600 font-semibold">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

export default InfoBox;
