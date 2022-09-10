import { useEffect, useState } from "react"
import CustomerCollection from "../backend/db/CustomerCollection"
import Customer from "../core/Customer"
import CustomerRepository from "../core/CustomerRepository"
import useTableOrForm from "./useTableOrForm"

export default function useCustomers() {
    const repository: CustomerRepository = new CustomerCollection()

    const { tableVisible, showTable, showForm } = useTableOrForm()

    const [customer, setCustomer] = useState<Customer>(Customer.empty())
    const [customers, setCustomers] = useState<Customer[]>([])

    useEffect(getAll, [])

    function getAll() {
        repository.getAll().then(customers => {
            setCustomers(customers)
            showTable()
        })
    }

    function selectCustomer(customer: Customer) {
        setCustomer(customer)
        showForm()
    }

    async function deleteCustomer(customer: Customer) {
        await repository.delete(customer)
        getAll()
    }

    function newCustomer() {
        setCustomer(Customer.empty())
        showForm()
    }

    async function saveCustomer(customer: Customer) {
        await repository.save(customer)
        getAll()
    }

    return {
        tableVisible,
        showTable,
        customer,
        customers,
        newCustomer,
        saveCustomer,
        deleteCustomer,
        selectCustomer,
        getAll
    }
}