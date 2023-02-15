const orderModel = require('../model/order');
class OrderService {
  async createOrder(orderInfo) {
    try {
      if (!orderInfo) {
        throw new error('Order Information Required to create Order');
      }
      const newOrder = await new orderModel(orderInfo);
      const savedOrder = await newOrder.save();
      if (savedOrder) {
        console.log(savedOrder);
        return savedOrder;
      } else {
        return null;
      }
    } catch (err) {
      throw err;
    }
  }
  async getOrders(orderId) {
    try {
      if (!orderId) {
        throw new error('Order Id Must required');
      }
      const orderlist = await orderModel.find({ 'user.userId': orderId });

      if (orderlist.length !== 0) {
        return orderlist;
      } else {
        return null;
      }
    } catch (err) {
      throw new error(err);
    }
  }
  async updateOrder(order) {
    try {
      let {status,orderDate,deliveryDate}= order;
      let updatedOrder = await orderModel.findOneAndUpdate(
        { _Id: order._Id },
        {
          $set: {
            status,
            orderDate,
            deliveryDate,
          }
        },
        {
          new: true
        }
      );
      if (updatedOrder != null) {
        return updatedOrder;
      } else {
        throw new Error('Could not update order');
      }
    } catch (err) {
      throw err;
    }
  }
  async deleteOrder(order){
    try{
        console.log(order._Id);
    let deletedOrder = await orderModel.findOneAndDelete({_Id:order._Id});
    if(deletedOrder!=null){
        return deletedOrder;
    }
    else{
        throw new Error('Could not delete order');
    }
    }
    catch(err){
        throw err;
    }

  }
}
module.exports = OrderService;
