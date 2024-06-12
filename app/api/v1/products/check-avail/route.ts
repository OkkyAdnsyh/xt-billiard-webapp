import { getAllVacantProduct } from "@/service/database/product";

export async function GET(req: Request, res: Response) {
    const allProduct : object[] = await fetch('http://localhost:3000/api/v1/products',{
        method: 'GET'
    })
    .then(res => res.json());

    const productVacant = await getAllVacantProduct();

    let regulerTable: object[] = [];
    let vipTable: object[] = [];

    allProduct.forEach(product => {
        if(Object.values(product).indexOf('reguler') > -1 && Object.values(product).indexOf('vacant') > -1) regulerTable.push(product);

        if(Object.values(product).indexOf('vip') > -1 && Object.values(product).indexOf('vacant') > -1) vipTable.push(product);
    });

    return Response.json({vipTable, regulerTable, productVacant});
}