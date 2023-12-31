import { AdminHeader, AdminSidebar } from '@/components/admin'
import { Separator } from '@/components/ui/separator'

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <AdminSidebar />
      {/* Content */}
      <div className="flex h-screen flex-1 flex-col gap-2 rounded-l-2xl bg-white py-3 shadow-md">
        {/* Header */}
        <AdminHeader />
        <Separator className="bg-gray-200" />
      </div>
    </div>
  )
}
