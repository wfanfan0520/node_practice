// 安装依赖：npm i sequelize mysql2 -S
// 需求实现：
  // 初始化：Product, User的表结构
  // 建立模型之间的关系 belongsTo
  // 同步表数据
  // index.spec.js：用mysql的形式配置sequelize

const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  // 暗号：哈希算法
  const Product = sequelize.define('product', {
    title: Sequelize.STRING,
  });
  const User = sequelize.define('user', {
    name: Sequelize.STRING,
  });

  // 建立模型之间的关系
  Product.belongsTo(User, {
    constrains: true,   // true：有约束的
    onDelete: "CASCADE"
  })
  User.hasMany(Product)

  // 同步表
  await sequelize.sync({force: true}) //每次清空数据库
  
  return {User,Product}
}