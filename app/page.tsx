import { Calendar, Clock, Users, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <header className="border-b">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            <span className="font-bold text-xl">DisCalendar</span>
          </div>
          <nav className="flex gap-2">
            <Button asChild variant="ghost">
              <Link href="/instrument">計測</Link>
            </Button>
            <Button asChild>
              <Link href="/login">ログイン</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {/* ヒーローセクション */}
        <section className="flex flex-col items-center justify-center gap-4 py-24 md:py-32">
          <div className="flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h1 className="font-bold text-4xl leading-tight tracking-tighter md:text-6xl lg:text-7xl">
              スケジュール管理を
              <br className="hidden sm:inline" />
              もっとシンプルに
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              DisCalendarは、直感的なインターフェースで予定を管理できる
              <br className="hidden sm:inline" />
              次世代のカレンダーアプリケーションです
            </p>
            <div className="mt-4 flex gap-4">
              <Button asChild size="lg">
                <Link href="/login">今すぐ始める</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/instrument">機能を見る</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 機能セクション */}
        <section className="container px-4 py-24">
          <div className="mb-12 text-center">
            <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
              主な機能
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              DisCalendarがあなたのスケジュール管理を変えます
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Calendar className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>直感的な予定管理</CardTitle>
                <CardDescription>
                  ドラッグ&ドロップで簡単に予定を作成・編集できます
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>リアルタイム同期</CardTitle>
                <CardDescription>
                  全てのデバイスで予定をリアルタイムに同期します
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>チーム共有</CardTitle>
                <CardDescription>
                  チームメンバーと簡単に予定を共有できます
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>高速・軽量</CardTitle>
                <CardDescription>
                  最新技術で構築された高速で快適なユーザー体験
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      {/* CTAセクション */}
      <section className="border-t bg-muted/50">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-24 text-center">
          <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
            今すぐ始めましょう
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            無料でアカウントを作成して、DisCalendarの全ての機能を体験してください
          </p>
          <Button asChild className="mt-4" size="lg">
            <Link href="/login">無料で始める</Link>
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span className="font-semibold">DisCalendar</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2025 DisCalendar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
