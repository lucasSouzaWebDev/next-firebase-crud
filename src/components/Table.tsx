import Customer from "../core/Customer"

interface TableProps {
    customers: Customer[]
}

export default function Table(props: TableProps) {

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
            </tr>
        )
    }

    function renderData() {
        return props.customers?.map((customer, index) => {
            return (
                <tr key={customer.id}
                    className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
                >
                    <td className="text-left p-4">{customer.id}</td>
                    <td className="text-left p-4">{customer.name}</td>
                    <td className="text-left p-4">{customer.age}</td>
                </tr>
            )
        })
    }

    return (
        <table className="w-full overflow-hidden rounded-xl">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}