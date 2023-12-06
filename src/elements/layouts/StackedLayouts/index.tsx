import React from 'react'
import { Header } from '../../sections/header'
import { Footer } from '../../sections/footer'

interface Props {
    children: React.ReactNode
}

const StackedLayout = ({ children }: Props) => {
  return (
    <>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
    </>
  )
}

export default StackedLayout