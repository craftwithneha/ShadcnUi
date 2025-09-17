import { Payment,columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
 return [
  {
    id: "900ed521",
    amount: 210,
    status: "pending",
    username: "Alice Johnson",
    email: "alicejohnson@gmail.com",
  },
  {
    id: "900ed522",
    amount: 455,
    status: "success",
    username: "David Smith",
    email: "davidsmith@gmail.com",
  },
  {
    id: "900ed523",
    amount: 389,
    status: "failed",
    username: "Sophia Martinez",
    email: "sophiamartinez@gmail.com",
  },
  {
    id: "900ed524",
    amount: 512,
    status: "success",
    username: "Christopher Lee",
    email: "chrislee@gmail.com",
  },
  {
    id: "900ed525",
    amount: 278,
    status: "pending",
    username: "Olivia Harris",
    email: "oliviaharris@gmail.com",
  },
  {
    id: "900ed526",
    amount: 634,
    status: "success",
    username: "Daniel Scott",
    email: "danielscott@gmail.com",
  },
  {
    id: "900ed527",
    amount: 487,
    status: "failed",
    username: "Emma Walker",
    email: "emmawalker@gmail.com",
  },
  {
    id: "900ed528",
    amount: 723,
    status: "success",
    username: "Matthew Young",
    email: "matthewyoung@gmail.com",
  },
  {
    id: "900ed529",
    amount: 192,
    status: "pending",
    username: "Isabella Perez",
    email: "isabellaperez@gmail.com",
  },
  {
    id: "900ed52a",
    amount: 845,
    status: "success",
    username: "James Turner",
    email: "jamesturner@gmail.com",
  },
  {
    id: "900ed52b",
    amount: 328,
    status: "failed",
    username: "Ava Mitchell",
    email: "avamitchell@gmail.com",
  },
  {
    id: "900ed52c",
    amount: 510,
    status: "success",
    username: "William Clark",
    email: "williamclark@gmail.com",
  },
  {
    id: "900ed52d",
    amount: 299,
    status: "pending",
    username: "Mia Gonzalez",
    email: "miagonzalez@gmail.com",
  },
  {
    id: "900ed52e",
    amount: 679,
    status: "success",
    username: "Benjamin Lewis",
    email: "benjaminlewis@gmail.com",
  },
  {
    id: "900ed52f",
    amount: 451,
    status: "failed",
    username: "Charlotte Hall",
    email: "charlottehall@gmail.com",
  },
];

};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  );
};

export default PaymentsPage;