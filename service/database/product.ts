import Products from "@/models/products";

export async function getAllVacantProduct() {
    const result = await Products.findAll({
        attributes: ['table_type', 'table_status'],
        where: {
            table_status: 'vacant'
        }
    });

    return result;
}

export async function getAllProduct() {
    const result = await Products.findAll({
        attributes: ['table_type', 'table_status', 'id']
    });

    return result;
}

export async function getProductByType() {
    
}