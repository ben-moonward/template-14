import React, {
  HTMLInputTypeAttribute,
  KeyboardEvent,
  FocusEvent,
  useState,
  useMemo,
  FC,
  ChangeEvent,
  InputHTMLAttributes,
} from "react";
import ErrorIcon from "@/assets/icons/ErrorIcon";
import { formatCurrency } from "@/utils/formatting";

// Todo: upgrade this
// support numbers, decimals, percentages
// decouple from form?

type InputDisplayType = "PERCENTAGE" | "CURRENCY" | "DAYS";

type Props = {
  type: "TEXT" | "NUMBER";
  inputType: HTMLInputTypeAttribute;
  label?: string;
  sublabel?: string;
  value: string | number | undefined | null;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  sublabelClassName?: string;
  error?: string;
  touched?: boolean;
  margin?: string;
  isVisible?: boolean;
  inputmode?: "email" | "search" | "tel" | "text" | "url" | "numeric";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  description?: string;
  multiple?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  displayType?: InputDisplayType;
  autoComplete?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const ValidationInput: FC<Props> = ({
  type,
  inputType,
  value,
  placeholder,
  className = "",
  error,
  touched,
  margin = "",
  inputmode,
  autoFocus,
  onChange,
  onKeyDown,
  onFocus,
  onBlur,
  description,
  multiple,
  disabled,
  displayType,
  autoComplete,
}) => {
  const validateIsNumber = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value)) && e.target.value !== "") return;
    onChange(e);
  };
  const [isFocused, setIsFocused] = useState(false);

  const onInputFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const onInputBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const formatText = (
    text: string | number,
    displayType?: InputDisplayType
  ) => {
    switch (displayType) {
      case "CURRENCY":
        return formatCurrency(Number(text));
      case "DAYS":
        return String(text) + " Days";
      case "PERCENTAGE":
        return String(text) + "%";
    }
    return String(text);
  };

  const formattedValue = useMemo(() => {
    if (!displayType) return value;
    if (isFocused || value === "") return;
    if (type === "NUMBER" && isNaN(Number(value))) return;
    return formatText(String(value), displayType);
  }, [value, displayType, isFocused, type]);

  return (
    <div className={`relative w-full ${margin}`}>
      <input
        multiple={multiple}
        className={`base-input placeholder:font-normal h-8 disabled:text-opacity-80 
               disabled:cursor-not-allowed disabled:bg-grey-dark
               ${
                 !isFocused &&
                 displayType &&
                 "text-opacity-0 disabled:text-opacity-0"
               }
               ${className ?? ""} ${error && touched && "error-input"}`}
        type={inputType}
        placeholder={placeholder}
        value={value !== null ? value : undefined}
        inputMode={inputmode}
        onChange={e => (type === "NUMBER" ? validateIsNumber(e) : onChange(e))}
        onWheel={e => e.currentTarget.blur()}
        onKeyDown={e => onKeyDown && onKeyDown(e)}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        disabled={disabled}
        onFocus={e => onInputFocus(e)}
        onBlur={e => onInputBlur(e)}
      />
      {displayType && (
        <span
          className={`absolute left-[9px] top-1.5 text-BLUE-SmartreNavy font-medium text-sm pointer-events-none ${
            disabled && "text-opacity-80"
          } ${className ?? ""}`}
        >
          {formattedValue}
        </span>
      )}
      {description && !error && !touched && (
        <p className="flex items-center  mt-1 mb-2 text-xs">{description}</p>
      )}
      {error && touched && (
        <div
          className="flex items-center text-RED-LightRed mt-1 mb-2 text-sm"
          role="alert"
        >
          <ErrorIcon className="mr-2" width={18} height={18} />
          {error}
        </div>
      )}
    </div>
  );
};

export default ValidationInput;
