import React, { ReactNode } from 'react'
import Header from '../Header'
import Rodape from '../Rodape'

type Props = {
  children: ReactNode
}

const Page = ({ children }: Props) => <>
  <Header />
  <main className="flex-shrink-0">
    {children}
  </main>
  <Rodape />
</>

export default Page
