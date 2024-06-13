import { getAllProduct } from '@/service/database/product';

export async function GET(req: Request, res: Response) {
    const products = await getAllProduct();
    
    return Response.json(products);
}