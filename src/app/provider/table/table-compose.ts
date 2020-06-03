import { TableHeader } from "./table-header";
import { DataType } from "./data-type.enum";


export class TableCompose {
    public headers: TableHeader[] = [];
    public body: any[];

    getHeaders() {
        return this.headers;
    }

    addHeader(header: TableHeader) {
        this.headers.push(header);
        return this;
    }
  

    setBody(body : any[]){
        this.body = body;
        return this;
    }

    composeHeader(name: string, display: string, type : DataType, subname? : string){
        return this.addHeader({Name : name, DataType : type, Display : display, SubName: subname});
    }

    composeHeaderMin(name: string, type : DataType, subname? : string){
        return this.addHeader({Name : name, DataType : type, Display : name, SubName: subname});
    }
}