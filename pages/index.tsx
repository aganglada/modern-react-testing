import * as React from 'react'
import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { List } from '../components/List'

function Index() {
  return (
    <>
      <Header />
      <main className="container max-w-2xl mx-auto">
        <Form />
        <List />
      </main>
    </>
  )
}

export default Index
