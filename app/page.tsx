"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { H1, H2, H3, H4, P, Lead, Large, Muted, Blockquote, InlineCode} from "@/components/ui/typography";
import { Instagram } from "lucide-react"
import React, { useEffect } from 'react';

import Logo from "../assets/logo.svg";
import LogoFooter from "../assets/logo-footer.svg";
import ImgHero from "../public/static/assets/nathan-dumlao-5BB_atDT4oA-unsplash.jpg"

export default function Home() {
  useEffect(() => {
    document.title = 'Forget Me Not';
  }, []);
  const designs = ["New York", "Envoy", "California", "Sonnet"];
  return (
    <main>
      <nav className="fixed inset-x-0 top-0 z-50 bg-white/90 shadow-sm dark:bg-gray-950/90 backdrop-blur-sm">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-14 items-center">
            <div className="flex gap-6">
            <Link href="#" className="flex items-center" prefetch={false}>
              <Image 
              priority
              src={ Logo }
              height={0}
              width={0}
              style={{ width: '100%', height: 'auto' }}
              alt="logo"
              />
            </Link>
            <nav className="hidden md:flex gap-4">
              <Link
                href="/dashboard-test"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                Dashboard Test
              </Link>
              <Link
                href="#"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                Portofolio
              </Link>
              <Link
                href="#"
                className="font-medium flex items-center text-sm transition-colors hover:underline"
                prefetch={false}
              >
                Harga
              </Link>
            </nav>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="secondary">
                Masuk
              </Button>
              <Button className="relative overflow-hidden border border-black transition-all hover:text-black before:rounded-full before:border-box before:p-[0%] before:absolute before:z-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:z-0 before:h-0 before:bg-white before:transition-all before:duration-500 hover:before:left-1/2 before:translate-y-1/2 hover:before:p-[100%]"><span className="relative z-10">Daftar</span></Button>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full max-w-7xl columns-2 mx-auto px-4 pt-20 flex items-center">
        <div className="w-full">
          <H1 className="mb-4">Bring happiness through a single link</H1>
          <div className="mb-4">Buat undangan digital kamu lebih murah, mudah, dan menarik.</div>
          <div className="flex gap-2"> 
            <Button>Coba sekarang</Button>
            <Button variant="secondary">Lihat desain</Button>
          </div>
        </div>
        <div className="w-full rounded-lg overflow-hidden">
          <Image className="object-cover"
            unoptimized
            width={0}
            height={0}
            style={{ width: 'auto', height: '90vh' }}
            src={ ImgHero }
            alt="Picture of the author"
          />
        </div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 my-48">
        <div className="w-full mb-12">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Pilih design sesuai selera kamu</h2>
          <div>Kita udah sediain beragam design blablablabla</div>
        </div>
        <div className="columns-4">
          {designs.map((designs, index) => (
            <div className="rounded-lg" key={index}>
              <Image className="object-cover rounded-lg"
              unoptimized
              width={0}
              height={0}
              style={{ width: '100%', height: 'auto' }}
              src="/invitation test.png"
              alt="new york"
              key={index}
              />
              <Button className="w-full" key={index}>{designs}</Button>
            </div>
            ))}
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 my-48">
        <div className="w-full mb-12">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Semua yang kamu butuhin ada disini</h2>
          <div>Kita sediain beragam fitur biar acara kamu makin spesial.</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#F7E328] p-4 rounded-lg col-span-2">
              <div className="font-semibold">1.</div>
              <Large>Free 6 bulan masa aktif undangan</Large>
              <div>Kamu juga bisa tambahin masa aktif undangan jika butuh lebih dari 6 bulan. Ada harga spesial buat kamu.</div>
          </div>
          <div className="bg-muted p-4 rounded-lg">
              <div className="font-semibold">2.</div>
              <Large>Bebas pilih path untuk undangan websitemu</Large>
              <div>Tentukan path terbaikmu dengan menggunakan domain kefistory (misalnya kefistory.id/romeoandjuliet). Path pilihanmu bisa digunakan selama masih tersedia.</div>
          </div>
          <div className="bg-black text-white p-4 rounded-lg">
              <div className="font-semibold">3.</div>
              <Large>Akses sistem CMS milik Kefi Story semaunya</Large>
              <div>Atur sendiri konten teks undanganmu kapanpun dan dimanapun kamu berada. Kamu bisa ubah informasi undanganmu bahkan sedetik sebelum acara! Tanpa nunggu admin yang urus!</div>
          </div>
          <div className="bg-[#B5D2FF] p-4 rounded-lg col-span-2">
              <div className="font-semibold">4.</div>
              <Large>Sebar undanganmu dengan sekali klik</Large>
              <div>Kirim link undanganmu ke kerabat/keluarga dengan sekali klik via WhatsApp atau aplikasi favorit kamu lainnya.</div>
          </div>
          <div className="bg-muted p-4 rounded-lg col-span-2">
              <div className="font-semibold">5.</div>
              <Large>Cantumin lokasi acaramu</Large>
              <div>Tamu undanganmu cuma perlu sekali klik untuk mendapatkan arah ke lokasi acaramu via Google Maps.</div>
          </div>
          <div className="bg-black text-white p-4 rounded-lg">
              <div className="font-semibold">6.</div>
              <Large>Download data terupdate tamu undangan kamu</Large>
              <div>Daftar nama tamu, reservasi kehadiran, dan semua kolom ucapan bisa kamu download kapanpun kamu mau, tanpa harus nunggu admin yang kirim data paling update!</div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 my-48">
        <div className="w-full mb-12">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Pilih paket sesuai kebutuhan kamu</h2>
          <div>Kita udah sediain beragam design blablablabla</div>
        </div>
        <div className="flex gap-4">
          <div className="flex-auto p-4 rounded-lg bg-muted">
            <div className="mb-4">
              <Large>Free Trial</Large>
              <H2 className="my-4">Gratis</H2>
              <Button className="w-full relative overflow-hidden border border-black transition-all hover:text-black before:rounded-full before:border-box before:p-[0%] before:absolute before:z-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:z-0 before:h-0 before:bg-white before:transition-all before:duration-500 hover:before:left-1/2 before:translate-y-1/2 hover:before:p-[100%]"><span className="relative z-10">Beli</span></Button>
            </div>
            <ul className="flex flex-col gap-2">
              <li>Design template</li>
              <li>Galeri untuk 2 foto</li>
              <li>Masa aktif 6 bulan</li>
              <li>Kuota tamu 2 orang</li>
              <li>Location navigation</li>
              <li>Countdown timer</li>
              <li>Message field</li>
              <li>Subdomain name</li>
              <li>CMS</li>
              <li></li>
            </ul>
          </div>
          <div className="flex-auto p-4 rounded-lg" style={{background: 'radial-gradient(83.24% 121.1% at 0.08% 100%, rgba(181, 210, 255, 0.40) 0%, rgba(181, 210, 255, 0.00) 100%), radial-gradient(83.44% 121.39% at 100% 0%, rgba(247, 227, 40, 0.40) 0%, rgba(247, 227, 40, 0.00) 100%), #FFF'}}>
            <div className="mb-4">
              <Large>🌙 Lunar</Large>
              <H2 className="my-4">Rp99.000</H2>
              <Button className="w-full relative overflow-hidden border border-black transition-all hover:text-black before:rounded-full before:border-box before:p-[0%] before:absolute before:z-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:z-0 before:h-0 before:bg-white before:transition-all before:duration-500 hover:before:left-1/2 before:translate-y-1/2 hover:before:p-[100%]"><span className="relative z-10">Beli</span></Button>
            </div>
            <ul className="flex flex-col gap-2">
              <li>Design template</li>
              <li>Galeri untuk 2 foto</li>
              <li>Masa aktif 6 bulan</li>
              <li>Kuota tamu 2 orang</li>
              <li>Location navigation</li>
              <li>Countdown timer</li>
              <li>Message field</li>
              <li>Subdomain name</li>
              <li>CMS</li>
              <li></li>
            </ul>
          </div>
          <div className="flex-auto p-4 rounded-lg bg-muted">
            <div className="mb-4">
              <Large>✨ Stellar</Large>
              <H2 className="my-4">Rp149.000</H2>
              <Button className="w-full relative overflow-hidden border border-black transition-all hover:text-black before:rounded-full before:border-box before:p-[0%] before:absolute before:z-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:z-0 before:h-0 before:bg-white before:transition-all before:duration-500 hover:before:left-1/2 before:translate-y-1/2 hover:before:p-[100%]"><span className="relative z-10">Beli</span></Button>
            </div>
            <ul className="flex flex-col gap-2">
              <li>Design template</li>
              <li>Galeri untuk 2 foto</li>
              <li>Masa aktif 6 bulan</li>
              <li>Kuota tamu 2 orang</li>
              <li>Location navigation</li>
              <li>Countdown timer</li>
              <li>Message field</li>
              <li>Subdomain name</li>
              <li>CMS</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="m-2 px-16 py-8 bg-black rounded-lg text-white">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-2 flex flex-col gap-8">
            <Image 
              priority
              src={ LogoFooter }
              height={0}
              width={0}
              style={{ height: '42px' }}
              alt="logo"
            />
            <div>
              Letjen S. Parman St No.Kavling 28, North Tanjung Duren, Grogol petamburan, West Jakarta City, Jakarta 11470
            </div>
          </div>
          <div>
            <Large className="mb-4">Sitemap</Large>
            <ul className="font-normal flex flex-col gap-4">
              <li>Beranda</li>
              <li>Daftar harga</li>
              <li>Masuk</li>
              <li>Daftar</li>
              <li>Ulasan</li>
            </ul>
          </div>
          <div className="font-semibold">
            Top up lainnya
          </div>
          <div className="font-semibold">
            Kemitraan
          </div>
          <div className="font-semibold">
            Informasi
          </div>
        </div>
        <Separator className="my-8"></Separator>
        <div className="flex justify-between w-full">
          <ul className="flex gap-4">
            <li>
              <Link href="#">Syarat & ketentuan</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
          </ul>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="bg-black border border-input hover:text-accent-foreground">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-black border border-input hover:text-accent-foreground">
              <Instagram className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}