'use server'

import { ItemBase } from '@/lib/types'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function addItem(novoItem: Record<string, any>) {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(process.env.COOKIE_STORE!)
  const items = cookie ? JSON.parse(cookie.value) : []

  items.push({ id: Date.now(), ...novoItem })

  cookieStore.set(process.env.COOKIE_STORE!, JSON.stringify(items), {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}

export async function getItems(): Promise<ItemBase[]> {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(process.env.COOKIE_STORE!)

  if (!cookie) return []

  try {
    const decoded = decodeURIComponent(cookie.value)
    return JSON.parse(decoded)
  } catch {
    return []
  }
}

export async function removeItem(formData: FormData) {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(process.env.COOKIE_STORE!)
  const id = Number(formData.get('id'))

  if (!cookie) return

  const items: ItemBase[] = JSON.parse(cookie.value)
  const novosItems = items.filter((item) => item.id !== id)

  cookieStore.set(process.env.COOKIE_STORE!, JSON.stringify(novosItems), {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  revalidatePath('/')
}
