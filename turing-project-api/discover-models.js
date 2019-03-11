'use strict';

const loopback = require('loopback');
const promisify = require('util').promisify;
const fs = require('fs');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdirp = promisify(require('mkdirp'));

const DATASOURCE_NAME = 'mysqldbc9';
const dataSourceConfig = require('./server/datasources.json');
const db = new loopback.DataSource(dataSourceConfig[DATASOURCE_NAME]);

async function discover() {
  // It's important to pass the same "options" object to all calls
  // of dataSource.discoverSchemas(), it allows the method to cache
  // discovered related models
  const options = {relations: true};

  // Discover models and relations
  const attributeSchemas = await db.discoverSchemas('attribute', options);
  const attributeValueSchemas = await db.discoverSchemas('attribute_value', options);
  const auditSchemas = await db.discoverSchemas('audit', options);
  const categorySchemas = await db.discoverSchemas('category', options);
  const customerSchemas = await db.discoverSchemas('customer', options);
  const departmentSchemas = await db.discoverSchemas('department', options);
  const orderDetailSchemas = await db.discoverSchemas('order_detail', options);
  const ordersSchemas = await db.discoverSchemas('orders', options);
  const productSchemas = await db.discoverSchemas('product', options);
  const productAttributeSchemas = await db.discoverSchemas('product_attribute', options);
  const productCategorySchemas = await db.discoverSchemas('product_category', options);
  const reviewSchemas = await db.discoverSchemas('review', options);
  const shippingSchemas = await db.discoverSchemas('shipping', options);
  const shippingRegionSchemas = await db.discoverSchemas('shipping_region', options);
  const shoppingCartSchemas = await db.discoverSchemas('shopping_cart', options);
  const taxSchemas = await db.discoverSchemas('tax', options);

  console.log("FIRST", attributeSchemas);
  // Create model definition files
  await mkdirp('common/models');
  await writeFile(
    'common/models/attribute.json',
    JSON.stringify(attributeSchemas['c9.attribute'], null, 2)
  );
  await writeFile(
    'common/models/attribute-value.json',
    JSON.stringify(attributeValueSchemas['c9.attribute_value'], null, 2)
  );
  await writeFile(
    'common/models/audit.json',
    JSON.stringify(auditSchemas['c9.audit'], null, 2)
  );
  await writeFile(
    'common/models/category.json',
    JSON.stringify(categorySchemas['c9.category'], null, 2)
  );
  await writeFile(
    'common/models/customer.json',
    JSON.stringify(customerSchemas['c9.customer'], null, 2)
  );
  await writeFile(
    'common/models/department.json',
    JSON.stringify(departmentSchemas['c9.department'], null, 2)
  );
  await writeFile(
    'common/models/order-detail.json',
    JSON.stringify(orderDetailSchemas['c9.order_detail'], null, 2)
  );
  await writeFile(
    'common/models/orders.json',
    JSON.stringify(ordersSchemas['c9.orders'], null, 2)
  );
  await writeFile(
    'common/models/product.json',
    JSON.stringify(productSchemas['c9.product'], null, 2)
  );
  await writeFile(
    'common/models/product-attribute.json',
    JSON.stringify(productAttributeSchemas['c9.product_attribute'], null, 2)
  );
  await writeFile(
    'common/models/product-category.json',
    JSON.stringify(productCategorySchemas['c9.product_category'], null, 2)
  );
  await writeFile(
    'common/models/review.json',
    JSON.stringify(reviewSchemas['c9.review'], null, 2)
  );
  await writeFile(
    'common/models/shipping.json',
    JSON.stringify(shippingSchemas['c9.shipping'], null, 2)
  );
  await writeFile(
    'common/models/shipping-region.json',
    JSON.stringify(shippingRegionSchemas['c9.shipping_region'], null, 2)
  );
  await writeFile(
    'common/models/shopping-cart.json',
    JSON.stringify(shoppingCartSchemas['c9.shopping_cart'], null, 2)
  );
  await writeFile(
    'common/models/tax.json',
    JSON.stringify(taxSchemas['c9.tax'], null, 2)
  );

  // Expose models via REST API
  const configJson = await readFile('server/model-config.json', 'utf-8');
  console.log('MODEL CONFIG', configJson);
  const config = JSON.parse(configJson);
  config.Attribute = {dataSource: DATASOURCE_NAME, public: true};
  config.AttributeValue = {dataSource: DATASOURCE_NAME, public: true};
  config.Audit = {dataSource: DATASOURCE_NAME, public: true};
  config.Category = {dataSource: DATASOURCE_NAME, public: true};
  config.Customer = {dataSource: DATASOURCE_NAME, public: true};
  config.Department = {dataSource: DATASOURCE_NAME, public: true};
  config.OrderDetail = {dataSource: DATASOURCE_NAME, public: true};
  config.Orders = {dataSource: DATASOURCE_NAME, public: true};
  config.Product = {dataSource: DATASOURCE_NAME, public: true};
  config.ProductAttribute = {dataSource: DATASOURCE_NAME, public: true};
  config.ProductCategory = {dataSource: DATASOURCE_NAME, public: true};
  config.Review = {dataSource: DATASOURCE_NAME, public: true};
  config.Shipping = {dataSource: DATASOURCE_NAME, public: true};
  config.ShippingRegion = {dataSource: DATASOURCE_NAME, public: true};
  config.ShoppingCart = {dataSource: DATASOURCE_NAME, public: true};
  config.Tax = {dataSource: DATASOURCE_NAME, public: true};
  
  await writeFile(
    'server/model-config.json',
    JSON.stringify(config, null, 2)
  );
}

discover().then(
  success => process.exit(),
  error => { console.error('UNHANDLED ERROR:\n', error); process.exit(1); },
);
