"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"

export default function LoginPage() {
  const handleSignIn = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ provider: 'github' }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome to Nano Banana</CardTitle>
          <CardDescription>
            Sign in to access AI image editing features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={handleSignIn}
            className="w-full"
            size="lg"
          >
            <Github className="mr-2 h-5 w-5" />
            Continue with GitHub
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}