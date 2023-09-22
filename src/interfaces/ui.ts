import React, { InputHTMLAttributes, ChangeEvent, HTMLAttributes } from "react";

export interface IAccordion {
  title: string;
  content: string | React.ReactNode;
}

export interface DividerProps {
  size?: string;
}

export interface IButton {
  ariaLabel?: string;
  disabled?: boolean;
  size?: "sm" | "lg";
  fullWidth?: boolean;
  onlyIcon?: boolean;
  icon?: JSX.Element;
  linkButton?: boolean;
  href?: string;
  className?: string;
  children?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface ICarousel {
  children: React.ReactNode[];
}

export interface IContainer extends HTMLAttributes<HTMLDivElement> {
  small?: boolean;
  large?: boolean;
  fullWidth?: boolean;
  onlyIcon?: boolean;
}

export interface IDropdown {
  options: React.ReactNode[];
  onSelect?: (selectedOption: React.ReactNode) => void;
  children: React.ReactNode;
}

export interface ListItem {
  id: number;
  text: string;
}

export interface ApiResponse {
  data: ListItem[];
  nextPage: number | null;
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  invalidMessage?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: "text" | "tel" | "number" | "password";
  defaultValue?: string;
}

export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface IPageHeading {
  title: string;
}

export interface IOption {
  value: string;
  label: string;
}

export interface ISelect {
  label: string;
  options: IOption[];
  defaultSelected?: IOption;
  onSelect: (value: IOption) => void;
}

export type Column = {
  title: string;
  dataIndex: string;
  key: string;
  width?: number;
};

export interface ITable<T> {
  columns: Column[];
  data: T;
  onRowClick: (data: T) => T;
  formatter?: (data: T) => T;
}

export interface IPageLayout {
  title: string;
  children: React.ReactNode;
  withMap?: boolean;
}

export interface IFilter {
  placeholder: string;
  onSearch: (value: string) => void;
}

export interface IMultipleInput {
  label: string;
  values: string[] | undefined;
  onChange: (val: string[]) => void;
  onAddNew: (val: string) => void;
  placeholder: string;
}

export interface IFileLoader {
  onImageUpload: (imageData: File) => void;
  defaultImage?: string;
  resetOnClose?: boolean;
}

export interface IAppointmentModal {
  isOpen: boolean;
  onClose: () => void;
}

export interface ICheckbox {
  label: string | React.ReactNode;
  checked: boolean | undefined;
  onChange: (checked: boolean) => void;
}
