import { Listbox, Transition } from "@headlessui/react";
import React from "react";
import Animation from "@/constants/animation-props";

type Props<Item, SelectedItem extends Item | null> = {
  items?: Item[];
  selectedItem: SelectedItem;
  onSelect: (item: SelectedItem) => void;
  renderLabel: (item: Item) => string;
  placeholder?: string;
  isOptional?: boolean;
  optionalLabel?: string;
  optionsClassName?: string;
  className?: string;
};

/**
 * Must:
 * have Placeholder
 * Able to choose "none" or no option
 * Have a good pattern to use with editing and viewing forms
 * support generic options
 */
const Select = <Item, SelectedItem extends Item | null>({
  selectedItem,
  items = [],
  renderLabel,
  onSelect,
  placeholder = "Placeholder",
  isOptional,
  optionalLabel = "None",
  className = "",
  optionsClassName = "",
}: Props<Item, SelectedItem>) => {
  const label = selectedItem ? renderLabel(selectedItem) : placeholder;
  return (
    <Listbox
      value={selectedItem}
      onChange={onSelect}
      as={"div"}
      className={`select ${className}`}
    >
      <Listbox.Button
        className={"select-button flex flex-row gap-2 justify-between"}
      >
        <p>{label}</p>
        <div className="-rotate-90">{"<"}</div>
      </Listbox.Button>
      <Transition
        {...Animation.headlessUiDropdown}
        enter="transition duration-100 ease-out"
      >
        <Listbox.Options className={`select-options ${optionsClassName}`}>
          {isOptional && (
            <Listbox.Option value={null}>{optionalLabel}</Listbox.Option>
          )}
          {items.map((item, index) => (
            <Listbox.Option
              value={item}
              key={index}
              className={`${item === selectedItem && "selected"}`}
            >
              {renderLabel(item)}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default Select;
