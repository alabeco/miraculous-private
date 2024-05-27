type Alert = {
  id?: string
  title?: string
  type: 'success' | 'error' | 'info' | 'warning'
  text?: string
}

type ContactBody = {
  name: string
  email: string
  message: string
  title?: string
  phone?: string
  service?: string
}
