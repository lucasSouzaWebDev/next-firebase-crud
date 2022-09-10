import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useCustomers from "../hooks/useCustomers";

export default function Home() {

  const {
    customer,
    customers,
    newCustomer,
    selectCustomer,
    saveCustomer,
    deleteCustomer,
    tableVisible,
    showTable
  } = useCustomers()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={() => newCustomer()}>Novo Cliente</Button>
            </div>
            <Table customers={customers} selectedCustomer={selectCustomer} deletedCustomer={deleteCustomer}></Table>

          </>
        ) : (
          <Form customer={customer} changeCustomer={saveCustomer} cancel={() => showTable} />
        )}
      </Layout>
    </div>
  )
}
