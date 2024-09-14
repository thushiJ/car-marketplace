
import {pgTable, serial, varchar} from "drizzle-orm/pg-core";
export const CarListing = pgTable('carListing', {

    id:serial('id').primaryKey(),
    ListingTitle:varchar('ListingTitle').notNull(),
    tagline:varchar('tagline'),
    Description:varchar('Description'),
    Price:varchar('Price').notNull(),
    Category:varchar('Category').notNull(),
    Location:varchar('Location'),
    ContactNumber:varchar('ContactNumber'),
    Email:varchar('Email').notNull(),
    ImageUpload:varchar('ImageUpload'),
    ProductName:varchar('ProductName').notNull(),
    ShortDescription:varchar('ShortDescription'),
    StockQuantity:varchar('StockQuantity'),
    SKU:varchar('SKU'),
    ShippingAddress:varchar('ShippingAddress').notNull(),
    OrderDate:varchar('OrderDate'),
    CustomerName:varchar('CustomerName').notNull(),
    DiscountCode:varchar('DiscountCode').notNull()

})