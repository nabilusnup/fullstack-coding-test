const {Tree, TreeChildren, User, sequelize} = require("../models/index")

class Controller {
    static async addTree(req, res, next) {
        try {
          let { label, children } = req.body
          let UserId = req.user.id;
          let result = await sequelize.transaction(async (t) => {
            let data = await Tree.create(
              {
                label : +label,
                UserId
              },
              { transaction: t }
            );
            children.map((item)=>{
                item.TreeId = +data.id
                return item
            })
            await TreeChildren.bulkCreate(children, {transaction: t})
            return data
          });
          res.status(201).json(result);
        } catch (error) {
          next(error);
        }
      }

      static async showAll(req, res, next) {
        try {
          let data = await Tree.findAll({
            include: [
              {
                model: TreeChildren,
                attributes: ["children"],
              }
            ],
          });
          res.status(200).json(data);
        } catch (error) {
          next(error);
        }
      }

      static async detailById(req, res, next) {
        try {
          let { id } = req.params;
          let tree = await Tree.findByPk(id, {
            include: [
                {
                  model: TreeChildren,
                  attributes: ["children"],
                }
              ],
          });
          if (!tree) {
            throw { name: "NotFound" };
          }
          res.status(200).json({label : tree.label, children : tree.TreeChildren})
        } catch (error) {
          next(error);
        }
      }
}

module.exports = Controller