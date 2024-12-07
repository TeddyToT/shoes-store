import React, { useState, useEffect } from 'react';

const RadioCheckBox = ({ dropdownName, options, selectedOption, setSelectedOption }) => {
   
    useEffect(() => {
        // Cập nhật khi selectedOption từ cha thay đổi
        setSelectedOption2(selectedOption);
    }, [selectedOption]);

    const [selectedOption2, setSelectedOption2] = useState(selectedOption);  // Initialize with selectedOption from props

    const handleOptionClick = (option) => {
        setSelectedOption2(option); // Cập nhật selectedOption2
        setSelectedOption(option); // Sử dụng giá trị mới để cập nhật selectedOption
        console.log(option); // In trực tiếp giá trị vừa được chọn
    };
    

    return (
        <div className="pt-1 w-2/3 inline-block text-left">
            <div className="bg-zinc-300 rounded-t-lg">
                <label
                    className="inline-flex justify-between w-full rounded-t-md bg-white px-4 py-2 text-lg font-medium text-gray-700"
                    id={`${dropdownName}-dropdown`}
                >
                    {dropdownName}
                </label>
            </div>
            <div className="w-full rounded-b-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby={`${dropdownName}-dropdown`}>
                    {options.map((option) => (
                        <div key={option._id} className="block flex items-center justify-between px-4 py-2 hover:bg-zinc-300">
                            <label className="flex items-center w-full cursor-pointer">
                                <input
                                    type="radio"
                                    className="cursor-pointer block h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    checked={selectedOption2 && selectedOption2._id === option._id}  // Compare selected option with the current option
                                    onChange={() => handleOptionClick(option)}  // Update state when option is selected
                                />
                                <div className="ml-2 text-sm text-gray-700 w-full truncate">{option.name}</div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RadioCheckBox;
