import React, { useState, useEffect, useRef } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
}

const SelectOption: React.FC<SelectProps> = ({ options }) => {
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    filterOptions();
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [searchQuery]);

  const filterOptions = () => {
    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredOptions(filtered);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    setSearchQuery(option.label);
    setDropdownOpen(false); // Close the dropdown when an option is selected
  };

  const toggleDropdown = () => {
    setDropdownOpen(true);
    setSearchQuery('');
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setDropdownOpen(false);
    }
  };

  return (
    <div ref={selectRef} className="relative w-full">
      <label htmlFor="medSearch" className="relative inline-block w-full">
        <input
          type="text"
          name="medSearch"
          id="medSearch"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={toggleDropdown} // Open dropdown when input is focused
          className="form-input w-full rounded-md focus:border-cyan-900 focus:ring-cyan-900"
          placeholder="Search..."
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
          <BsChevronDown />
        </span>
      </label>

      {dropdownOpen && (
        <div className="absolute left-0 top-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-gray-300 bg-white">
          {filteredOptions?.length > 0 &&
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                onClick={() => handleSelectOption(option)}
              >
                {option.label}
              </div>
            ))}

          {filteredOptions?.length < 1 && (
            <div className="py-2 text-center text-neutral-500">No Options</div>
          )}
        </div>
      )}
      {selectedOption && <p>You have selected: {selectedOption.label}</p>}
    </div>
  );
};

export default SelectOption;
