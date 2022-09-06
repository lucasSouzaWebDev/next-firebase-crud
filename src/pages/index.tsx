import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";

export default function Home() {

  const customers = [
    new Customer('Lucas', 25, '1'),
    new Customer('Erika', 20, '2'),
    new Customer('Carlos', 22, '3'),
    new Customer('Teste', 28, '4'),
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <Table customers={customers}></Table>
      </Layout>
    </div>
  )
}
