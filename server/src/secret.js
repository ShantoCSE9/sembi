require('dotenv').config()
const port=process.env.PORT||5000;
const db_url=process.env.db_url||"mongodb://localhost:27017/ecommerce"

module.exports={
    port,
    db_url
}