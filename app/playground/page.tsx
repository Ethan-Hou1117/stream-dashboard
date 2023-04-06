import { BarChart, Subtitle, Card, Metric, Text, Flex, Grid, Title, BarList } from '@tremor/react';
import Chart from './barchart';
import Table from './table';
//import List from './updatetable';
import Search from './search'
import { queryBuilder } from '../../lib/planetscale';
import UsersTable from './nonlistupdatetable';



export default async function PlaygroundPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const updates = await queryBuilder
    .selectFrom('updates')
    .select(['id', 'claim_number', 'update_text', 'status'])
    .where('claim_number', 'like', `%${search}%`)
    .execute();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">

<Grid className="gap-6" numColsLg={2}>
   
  <Chart/>
  <Card>
  <UsersTable users={updates} />
  </Card>
  </Grid>

  <Grid className=" gap-6" numColsLg={1}>
  <Search />
    <Table />
  </Grid>


    </main>
      
  );
      
}
