import { useEffect, useState } from "react";
import CustomerCollection from "../backend/db/CustomerCollection";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";
import CustomerRepository from "../core/CustomerRepository";

export default function Home() {

  const repository: CustomerRepository = new CustomerCollection()

  const [customer, setCustomer] = useState<Customer>(Customer.empty())
  const [customers, setCustomers] = useState<Customer[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  useEffect(getAll, [])
  
  function getAll() {
    repository.getAll().then(customers => {
      setCustomers(customers)
      setVisible('table')
    })
  }

  function selectedCustomer(customer: Customer) {
    setCustomer(customer)
    setVisible('form')
  }

  async function deletedCustomer(customer: Customer) {
    await repository.delete(customer)
    getAll()
  }

  function newCustomer() {
    setCustomer(Customer.empty())
    setVisible('form')
  }

  async function saveCustomer(customer: Customer) {
    await repository.save(customer)
    getAll()
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible == 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={() => newCustomer()}>Novo Cliente</Button>
            </div>
            <Table customers={customers} selectedCustomer={selectedCustomer} deletedCustomer={deletedCustomer}></Table>

          </>
        ) : (
          <Form customer={customer} changeCustomer={saveCustomer} cancel={() => setVisible('table')} />
        )}
      </Layout>
    </div>
  )
}
