import type { Actions, RequestEvent, ActionFailure } from '@sveltejs/kit'
import { fail, redirect } from '@sveltejs/kit'
import * as fs from 'node:fs/promises'
import path from 'path'
import { randomBytes } from 'node:crypto'

export const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'

export default async function generateId(): Promise<string> {
    return await new Promise((resolve, reject) => {
        randomBytes(8, (err, buffer) => {
            if (err) {
                reject()
            }

            resolve(buffer.toString('hex'))
        })
    })
}

export const actions: Actions = {
    default: async ({ request }: RequestEvent) => {
        const fd = Object.fromEntries(await request.formData())

        if (
            !(fd.image as File).name ||
            (fd.image as File).name === 'undefined'
        ) {
            console.log('error')
            return fail(400, {
                error: true,

                message: 'You must provide a file to upload',
            })
        }

        const newId = await generateId()
        const dir = await fs.mkdir(`static/${newId}`)
        const { image, name } = fd as { image: File; name: string }
        const ext = path.extname(image.name).replace(/[^A-Za-z]/g, '')
        const outName = `${name}.${ext}`
        const imgBuffer: Buffer = Buffer.from(await image.arrayBuffer())
        const img = await fs.writeFile(`static/${newId}/${outName}`, imgBuffer)
    },
}
