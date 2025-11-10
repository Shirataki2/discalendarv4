import { login, signup } from './actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">DisCalendar</h1>
          <p className="text-muted-foreground">アカウントにログインまたはサインアップ</p>
        </div>

        <Card>
          <Tabs defaultValue="login" className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">ログイン</TabsTrigger>
                <TabsTrigger value="signup">サインアップ</TabsTrigger>
              </TabsList>
            </CardHeader>

            <TabsContent value="login">
              <form>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-login">メールアドレス</Label>
                    <Input
                      id="email-login"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-login">パスワード</Label>
                    <Input
                      id="password-login"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button formAction={login} className="w-full" size="lg">
                    ログイン
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form>
                <CardContent className="space-y-4">
                  <CardDescription>
                    アカウントを作成して始めましょう
                  </CardDescription>
                  <div className="space-y-2">
                    <Label htmlFor="email-signup">メールアドレス</Label>
                    <Input
                      id="email-signup"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-signup">パスワード</Label>
                    <Input
                      id="password-signup"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button formAction={signup} className="w-full" size="lg">
                    アカウント作成
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-4">
          続行することで、利用規約とプライバシーポリシーに同意したものとみなされます
        </p>
      </div>
    </main>
  )
}
