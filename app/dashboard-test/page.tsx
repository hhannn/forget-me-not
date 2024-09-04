"use client";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { H1, H2, H3, H4, P, Lead, Large, Muted, Blockquote, InlineCode} from "@/components/ui/typography";

import {
    Bell,
    CircleUser,
    LineChart,
    Home,
    Instagram,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
    Settings
  } from "lucide-react"

import React, { useEffect } from 'react';

import Logo from "@/public/static/assets/logo.svg";
// import LogoFooter from "../assets/logo-footer.svg";
// import ImgHero from "../public/static/assets/nathan-dumlao-5BB_atDT4oA-unsplash.jpg"

export default function Dashboard() {
    useEffect(() => {
        document.title = 'Forget Me Not';
    }, []);
    const designs = ["New York", "Envoy", "California", "Sonnet"];
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                    <Image 
                    priority
                    src={ Logo }
                    height={0}
                    width={0}
                    style={{ width: '100%', height: 'auto' }}
                    alt="logo"
                    />
                    </Link>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                    <Bell className="h-4 w-4" />
                    <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-2">
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg bg-muted px-3 py-3 text-primary transition-all hover:text-primary"
                    >
                        <Home className="h-4 w-4" />
                        Dashboard
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
                    >
                        <Settings className="h-4 w-4" />
                        Pengaturan
                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        6
                        </Badge>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
                    >
                        <Users className="h-4 w-4" />
                        Tamu{" "}
                    </Link>
                    </nav>
                </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                <Sheet>
                    <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold"
                        >
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link
                        href="#"
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                        <Home className="h-5 w-5" />
                        Dashboard
                        </Link>
                        <Link
                        href="#"
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                        >
                        <ShoppingCart className="h-5 w-5" />
                        Orders
                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                            6
                        </Badge>
                        </Link>
                        <Link
                        href="#"
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                        <Package className="h-5 w-5" />
                        Products
                        </Link>
                    </nav>
                    <div className="mt-auto">
                        <Card>
                        <CardHeader>
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>
                            Unlock all features and get unlimited access to our
                            support team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button size="sm" className="w-full">
                            Upgrade
                            </Button>
                        </CardContent>
                        </Card>
                    </div>
                    </SheetContent>
                </Sheet>
                <div className="flex flex-1 items-center gap-2">
                    <Label htmlFor="airplane-mode">Status</Label>
                    <Switch id="airplane-mode" />
                </div>
                <div className="w-full flex items-center gap-4">
                    <Label>minju.forgetmenot.id</Label>
                    <Badge>✨ Stellar</Badge>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <div className="flex items-center">
                    <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
                </div>
                    <div
                        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
                    >
                        <div className="flex flex-col items-center gap-1 text-center">
                        <h3 className="text-2xl font-bold tracking-tight">
                            Dashboard kamu masih kosong
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Yuk, cobain bikin undangan digital kamu!
                        </p>
                        <Button className="mt-4">Buat undangan</Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}