'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts'
import { NameType } from 'recharts/types/component/DefaultTooltipContent'
import { ValueType } from 'tailwindcss/types/config'

import useSuppressDefaultPropsWarning from './suppress-warnings'

function generateChartData() {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const data = Array.from({ length: 8 }, (_, index) => {
    const month = (currentMonth - index + 12) % 12
    const year =
      currentDate.getFullYear() + Math.floor((currentMonth - index) / 12)
    return {
      label: new Intl.DateTimeFormat('pt-BR', { month: 'short' }).format(
        new Date(currentDate.getFullYear(), month),
      ),
      year,
      value: Math.floor(Math.random() * 15) + 8,
    }
  }).reverse()
  return data
}

export default function PatientsOverview() {
  const data = generateChartData()

  useSuppressDefaultPropsWarning()

  return (
    <ResponsiveContainer width="100%" height="100%" className="flex-1">
      <BarChart data={data}>
        <CartesianGrid horizontal={true} vertical={false} strokeOpacity={0.3} />
        <XAxis
          dataKey="label"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          width={36}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          tickCount={8}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#e5e7eb' }} />
        <Bar
          dataKey="value"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-blue-dark"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

function CustomTooltip({ active, payload }: TooltipProps<ValueType, NameType>) {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col gap-1 rounded-md border bg-white px-3 py-2 text-sm shadow-md md:px-5 md:py-3">
        <p>
          {payload[0]?.payload.label} {payload[0]?.payload.year}
        </p>
        <div className="flex gap-1 md:gap-2">
          <div className="w-2 flex-1 bg-blue-dark" />
          <div className="flex flex-col">
            <span className="text-lg font-medium md:text-xl">
              {payload[0]?.value}
            </span>
            <span>Pacientes Ativos</span>
          </div>
        </div>
      </div>
    )
  }

  return null
}
