import sgMail from '~/utils/mailer'

const runtimeConfig = useRuntimeConfig()

async function sendMail(body: ContactBody) {
  let result
  const subject = `New message from Miraculous Private Website`
  const text = `
    You received a new message from Miraculous Private Website:\n\n
    Name: ${body.name}\n
    Email: ${body.email}\n
    Phone: ${body.phone}\n
    Service: ${body.service}\n
    Message: ${body.message}\n
  `

  await sgMail.send({
    to: runtimeConfig.adminEmail,
    from: '"Miraculous Private Website" <mwadime@comradesforum.com>',
    replyTo: body.email,
    subject,
    text,
  }).then((response: any) => {
    // eslint-disable-next-line no-console
    console.log('Email sent successfully', 'Code:', response[0].statusCode)
    result = true
  }).catch((error: any) => {
    // eslint-disable-next-line no-console
    console.error('Error sending email', error)
    result = false
  })

  return result
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (body.title) {
    // Honey pot field was filled out
    setResponseStatus(event, 201)
    return
  }

  const result = await sendMail(body)
  if (!result) {
    setResponseStatus(event, 500)
    return
  }

  setResponseStatus(event, 201)
})
