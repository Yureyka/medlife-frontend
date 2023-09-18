import { IService } from "interfaces";

export interface IEmployeeInfo {
  experienceYears: number;
  experience: {
    year: number;
    description: string;
  }[];
  image: string;
}

export interface IServiceMainPrices {
  data: IService[];
  key: string;
}

export interface IFeedbackForm {
  withMap?: boolean;
}

export interface IQuestions {
  questions: { question: string; answer: string | React.ReactNode }[];
}

export interface IWideImageWrapper {
  img: string;
}

export interface IAdvantageCard {
  title: string;
  description: string;
  counter: string;
}

export interface IDiagnosticsCard {
  title: string;
  description: string;
  href: string;
}
