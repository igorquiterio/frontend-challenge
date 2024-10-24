import { styled } from '@/styles'
import { HomeContainer } from '@/styles/pages/home'
import localFont from 'next/font/local'
import Head from 'next/head'
import Image from 'next/image'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default function Home() {
  return (
    <HomeContainer>
      <span>teste</span>
    </HomeContainer>
  )
}
