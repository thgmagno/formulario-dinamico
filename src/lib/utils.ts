import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatarValorHora(valor?: string) {
  if (!valor) return ''
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(valor))
}

export function formatarDisponibilidade(valor?: string) {
  if (!valor) return ''
  return `${valor} horas semanais`
}
