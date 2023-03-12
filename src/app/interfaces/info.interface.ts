
export interface AddInfoI{
    id:string,
    name:string
    table?:Tabs[]
}



export interface DataInfo{
    idtype:string,
    nombre:string
    arrayCreate:Tabs[],
    arrayDelete:Tabs[],
    arryUpdate:Tabs[]
}

export interface Tabs{
    idtype:string,
    nombre:string
}