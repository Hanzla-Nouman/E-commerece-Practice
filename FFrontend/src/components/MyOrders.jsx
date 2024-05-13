import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, myOrders } from "../store/orderActions";
import { DataGrid } from "@material-ui/data-grid";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector(
    (state) => state.myOrderReducer
  );
  const { username, userId } = useSelector((state) => state.userReducer);

  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      minWidth: 150,
      flex: 0.3,
     
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.2,
      cellClassName : (params)=>{
        return params.getValue(params.id,"status") === "Delivered" ? "greenColor":"redColor"
      }
    },
    {
      field: "itemQty",
      headerName: "Item Qty",
      type: "number",
      minWidth: 150,
      flex: 0.2,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "number",
      minWidth: 50,
      flex: 0.2,
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/orders/${params.getValue(params.id, "id")}`}>
            <span class="material-symbols-outlined">
file_open
</span>
          </Link>
        );
      },
    },
  ];
  const rows = [];
  {
    orders &&
      orders.forEach((item, index) => {
        rows.push({
          itemQty: item.orderItems.length,
          id: item._id,
          status: item.orderStatus,
          amount: item.totalPrice,
        });
      });
  }

  useEffect(() => {
    dispatch(myOrders());
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center m-3">My orders</h1>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default MyOrders;
