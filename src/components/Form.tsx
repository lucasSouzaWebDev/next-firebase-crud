import { useState } from "react";
import Customer from "../core/Customer";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    customer: Customer
    changeCustomer?: (customer: Customer) => void
    cancel?: () => void

}

export default function Form(props: FormProps) {
    const id = props.customer?.id
    const [name, setName] = useState(props.customer?.name ?? '')
    const [age, setAge] = useState(props.customer?.age ?? 0)
    return (
        <div>
            <div>
                {id ? (
                    <Input readOnly text="Código" value={id} className="mb-4"></Input>
                ) : false}
                <Input text="Nome" value={name} onChange={setName} className="mb-4"></Input>
                <Input text="Idade" type="number" value={age} onChange={setAge} ></Input>
            </div>
            <div className=" flex justify-end mt-7">
                <Button color="blue" className="mr-2" onClick={() => props.changeCustomer?.(new Customer(name, +age, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.cancel}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}