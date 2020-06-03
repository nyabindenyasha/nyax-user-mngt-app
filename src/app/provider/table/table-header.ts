import { DataType } from "./data-type.enum";

export interface TableHeader {
    Name: string;
    Display: string;
    DataType: DataType;
    SubName: string;
}