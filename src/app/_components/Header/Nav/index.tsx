'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      <CartLink />

      {user && (
        <Link href="/account" className={classes.userInfo}>
          <Image
            src="/assets/icons/profile.svg"
            alt="profile"
            width={20}
            height={20}
            className={classes.userInfo}
          />
          {user.name}
        </Link>
      )}
      {!user && (
        <Button
          el="link"
          href="/login"
          appearance="default"
          onClick={() => (window.location.href = '/login')}
          label="Login"
        />
      )}
      {/* {user && <CartLink />} */}
    </nav>
  )
}
