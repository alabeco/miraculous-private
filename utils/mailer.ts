import sgMail from '@sendgrid/mail'

const runtimeConfig = useRuntimeConfig()
sgMail.setApiKey(runtimeConfig.sendgridApiKey)

export default sgMail
