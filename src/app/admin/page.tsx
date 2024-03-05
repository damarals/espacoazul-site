import { PatientsOverview } from '@/components/admin/charts'
import { RecentPatients } from '@/components/admin/lists'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AdminDashboard() {
  return (
    <div className="flex flex-1 flex-col gap-6 px-7 py-3">
      <h2 className="text-3xl font-bold">Visão Geral</h2>
      <Tabs defaultValue="patients" className="flex flex-1 flex-col">
        <TabsList className="flex h-fit w-fit flex-wrap justify-center py-2 sm:py-1">
          <TabsTrigger value="patients">Pacientes</TabsTrigger>
          <TabsTrigger value="appointments" disabled>
            Consultas
          </TabsTrigger>
          <TabsTrigger value="professionals" disabled>
            Profissionais
          </TabsTrigger>
          <TabsTrigger value="payments" disabled>
            Pagamentos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="patients" className="flex flex-1 flex-col gap-4">
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de Pacientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">143</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Idade Média
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">16</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Diagnóstico Mais Comum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Autismo Leve</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pacientes em Tratamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">62</div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-1 flex-col gap-4 xl:grid xl:grid-cols-7">
            <Card className="col-span-4 flex h-[360px] flex-col xl:h-full">
              <CardHeader>
                <CardTitle>Pacientes Ativos</CardTitle>
                <CardDescription>Últimos 8 meses</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pb-4 pl-2">
                <PatientsOverview />
              </CardContent>
            </Card>
            <Card className="xl:col-span-3">
              <CardHeader>
                <CardTitle>Novos Pacientes</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <RecentPatients />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
