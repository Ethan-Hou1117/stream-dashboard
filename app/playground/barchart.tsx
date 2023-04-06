'use client';

import { Card, BarChart, Title, Text, Bold } from '@tremor/react';

const chartdata = [
    {
      name: "Stream",
      "Days": 63,
    },
    {
      name: "Non-Stream",
      "Days": 72,
    },
  ];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

export default function Chart() {
  return (
    <Card>
      <Title style = {{color: '#7b6be9'}}>Performance</Title>
      <Text>Average medical-only claim duration</Text>
      <BarChart
        className="mt-4 h-80"
        data={chartdata}
        categories={["Days"]}
        index="name"
        colors={['purple']}
        valueFormatter={valueFormatter}
      />
    </Card>
  );
}
