import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Register() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen">
      <div className="flex items-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold">Daftar</h1>
            <p className="text-muted-foreground">
              Masukkan email dan password kamu untuk akses akun kamu.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
              />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="re-password">Masukkan ulang password</Label>
                <Input id="re-password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Daftar
            </Button>
            <Button variant="outline" className="w-full">
              Daftar dengan Google
            </Button>
          </div>
          <div className="mt-4 text-sm">
            Udah punya akun?{" "}
            <Link href="/login" className="underline">
              Masuk
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
