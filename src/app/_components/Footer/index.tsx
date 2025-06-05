
import type { Footer } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'


export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.log(error)
  }

  // If footer is null, render a basic footer with default content
  if (!footer) {
    return (
             <FooterComponent footer={{
         id: 'default-footer',
         copyright: '© 2024 Your Store. All rights reserved.',
         navItems: [],
       }} />
    )
  }

  return (
    <>
      <FooterComponent footer={footer} />
    </>
  )
}
