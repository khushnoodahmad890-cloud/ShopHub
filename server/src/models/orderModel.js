const pool = require("../config/db");
const updateOrderStatus = async (id, status) => {
  const result = await pool.query(
    `
    UPDATE orders
    SET status = $1
    WHERE id = $2
    RETURNING *;
    `,
    [status, id]
  );

  return result.rows[0];
};
const getAllOrders = async () => {
  const result = await pool.query(`
    SELECT
      o.id,
      o.total,
      o.status,
      o.created_at,
      u.name,
      u.email

    FROM orders o

    JOIN users u
      ON o.user_id = u.id

    ORDER BY o.created_at DESC
  `);

  return result.rows;
};
// Create a new order
const createOrder = async (userId, total, items) => {
  try {
    await pool.query("BEGIN");

    const orderResult = await pool.query(
      `
      INSERT INTO orders (user_id, total)
      VALUES ($1, $2)
      RETURNING *;
      `,
      [userId, total]
    );

    const order = orderResult.rows[0];

    for (const item of items) {
      await pool.query(
        `
        INSERT INTO order_items
        (order_id, product_id, quantity, price)
        VALUES ($1, $2, $3, $4);
        `,
        [
          order.id,
          item.id,
          item.quantity,
          item.price,
        ]
      );
    }

    await pool.query("COMMIT");

    return order;

  } catch (error) {
    await pool.query("ROLLBACK");
    throw error;
  }
};

// Get all orders for a user
const getOrdersByUser = async (userId) => {
  const result = await pool.query(
    `
    SELECT *
    FROM orders
    WHERE user_id = $1
    ORDER BY created_at DESC;
    `,
    [userId]
  );

  return result.rows;
};
module.exports = {
  createOrder,
  getOrdersByUser,
  getAllOrders,
  updateOrderStatus,
};