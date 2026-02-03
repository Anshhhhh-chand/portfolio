import { promises as fs } from 'fs'
import path from 'path'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'Ansh_Chand.pdf')
    const file = await fs.readFile(filePath)
    const fileBuffer = Buffer.from(file)

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename="Ansh_Chand.pdf"',
        'Cache-Control': 'no-store, no-cache, must-revalidate, private',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Content-Type-Options': 'nosniff',
        'Content-Length': String(fileBuffer.byteLength),
      },
    })
  } catch (err) {
    return new Response('Resume not found', { status: 404 })
  }
}
