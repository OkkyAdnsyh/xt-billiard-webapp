import { IProductVacantStatus } from "@/lib/types/interface";
import { getAllVacantProduct } from "@/service/database/product";

export async function GET(req: Request, res: Response) {
    const allProduct : object[] = await fetch('http://localhost:3000/api/v1/products',{
        method: 'GET'
    })
    .then(res => res.json());

    let regulerTable: object[] = [];
    let vipTable: object[] = [];
    let isRegulerVacant;
    let isVipVacant;

    allProduct?.forEach(product => {
        if(Object.values(product).indexOf('reguler') > -1 && Object.values(product).indexOf('vacant') > -1) regulerTable.push(product);

        if(Object.values(product).indexOf('vip') > -1 && Object.values(product).indexOf('vacant') > -1) vipTable.push(product);
    });

    {regulerTable.length >= 1 ? isRegulerVacant = true : isRegulerVacant = false};
    {vipTable.length >= 1 ? isVipVacant = true : isVipVacant = false};

    let result : IProductVacantStatus = {
        isRegulerVacant : isRegulerVacant,
        isVipVacant : isVipVacant
    }

    return Response.json(result);
}